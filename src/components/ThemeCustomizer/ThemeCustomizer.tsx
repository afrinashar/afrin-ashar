"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ACCENTS = [
  { id: "blue", label: "Blue", value: "#0ea5e9" },
  { id: "purple", label: "Purple", value: "#7c3aed" },
  { id: "amber", label: "Amber", value: "#f59e0b" },
  { id: "emerald", label: "Green", value: "#10b981" },
];

const FONTS = [
  { id: "inter", label: "Inter", css: "Inter, system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial" },
  { id: "serif", label: "Serif", css: "Georgia, serif" },
  { id: "mono", label: "Monospace", css: "ui-monospace, SFMono-Regular, Menlo, Monaco, \"Roboto Mono\", monospace" },
];

export default function ThemeCustomizer() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [accent, setAccent] = useState<string>(ACCENTS[0].value);
  const [font, setFont] = useState<string>(FONTS[0].id);

  useEffect(() => {
    const saved = localStorage.getItem("accent_color");
    const savedFont = localStorage.getItem("site_font");
    if (saved) setAccent(saved);
    if (savedFont) setFont(savedFont);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
    localStorage.setItem("accent_color", accent);
  }, [accent]);

  useEffect(() => {
    localStorage.setItem("site_font", font);
    const f = FONTS.find((f) => f.id === font);
    if (f) document.documentElement.style.setProperty("--site-font", f.css);
  }, [font]);

  function selectFont(id: string) {
    if (id === font) return;
    // add class to fade out, swap font, then fade in
    document.documentElement.classList.add("font-switch");
    setTimeout(() => {
      setFont(id);
      // remove the class to trigger fade-in
      setTimeout(() => document.documentElement.classList.remove("font-switch"), 140);
    }, 60);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setOpen((s) => !s)}
        className="rounded-full p-3 bg-white/8 backdrop-blur border border-white/10 text-sm transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        aria-label="Open theme customizer"
      >
        Theme
      </button>

      {open && (
        <div className="mt-3 w-72 rounded-2xl p-4 bg-slate-900/95 border border-white/10 shadow-lg">
          <h3 className="text-sm font-semibold mb-2">Appearance</h3>

          <div className="mb-3">
            <div className="text-xs text-slate-400 mb-2">Mode</div>
            <div className="flex gap-2">
              <button onClick={() => setTheme("light")} className={`px-2 py-1 rounded ${theme === "light" ? "bg-white/5" : ""}`}>Light</button>
              <button onClick={() => setTheme("dark")} className={`px-2 py-1 rounded ${theme === "dark" ? "bg-white/5" : ""}`}>Dark</button>
              <button onClick={() => setTheme("system")} className={`px-2 py-1 rounded ${theme === "system" ? "bg-white/5" : ""}`}>System</button>
            </div>
          </div>

          <div className="mb-3">
            <div className="text-xs text-slate-400 mb-2">Accent</div>
            <div className="flex gap-2">
              {ACCENTS.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setAccent(a.value)}
                  className={`w-8 h-8 rounded-full border ${accent === a.value ? "ring-2 ring-white/30" : ""}`}
                  style={{ background: a.value }}
                  aria-label={`Set accent ${a.label}`}
                />
              ))}
            </div>
          </div>

          <div className="mb-1">
            <div className="text-xs text-slate-400 mb-2">Font</div>
            <div className="flex flex-col gap-2">
              {FONTS.map((f) => (
                <label className="text-sm" key={f.id}>
                  <input type="radio" name="font" checked={font === f.id} onChange={() => selectFont(f.id)} className="mr-2" />
                  {f.label}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-3 rounded-2xl border border-white/10 p-3 bg-white/5">
            <div className="text-xs text-slate-400 mb-2">Preview</div>
            <div className="text-sm text-white" style={{ fontFamily: "var(--site-font)" }}>
              The quick brown fox jumps over the lazy dog.
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: "60%" }} />
            </div>
          </div>

          <div className="mt-4 text-right">
            <button onClick={() => setOpen(false)} className="px-3 py-1 rounded border border-white/10">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
