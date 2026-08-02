"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
//import videos from "../../../assets/nutri.mp4";
interface Props {
  project: any;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -10,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="
        group
        overflow-hidden
        rounded-3xl

        bg-white

        border
        border-gray-200

        shadow-sm
        transition-all
        duration-300

        hover:shadow-2xl
        hover:shadow-blue-100/40
      "
    >
      <Link href={`/projects/${project.id}`}>
          <div>
          <div className="overflow-hidden relative h-[260px] w-full">
            <video
  key={project.image}
  src={project.image}
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  className="rounded-xl w-full h-full object-cover"
>
  Your browser does not support the video tag.
</video>
          </div>

          <div className="p-6">
            <span
              className="
                inline-flex
                rounded-full
                bg-blue-50
                px-3
                py-1
                text-xs
                font-semibold
                text-blue-600
              "
            >
              {project.category}
            </span>

            <h3
              className="
                mt-4
                text-2xl
                font-bold
                text-gray-900
                transition-colors
                duration-300
                group-hover:text-blue-600
              "
            >
              {project.title}
            </h3>

            <p
              className="
                mt-3
                text-gray-600
                leading-7
                line-clamp-3
              "
            >
              {project.shortDescription}
            </p>

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

            <div
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                px-5
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:shadow-lg
                hover:shadow-blue-300/40
              "
            >
              View Project →
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
