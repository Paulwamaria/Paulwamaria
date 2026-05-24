import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Lock } from "lucide-react";

const projectData: Record<
  string,
  {
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
  }
> = {
  tulia: {
    title: "Tulia",
    category: "Relationship Platform",
    heroImage: "/projects/tulia.png",

    overview:
      "Tulia is a full-stack relationship platform built to explore how trust, real-time interaction, and structured user flows can improve modern connection experiences. The project combines product thinking with scalable backend architecture and real-time communication.",

    problem:
      "Many existing platforms prioritize engagement metrics over meaningful interaction, leading to low trust and shallow user experiences. The challenge was to design a system that supports intentional connections while handling real-time interaction and scalable user flows.",

    solution:
      "I built Tulia as a modern full-stack application using Next.js and NestJS, with a focus on authentication, user verification, matching flows, and real-time communication using WebSockets. The architecture was designed to support both product experimentation and scalability.",

    features: [
      "User authentication and verification flows",
      "Matching and connection system",
      "Real-time messaging with Socket.IO",
      "Structured backend architecture with NestJS",
      "Database modeling using Prisma and PostgreSQL",
    ],

    stack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Socket.IO",
    ],

    challenges: [
      "Designing real-time communication workflows",
      "Structuring backend services for scalability",
      "Managing relational data with Prisma",
      "Balancing product design with technical implementation",
    ],

    outcome:
      "Tulia demonstrates my ability to build a real-time full-stack product from the ground up, combining frontend UX, backend architecture, database design, and live communication systems into a cohesive platform.",

    live: "https://growwithtulia.com",
    code: "/code-access?project=tulia",
    privateCode: true,
  },
  carenne: {
    title: "Carenne Fashion House",
    category: "Luxury E-commerce Platform",
    heroImage: "/projects/carenne.png",
    overview:
      "Carenne Fashion House is a premium fashion commerce platform built to combine elegant branding with a scalable digital shopping experience. The project reflects both design sensitivity and full-stack engineering, with a focus on presentation, product management, and long-term growth.",
    problem:
      "The goal was to create a refined digital presence for a fashion brand while still supporting the practical realities of online product presentation, backend management, and customer interaction. The challenge was building something visually premium without sacrificing structure, usability, or future scalability.",
    solution:
      "I designed and developed a full-stack platform that blends strong visual identity with practical commerce workflows. The storefront was structured to feel polished and brand-driven, while the backend architecture supports products, reservations, and future expansion.",
    features: [
      "Luxury-focused storefront design",
      "Dynamic product presentation",
      "Backend product management workflows",
      "Reservation and inquiry support",
      "Responsive layout for mobile and desktop",
    ],
    stack: ["Next.js", "Django", "PostgreSQL", "Django REST Framework"],
    challenges: [
      "Balancing premium visual design with maintainable engineering structure",
      "Designing data models that support flexible product workflows",
      "Creating a clean bridge between backend content management and frontend presentation",
    ],
    outcome:
      "The result is a polished, scalable e-commerce platform that strengthens the brand’s online identity while establishing a solid technical foundation for future business growth.",
    live: "https://carennedesigns.com",
    code: "/code-access?project=carenne",
    privateCode: true,
  },

  visoima: {
    title: "Visoi Machineries",
    category: "Business Website",
    heroImage: "/projects/visoima.jpg",
    overview:
      "Visoi Machineries is a business website created to improve the company’s online presence, communicate services more clearly, and support customer trust through a clean, structured digital experience.",
    problem:
      "The business needed a more professional web presence that could present its offerings clearly and help convert visitors into real inquiries. The main challenge was designing for clarity, trust, and ease of use without overwhelming visitors with too much information.",
    solution:
      "I built a straightforward, modern website focused on usability and business communication. The structure emphasizes service clarity, simple navigation, and a cleaner visual identity that helps the company appear more credible and accessible online.",
    features: [
      "Modern business-oriented design",
      "Clear service presentation",
      "Mobile-friendly layout",
      "Lead-generation focused structure",
      "Professional company branding online",
    ],
    stack: ["JavaScript", "HTML", "CSS"],
    challenges: [
      "Presenting business information clearly for a broad audience",
      "Designing for trust and simplicity rather than visual clutter",
      "Structuring the site around user inquiry and business credibility",
    ],
    outcome:
      "The final website improves the business’s digital presence and gives potential customers a clearer, more professional path to learning about the company and reaching out.",
    live: "https://visoimachineriesnakuru.netlify.app",
    code: "https://github.com/Paulwamaria/visoi",
    privateCode: false,
  },

  trading: {
    title: "Trading Automation System",
    category: "Fintech / Automation",
    heroImage: "/projects/trading.png",
    overview:
      "This project focuses on designing and building automated trading workflows around signal processing, execution logic, monitoring, and system structure. It reflects my interest in combining software engineering with automation and financial logic.",
    problem:
      "Manual trade execution introduces delays, inconsistency, and limited scalability. The challenge was to create a technical framework that could support more structured, repeatable execution while still being observable, adaptable, and easier to manage.",
    solution:
      "I developed a workflow centered around signal generation, processing, and execution logic, with attention to deployment structure, logging, and maintainability. The goal was not just automation, but a system that could be reasoned about, improved, and monitored over time.",
    features: [
      "Signal processing workflow",
      "Execution logic structure",
      "Automation-oriented system design",
      "Monitoring and logging support",
      "Deployment-ready architecture thinking",
    ],
    stack: ["Python", "MT5", "APIs", "Automation"],
    challenges: [
      "Designing reliable execution flow for automated actions",
      "Building logic that remains understandable and maintainable",
      "Balancing automation goals with system safety and observability",
    ],
    outcome:
      "The project demonstrates my ability to design technical systems that combine logic, automation, and real-world implementation thinking in a structured way.",
    live: "/code-access?project=trading",
    code: "/code-access?project=trading",
    privateCode: true,
  },

  ascend: {
    title: "Ascend",
    category: "Social Platform / Product",
    heroImage: "/projects/ascend.png",
    overview:
      "Ascend is a social growth platform designed around networking, motivation, community participation, and user-driven progress. It reflects my interest in building products that combine interaction, structure, and meaningful digital experiences.",
    problem:
      "Many digital platforms focus only on passive consumption or generic networking. Ascend was designed to explore a more engaging model that encourages community participation, challenge-based interaction, and purposeful user activity.",
    solution:
      "I built Ascend as a product-oriented platform with onboarding, circles, challenge mechanics, and scalable backend flows. The project combines social UX ideas with full-stack architecture and product thinking.",
    features: [
      "Onboarding flow for new users",
      "Community circles and participation structure",
      "Challenge-based interaction model",
      "Scalable backend workflows",
      "Responsive product-focused interface",
    ],
    stack: ["React", "Django", "PostgreSQL", "Tailwind CSS"],
    challenges: [
      "Combining social interaction with motivational product mechanics",
      "Structuring backend logic for scalable user participation",
      "Maintaining product clarity while building a broad feature direction",
    ],
    outcome:
      "Ascend shows my ability to build beyond simple app screens by combining UX, product structure, backend design, and engagement mechanics into a more complete platform concept.",
    live: "https://nexa-asfrontend.vercel.app",
    code: "/code-access?project=ascend",
    privateCode: true,
  },
};

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectData[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-neutral-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-semibold">Project not found</h1>
          <p className="mt-4 text-neutral-300">
            The case study you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center rounded-2xl border border-white/15 px-5 py-3 text-white transition hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
          <Link
            href="/"
            className="mb-8 inline-flex items-center text-sm text-neutral-300 transition hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>

          <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">
            {project.category}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300 md:text-lg">
            {project.overview}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.live && (
              <Link
                href={project.live}
                target={project.live.startsWith("http") ? "_blank" : undefined}
                className="inline-flex items-center rounded-2xl bg-white px-5 py-3 font-medium text-neutral-950 transition hover:bg-neutral-200"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Project
              </Link>
            )}

            {project.privateCode ? (
              <Link
                href={project.code || "/code-access"}
                className="inline-flex items-center rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/10"
              >
                <Lock className="mr-2 h-4 w-4" />
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
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <Image
              src={project.heroImage}
              alt={project.title}
              width={1400}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold">The Problem</h2>
              <p className="mt-4 leading-8 text-neutral-300">
                {project.problem}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold">The Solution</h2>
              <p className="mt-4 leading-8 text-neutral-300">
                {project.solution}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold">Challenges & Decisions</h2>
              <ul className="mt-4 space-y-3 text-neutral-300">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="leading-8">
                    • {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold">Outcome</h2>
              <p className="mt-4 leading-8 text-neutral-300">
                {project.outcome}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold">Key Features</h2>
              <ul className="mt-4 space-y-3 text-neutral-300">
                {project.features.map((feature) => (
                  <li key={feature} className="leading-8">
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold">Tech Stack</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-neutral-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
