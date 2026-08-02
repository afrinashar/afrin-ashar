"use client";

import { useEffect, useState } from "react";
import { logEvent } from "@/lib/ga";

type VisitorLocation = {
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  country_name?: string;
  latitude?: string | number;
  longitude?: string | number;
  lat?: string | number;
  lon?: string | number;
  name?: string;
};

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [locations, setLocations] = useState<VisitorLocation[]>([]);
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const visitedKey = "visited_v1";
  const nameKey = "visitor_name_v1";

  useEffect(() => {
    const storedName = localStorage.getItem(nameKey);
    if (storedName) setSavedName(storedName);

    const fetchCount = async () => {
      try {
        const res = await fetch("/api/visitor");
        if (res.ok) {
          const data = await res.json();
          setCount(data.count ?? 0);
        }
      } catch (err) {
        // ignore
      }
    };

    const fetchLocations = async () => {
      try {
        const res = await fetch("/api/visitor?action=locations");
        if (res.ok) {
          const data = await res.json();
          setLocations(data.locations || []);
        }
      } catch (e) {
        // ignore
      }
    };

    const incrementIfNeeded = async () => {
      try {
        if (!localStorage.getItem(visitedKey)) {
          localStorage.setItem(visitedKey, "1");

          let location: VisitorLocation | null = null;
          try {
            const geo = await fetch("https://ipapi.co/json/").then((r) => r.json()).catch(() => null);
            if (geo && geo.latitude && geo.longitude) {
              location = {
                ip: geo.ip,
                city: geo.city,
                region: geo.region,
                country: geo.country_name,
                latitude: geo.latitude,
                longitude: geo.longitude,
                name: storedName || undefined,
              };
            }
          } catch (e) {
            // ignore geo failures
          }

          const res = await fetch("/api/visitor", {
            method: "POST",
            body: JSON.stringify({ location }),
            headers: { "Content-Type": "application/json" },
          });
          if (res.ok) {
            const data = await res.json();
            setCount(data.count ?? null);
            logEvent("visitor_count_increment", "Visitor", "New visitor", data.count ?? undefined);
          }

          fetchLocations();
        }
      } catch (err) {
        // ignore
      }
    };

    fetchCount();
    fetchLocations();
    incrementIfNeeded();
  }, []);

  const handleSaveName = async () => {
    setError(null);
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    setSubmitting(true);
    try {
      localStorage.setItem(nameKey, name.trim());
      setSavedName(name.trim());

      const geo = await fetch("https://ipapi.co/json/").then((r) => r.json()).catch(() => null);
      const location = geo && geo.latitude && geo.longitude ? {
        ip: geo.ip,
        city: geo.city,
        region: geo.region,
        country: geo.country_name,
        latitude: geo.latitude,
        longitude: geo.longitude,
        name: name.trim(),
      } : { name: name.trim() };

      const res = await fetch("/api/visitor", {
        method: "POST",
        body: JSON.stringify({ location }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        const data = await res.json();
        setCount(data.count ?? null);
        logEvent("visitor_name_saved", "Visitor", name.trim(), data.count ?? undefined);
      }

      const locationRes = await fetch("/api/visitor?action=locations");
      if (locationRes.ok) {
        const data = await locationRes.json();
        setLocations(data.locations || []);
      }
    } catch (err) {
      setError("Unable to save your name right now.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="glass rounded-3xl border border-white/10 bg-white/10 p-5 text-sm text-slate-100 shadow-2xl shadow-slate-950/20">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[3px] text-blue-200">Visitor stats</p>
          <p className="text-2xl font-semibold text-white">Visitors: {count === null ? "..." : count}</p>
        </div>
      </div>

      {!savedName && (
        <div className="space-y-3 mb-4">
          <p className="text-slate-300 text-sm">Share your name to appear in the recent visitors list.</p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-blue-400"
            />
            <button
              onClick={handleSaveName}
              disabled={submitting}
              className="rounded-2xl bg-blue-500 px-4 py-3 text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Saving..." : "Save name"}
            </button>
          </div>
          {error && <p className="text-sm text-rose-300">{error}</p>}
        </div>
      )}

      {savedName && <p className="mb-4 text-sm text-slate-300">Thanks, <span className="font-semibold text-white">{savedName}</span>. Your name will be visible to me in the visitor log.</p>}

      {locations.length > 0 && (
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-[2px] text-slate-400">Recent visitors</div>
          <div className="grid gap-3">
            {locations.slice(0, 5).map((loc, i) => (
              <div key={i} className="rounded-3xl bg-slate-950/70 border border-white/10 p-4 text-sm text-slate-100">
                <p className="font-semibold text-white">{loc.name || "Anonymous visitor"}</p>
                <p className="text-slate-400">
                  {loc.city || loc.region || "Unknown location"}
                  {loc.country_name ? `, ${loc.country_name}` : loc.country ? `, ${loc.country}` : ""}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-3">
            <svg width={300} height={150} className="rounded-3xl bg-slate-950/60 p-2">
              <rect width="100%" height="100%" fill="transparent" />
              {locations.map((loc, i) => {
                const lon = Number(loc.longitude ?? loc.lon ?? 0);
                const lat = Number(loc.latitude ?? loc.lat ?? 0);
                const x = ((lon + 180) / 360) * 300;
                const y = ((90 - lat) / 180) * 150;
                return (
                  <g key={i}>
                    <circle cx={x} cy={y} r={4} fill="#7dd3fc">
                      <title>{`${loc.name || "Visitor"} — ${loc.city || loc.region || "Unknown"}, ${loc.country_name || loc.country || ""}`}</title>
                    </circle>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
