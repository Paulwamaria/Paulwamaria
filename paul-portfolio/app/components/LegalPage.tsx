import Link from "next/link";
import Navbar from "./Navbar";

type Section = { title: string; body: React.ReactNode };

export default function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: Section[] }) {
  return <><Navbar /><main className="min-h-screen bg-neutral-950 text-white"><div className="mx-auto max-w-4xl px-6 py-16 md:px-10 lg:py-20"><p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">Emryon • ProjectSupport</p><h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1><p className="mt-6 max-w-3xl leading-8 text-neutral-300">{intro}</p><p className="mt-3 text-sm text-neutral-500">Last updated: 1 October 2026</p><div className="mt-12 space-y-8">{sections.map((section)=><section key={section.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8"><h2 className="text-xl font-semibold">{section.title}</h2><div className="mt-4 space-y-4 text-sm leading-7 text-neutral-300">{section.body}</div></section>)}</div><div className="mt-10 flex flex-wrap gap-3"><Link href="/#emryon" className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-neutral-950">Back to Emryon</Link><Link href="/privacy" className="rounded-2xl border border-white/15 px-4 py-2 text-sm">Privacy</Link><Link href="/terms" className="rounded-2xl border border-white/15 px-4 py-2 text-sm">Terms</Link><Link href="/refund-policy" className="rounded-2xl border border-white/15 px-4 py-2 text-sm">Refunds</Link></div></div></main></>;
}
