"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <div
      className="
      relative
      flex
      justify-center
      items-center
      "
    >
      {/* Outer Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
        absolute
        w-[420px]
        h-[420px]
        rounded-full
        bg-gradient-to-r
        from-blue-500
        to-purple-500
        blur-3xl
        opacity-20
        "
      />

      {/* Rotating Border */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        w-[380px]
        h-[380px]
        rounded-full
        border-2
        border-dashed
        border-blue-500/50
        "
      />

      {/* Profile Card */}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
        relative
        w-[220px]
        h-[320px]
        md:w-[300px]
        md:h-[380px]
        rounded-full
        overflow-hidden
        glass
        shadow-2xl
        border
        border-white/20
        "
      >
        <Image
          src="/images/afrin.png"
          alt="Afrin Ashar"
          fill
          priority
          className="
          object-cover
          object-top
          "
        />
      </motion.div>

      {/* Small Decorative Dots */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
        absolute
        top-10
        right-0
        w-6
        h-6
        rounded-full
        bg-blue-500
        "
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-10
        left-0
        w-8
        h-8
        rounded-full
        bg-purple-500
        "
      />
    </div>
  );
}