import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "Afrin Ashar";
    const subtitle = searchParams.get("subtitle") || "Portfolio";

    const host = request.headers.get("host") ?? "afrinashar.dev";
    const base = `https://${host}`;

    // try to load a local font from /public/fonts/Inter-Bold.ttf (optional)
    let interBuffer: ArrayBuffer | null = null;
    try {
      const fontRes = await fetch(`${base}/fonts/Inter-Bold.ttf`);
      if (fontRes.ok) interBuffer = await fontRes.arrayBuffer();
    } catch (e) {
      interBuffer = null;
    }

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            padding: 48,
            boxSizing: "border-box",
            alignItems: "center",
            justifyContent: "space-between",
            background: "linear-gradient(90deg, #0ea5e9 0%, #7c3aed 100%)",
            color: "#fff",
            fontFamily:
              'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <img
              src={`${base}/images/afrin.png`}
              alt="logo"
              width={140}
              height={140}
              style={{ borderRadius: 28, objectFit: "cover", boxShadow: "0 8px 30px rgba(0,0,0,0.35)" }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontSize: 52, fontWeight: 800, letterSpacing: -1 }}>{title}</div>
              <div style={{ fontSize: 24, opacity: 0.95, maxWidth: 760 }}>{subtitle}</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
            <div style={{ fontSize: 16, opacity: 0.9 }}>Afrin Ashar</div>
            <div style={{ fontSize: 14, opacity: 0.85 }}>Full Stack Developer · AI Engineer</div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: interBuffer
          ? [
              {
                name: "Inter",
                data: interBuffer,
                weight: 700,
                style: "normal",
              },
            ]
          : [],
      }
    );
  } catch (e) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
