import { projects } from "@/data/Projects";
import { Link } from "lucide-react";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [`/api/og?title=${encodeURIComponent(project.title)}&subtitle=${encodeURIComponent(project.shortDescription)}`],
      url: `https://afrinashar.dev/projects/${project.id}`,
    },
    twitter: {
      title: project.title,
      description: project.shortDescription,
      images: [`/api/og?title=${encodeURIComponent(project.title)}&subtitle=${encodeURIComponent(project.shortDescription)}`],
      card: "summary_large_image",
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const project = projects.find((item) => item.id === slug);

  if (!project) {
    return <div>Project Not Found</div>;
  }

  const ld = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.shortDescription,
    url: `https://afrinashar.dev/projects/${project.id}`,
    image: project.image,
    applicationCategory: project.category,
    offers: project.live ? { url: project.live } : undefined,
  };

  return (
    <div className="container mx-auto py-20">
      <Link href="/projects" type="button" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
        Back
      </Link>
      <h1 className="text-5xl font-bold">{project.title}</h1>
      

      <div className="relative w-full rounded-2xl my-8 h-[420px] sm:h-[320px]">
 <video
                key={project?.image}
                src={project?.image}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="rounded-xl w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>      </div>

      <p>{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies
                .slice(0, 4)
                .map((tech: string) => (
                  <span
                    key={tech}
                    className="
                      rounded-lg
                      border
                      border-gray-200
                      bg-gray-50
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-gray-700
                      transition-colors
                      duration-300
                      group-hover:border-blue-200
                    "
                  >
                    {tech}
                  </span>
                ))}
            </div>
<p className="mt-4 text-gray-600">Live: <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {project.live}
                </a></p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </div>
  );
}