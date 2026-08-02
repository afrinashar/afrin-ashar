"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import HeroImage from "./HeroImage";
import FloatingSkills from "./FloatingSkills";

import {
  ArrowRight,
  Download,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
      min-h-screen
      flex
      items-center
      relative
      overflow-hidden
      pt-20
      "
    >
      {/* Background Blur */}
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
          blur-[120px]
          rounded-full
          top-20
          left-10
          "
        />

        <div
          className="
          absolute
          w-[350px]
          h-[350px]
          bg-purple-500/20
          blur-[120px]
          rounded-full
          bottom-10
          right-10
          "
        />
      </div>

      <div
        className="
        container
        mx-auto
        px-6
        grid
        lg:grid-cols-2
        gap-12
        items-center
        "
      >
        {/* Left Content */}

        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <motion.p
            className="
            uppercase
            tracking-[6px]
            text-blue-500
            font-semibold
            mb-4
            "
          >
            Welcome To My Portfolio
          </motion.p>

          <motion.h1
            className="
            text-5xl
            md:text-7xl
            font-black
            leading-tight
            "
          >
            AFRIN
            <br />

            <span className="gradient-text">
              ASHAR
            </span>
          </motion.h1>

          <div
            className="
            mt-6
            text-xl
            md:text-3xl
            font-semibold
            "
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Developer",
                2000,
                "React Specialist",
                2000,
                "AI Engineer",
                2000,
                "Micro Frontend Developer",
                2000,
              ]}
              repeat={Infinity}
              speed={50}
            />
          </div>

          <p
            className="
            mt-8
            text-lg
            text-gray-500
            max-w-xl
            "
          >
            Experienced Full Stack Developer
            specializing in React.js,
            Next.js, Node.js, AI
            integrations, scalable
            architectures, and modern
            web applications.
          </p>

          <div
            className="
            flex
            flex-wrap
            gap-4
            mt-10
            "
          >
            <a
              href="#projects"
              className="
              flex
              items-center
              gap-2
              px-8
              py-4
              rounded-full
              bg-gradient-to-r
              from-blue-500
              to-purple-500
              text-white
              font-semibold
              shadow-lg
              hover:scale-105
              transition
              "
            >
              View Projects

              <ArrowRight size={18} />
            </a>

            <a
              href="https://afrin-resume.vercel.app/"
              download
              className="
              flex
              items-center
              gap-2
              px-8
              py-4
              rounded-full
              bg-gradient-to-r
              from-blue-500
              to-purple-500
              text-white
              font-semibold
              shadow-lg
              hover:scale-105
              transition
              "
            >
              View Resume

            </a>
          </div>

          {/* Stats */}

          <div
            className="
            mt-12
            grid
            grid-cols-3
            gap-6
            "
          >
            <div>
              <h3
                className="
                text-3xl
                font-bold
                "
              >
                4
              </h3>

              <p>Years Experience</p>
            </div>

            <div>
              <h3
                className="
                text-3xl
                font-bold
                "
              >
                50+
              </h3>

              <p>Projects</p>
            </div>

            <div>
              <h3
                className="
                text-3xl
                font-bold
                "
              >
                100+
              </h3>

              <p>DSA Problems</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative"
        >
          <HeroImage />

          <FloatingSkills />
        </motion.div>
      </div>
    </section>
  );
}