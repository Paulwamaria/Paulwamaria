"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Lock, Mail } from "lucide-react";

type Project = {
  title: string;
  category: string;
  heroImage: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  challenges: string[];
  outcome: string;
  live?: string;
  code?: string;
  privateCode?: boolean;
};

type AnimatedCaseStudyProps = {
  project: Project;
  slug: string;
  relatedProjects?: {
    slug: string;
    title: string;
    category: string;
  }[];
};

export default function AnimatedCaseStudy({
  project,
  slug,
  relatedProjects = [],
}: AnimatedCaseStudyProps) {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
          <Link
            href="/"
            className="mb-8 inline-flex items-center text-sm text-neutral-300 transition hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-[0.25em] text-fuchsia-300"
          >
            {project.category}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mt-6 max-w-3xl text-base leading-8 text-neutral-300 md:text-lg"
          >
            {project.overview}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            {project.live && (
              <Link
                href={project.live}
                target={project.live.startsWith("http") ? "_blank" : undefined}
                className="inline-flex items-center rounded-2xl bg-white px-5 py-3 font-medium text-neutral-950 transition hover:bg-neutral-200"
              >
                {project.live.startsWith("http") && (
                  <span className="mr-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                )}
                <ExternalLink className="mr-2 h-4 w-4" />
                View Project
              </Link>
            )}

            {project.privateCode ? (
              <Link
                href={project.code || "/code-access"}
                className="group inline-flex items-center rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/10"
              >
                <Lock className="mr-2 h-4 w-4 transition group-hover:scale-110" />
                Code Access
              </Link>
            ) : (
              <Link
                href={project.code || "#"}
                target={project.code?.startsWith("http") ? "_blank" : undefined}
                className="inline-flex items-center rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/10"
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Link>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl"
          >
            <Image
              src={project.heroImage}
              alt={project.title}
              width={1400}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <AnimatedCard>
              <h2 className="text-2xl font-semibold">The Problem</h2>
              <p className="mt-4 leading-8 text-neutral-300">
                {project.problem}
              </p>
            </AnimatedCard>

            <AnimatedCard>
              <h2 className="text-2xl font-semibold">The Solution</h2>
              <p className="mt-4 leading-8 text-neutral-300">
                {project.solution}
              </p>
            </AnimatedCard>

            <AnimatedCard>
              <h2 className="text-2xl font-semibold">Challenges & Decisions</h2>
              <ul className="mt-4 space-y-3 text-neutral-300">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="leading-8">
                    • {challenge}
                  </li>
                ))}
              </ul>
            </AnimatedCard>

            <AnimatedCard>
              <h2 className="text-2xl font-semibold">Outcome</h2>
              <p className="mt-4 leading-8 text-neutral-300">
                {project.outcome}
              </p>
            </AnimatedCard>

            <AnimatedCard>
              <h2 className="text-2xl font-semibold">What I Learned</h2>
              <p className="mt-4 leading-8 text-neutral-300">
                This project strengthened my ability to think beyond individual
                features and design complete systems around user flows, data
                integrity, scalability, maintainability, and real-world product
                needs.
              </p>
            </AnimatedCard>
          </div>

          <div className="space-y-8">
            <AnimatedCard>
              <h2 className="text-2xl font-semibold">Key Features</h2>
              <ul className="mt-4 space-y-3 text-neutral-300">
                {project.features.map((feature) => (
                  <li key={feature} className="leading-8">
                    • {feature}
                  </li>
                ))}
              </ul>
            </AnimatedCard>

            <AnimatedCard>
              <h2 className="text-2xl font-semibold">Tech Stack</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.stack.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.05,
                    }}
                    className="rounded-full border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-neutral-200"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </AnimatedCard>

            <AnimatedCard>
              <h2 className="text-2xl font-semibold">Project Focus</h2>
              <div className="mt-4 grid gap-3 text-sm text-neutral-300">
                <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">
                  Role: Full-Stack Developer
                </div>
                <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">
                  Ownership: Architecture, UI, API, Database & Deployment
                </div>
                <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">
                  Focus: Product thinking + scalable implementation
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10 lg:px-12">
        <AnimatedCard>
          <div className="text-center">
            <h2 className="text-2xl font-semibold">
              Interested in building something like this?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-neutral-300">
              I design, develop, test, deploy, and automate scalable systems for
              real-world products and business workflows.
            </p>

            <Link
              href="mailto:paulwamaria@gmail.com"
              className="mt-6 inline-flex items-center rounded-2xl bg-white px-6 py-3 font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Link>
          </div>
        </AnimatedCard>

        {relatedProjects.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold">Other Projects</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {relatedProjects.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-2 hover:border-fuchsia-400/30 hover:bg-white/10"
                >
                  <p className="text-sm text-fuchsia-300">{item.category}</p>
                  <h3 className="mt-2 text-lg font-semibold transition group-hover:text-fuchsia-200">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

function AnimatedCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-fuchsia-400/30 hover:bg-white/[0.07]"
    >
      {children}
    </motion.div>
  );
}
