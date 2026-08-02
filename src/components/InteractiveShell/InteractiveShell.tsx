"use client";

import { FormEvent, useState } from "react";
import { TerminalSquare, Play } from "lucide-react";

const commandMap: Record<string, string> = {
  help: "Available commands: help, whoami, projects, skills, contact, clear",
  whoami: "Afrin Ashar — Full Stack Developer and AI Engineer building modern, scalable web experiences.",
  projects: "Recent highlights include Talking Tom AI, InsightAI Studio, and the System Design Playground.",
  skills: "Core stack: React, Next.js, TypeScript, Node.js, MongoDB, Tailwind CSS, and AI integrations.",
  contact: "Reach out through the contact section or email afrinashar1@gmail.com.",
};

export default function InteractiveShell() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ id: number; command: string; output: string }>>([
    {
      id: 1,
      command: "help",
      output: commandMap.help,
    },
  ]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalized = input.trim().toLowerCase() || "help";

    if (normalized === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = commandMap[normalized] ?? `Command not found: ${normalized}. Try help.`;

    setHistory((prev) => [
      ...prev,
      {
        id: Date.now(),
        command: normalized,
        output,
      },
    ]);
    setInput("");
  };

  return (
    <section className="py-24" aria-labelledby="interactive-shell-title">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-blue-950/20">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[6px] text-blue-400">Interactive Terminal</p>
              <h2 id="interactive-shell-title" className="mt-2 text-3xl font-bold text-white">
                Explore my portfolio in a terminal style
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
              <TerminalSquare size={16} />
              Try: whoami, projects, skills
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/70 p-4">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <ol className="space-y-3" aria-live="polite">
              {history.map((item) => (
                <li key={item.id} className="font-mono text-sm text-slate-200">
                  <div className="text-blue-300">guest@portfolio:~$ {item.command}</div>
                  <div className="mt-1 whitespace-pre-wrap text-slate-400">{item.output}</div>
                </li>
              ))}
            </ol>

            <form onSubmit={handleSubmit} className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <span className="text-blue-300">guest@portfolio:~$</span>
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type a command"
                className="flex-1 bg-transparent text-sm text-white outline-none"
                aria-label="Portfolio terminal command"
              />
              <button type="submit" className="rounded-lg bg-blue-500/20 p-2 text-blue-200 transition hover:bg-blue-500/30" aria-label="Run command">
                <Play size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
