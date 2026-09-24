"use client";

import Link from "next/link";
import { Github, Menu, X, Linkedin } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

function TikTokIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 1 1-2.896-2.895c.298 0 .584.048.853.133V9.4a6.336 6.336 0 1 0 5.488 6.272V8.73a8.18 8.18 0 0 0 4.773 1.526V6.814c-.342 0-.677-.043-1.003-.128Z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 font-semibold text-fuchsia-300">
            PW
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white">Paul Wamaria</p>
            <p className="text-xs text-neutral-400">Full-Stack Developer</p>
          </div>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-xl px-4 py-2 text-sm text-neutral-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <Link
            href="https://github.com/Paulwamaria"
            target="_blank"
            className="inline-flex items-center rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/10"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Link>
          <div className="flex items-center gap-2 border-l border-white/10 pl-4">
            <Link
              href="https://www.linkedin.com/in/paul-wamaria-73b886189/"
              target="_blank"
              rel="noreferrer"
              aria-label="Paul Wamaria on LinkedIn"
              title="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-neutral-400 transition hover:bg-white/10 hover:text-fuchsia-300"
            >
              <Linkedin className="h-4 w-4" />
            </Link>

            <Link
              href="https://www.tiktok.com/@emryon_fx"
              target="_blank"
              rel="noreferrer"
              aria-label="Paul Wamaria on TikTok"
              title="TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-xl text-neutral-400 transition hover:bg-white/10 hover:text-fuchsia-300"
            >
              <TikTokIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-neutral-950 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-neutral-300 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <Link
              href="https://github.com/Paulwamaria"
              target="_blank"
              onClick={() => setOpen(false)}
              className="inline-flex items-center rounded-xl border border-white/10 px-4 py-3 text-sm text-white transition hover:bg-white/10"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
