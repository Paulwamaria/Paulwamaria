import Link from "next/link";
import { ArrowLeft} from "lucide-react";
import AnimatedCaseStudy from "./AnimatedCaseStudy";

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
    insight?: string;
    step?: {
      title: string;
      description?: string;
    };
    architecture?: {
      title: string;
      description?: string;
    }[];

    flow?: {
      title: string;
      description?: string;
    }[];
    screenshots?: {
      image: string;
      title: string;
      description: string;
    }[];
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
      "JWT",
      "Socket.IO",
    ],
    architecture: [
      {
        title: "Next.js Frontend",
        description:
          "Handles the user interface, onboarding, discovery, profiles, and client-side product experience.",
      },
      {
        title: "NestJS API",
        description:
          "Provides structured backend services for authentication, users, matching, moderation, and platform workflows.",
      },
      {
        title: "Prisma ORM",
        description:
          "Manages typed database access and keeps backend models aligned with the PostgreSQL schema.",
      },
      {
        title: "PostgreSQL Database",
        description:
          "Stores users, profiles, matches, messages, verification states, and platform activity.",
      },
      {
        title: "Socket.IO Gateway",
        description:
          "Powers real-time communication, messaging, typing indicators, and live interaction flows.",
      },
    ],

    flow: [
      {
        title: "User Registration",
        description:
          "A user creates an account and enters the platform through structured onboarding.",
      },
      {
        title: "Verification",
        description:
          "Trust-building flows help support safer and more intentional user interaction.",
      },
      {
        title: "Profile Setup",
        description:
          "Users complete profile information that supports matching and discovery.",
      },
      {
        title: "Matching",
        description:
          "The platform connects users through structured discovery and intentional interaction flows.",
      },
      {
        title: "Real-Time Messaging",
        description:
          "Matched users communicate through live messaging powered by Socket.IO.",
      },
    ],

    challenges: [
      "Designing real-time communication workflows",
      "Structuring backend services for scalability",
      "Managing relational data with Prisma",
      "Balancing product design with technical implementation",
    ],
    screenshots: [
      {
        image: "/projects/tulia-auth.png",
        title: "Authentication",
        description:
          "Secure onboarding designed to establish trust from the first interaction.",
      },
      {
        image: "/projects/tulia-discover.png",
        title: "Discovery",
        description:
          "Structured matching focused on intentional and meaningful connections.",
      },
      {
        image: "/projects/tulia-chat.png",
        title: "Real-Time Messaging",
        description:
          "Live conversations powered by Socket.IO for seamless communication.",
      },
    ],

    outcome:
      "Tulia demonstrates my ability to build a real-time full-stack product from the ground up, combining frontend UX, backend architecture, database design, and live communication systems into a cohesive platform.",

    live: "https://growwithtulia.com",
    code: "/code-access?project=tulia",
    privateCode: true,
  },
  nexapos: {
    title: "NexaPOS",
    category: "Multi-Branch Point of Sale System",
    heroImage: "/projects/nexapos.png",
    overview:
      "NexaPOS is a business-focused point-of-sale system designed to support multi-branch retail operations through inventory tracking, sales processing, returns, cash shifts, role-based access, and audit logging.",
    problem:
      "Retail businesses often struggle with disconnected sales records, weak inventory visibility, poor accountability, and manual operational workflows. The challenge was to design a system that could support daily retail activity while keeping branch-level data structured and traceable.",
    solution:
      "I built NexaPOS as a backend-driven business system using Django and Django REST Framework, focusing on inventory control, sales workflows, returns, user roles, branch stock movement, audit logs, and operational reporting.",
    features: [
      "Multi-branch inventory management",
      "Sales and sale item processing",
      "Sale returns workflow",
      "Cash shift opening and closing",
      "Role-based access control",
      "Audit logging and activity tracking",
      "Low-stock monitoring",
    ],
    stack: [
      "Django",
      "Django REST Framework",
      "Nextjs",
      "JWT",
      "SQLite",
      "PostgreSQL-ready",
    ],
    architecture: [
      {
        title: "Client / API Consumer",
        description:
          "Frontend, admin dashboard, or API client interacts with the POS system through REST endpoints.",
      },
      {
        title: "Django REST API",
        description:
          "Handles authentication, validation, business rules, and exposes endpoints for inventory, sales, returns, shifts, and reports.",
      },
      {
        title: "Role-Based Access Layer",
        description:
          "Controls access for superadmin, admin, storekeeper, and cashier roles across branch-level operations.",
      },
      {
        title: "Business Workflow Services",
        description:
          "Coordinates core POS workflows including stock movement, sales processing, returns, cash shifts, and audit events.",
      },
      {
        title: "Data Layer",
        description:
          "Stores branches, products, branch stock, sales, sale items, returns, cash shifts, customers, users, and audit logs.",
      },
      {
        title: "Reporting & Audit Trail",
        description:
          "Provides traceability for business-critical actions, low-stock monitoring, sales history, and operational accountability.",
      },
    ],
    flow: [
      {
        title: "Open Cash Shift",
        description:
          "Cashier starts a working session to track sales activity and accountability.",
      },
      {
        title: "Process Sale",
        description:
          "System records sale items, customer type, payment details, and totals.",
      },
      {
        title: "Update Branch Stock",
        description:
          "Inventory is reduced at branch level after each completed sale.",
      },
      {
        title: "Handle Returns",
        description:
          "Returned items are tracked and linked back to the original sale workflow.",
      },
      {
        title: "Write Audit Log",
        description:
          "Critical actions are recorded to support traceability and operational oversight.",
      },
    ],
    challenges: [
      "Designing clean workflows for sales, returns, and branch stock movement",
      "Handling role-based access across superadmin, admin, storekeeper, and cashier users",
      "Maintaining traceable audit logs for critical business operations",
      "Structuring APIs for real-world POS testing and future frontend integration",
    ],
    screenshots: [
      {
        image: "/projects/nexapos-sales.png",
        title: "Sales Processing",
        description:
          "Fast checkout workflows designed for everyday retail operations.",
      },
      {
        image: "/projects/nexapos-stock.png",
        title: "Inventory Management",
        description:
          "Real-time visibility into stock levels across multiple branches.",
      },
      {
        image: "/projects/nexapos-audit.png",
        title: "Audit Trail",
        description:
          "Operational transparency through structured activity logging.",
      },
    ],
    outcome:
      "NexaPOS demonstrates my ability to build practical business-critical systems involving transactions, permissions, inventory, auditability, and operational workflows.",
    live: "https://github.com/Paulwamaria/nexaPOS",
    code: "https://github.com/Paulwamaria/nexaPOS",
    privateCode: false,
  },
  serverFleet: {
    title: "Server Fleet Monitor",
    category: "Infrastructure Monitoring Platform",
    heroImage: "/projects/server-fleet.png",

    overview:
      "Server Fleet Monitor is an infrastructure observability platform designed to help teams monitor server health, track performance metrics, define alert rules, and maintain operational visibility across distributed environments.",

    problem:
      "As infrastructure grows, teams struggle to maintain visibility into server health, performance degradation, stale metrics, and operational incidents. The challenge was to build a system that centralizes monitoring data and enables proactive issue detection before outages impact users.",

    solution:
      "I designed and implemented a full-stack monitoring platform using NestJS and Next.js. The system provides server inventory management, metrics visualization, configurable alerting rules, activity tracking, and historical analysis through a clean operational dashboard.",

    features: [
      "Server inventory management",
      "Health status monitoring",
      "CPU, memory, and disk metric tracking",
      "Historical metrics visualization",
      "Custom alert rule creation",
      "Alert acknowledgment and dismissal",
      "Activity and audit logging",
      "Filtering and pagination",
      "Infrastructure simulation workflows",
    ],

    stack: [
      "NestJS",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "Docker",
    ],

    challenges: [
      "Designing extensible alert workflows that support future metric types.",
      "Balancing backend efficiency with dashboard responsiveness.",
      "Structuring historical metric data for visualization and analysis.",
      "Maintaining traceable operational activity across user actions.",
      "Implementing realistic monitoring workflows without direct infrastructure integrations.",
    ],

    outcome:
      "Server Fleet Monitor demonstrates my ability to build operational systems that support observability, incident response, and infrastructure decision-making. It highlights backend architecture skills, data modeling, and the ability to translate technical workflows into usable interfaces.",

    architecture: [
      {
        title: "Next.js Dashboard",
        description:
          "Provides operators with visibility into server health, alerts, metrics, and activity history.",
      },
      {
        title: "NestJS API Layer",
        description:
          "Coordinates monitoring workflows, alert management, server operations, and dashboard interactions.",
      },
      {
        title: "Prisma ORM",
        description:
          "Provides strongly typed access to the database and simplifies schema evolution.",
      },
      {
        title: "PostgreSQL Database",
        description:
          "Stores servers, metric snapshots, alert rules, alerts, and activity records.",
      },
      {
        title: "Monitoring Engine",
        description:
          "Evaluates incoming metrics, detects stale conditions, and triggers alert workflows.",
      },
      {
        title: "Audit & Activity Layer",
        description:
          "Captures operational events to improve accountability and troubleshooting.",
      },
    ],

    flow: [
      {
        title: "Register Server",
        description:
          "Infrastructure assets are added to the monitoring inventory.",
      },
      {
        title: "Capture Metrics",
        description:
          "Metric snapshots are collected and persisted for analysis.",
      },
      {
        title: "Evaluate Rules",
        description:
          "Alert conditions are checked against incoming monitoring data.",
      },
      {
        title: "Trigger Alerts",
        description:
          "Incidents are surfaced when thresholds or stale conditions are detected.",
      },
      {
        title: "Operator Response",
        description:
          "Teams acknowledge, investigate, and dismiss alerts while maintaining operational records.",
      },
      {
        title: "Audit Activity",
        description:
          "All significant actions are logged to support traceability.",
      },
    ],

    screenshots: [
      {
        image: "/projects/server-dashboard.png",
        title: "Operations Dashboard",
        description:
          "A centralized view of server health, alerts, and infrastructure status.",
      },
      {
        image: "/projects/server-metrics.png",
        title: "Metrics Visualization",
        description:
          "Historical performance charts help identify trends and anomalies.",
      },
      {
        image: "/projects/server-alerts.png",
        title: "Alert Management",
        description:
          "Operators can acknowledge, investigate, and resolve incidents efficiently.",
      },
    ],

    insight:
      "Monitoring is not just about collecting metrics. The real value lies in transforming operational data into actionable insights that enable teams to respond quickly, maintain reliability, and build trust in their systems.",

    live: "/code-access?project=serverFleet",
    code: "/code-access?project=serverFleet",
    privateCode: true,
  },
  carenne: {
    title: "Carenne Fashion House",
    category: "Luxury E-commerce Platform",
    heroImage: "/projects/carenne.png",

    overview:
      "Carenne Fashion House is a luxury fashion e-commerce platform built to combine premium brand presentation with scalable commerce workflows. The platform supports elegant product browsing, backend-driven product management, and customer-facing shopping experiences designed around trust, style, and usability.",

    problem:
      "Fashion brands need more than a basic online store. They need a digital experience that reflects brand identity, presents products beautifully, and supports real business workflows such as product management, customer inquiries, reservations, and future made-to-measure operations. The challenge was to balance visual elegance with a maintainable full-stack architecture.",

    solution:
      "I built Carenne as a full-stack commerce platform using Next.js for the frontend and Django REST Framework for the backend. The frontend focuses on luxury presentation, responsive browsing, and clean product discovery, while the backend provides structured APIs for products, categories, media, reservations, and scalable business workflows.",

    features: [
      "Luxury-focused storefront experience",
      "Responsive product browsing",
      "Dynamic product catalog",
      "Product detail pages",
      "Reservation and inquiry workflows",
      "Backend-driven product management",
      "API-based frontend/backend integration",
      "Scalable structure for future commerce features",
    ],

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Docker",
    ],

    challenges: [
      "Balancing premium visual design with clean technical architecture",
      "Structuring product and media data for flexible presentation",
      "Designing API workflows that support both storefront and admin needs",
      "Maintaining responsiveness across mobile and desktop layouts",
      "Creating a commerce experience that feels elegant without becoming complex for users",
    ],

    outcome:
      "Carenne demonstrates my ability to build business-ready commerce platforms that combine frontend polish, backend structure, database modeling, and real deployment workflows. The result is a premium online presence that supports brand identity and future growth.",

    architecture: [
      {
        title: "Next.js Frontend",
        description:
          "Delivers the storefront experience, product browsing, responsive layouts, and customer-facing pages.",
      },
      {
        title: "Django REST API",
        description:
          "Provides backend endpoints for product data, categories, reservations, and commerce workflows.",
      },
      {
        title: "PostgreSQL Database",
        description:
          "Stores products, categories, media references, customer interactions, and business data.",
      },
      {
        title: "Media & Product Assets",
        description:
          "Supports structured product imagery and visual presentation required for a fashion brand.",
      },
      {
        title: "Deployment Layer",
        description:
          "Frontend and backend are deployed separately, allowing independent scaling and maintenance.",
      },
    ],

    flow: [
      {
        title: "Browse Storefront",
        description:
          "Visitors land on a polished storefront designed to communicate brand identity and product quality.",
      },
      {
        title: "Explore Products",
        description:
          "Users browse product categories and view structured product information from the backend.",
      },
      {
        title: "View Product Details",
        description:
          "Product pages present images, descriptions, and relevant purchase or inquiry options.",
      },
      {
        title: "Reserve / Inquire",
        description:
          "Customers can express interest through reservation or inquiry workflows.",
      },
      {
        title: "Backend Management",
        description:
          "Product and business data can be managed through backend workflows, supporting operational control.",
      },
    ],

    screenshots: [
      {
        image: "/projects/carenne-home.png",
        title: "Luxury Storefront",
        description:
          "A polished homepage designed to communicate elegance, trust, and brand identity.",
      },
      {
        image: "/projects/carenne-products.png",
        title: "Product Browsing",
        description:
          "A structured catalog experience that helps users explore fashion items clearly.",
      },
      {
        image: "/projects/carenne-product-detail.png",
        title: "Product Detail",
        description:
          "A focused product view designed around imagery, description, and customer action.",
      },
    ],

    insight:
      "Premium e-commerce is not only about displaying products; it is about translating brand identity into a digital system that remains elegant for customers and manageable for the business.",

    live: "https://carennedesigns.com",
    code: "/code-access?project=carenne",
    privateCode: true,
  },
  pembeMachinery: {
    title: "Pembe Machinery",
    category: "Full-Stack Business Platform",
    heroImage: "/projects/pembe-home.png",

    overview:
      "Pembe Machinery is a full-stack platform designed to help machinery businesses manage their product catalog, media assets, and customer-facing content through a scalable and maintainable architecture.",

    problem:
      "Many machinery businesses rely on static websites that make updating products and content difficult. The challenge was to build a platform that gives businesses control over their digital presence while maintaining a professional browsing experience for customers.",

    solution:
      "I developed Pembe Machinery using Next.js and Prisma to provide a modern frontend experience backed by structured data management. The system supports product administration, media management, and scalable content workflows that simplify ongoing updates.",

    features: [
      "Product catalog management",
      "Media upload and organization",
      "Dynamic product detail pages",
      "Responsive customer-facing interface",
      "Admin workflows for content updates",
      "Database-driven product management",
      "Scalable architecture for future enhancements",
    ],

    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],

    challenges: [
      "Designing a flexible product structure capable of supporting diverse machinery listings.",
      "Managing media assets while maintaining a clean browsing experience.",
      "Balancing simplicity for administrators with a polished customer interface.",
      "Building an architecture that supports future growth and feature expansion.",
    ],

    outcome:
      "Pembe Machinery demonstrates my ability to architect complete business platforms, combining frontend experiences with backend-driven workflows and maintainable database structures.",

    architecture: [
      {
        title: "Next.js Frontend",
        description:
          "Provides responsive product browsing and customer-facing experiences.",
      },
      {
        title: "Prisma ORM",
        description:
          "Acts as the bridge between application logic and the database using strongly typed models.",
      },
      {
        title: "PostgreSQL Database",
        description: "Stores products, media references, and business content.",
      },
      {
        title: "Content Management Layer",
        description:
          "Supports product updates, media organization, and administrative workflows.",
      },
      {
        title: "Presentation Layer",
        description:
          "Transforms structured business data into an accessible customer experience.",
      },
    ],

    flow: [
      {
        title: "Manage Products",
        description: "Administrators create and maintain machinery listings.",
      },
      {
        title: "Upload Media",
        description:
          "Product images and supporting assets are organized and attached to listings.",
      },
      {
        title: "Publish Content",
        description:
          "Updated product information becomes available to customers.",
      },
      {
        title: "Customer Exploration",
        description:
          "Visitors browse machinery categories and view detailed product information.",
      },
      {
        title: "Business Growth",
        description:
          "The platform provides a scalable foundation for expanding digital operations.",
      },
    ],

    screenshots: [
      {
        image: "/projects/pembe-home.png",
        title: "Homepage",
        description:
          "A professional landing experience designed to establish trust and showcase offerings.",
      },
      {
        image: "/projects/pembe-products.png",
        title: "Product Catalog",
        description:
          "Structured listings that make it easy for customers to explore machinery options.",
      },
      {
        image: "/projects/pembe-admin.png",
        title: "Content Management",
        description:
          "Administrative workflows that simplify product and media updates.",
      },
    ],

    insight:
      "Business platforms succeed when they empower both customers and administrators. Building maintainable workflows behind the scenes is just as important as creating polished user experiences.",

    live: "https://github.com/Paulwamaria/PembeMachinery",
    code: "https://github.com/Paulwamaria/PembeMachinery",
    privateCode: false,
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
  onGeo: {
  title: "On-Geo Manager",
  category: "Geospatial Access & Attendance Platform",
  heroImage: "/projects/ongeo.png",

  overview:
    "On-Geo Manager is a geospatial web application designed to connect members of an organisation while controlling access to information and attendance workflows using geographic location. The system verifies whether users are physically present within configured checkpoints before granting access or recording attendance.",

  problem:
    "Traditional attendance systems often rely on manual verification or trust-based reporting. Organisations needed a more reliable approach that could confirm physical presence and restrict access to selected resources based on geographic location.",

  solution:
    "I built On-Geo Manager using Django and GeoDjango with PostGIS to enable spatial verification workflows. The application compares a user's coordinates against predefined checkpoints to determine eligibility for attendance and access to organisation resources.",

  features: [
    "User registration and profile management",
    "Location-aware attendance verification",
    "Geographic checkpoint configuration",
    "Distance and proximity validation",
    "Location-based access control",
    "Administrative attendance management",
    "Organisation content visibility controls",
  ],

  stack: [
    "Python",
    "Django 4.2",
    "GeoDjango",
    "PostGIS",
    "PostgreSQL",
    "Bootstrap",
    "JavaScript",
  ],

  challenges: [
    "Working with spatial data and geospatial concepts unfamiliar to many web applications.",
    "Configuring GeoDjango alongside PostGIS-enabled PostgreSQL environments.",
    "Designing workflows that accurately determine whether users fall within defined geographic boundaries.",
    "Balancing usability with strict location-based validation rules.",
  ],

  outcome:
    "On-Geo Manager demonstrates my ability to adapt software engineering principles to geospatial domains, leveraging spatial databases and geographic computations to solve real-world organisational problems.",

  architecture: [
    {
      title: "Django Frontend",
      description:
        "Provides user interfaces for attendance, profile management, and organisational workflows.",
    },
    {
      title: "GeoDjango Layer",
      description:
        "Handles geographic calculations and spatial operations required for location verification.",
    },
    {
      title: "PostGIS Database",
      description:
        "Extends PostgreSQL with spatial capabilities for storing and querying geographic information.",
    },
    {
      title: "Attendance Engine",
      description:
        "Compares user locations against configured checkpoints to determine attendance eligibility.",
    },
    {
      title: "Access Control Layer",
      description:
        "Restricts organisational resources based on geographic validation outcomes.",
    },
  ],

  flow: [
    {
      title: "User Authentication",
      description:
        "Members sign in and access their organisational workspace.",
    },
    {
      title: "Location Capture",
      description:
        "The system obtains the user's current geographic coordinates.",
    },
    {
      title: "Checkpoint Validation",
      description:
        "User coordinates are compared against configured geographic checkpoints.",
    },
    {
      title: "Attendance Decision",
      description:
        "Attendance is recorded if the user falls within the permitted range.",
    },
    {
      title: "Access Determination",
      description:
        "Resources are either granted or restricted based on validation results.",
    },
  ],

  screenshots: [
    {
      image: "/projects/ongeo.png",
      title: "Organisation Dashboard",
      description:
        "A central workspace connecting users with location-aware organisational workflows.",
    },
    {
      image: "/projects/ongeo-attendance.png",
      title: "Attendance Verification",
      description:
        "Attendance is automatically validated using geographic checkpoints.",
    },
    {
      image: "/projects/ongeo-admin.png",
      title: "Administrative Controls",
      description:
        "Administrators configure checkpoints and manage attendance visibility.",
    },
  ],

  insight:
    "Location data becomes powerful when it supports trust and accountability. By combining spatial databases with business workflows, organisations can move beyond manual verification and build systems rooted in real-world context.",

  live: "https://github.com/Paulwamaria/On-Geo",
  code: "https://github.com/Paulwamaria/On-Geo",
  privateCode: false,
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

  const relatedProjects = Object.entries(projectData)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, item]) => ({
      slug: key,
      title: item.title,
      category: item.category,
    }));

  return (
    <AnimatedCaseStudy
      project={project}
      slug={slug}
      relatedProjects={relatedProjects}
    />
  );
}
