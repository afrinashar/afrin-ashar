import { projects } from "@/data/Projects";

function generateSiteMap() {
  const baseUrl = "https://afrinashar.dev";
  const pages = ["/", "/#projects", "/#experience", "/#contact", "/projects", "/blogs"];

  const urls = pages
    .map((p) => `  <url><loc>${baseUrl}${p}</loc><changefreq>monthly</changefreq></url>`)
    .join("\n");

  const projectUrls = projects
    .map((p) => `  <url><loc>${baseUrl}/projects/${p.id}</loc><changefreq>yearly</changefreq></url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
${projectUrls}
</urlset>`;
}

export async function GET() {
  const sitemap = generateSiteMap();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
