"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  Layers3,
  Download,
} from "lucide-react";

const services = [
  {
    title: "AI Development",
    icon: Brain,

    description:
      "Building AI-powered applications using OpenAI, LangChain, RAG systems, chatbots, automation and intelligent workflows.",

    technologies: [
      "OpenAI",
      "LangChain",
      "RAG",
      "Vector DB",
    ],
  },

  {
    title: "Full Stack Development",
    icon: Layers3,

    description:
      "Scalable MERN stack applications with authentication, dashboards, APIs, payment integrations and cloud deployment.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },

  {
    title: "Web Development",
    icon: Globe,

    description:
      "Modern responsive websites using React, Next.js, TypeScript, Tailwind CSS and animation libraries.",

    technologies: [
      "Next.js",
      "React",
      "Tailwind",
      "TypeScript",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
      relative
      py-32
      overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        left-0
        w-full
        h-full
        -z-10
        "
      >
        <div
          className="
          absolute
          w-[400px]
          h-[400px]
          bg-blue-500/20
          blur-[140px]
          rounded-full
          left-0
          top-0
          "
        />

        <div
          className="
          absolute
          w-[350px]
          h-[350px]
          bg-purple-500/20
          blur-[140px]
          rounded-full
          right-0
          bottom-0
          "
        />
      </div>

      <div className="container mx-auto px-6">

        {/* Header */}

        <div
          className="
          grid
          lg:grid-cols-2
          gap-10
          mb-20
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <p
              className="
              text-blue-500
              uppercase
              tracking-[5px]
              font-semibold
              "
            >
              Services
            </p>

            <h2
              className="
              text-4xl
              md:text-6xl
              font-bold
              mt-4
              "
            >
              My Awesome
              <br />

              <span className="gradient-text">
                Services
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <p
              className="
              text-gray-500
              text-lg
              leading-relaxed
              "
            >
              I build modern web
              applications, scalable
              full-stack systems and
              AI-powered solutions for
              startups, enterprises and
              clients around the globe.
            </p>

            <a
              href="/resume.pdf"
              download
              className="
              inline-flex
              items-center
              gap-3
              mt-8
              px-8
              py-4
              rounded-full
              bg-gradient-to-r
              from-blue-500
              to-purple-500
              text-white
              font-semibold
              hover:scale-105
              transition
              "
            >
              Download Resume

              <Download size={18} />
            </a>
          </motion.div>
        </div>

        {/* Cards */}

        <div
          className="
          grid
          lg:grid-cols-3
          gap-8
          "
        >
          {services.map(
            (service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      index * 0.2,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                  }}
                  className="
                  glass
                  rounded-3xl
                  p-8
                  border
                  border-white/10
                  shadow-xl
                  "
                >
                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-gradient-to-r
                    from-blue-500
                    to-purple-500
                    text-white
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <h3
                    className="
                    text-2xl
                    font-bold
                    mt-6
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                    mt-4
                    text-gray-500
                    leading-relaxed
                    "
                  >
                    {service.description}
                  </p>

                  <div
                    className="
                    flex
                    flex-wrap
                    gap-2
                    mt-6
                    "
                  >
                    {service.technologies.map(
                      (tech) => (
                        <span
                          key={tech}
                          className="
                          px-4
                          py-2
                          rounded-full
                          bg-white/10
                          text-sm
                          "
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}