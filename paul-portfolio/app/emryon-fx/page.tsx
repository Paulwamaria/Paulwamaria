import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Code2,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Emryon FX | Forex Education, Research & Trading Technology",
  description:
    "Emryon FX is an independent forex education, research, and trading-technology initiative by Paul Wamaria.",
};

const pillars = [
  {
    icon: BookOpen,
    title: "Forex Education",
    description:
      "Beginner-friendly visual lessons covering market structure, candlesticks, terminology, risk management, psychology, fundamentals, and trading sessions.",
  },
  {
    icon: BarChart3,
    title: "Research & Market Insights",
    description:
      "Practical explorations of the questions traders face: volatility, gold behaviour, news events, timing, risk, and the habits behind avoidable losses.",
  },
  {
    icon: Code2,
    title: "Trading Technology",
    description:
      "Software-engineering experiments around algorithmic trading, strategy testing, MT5 Expert Advisors, automation, and cTrader/cBot development.",
  },
];

export default function EmryonFxPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,70,239,0.16),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(126,34,206,0.12),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
          <Link
            href="/#emryon"
            className="inline-flex items-center text-sm text-neutral-400 transition hover:text-fuchsia-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Emryon
          </Link>

          <div className="mt-12 max-w-4xl">
            <div className="mb-8 w-full max-w-xl">
              <Image
                src="/emryon-logo.png"
                alt="Emryon"
                width={1960}
                height={672}
                priority
                className="h-auto w-full object-contain drop-shadow-[0_0_28px_rgba(234,179,8,0.16)]"
              />
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300">Emryon FX</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-7xl">
              Learn the market. Understand the risk. Build better systems.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-300">
              An independent forex education and trading-technology initiative focused on making market concepts easier to understand through visual education, practical research, and software experimentation.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="https://www.tiktok.com/@emryon_fx"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-2xl bg-fuchsia-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-fuchsia-400"
              >
                Follow @emryon_fx <ExternalLink className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#focus"
                className="inline-flex items-center rounded-2xl border border-white/15 px-5 py-3 text-sm text-white transition hover:bg-white/10"
              >
                Explore the initiative <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="focus" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16 md:px-10 lg:px-12">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">What Emryon FX explores</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Education meets experimentation</h2>
          <p className="mt-4 leading-8 text-neutral-300">
            The project brings together content and software: explaining trading concepts clearly, investigating real market behaviour, and applying engineering to trading-system experiments.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-fuchsia-400/30 hover:bg-white/[0.07]">
              <div className="inline-flex rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 p-3 text-fuchsia-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-300">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">Content</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Built to make difficult ideas visual</h2>
            <p className="mt-5 max-w-2xl leading-8 text-neutral-300">
              Emryon FX uses short-form lessons, quizzes, infographics, market diagrams, and trading humour to make concepts approachable without hiding the risk involved in leveraged trading.
            </p>
            <a
              href="https://www.tiktok.com/@emryon_fx"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center text-sm font-medium text-fuchsia-300 transition hover:text-fuchsia-200"
            >
              Watch Emryon FX on TikTok <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-neutral-900/70 p-7 md:p-8">
            <p className="text-sm font-medium text-fuchsia-300">Current themes</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Market structure", "Candlesticks", "Risk management", "Trading psychology", "Gold / XAUUSD", "Fundamentals", "Trading sessions", "Algorithmic trading"].map((theme) => (
                <span key={theme} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-300">{theme}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-amber-300/15 bg-amber-300/[0.04] p-7 md:p-9">
          <div className="flex items-start gap-4">
            <div className="mt-1 rounded-2xl border border-white/10 bg-white/5 p-3 text-neutral-200">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-200">Educational content only</p>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-neutral-400">
                Emryon FX provides educational content, research, and software experiments related to financial markets. Nothing published by Emryon FX constitutes financial or investment advice. Trading leveraged products such as forex involves significant risk and may result in loss of capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <p>Emryon FX is an independent initiative under the Emryon brand.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-white">Privacy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms</Link>
            <Link href="/#emryon" className="transition hover:text-white">Emryon</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
