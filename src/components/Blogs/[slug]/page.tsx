import { blogs } from "@/data/Blogs";
import Image from "next/image";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blog = blogs.find((b) => b.id === slug);
  if (!blog) return { title: "Article" };

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [`/api/og?title=${encodeURIComponent(blog.title)}&subtitle=${encodeURIComponent(blog.excerpt)}`],
      url: `https://afrinashar.dev/blogs/${blog.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [`/api/og?title=${encodeURIComponent(blog.title)}&subtitle=${encodeURIComponent(blog.excerpt)}`],
    },
  };
}
import { notFound } from "next/navigation";

export default async function BlogPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const blog = blogs.find(
    (item) =>
      item.id === slug
  );

  if (!blog) {
    notFound();
  }

  const relatedBlogs =
    blogs.filter(
      (item) =>
        item.id !== blog.id
    ).slice(0, 2);

  return (
    <main
      className="
      container
      mx-auto
      px-6
      py-24
      "
    >
      <article
        className="
        max-w-4xl
        mx-auto
        "
      >
        <div className="relative w-full rounded-3xl mb-10 h-[420px] sm:h-[280px]">
          <Image src={blog.cover} alt={blog.title} fill className="object-cover rounded-3xl" sizes="100vw" />
        </div>

        <p className="text-blue-500">
          {blog.category}
        </p>

        <h1
          className="
          text-5xl
          font-bold
          mt-4
          "
        >
          {blog.title}
        </h1>

        <div
          className="
          flex
          gap-6
          mt-4
          text-gray-500
          "
        >
          <span>
            {blog.readTime}
          </span>

          <span>
            {blog.date}
          </span>
        </div>

        <div
          className="
          prose
          prose-invert
          max-w-none
          mt-10
          "
        >
          <pre
            className="
            whitespace-pre-wrap
            font-sans
            "
          >
            {blog.content}
          </pre>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: blog.title,
            image: blog.cover,
            datePublished: blog.date,
            author: { "@type": "Person", name: "Afrin Ashar" },
            description: blog.excerpt,
            mainEntityOfPage: `https://afrinashar.dev/blogs/${blog.id}`,
          }) }}
        />

        <div
          className="
          flex
          flex-wrap
          gap-3
          mt-8
          "
        >
          {blog.tags.map(
            (tag) => (
              <span
                key={tag}
                className="
                px-4
                py-2
                rounded-full
                bg-white/10
                "
              >
                {tag}
              </span>
            )
          )}
        </div>
      </article>

      <section
        className="
        max-w-5xl
        mx-auto
        mt-24
        "
      >
        <h2
          className="
          text-3xl
          font-bold
          mb-8
          "
        >
          Related Articles
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          gap-8
          "
        >
          {relatedBlogs.map(
            (item) => (
              <div
                key={item.id}
                className="
                glass
                rounded-3xl
                p-6
                "
              >
                <h3
                  className="
                  text-xl
                  font-bold
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-3
                  text-gray-500
                  "
                >
                  {item.excerpt}
                </p>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}