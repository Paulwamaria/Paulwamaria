import { ArrowUpRight, HeartHandshake, ShieldCheck } from "lucide-react";

const projects = [
  {
    name: "Tulia",
    description: "Help grow a safety-first platform for intentional, meaningful connections.",
    href: "https://projectsupport-api.vercel.app/support/tulia/",
    accent: "from-fuchsia-500/15 to-purple-500/5",
  },
  {
    name: "Carenne Fashion House",
    description: "Support its digital fashion platform and made-to-measure experience.",
    href: "https://projectsupport-api.vercel.app/support/carenne/",
    accent: "from-amber-400/15 to-fuchsia-500/5",
  },
];

export default function ProjectSupportWidget() {
  return (
    <div className="mt-7 rounded-[1.75rem] border border-white/10 bg-black/25 p-5 md:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-2 text-emerald-300">
          <HeartHandshake className="h-4 w-4" />
        </div>
        <div>
          <p className="font-medium text-white">Choose a project to support</p>
          <p className="mt-1 text-xs leading-5 text-neutral-400">
            Each contribution is recorded directly under the project you select.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className={`group rounded-2xl border border-white/10 bg-gradient-to-br ${project.accent} p-4 transition hover:-translate-y-0.5 hover:border-fuchsia-300/40`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-white">{project.name}</p>
                <p className="mt-1.5 text-xs leading-5 text-neutral-400">{project.description}</p>
              </div>
              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 text-[11px] leading-5 text-neutral-500">
        <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-300" />
        Voluntary project support. Secure M-Pesa payments are handled by ProjectSupport and its payment provider.
      </div>

      <a
        href="https://projectsupport-api.vercel.app/support/"
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex text-xs font-medium text-fuchsia-300 transition hover:text-fuchsia-200"
      >
        View the ProjectSupport hub <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
      </a>
    </div>
  );
}
