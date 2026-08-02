"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/Projects";

export default function ProjectSearch() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const normalized = q.trim().toLowerCase();
    if (!normalized) return [];
    return projects.filter((p) => {
      return (
        p.title.toLowerCase().includes(normalized) ||
        p.shortDescription.toLowerCase().includes(normalized) ||
        p.technologies.join(" ").toLowerCase().includes(normalized)
      );
    });
  }, [q]);

  return (
    <div className="relative max-w-lg">
      <label className="sr-only">Search projects</label>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search projects (AI-powered later)"
        className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-2 text-sm text-white outline-none"
        aria-label="Search projects"
      />

      {results.length > 0 && (
        <div className="mt-2 max-h-56 overflow-auto rounded-md border border-white/10 bg-slate-900/80 p-2">
          {results.map((r) => (
            <a
              key={r.id}
              href={`/project/${r.id}`}
              className="block rounded px-3 py-2 text-sm hover:bg-white/5"
            >
              <div className="font-semibold">{r.title}</div>
              <div className="text-xs text-slate-400">{r.shortDescription}</div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
