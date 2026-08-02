"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Cpu, BookOpen } from "lucide-react";

export default function AIIntro() {
  return (
    <section id="ai-intro" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-[40px] border border-white/10 p-10 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="max-w-2xl">
              <p className="uppercase tracking-[6px] text-blue-500 font-semibold mb-4">AI Introduction</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ask me about my work.</h2>
              <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                Discover my projects, skills and experience with a smart AI assistant that uses a knowledge-aware retrieval layer to answer questions about my portfolio.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { icon: <MessageCircle />, label: "Portfolio AI Chat" },
                { icon: <Sparkles />, label: "RAG-powered answers" },
                { icon: <Cpu />, label: "Projects, skills, experience" },
                { icon: <BookOpen />, label: "Always up-to-date with content" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-3xl border border-white/10 px-5 py-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-blue-500/15 text-blue-300 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <p className="font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-slate-950/70 p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">How it works</h3>
              <ul className="space-y-3 text-slate-400">
                <li>• The AI reads my portfolio content and project metadata.</li>
                <li>• It uses retrieval-augmented generation to ground answers in real work examples.</li>
                <li>• Ask questions about projects, skills, certifications, and career growth.</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-slate-950/70 p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Try asking</h3>
              <div className="space-y-3 text-slate-400">
                <p className="bg-white/5 rounded-2xl px-4 py-3">"What tools did you use for the AI subtitle generator?"</p>
                <p className="bg-white/5 rounded-2xl px-4 py-3">"Tell me about your experience building micro frontends."</p>
                <p className="bg-white/5 rounded-2xl px-4 py-3">"What certifications do you have?"</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
