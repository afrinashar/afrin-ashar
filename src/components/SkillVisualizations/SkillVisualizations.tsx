"use client";

"use client";

import { motion } from "framer-motion";
import { BarChart3, Share2, Clock3 } from "lucide-react";

const skillTree = [
  { name: "Frontend", children: ["React", "Next.js", "Tailwind", "TypeScript"] },
  { name: "Backend", children: ["Node.js", "Express", "MongoDB", "Docker"] },
  { name: "AI", children: ["OpenAI", "RAG", "LangChain", "LLMs"] },
];

const radarData = [
  { skill: "Web", value: 90 },
  { skill: "AI", value: 80 },
  { skill: "Cloud", value: 70 },
  { skill: "Testing", value: 65 },
  { skill: "UX", value: 75 },
];

export default function SkillVisualizations() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-blue-500 font-semibold mb-4">Skills</p>
          <h2 className="text-5xl md:text-6xl font-bold">Interactive Skill Visualizations</h2>
          <p className="mt-4 text-slate-400 max-w-3xl mx-auto">
            Explore a glassmorphic skill tree, radar chart and learning timeline built to highlight your technical growth and core strengths.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl border border-white/10 p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-blue-500/15 text-blue-300 grid place-items-center">
                <Share2 />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Interactive Skill Tree</h3>
                <p className="text-slate-400 text-sm">A visual hierarchy of your core stack and specializations.</p>
              </div>
            </div>
            <div className="space-y-4">
              {skillTree.map((branch) => (
                <div key={branch.name} className="rounded-3xl border border-white/10 p-4 hover:border-blue-500/40 transition">
                  <h4 className="font-semibold mb-3">{branch.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {branch.children.map((skill) => (
                      <span key={skill} className="px-3 py-2 rounded-full bg-white/10 text-sm">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-3xl border border-white/10 p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-purple-500/15 text-purple-300 grid place-items-center">
                <BarChart3 />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Radar Chart</h3>
                <p className="text-slate-400 text-sm">An at-a-glance view of strengths across modern web and AI skills.</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl bg-slate-950/70 p-6">
              <svg viewBox="0 0 240 240" className="w-full h-full">
                {[...Array(5)].map((_, index) => {
                  const radius = 44 + index * 28;
                  return <circle key={index} cx="120" cy="120" r={radius} fill="none" stroke="rgba(148,163,184,0.15)" strokeWidth="1" />;
                })}
                {[...Array(5)].map((_, index) => {
                  const angle = (Math.PI * 2 / 5) * index - Math.PI / 2;
                  const x = 120 + Math.cos(angle) * 120;
                  const y = 120 + Math.sin(angle) * 120;
                  return <line key={index} x1="120" y1="120" x2={x} y2={y} stroke="rgba(148,163,184,0.2)" strokeWidth="1" />;
                })}
                <polygon
                  points={radarData
                    .map((item, index) => {
                      const angle = (Math.PI * 2 / radarData.length) * index - Math.PI / 2;
                      const radius = 30 + (item.value / 100) * 100;
                      const x = 120 + Math.cos(angle) * radius;
                      const y = 120 + Math.sin(angle) * radius;
                      return `${x},${y}`;
                    })
                    .join(" ")}
                  fill="rgba(59,130,246,0.25)"
                  stroke="rgba(59,130,246,0.9)"
                  strokeWidth="2"
                />
                {radarData.map((item, index) => {
                  const angle = (Math.PI * 2 / radarData.length) * index - Math.PI / 2;
                  const radius = 30 + (item.value / 100) * 100;
                  const x = 120 + Math.cos(angle) * radius;
                  const y = 120 + Math.sin(angle) * radius;
                  return (
                    <g key={item.skill}>
                      <circle cx={x} cy={y} r="5" fill="#3b82f6" />
                      <text x={x} y={y} dy={-10} fontSize="10" textAnchor="middle" fill="#cbd5e1">{item.skill}</text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl border border-white/10 p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-amber-500/15 text-amber-300 grid place-items-center">
                <Clock3 />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Learning Timeline</h3>
                <p className="text-slate-400 text-sm">A timeline of how your skills and experience have evolved over time.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { year: "2021", title: "React & Web UI", description: "Built responsive web apps with React, TypeScript, and Tailwind CSS." },
                { year: "2022", title: "Enterprise Backend", description: "Delivered Node.js + Express APIs and MongoDB-powered platforms." },
                { year: "2023", title: "AI & RAG", description: "Integrated OpenAI, LangChain, and retrieval-based chat experiences." },
                { year: "2024", title: "Cloud & Microfrontends", description: "Scaled distributed systems with Docker, Kubernetes and Single SPA." },
              ].map((step) => (
                <div key={step.year} className="rounded-3xl border border-white/10 p-4 hover:bg-white/5 transition">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="text-slate-500 text-sm">{step.description}</p>
                    </div>
                    <span className="text-xs uppercase tracking-[2px] text-slate-400">{step.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
