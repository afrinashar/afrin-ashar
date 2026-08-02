import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const FILE = path.join(process.cwd(), ".data", "visitors.json");
const LOC_FILE = path.join(process.cwd(), ".data", "locations.json");

function ensureFiles() {
  const dir = path.dirname(FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, JSON.stringify({ count: 0 }), "utf8");
  if (!fs.existsSync(LOC_FILE)) fs.writeFileSync(LOC_FILE, JSON.stringify([]), "utf8");
}

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

async function upstashCommand(cmd: any[]) {
  const res = await fetch(`${UPSTASH_URL}/commands`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cmd }),
  });
  return res.json();
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const action = url.searchParams.get("action"); // action=locations to fetch recent locations

    if (UPSTASH_URL && UPSTASH_TOKEN) {
      if (action === "locations") {
        const r = await upstashCommand(["lrange", "visitor_locations", 0, 9]);
        const list = r.result || [];
        // items are stored as JSON strings in list
        return NextResponse.json({ locations: list.map((s: string) => JSON.parse(s)) });
      }

      const r = await upstashCommand(["get", "visitors"]);
      const count = r.result ? Number(r.result) : 0;
      return NextResponse.json({ count });
    }

    // fallback to file
    ensureFiles();
    if (action === "locations") {
      const raw = fs.readFileSync(LOC_FILE, "utf8");
      const arr = JSON.parse(raw);
      return NextResponse.json({ locations: arr.slice(-10).reverse() });
    }

    const raw = fs.readFileSync(FILE, "utf8");
    const data = JSON.parse(raw);
    return NextResponse.json({ count: data.count });
  } catch (err) {
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const location = body.location || null; // { ip, city, region, country, latitude, longitude }

    if (UPSTASH_URL && UPSTASH_TOKEN) {
      // increment counter
      const incr = await upstashCommand(["incr", "visitors"]);
      const count = incr.result ? Number(incr.result) : 0;

      // optionally push location
      if (location) {
        await upstashCommand(["rpush", "visitor_locations", JSON.stringify(location)]);
      }

      return NextResponse.json({ count });
    }

    // fallback to file storage
    ensureFiles();
    const raw = fs.readFileSync(FILE, "utf8");
    const data = JSON.parse(raw);
    data.count = (data.count || 0) + 1;
    fs.writeFileSync(FILE, JSON.stringify(data), "utf8");

    if (location) {
      const rawLoc = fs.readFileSync(LOC_FILE, "utf8");
      const arr = JSON.parse(rawLoc);
      arr.push(location);
      fs.writeFileSync(LOC_FILE, JSON.stringify(arr), "utf8");
    }

    return NextResponse.json({ count: data.count });
  } catch (err) {
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
