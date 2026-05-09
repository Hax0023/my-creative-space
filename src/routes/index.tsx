import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Supreeth — Portfolio & CV" },
      {
        name: "description",
        content:
          "Supreeth's personal portfolio and curriculum vitae — selected work, experience, education, and contact.",
      },
      { property: "og:title", content: "Supreeth — Portfolio & CV" },
      {
        property: "og:description",
        content: "Selected work, experience, and a full CV.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const EXPERIENCE = [
  {
    year: "2023 — Now",
    role: "Senior Product Engineer",
    company: "Independent",
    summary:
      "Designing and shipping end-to-end products for early stage teams. Focus on interface, systems and motion.",
  },
  {
    year: "2021 — 2023",
    role: "Product Designer & Developer",
    company: "Studio Practice",
    summary:
      "Led design and front-end across web platforms, brand systems and editorial sites for global clients.",
  },
  {
    year: "2019 — 2021",
    role: "UI Engineer",
    company: "Early-stage Startups",
    summary:
      "Built design systems, dashboards and customer-facing surfaces from zero to one.",
  },
];

const EDUCATION = [
  { year: "2015 — 2019", title: "B.E. Computer Science", place: "University" },
  { year: "2024", title: "Advanced Interaction Design", place: "Self-directed" },
];

const SKILLS = [
  "Product Design",
  "Design Systems",
  "React / TypeScript",
  "Motion",
  "Brand & Identity",
  "Prototyping",
  "Editorial Layout",
  "Creative Direction",
];

const PROJECTS = [
  {
    n: "01",
    title: "Halcyon",
    tag: "Brand · Web",
    year: "2025",
    blurb: "Identity and marketing site for a calm-focused productivity tool.",
  },
  {
    n: "02",
    title: "Atlas Capital",
    tag: "Product · Dashboard",
    year: "2024",
    blurb: "An analytics surface for a private investment platform.",
  },
  {
    n: "03",
    title: "Field Notes",
    tag: "Editorial · Magazine",
    year: "2024",
    blurb: "A long-form publication exploring the craft of software.",
  },
  {
    n: "04",
    title: "Northwind OS",
    tag: "Design System",
    year: "2023",
    blurb: "Tokens, primitives and patterns for a fast-moving fintech.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="font-display text-base font-semibold tracking-tight">
          Supreeth<span className="text-muted-foreground">.</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="font-display tabular-nums text-[11px] text-foreground/40 group-hover:text-foreground/70">
                /{String(NAV.indexOf(n) + 1).padStart(2, "0")}
              </span>{" "}
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-background transition-all hover:bg-background hover:text-foreground"
        >
          Available
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-background opacity-75 group-hover:bg-foreground" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-background group-hover:bg-foreground" />
          </span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grain opacity-60" />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 pb-16 pt-20 md:gap-10 md:px-10 md:pb-28 md:pt-28">
        {/* Asymmetric: Left 7 cols title, Right 4 cols meta, offset 1 */}
        <div className="col-span-12 lg:col-span-7 reveal">
          <p className="mb-8 flex items-center gap-3 font-display text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="inline-block h-px w-10 bg-foreground" />
            Portfolio · CV · MMXXVI
          </p>
          <h1 className="font-display text-[14vw] font-medium leading-[0.88] tracking-[-0.04em] md:text-[112px] xl:text-[152px]">
            Designing
            <br />
            <span className="italic text-muted-foreground">quiet</span> software
            <br />
            with intent.
          </h1>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pt-8 reveal" style={{ animationDelay: "0.2s" }}>
          <p className="text-balance text-lg leading-relaxed text-foreground/80 md:text-xl">
            I'm <span className="font-medium">Supreeth</span> — a product designer and engineer.
            For the last seven years I've been building considered
            interfaces for ambitious teams.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-6 font-display text-sm">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Based in</dt>
              <dd className="mt-1 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                Bengaluru, IN
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Status</dt>
              <dd className="mt-1">Open to new work</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Focus</dt>
              <dd className="mt-1">Product · Brand · Web</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Years</dt>
              <dd className="mt-1 tabular-nums">7+</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Product Design", "Brand Systems", "Editorial Web", "Motion", "Front-end", "Creative Direction"];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-b border-border bg-foreground py-6 text-background">
      <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-2xl uppercase tracking-tight md:text-4xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="text-background/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-20 md:gap-10 md:px-10 md:py-32">
        <div className="col-span-12 lg:col-span-3">
          <SectionLabel n="01" label="About" />
        </div>
        <div className="col-span-12 lg:col-span-7 lg:col-start-5">
          <p className="font-display text-2xl font-light leading-snug tracking-tight text-balance md:text-4xl">
            I make small, sharp things — interfaces, systems and the type that holds them together.
            I care about the quiet details: rhythm, restraint, the way a page breathes.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Practice
              </h3>
              <p className="mt-3 leading-relaxed text-foreground/80">
                Working independently with founders and teams who care about craft.
                Equally at home in Figma and a code editor.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Skills
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-foreground/20 px-3 py-1 text-xs text-foreground/80"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-20 md:gap-10 md:px-10 md:py-32">
        <div className="col-span-12 lg:col-span-3">
          <SectionLabel n="02" label="Selected Work" />
          <p className="mt-6 max-w-xs text-sm text-muted-foreground">
            A small selection of recent projects. Full case studies on request.
          </p>
        </div>
        <ul className="col-span-12 lg:col-span-9">
          {PROJECTS.map((p, i) => (
            <li
              key={p.n}
              className={`group grid grid-cols-12 items-baseline gap-4 border-t border-border py-8 transition-colors hover:bg-foreground hover:text-background md:py-10 ${
                i === PROJECTS.length - 1 ? "border-b" : ""
              } ${i % 2 === 1 ? "lg:pl-16" : ""}`}
            >
              <span className="col-span-2 font-display text-xs tabular-nums text-muted-foreground group-hover:text-background/60 md:text-sm">
                {p.n}
              </span>
              <div className="col-span-10 md:col-span-5">
                <h3 className="font-display text-3xl font-medium tracking-tight md:text-5xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70 group-hover:text-background/70 md:hidden">
                  {p.blurb}
                </p>
              </div>
              <p className="hidden text-sm text-foreground/70 group-hover:text-background/70 md:col-span-3 md:block">
                {p.blurb}
              </p>
              <div className="hidden font-display text-xs uppercase tracking-[0.18em] text-muted-foreground group-hover:text-background/60 md:col-span-1 md:block">
                {p.year}
              </div>
              <div className="col-span-12 mt-3 flex items-center justify-between text-xs text-muted-foreground group-hover:text-background/60 md:col-span-1 md:mt-0 md:justify-end">
                <span className="font-display uppercase tracking-[0.18em] md:hidden">
                  {p.tag}
                </span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-b border-border bg-secondary/40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-20 md:gap-10 md:px-10 md:py-32">
        <div className="col-span-12 lg:col-span-3">
          <SectionLabel n="03" label="Experience" />
        </div>
        <div className="col-span-12 lg:col-span-9">
          <ol className="space-y-12">
            {EXPERIENCE.map((e) => (
              <li
                key={e.role}
                className="grid grid-cols-12 gap-4 border-t border-border pt-6 md:gap-8"
              >
                <div className="col-span-12 font-display text-xs uppercase tracking-[0.22em] text-muted-foreground md:col-span-3">
                  {e.year}
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                    {e.role}
                    <span className="text-muted-foreground"> — {e.company}</span>
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-foreground/80">
                    {e.summary}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="mt-20 font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Education
          </h3>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {EDUCATION.map((ed) => (
              <li key={ed.title} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
                <div>
                  <p className="font-display text-lg">{ed.title}</p>
                  <p className="text-sm text-muted-foreground">{ed.place}</p>
                </div>
                <p className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {ed.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-foreground text-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-24 md:gap-10 md:px-10 md:py-40">
        <div className="col-span-12 lg:col-span-3">
          <p className="flex items-center gap-3 font-display text-[11px] uppercase tracking-[0.28em] text-background/60">
            <span className="inline-block h-px w-10 bg-background/60" />
            04 — Contact
          </p>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <h2 className="font-display text-[10vw] font-medium leading-[0.9] tracking-[-0.03em] md:text-7xl xl:text-8xl">
            Have a project
            <br />
            in mind?
          </h2>
          <a
            href="mailto:hello@supreeth.dev"
            className="group mt-10 inline-flex items-center gap-3 border-b border-background/40 pb-2 font-display text-2xl tracking-tight transition-colors hover:border-background md:text-4xl"
          >
            <Mail className="h-6 w-6" />
            hello@supreeth.dev
            <ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <div className="mt-16 grid gap-8 border-t border-background/20 pt-8 md:grid-cols-3">
            <Social label="LinkedIn" href="#" handle="/in/supreeth" />
            <Social label="GitHub" href="#" handle="@supreeth" />
            <Social label="Twitter" href="#" handle="@supreeth" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Social({ label, handle, href }: { label: string; handle: string; href: string }) {
  return (
    <a href={href} className="group flex items-center justify-between border-b border-background/20 pb-3">
      <div>
        <p className="font-display text-[10px] uppercase tracking-[0.22em] text-background/60">{label}</p>
        <p className="mt-1 font-display text-lg">{handle}</p>
      </div>
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background/60">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 border-t border-background/15 px-6 py-6 font-display text-[11px] uppercase tracking-[0.22em] md:px-10">
        <p>© MMXXVI — Supreeth</p>
        <p>Designed & built in Bengaluru</p>
        <a href="#" className="hover:text-background">Back to top ↑</a>
      </div>
    </footer>
  );
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <p className="flex items-center gap-3 font-display text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
      <span className="inline-block h-px w-10 bg-foreground" />
      {n} — {label}
    </p>
  );
}
