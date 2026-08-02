export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#0b1220" />
      <link rel="canonical" href="https://afrinashar.dev" />
      <meta name="robots" content="index, follow" />

      {/* JSON-LD structured data for Person */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Afrin Ashar",
        "url": "https://afrinashar.dev",
        "sameAs": ["https://github.com/afrinashar", "https://linkedin.com/in/afrin-ashar"],
        "jobTitle": "Full Stack Developer & AI Engineer",
        "worksFor": {
          "@type": "Organization",
          "name": "Afrin Ashar"
        }
      }) }} />
    </>
  );
}
