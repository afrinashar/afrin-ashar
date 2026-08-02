'use client';
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import ProjectSearch from "@/components/ProjectSearch/ProjectSearch";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 text-white sm:px-6" aria-label="Main navigation">
        <a href="#hero" className="text-xl font-bold tracking-[0.35em] text-white">
          AFRIN
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ProjectSearch />
          <ThemeToggle />
          <button
            type="button"
            className="rounded-full border border-white/10 bg-white/10 p-2 text-white md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="absolute right-4 top-16 w-48 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-slate-200" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}