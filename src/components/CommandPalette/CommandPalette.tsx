"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { Search } from "lucide-react";

const items = [
  { id: "projects", label: "Go to Projects", action: () => (window.location.hash = "#projects") },
  { id: "experience", label: "Open Experience", action: () => (window.location.hash = "#experience") },
  { id: "contact", label: "Contact", action: () => (window.location.hash = "#contact") },
  { id: "download", label: "Download Resume", action: () => (window.location.href = "/resume.pdf") },
  { id: "github", label: "Open GitHub", action: () => window.open("https://github.com/afrinashar", "_blank") },
];

function fuzzyScore(text: string, query: string) {
  if (!query) return 1;
  text = text.toLowerCase();
  query = query.toLowerCase();
  // exact or includes gets higher score
  if (text === query) return 100;
  if (text.includes(query)) return 50 + (query.length / text.length) * 10;

  // subsequence match scoring
  let ti = 0;
  let qi = 0;
  let score = 0;
  while (ti < text.length && qi < query.length) {
    if (text[ti] === query[qi]) {
      score += 2;
      qi++;
    }
    ti++;
  }
  return qi === query.length ? score + 10 : 0;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActive(0);
    } else {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const scored = items
    .map((it) => ({ it, score: fuzzyScore(it.label, query) }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.it);

  const results = query ? scored : items;

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = results[active];
      if (item) {
        item.action();
        setOpen(false);
      }
    }
  }

  return (
    <div aria-hidden={!open}>
      {open && (
        <div className="fixed inset-0 z-60 flex items-start justify-center p-6">
          <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <Search size={18} className="text-slate-300" />
              <input
                ref={inputRef}
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Type a command or search..."
                className="w-full bg-transparent outline-none text-white"
                aria-label="Command palette input"
              />

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-2 rounded px-3 py-1 text-sm border border-white/10"
              >
                Toggle Theme
              </button>
            </div>

            <div className="mt-3 max-h-72 overflow-auto">
              {results.map((it, idx) => (
                <button
                  key={it.id}
                  onMouseEnter={() => setActive(idx)}
                  onClick={() => {
                    it.action();
                    setOpen(false);
                  }}
                  className={`w-full text-left rounded-md p-3 hover:bg-white/5 ${idx === active ? "bg-white/5" : ""}`}
                >
                  {it.label}
                </button>
              ))}

              {results.length === 0 && <div className="p-4 text-sm text-slate-400">No results</div>}
            </div>

            <div className="mt-3 text-xs text-slate-400">Use ↑/↓ to navigate • Enter to run • Esc to close</div>
          </div>
        </div>
      )}
    </div>
  );
}
