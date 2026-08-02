"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// @ts-ignore: assets module may not have type declarations in this environment
import ci from "../../assets/ci.png";
import arith from "../../assets/arith.png";
import jest from "../../assets/jest.png";
import git from "../../assets/git.png";
import html from "../../assets/html.png";
import jwt from "../../assets/jwts.png";
import css from "../../assets/css.png";
import py from "../../assets/py.png";
import gpt from "../../assets/gpt.png";
import agil from "../../assets/agils.png";
import bs from "../../assets/bs.png";
import api from "../../assets/api.png";
import ts from "../../assets/ts.png";
import react from "../../assets/react.png";
import db from "../../assets/db.png";
import tan from "../../assets/tan.png";
import socket from "../../assets/socket.png";
import hug from "../../assets/hug.png";
import js from "../../assets/js.png";
import llm from "../../assets/llm.png";
import next from "../../assets/next.png";
import tail from "../../assets/tail.png";
import vs from "../../assets/vs.png";

const motionImages = [
  { src: ci, alt: "Continuous Integration", inView: { left: "22%", top: "2%" } },
  { src: arith, alt: "Arithmetic", inView: { left: "18%", top: "13%" } },
  { src: jest, alt: "Jest", inView: { left: "4%", top: "19%" } },
  { src: git, alt: "Git", inView: { left: "24%", top: "49%" } },
  { src: html, alt: "HTML5", inView: { left: "10%", top: "49%" } },
  { src: jwt, alt: "JWT", inView: { left: "-6%", top: "64%" } },
  { src: css, alt: "CSS3", inView: { left: "2%", top: "36%" } },
  { src: py, alt: "Python", inView: { left: "53%", top: "44%" } },
  // { src: gpt, alt: "GPT", inView: { left: "30%", top: "15%" } },
  { src: agil, alt: "Agile", inView: { left: "34%", top: "51%" } },
  { src: bs, alt: "Bootstrap", inView: { left: "22%", top: "70%" } },
  { src: api, alt: "API", inView: { left: "12%", top: "29%" }, width: 120, height: 120 },
  { src: ts, alt: "TypeScript", inView: { left: "64%", top: "39%" } },
  { src: react, alt: "React", inView: { left: "24%", top: "29%" } },
  { src: db, alt: "Database", inView: { left: "64%", top: "19%" } },
  { src: tan, alt: "TanStack", inView: { left: "8%", top: "66%" } },
  { src: socket, alt: "Socket", inView: { left: "86%", top: "16%" } },
  { src: hug, alt: "HuggingFace", inView: { left: "34%", top: "11%" } },
  { src: js, alt: "JavaScript", inView: { left: "54%", top: "83%" } },
  { src: llm, alt: "LLM", inView: { left: "64%", top: "55%" } },
  { src: next, alt: "Next.js", inView: { left: "80%", top: "29%" } },
  { src: tail, alt: "Tailwind", inView: { left: "80%", top: "49%" } },
  { src: vs, alt: "VS Code", inView: { left: "12%", top: "80%" } },
];

export default function FloatingSkills() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {motionImages.map((item, index) => (
        <motion.div
          key={index}
          className="skill-item absolute"
          initial={{
            left: "50%",
            top: "50%",
            opacity: 0,
            scale: 0,
          }}
          animate={{
            left: item.inView.left,
            top: item.inView.top,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            delay: index * 0.05,
            ease: "easeOut",
          }}
        >
          <div
          //   className="
          //     glass
          //   rounded-2xl
          //   p-3
          //   background-red/10
          //    shadow-2xl
          //   hover:scale-110
          //   transition-all
          //   duration-3000
          // "
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width || 60}
              height={item.height || 60}
              className="object-contain"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}