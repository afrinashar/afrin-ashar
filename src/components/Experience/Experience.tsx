"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";

import {
  ExternalLink,
  MapPin,
  Calendar,
} from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
      py-32
      relative
      "
    >
      <div className="container mx-auto px-6">

        {/* Heading */}

        <div
          className="
          text-center
          mb-24
          "
        >
          <p
            className="
            uppercase
            tracking-[5px]
            text-blue-500
            font-semibold
            "
          >
            Experience
          </p>

          <h2
            className="
            text-5xl
            md:text-7xl
            font-bold
            mt-4
            "
          >
            My Professional
            <span className="gradient-text">
              {" "}
              Journey
            </span>
          </h2>
        </div>

        {/* Timeline */}

        <div
          className="
          relative
          "
        >
          {/* Vertical Line */}

          <div
            className="
            hidden
            lg:block
            absolute
            left-1/2
            top-0
            bottom-0
            w-[2px]
            bg-gradient-to-b
            from-blue-500
            to-purple-500
            "
          />

          {experiences.map(
            (item, index) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                }}
                className={`
                relative
                mb-24
                flex
                ${
                  index % 2 === 0
                    ? "lg:justify-start"
                    : "lg:justify-end"
                }
                `}
              >
                {/* Timeline Dot */}

                <div
                  className="
                  hidden
                  lg:block
                  absolute
                  left-1/2
                  top-10
                  -translate-x-1/2
                  w-5
                  h-5
                  rounded-full
                  bg-blue-500
                  "
                />

                <div
                  className="
                  w-full
                  lg:w-[48%]
                  glass
                  rounded-3xl
                  p-8
                  border
                  border-white/10
                  shadow-xl
                  "
                >
                  {/* Logo */}

                  <a
                    href={item.website}
                    target="_blank"
                    className="
                    flex
                    items-center
                    gap-4 bg-black/10
                    "
                  >
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="
                      w-16
                      h-16
                      rounded-xl
                      object-fit
                      "
                    />

                    <div>
                      <h3
                        className="
                        text-2xl
                        font-bold
                        "
                      >
                        {item.company}
                      </h3>

                      <div
                        className="
                        flex
                        items-center
                        gap-2
                        text-blue-500
                        "
                      >
                        Visit Website

                        <ExternalLink
                          size={16}
                        />
                      </div>
                    </div>
                  </a>

                  {/* Role */}

                  <h4
                    className="
                    text-xl
                    font-semibold
                    mt-6
                    "
                  >
                    {item.role}
                  </h4>

                  {/* Meta */}

                  <div
                    className="
                    flex
                    flex-wrap
                    gap-6
                    mt-4
                    text-gray-500
                    "
                  >
                    <div
                      className="
                      flex
                      items-center
                      gap-2
                      "
                    >
                      <Calendar
                        size={16}
                      />

                      {item.duration}
                    </div>

                    <div
                      className="
                      flex
                      items-center
                      gap-2
                      "
                    >
                      <MapPin
                        size={16}
                      />

                      {item.location}
                    </div>
                  </div>

                  {/* Description */}

                  <p
                    className="
                    mt-6
                    leading-relaxed
                    "
                  >
                    {item.description}
                  </p>

                  {/* Achievements */}

                  {/* <div className="mt-8">
                    <h5
                      className="
                      font-semibold
                      mb-4
                      "
                    >
                      Key Achievements
                    </h5>

                    <ul
                      className="
                      space-y-2
                      "
                    >
                      {item.achievements.map(
                        (
                          achievement
                        ) => (
                          <li
                            key={
                              achievement
                            }
                          >
                            •{" "}
                            {
                              achievement
                            }
                          </li>
                        )
                      )}
                    </ul>
                  </div> */}

                  {/* Technologies */}

                  <div
                    className="
                    flex
                    flex-wrap
                    gap-2
                    mt-8
                    "
                  >
                    {item.technologies.map(
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
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}