"use client";

import { projects } from "@/data/Projects";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <section
      id="projects"
      className="
      py-32
      "
    >
      <div className="container mx-auto px-6">

        <div className="mb-20">
          <p
            className="
            uppercase
            text-blue-500
            tracking-[5px]
            "
          >
            Projects
          </p>

          <h2
            className="
            text-5xl
            font-bold
            "
          >
            Featured
            <span className="gradient-text">
              {" "}
              Projects
            </span>
          </h2>
        </div>

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          "
        >
          {projects
  .slice(0, showAllProjects ? projects.length : 3)
  .map((project) => (
    <ProjectCard
      key={project.id}
      project={project}
    />
  ))}
  {projects.length > 3 && (
  <div className="flex justify-center mt-6">
    <button
      onClick={() => setShowAllProjects(!showAllProjects)}
      className="px-6 py-2 rounded-lg bg-primary text-blue-500 hover:opacity-90 transition"
    >
      {showAllProjects ? "Show Less" : "Show More Projects"}
    </button>
  </div>
)}
        </div>
      </div>
    </section>
  );
}