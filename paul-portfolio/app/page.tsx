import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import {
  Github,
  Globe,
  Mail,
  Phone,
  ArrowRight,
  Code2,
  Database,
  Server,
  Boxes,
  BookOpen,
  FileText,
} from "lucide-react";

const featuredProjects = [
  {
    title: "Tulia",
    slug: "tulia",
    image: "/projects/tulia.png",
    category: "Relationship Platform",
    summary:
      "A real-time relationship platform focused on verified users, structured matching, and meaningful interaction, built with a modern full-stack architecture.",
    stack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Socket.IO",
    ],
    impact:
      "Demonstrates full-stack product development with real-time features, authentication flows, and scalable backend architecture.",
    live: "https://growwithtulia.com",
    code: "/code-access?project=tulia",
    caseStudy: "/projects/tulia",
  },
  {
    title: "NexaPOS",
    slug: "nexapos",
    image: "/projects/nexapos.png",
    category: "Multi-Branch Point of Sale System",
    summary:
      "A retail management platform designed to streamline inventory, sales, cash shifts, and branch operations through structured business workflows.",
    stack: ["Django", "Django REST Framework", "JWT", "Nextjs", "PostgreSQL", "SQLite"],
    impact:
      "Demonstrates practical business systems engineering through inventory control, sales processing, returns management, audit trails, and role-based access.",
    live: "https://github.com/Paulwamaria/nexaPOS",
    code: "https://github.com/Paulwamaria/nexaPOS",
    caseStudy: "/projects/nexapos",
  },
    {
    title: "Carenne Fashion House",
    slug: "carenne",
    image: "/projects/carenne.png",
    category: "Luxury E-commerce Platform",
    summary:
      "A premium commerce platform built around elegant branding, modern storefront UX, admin workflows, and scalable product management.",
    stack: ["Next.js", "Django", "PostgreSQL", "DRF"],
    impact:
      "Designed to support a modern fashion brand with strong product presentation and a scalable backend foundation.",
    live: "https://carennedesigns.com",
    code: "/code-access?project=carenne",
    caseStudy: "/projects/carenne",
  },
  {
    title: "Server Fleet Monitor",
    slug: "server-fleet-monitor",
    image: "/projects/server-fleet.png",
    category: "Infrastructure Monitoring Platform",
    summary:
      "An observability platform built to monitor server health, visualize performance metrics, and streamline incident response through structured operational workflows.",
    stack: [
      "NestJS",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "TypeScript",
    ],
    impact:
      "Demonstrates backend maturity and operational thinking through metrics monitoring, alert management, activity tracking, and infrastructure visibility.",
    live: "/code-access?project=serverFleet",
    code: "/code-access?project=serverFleet",
    caseStudy: "/projects/serverFleet",
  },

  {
    title: "Pembe Machinery",
    slug: "pembe-machinery",
    image: "/projects/pembe-home.png",
    category: "Full-Stack Business Platform",
    summary:
      "A machinery platform built to manage products, media assets, and business content through a structured full-stack architecture designed for maintainability and growth.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    impact:
      "Demonstrates full-stack architecture, content management workflows, database modeling, and the ability to build business platforms that balance usability with maintainability.",
    live: "https://github.com/Paulwamaria/PembeMachinery",
    code: "https://github.com/Paulwamaria/PembeMachinery",
    caseStudy: "/projects/pembeMachinery",
  },
  {
    title: "Ascend",
    slug: "ascend",
    image: "/projects/ascend.png",
    category: "Social Platform / Product",
    summary:
      "A social growth platform combining networking, motivation, and community engagement through circles, challenges, and user-driven interaction.",
    stack: ["React", "Django", "PostgreSQL", "Tailwind CSS"],
    impact:
      "Built to support meaningful digital engagement with product-focused architecture, onboarding flows, and scalable backend systems.",
    live: "https://nexa-asfrontend.vercel.app",
    code: "/code-access?project=ascend",
    caseStudy: "/projects/ascend",
  },
  {
    title: "Visoi Machineries",
    slug: "visoima",
    image: "/projects/visoima.jpg",
    category: "Business Website",
    summary:
      "A modern business website designed for an agricultural machinery company, focused on clear service presentation, strong branding, and lead generation.",
    stack: ["JavaScript", "HTML", "CSS"],
    impact:
      "Improved online presence and credibility with a clean UI, structured content, and optimized user flow for inquiries.",
    live: "https://visoimachineriesnakuru.netlify.app",
    code: "https://github.com/Paulwamaria/visoi",
    caseStudy: "/projects/visoima",
  },
  {
    title: "Trading Automation System",
    slug: "trading",
    image: "/projects/trading.png",
    category: "Fintech / Automation",
    summary:
      "An automated trading workflow focused on signal processing, execution logic, logging, and deployment-ready system design.",
    stack: ["Python", "MT5", "APIs", "Automation"],
    impact:
      "Combines market logic, technical execution, and monitoring in a real-world automation workflow.",
    live: "/code-access?project=trading",
    code: "/code-access?project=trading",
    caseStudy: "/projects/trading",
  },
  {
  title: "On-Geo Manager",
  slug: "on-geo",
  image: "/projects/ongeo.png",
  category: "Geospatial Access & Attendance Platform",
  summary:
    "A GeoDjango application that uses geographic checkpoints to verify attendance and restrict access to organisational resources based on a user's physical location.",
  stack: [
    "Python",
    "Django",
    "GeoDjango",
    "PostGIS",
    "PostgreSQL",
    "Bootstrap",
  ],
  impact:
    "Demonstrates geospatial engineering through location-based attendance verification, geographic access control, and spatial data processing.",
  live: "https://github.com/Paulwamaria/On-Geo",
  code: "https://github.com/Paulwamaria/On-Geo",
  caseStudy: "/projects/onGeo",
},
];

const systems = [
  "Real-Time Platforms",
  "POS Systems",
  "E-Commerce Systems",
  "Social Applications",
  "Business Websites",
  "Automation Workflows",
];

const books = [
  {
    title: "What Remains After",
    image: "/books/what-remains.jpg",
    type: "Kindle Book",
    description:
      "A published work that reflects my storytelling, long-form writing ability, and creative discipline.",
    link: "https://www.amazon.com/dp/B0GWQH1BM5",
  },
  {
    title: "The Curated Ruin",
    image: "/books/the-curated-ruin.jpg",
    type: "Kindle Book",
    description:
      "A thriller that showcases structure, detail, narrative tension, and strong creative world-building.",
    link: "https://www.amazon.com/dp/B0GTF3JFC1",
  },
];

const expertise = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Frontend Engineering",
    text: "Responsive interfaces with React, Next.js, Tailwind CSS, and clear user-first structure.",
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Backend Development",
    text: "API architecture, authentication, business logic, and scalable server-side workflows with Django and Node.js.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data & Infrastructure",
    text: "PostgreSQL, Redis, Docker, Linux environments, deployment setup, and debugging across full systems.",
  },
  {
    icon: <Boxes className="h-6 w-6" />,
    title: "Product Building",
    text: "From concept to launch: shaping digital products that connect technology, operations, and real-world value.",
  },
];
const metrics = [
  "6+ Production Platforms",
  "20+ APIs Designed",
  "Real-Time Systems",
  "Full-Stack Ownership",
];
const experience = [
  {
    role: "Freelance Full-Stack Developer",
    period: "2020 — Present",
    text: "Building and refining web platforms, APIs, and digital systems across commerce, automation, and product-focused work.",
  },
  {
    role: "Assistant Manager, Mawingu Machineries",
    period: "2022 — 2025",
    text: "Led operational coordination, logistics, client support, and process improvements — strengthening my systems thinking beyond software alone.",
  },
  {
    role: "Field Coordinator, Papami Electrical Contractors",
    period: "2016 — 2018",
    text: "Managed field activities, coordinated teams, and supported delivery of infrastructure work in fast-moving environments.",
  },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Python",
  "Django",
  "Django REST Framework",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Linux",
  "Git",
  "Tailwind CSS",
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_35%)]" />
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative z-10">
                <div className="mb-5 inline-flex rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-1 text-sm text-fuchsia-200">
                  Full-Stack Developer • Nakuru, Kenya
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  I design, develop, test,
                  <span className="text-fuchsia-400"> deploy,</span>
                  and automate scalable systems.
                </h1>

                <p className="mt-8 max-w-3xl text-lg md:text-xl text-neutral-300 leading-8">
                  From real-time platforms and business software to luxury
                  commerce experiences, I build products that solve real-world
                  problems.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center rounded-2xl bg-white px-5 py-3 font-medium text-neutral-950 transition hover:bg-neutral-200"
                  >
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </a>

                  <a
                    href="/Paul_Wamaria_CV.pdf"
                    download
                    className="inline-flex items-center rounded-2xl border border-white/20 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                  >
                    Download CV
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-neutral-300">
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    paulwamaria@gmail.com
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    +254 768972290
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-900">
                    <Image
                      src="/profile.png"
                      alt="Paul Wamaria"
                      width={700}
                      height={800}
                      className="h-[500px] w-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="scroll-mt-24 mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12"
        >
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">
              Featured Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Projects that reflect how I build
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.slug}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-fuchsia-400/30 hover:bg-white/10"
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  {project.slug === "tulia" && (
                    <span className="mb-3 inline-flex rounded-full bg-fuchsia-500/20 px-3 py-1 text-xs font-medium text-fuchsia-200">
                      Flagship Project
                    </span>
                  )}
                  <p className="text-sm text-fuchsia-300">{project.category}</p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-300">
                    {project.summary}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-neutral-400">
                    {project.impact}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/10 px-3 py-1 text-sm text-neutral-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={project.caseStudy}
                      className="inline-flex items-center rounded-2xl bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Case Study
                    </Link>

                    <Link
                      href={project.live}
                      className="inline-flex items-center rounded-2xl border border-white/15 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                      target={
                        project.live.startsWith("http") ? "_blank" : undefined
                      }
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Live
                    </Link>

                    <Link
                      href={project.code}
                      className="inline-flex items-center rounded-2xl border border-white/15 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                      target={
                        project.code.startsWith("http") ? "_blank" : undefined
                      }
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <section className="mx-auto max-w-7xl px-6 py-12">
            <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">
              Systems I&apos;ve Built
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {systems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-4 py-2 text-sm text-fuchsia-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">
                What I Do
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                A full-stack skill set grounded in real systems
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {expertise.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-neutral-900/70 p-6"
                >
                  <div className="mb-4 inline-flex rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 p-3 text-fuchsia-200">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-[2rem] border border-white/10 bg-neutral-900/70 p-6 text-center"
                >
                  <p className="text-xl font-semibold text-fuchsia-300">
                    {metric}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">
                About Me
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                I don’t just code features. I build usable, scalable products.
              </h2>
              <p className="mt-5 text-base leading-8 text-neutral-300">
                My work combines software engineering, systems thinking, and
                product execution. I’m most effective where architecture, user
                experience, and real operational needs meet.
              </p>
            </div>

            <div className="grid gap-4">
              {experience.map((item) => (
                <div
                  key={item.role}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <span className="text-sm text-fuchsia-300">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-neutral-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
            <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">
              Tech Stack
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Tools I use to ship products
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-neutral-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="writing"
          className="scroll-mt-24 mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12"
        >
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">
              Writing & Published Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Beyond code, I write and publish
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-300">
              My writing reflects another side of how I build: structure,
              imagination, clarity, and attention to detail. These qualities
              also shape how I design software and digital products.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {books.map((book) => (
              <div
                key={book.title}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition hover:border-fuchsia-400/30 hover:bg-white/10"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4 inline-flex rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 p-3 text-fuchsia-200">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-fuchsia-300">{book.type}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{book.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-300">
                    {book.description}
                  </p>

                  <a
                    href={book.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center rounded-2xl border border-white/15 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                  >
                    View Book <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12"
        >
          <div className="rounded-[2rem] border border-fuchsia-400/20 bg-gradient-to-br from-fuchsia-500/10 via-white/5 to-purple-500/10 p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">
                  Let’s Work Together
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Looking for someone who can take a product from idea to
                  deployment?
                </h2>
                <p className="mt-4 text-base leading-8 text-neutral-300">
                  I help teams design, develop, test, deploy, and automate
                  systems that create measurable value.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:paulwamaria@gmail.com"
                  className="inline-flex items-center rounded-2xl bg-white px-5 py-3 font-medium text-neutral-950 transition hover:bg-neutral-200"
                >
                  Email Me
                </a>
                <Link
                  href="https://github.com/Paulwamaria"
                  target="_blank"
                  className="inline-flex items-center rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
