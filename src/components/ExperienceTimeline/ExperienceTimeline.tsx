"use client";

"use client";

import { motion } from "framer-motion";

export default function ExperienceTimeline() {
  const timeline = [
    {
      year: "2021",
      title: "B.Sc. Computer Science",
      company: "Government College",
      type: "Education",
      description: "Studied software engineering, algorithms, and data structures while leading campus coding clubs.",
    },
    {
      year: "2022",
      title: "Software Developer",
      company: "Mequals Technologies",
      type: "Job",
      description: "Built CRM and event management web platforms with React and Node.js.",
    },
    {
      year: "2023",
      title: "Software Developer",
      company: "SSINTEK",
      type: "Job",
      description: "Delivered micro frontend applications and automated CI/CD workflows for enterprise clients.",
    },
    {
      year: "2024",
      title: "Certification",
      company: "AWS & OpenAI",
      type: "Certification",
      description: "Certified in cloud fundamentals, AI engineering, and full-stack modern application development.",
    },
    {
      year: "2025",
      title: "Software Developer",
      company: "IceApple Technology Solutions",
      type: "Job",
      description: "Developed high-performance gaming dashboards, release automation tooling, and AI-enabled workflows.",
    },
  ];

  return (
    <section id="timeline" className="py-24 bg-slate-950/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-blue-500 font-semibold mb-4">Experience Timeline</p>
          <h2 className="text-5xl md:text-6xl font-bold">Career & Learning Journey</h2>
          <p className="mt-4 text-slate-400 max-w-3xl mx-auto">
            A polished animated timeline showing education, jobs, certifications and the technologies learned along the way.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 left-1/2 w-px bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block" />
          <div className="space-y-10">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year + item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative lg:w-5/12 ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}
              >
                <div className="glass rounded-3xl border border-white/10 p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300 font-semibold">
                      {item.year}
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[2px] text-slate-400">{item.type}</p>
                      <h3 className="text-2xl font-semibold mt-1">{item.title}</h3>
                      <p className="text-slate-500 text-sm mt-1">{item.company}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
                <div className="hidden lg:block absolute top-10 left-[-20px] h-4 w-4 rounded-full bg-blue-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
