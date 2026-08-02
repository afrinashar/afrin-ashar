import { projects } from "@/data/Projects";
import Link from "next/link";
import Image from "next/image";
export default async function ProjectPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const project =
    projects.find(
      (p) => p.id === slug
    );

  if (!project) {
    return (
      <div>
        Project Not Found
      </div>
    );
  }

  return (
    <main
      className="
      container
      mx-auto
      px-6
      py-24
      "
    >
      {/* Hero */}

      <div className="relative w-full rounded-3xl mb-10 h-[420px] sm:h-[320px]">
        <Image src={project.image} alt={project.title} fill className="object-cover rounded-3xl" sizes="100vw" />
      </div>

      <h1
        className="
        text-5xl
        font-bold
        "
      >
        {project.title}
      </h1>

      <p className="mt-6">
        {project.description}
      </p>

      {/* Video */}

      <video
        controls
        className="
        w-full
        rounded-2xl
        mt-10
        "
      >
        <source
          src={project.video}
        />
      </video>

      {/* Features */}

      <section className="mt-16">
        <h2
          className="
          text-3xl
          font-bold
          "
        >
          Features
        </h2>

        <ul className="mt-6">
          {project.features.map(
            (
              feature
            ) => (
              <li
                key={feature}
              >
                • {feature}
              </li>
            )
          )}
        </ul>
      </section>

      {/* Screenshots */}

      <section className="mt-16">
        <h2
          className="
          text-3xl
          font-bold
          "
        >
          Screenshots
        </h2>

        <div
          className="
          grid
          md:grid-cols-3
          gap-4
          mt-8
          "
        >
          {project.screenshots.map(
            (
              image
            ) => (
              <video
                key={image}
                src={image}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="rounded-xl w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            )
          )}
        </div>
      </section>

      {/* Links */}

      <div
        className="
        flex
        gap-4
        mt-16
        "
      >
        <Link
          href={project.github}
          target="_blank"
        >
          GitHub
        </Link>

        <Link
          href={project.live}
          target="_blank"
        >
          Live Demo
        </Link>
      </div>
    </main>
  );
}