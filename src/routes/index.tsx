import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import portrait from "@/assets/supreeth.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Supreeth Soundarapandiyan — Cybersecurity Portfolio" },
      {
        name: "description",
        content:
          "Supreeth Soundarapandiyan — offensive security professional and MS Cybersecurity candidate at Northeastern University. Penetration testing, red teaming, AI security.",
      },
      { property: "og:title", content: "Supreeth Soundarapandiyan — Cybersecurity Portfolio" },
      {
        property: "og:description",
        content:
          "Offensive security, red teaming, and AI security research. MS Cybersecurity @ Northeastern.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const EXPERIENCE = [
  {
    year: "Oct 2024 — Aug 2025",
    role: "Associate Consultant",
    company: "Ernst & Young LLP — Bengaluru, India",
    points: [
      "Executed red team engagements against enterprise network infrastructure, identifying misconfigurations across external-facing systems, escalating privileges to domain admin, and delivering structured remediation reports to engineering teams.",
      "Performed adversarial testing of generative AI systems — probing for prompt injection, data leakage and misuse — uncovering hidden risks and informing safer AI deployment policies.",
      "Designed 5+ phishing and impersonation campaigns, boosting awareness by 30% and driving measurable defensive improvements.",
    ],
  },
  {
    year: "Aug 2023 — Sep 2024",
    role: "Senior Analyst",
    company: "Ernst & Young LLP — Bengaluru, India",
    points: [
      "Leveraged findings from web, infrastructure, mobile and thick-client penetration tests to contribute to the firm's threat intelligence platform, helping develop new detection rules for security monitoring tools.",
      "Executed source code analysis and infrastructure security reviews on 20+ cloud-hosted applications (AWS, Azure), producing structured remediation reports supporting network modernization.",
      "Delivered security awareness training, empowering employees to recognize and counteract malicious activity.",
    ],
  },
  {
    year: "Feb 2023 — Jul 2023",
    role: "Summer Intern",
    company: "Ernst & Young LLP — Bengaluru, India",
    points: [
      "Assisted senior engineers in security assessment engagements, applying structured methodologies to document network vulnerabilities in live environments.",
      "Strengthened network security skills through HackTheBox and TryHackMe CTF competitions.",
    ],
  },
];

const EDUCATION = [
  {
    year: "Sep 2025 — May 2027",
    title: "M.S. in Cybersecurity",
    place: "Northeastern University · Khoury College of Computer Sciences — Boston, MA",
    notes: "Coursework: Network Security Practices, Decision Making in CIKR.",
  },
  {
    year: "Jul 2019 — May 2023",
    title: "B.E. in Electronics & Communication",
    place: "CMR Institute of Technology — Bengaluru, India",
    notes: "Coursework: Computer Networks, Network Security, Cryptography.",
  },
];

const PROJECTS = [
  {
    n: "01",
    title: "AI-Assisted Security Operations Center",
    tag: "Wazuh · Suricata · LLaMA 3.2",
    year: "Mar 2026",
    blurb:
      "Built a network monitoring stack on Kali with Wazuh SIEM + Suricata IDS/IPS (64,646+ detection rules). Integrated a locally-hosted LLM to autonomously triage alerts, with a SOAR engine running playbooks for IP blocking and analyst notification.",
  },
  {
    n: "02",
    title: "Hardware Pentest of a Wi-Fi Module",
    tag: "UART · SPI · JTAG · Firmware",
    year: "Jul 2023",
    blurb:
      "Identified and interfaced with UART, SPI and JTAG ports using logic analyzers and USB-to-UART converters. Analyzed firmware and system outputs to uncover vulnerabilities and gain root access.",
  },
];

const EXPERTISE = [
  "Application Security",
  "Detection Engineering",
  "SIEM & SOC Operations",
  "Incident Response",
  "Secure Code Review",
  "DevSecOps",
  "Threat Modeling",
  "Penetration Testing",
  "Red Teaming",
  "AI Security",
  "Cloud Security Posture (CSPM)",
  "Vulnerability Assessment",
];

const TOOLS = [
  "Burp Suite",
  "Metasploit",
  "Nmap",
  "Nessus",
  "Qualys",
  "Wireshark",
  "Kali Linux",
  "Splunk",
  "Wazuh",
  "AWS",
  "GCP",
  "GitHub Actions",
  "Cisco",
  "Fuzzing Tools",
];

const CERTIFICATIONS = [
  { name: "Microsoft Azure Security Engineer Associate (AZ-500)", year: "Oct 2023 — Oct 2024" },
  { name: "Microsoft Azure Fundamentals (AZ-900)", year: "Aug 2023 — Present" },
];

const CLUBS = [
  { name: "NEU Cybersecurity Club", role: "Member · Northeastern University" },
];

const RESUME_URL = "/resume/Supreeth Soundarapandiyan - Resume.docx";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <CertsClubs />
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
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              className="group text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="font-display tabular-nums text-[11px] text-foreground/40 group-hover:text-foreground/70">
                /{String(i + 1).padStart(2, "0")}
              </span>{" "}
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-background transition-all hover:bg-background hover:text-foreground"
        >
          Résumé
          <ArrowUpRight className="h-3.5 w-3.5" />
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
        <div className="col-span-12 lg:col-span-8 reveal">
          <p className="mb-8 flex items-center gap-3 font-display text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="inline-block h-px w-10 bg-foreground" />
            Portfolio · CV · Cybersecurity
          </p>
          <h1 className="font-display text-[13vw] font-medium leading-[0.88] tracking-[-0.04em] md:text-[104px] xl:text-[136px]">
            From red
            <br />
            to <span className="italic text-muted-foreground">blue</span>
            <br />
            — building
            <br />
            what I broke.
          </h1>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pt-8 reveal" style={{ animationDelay: "0.2s" }}>
          <figure className="mb-8 overflow-hidden border border-border bg-secondary">
            <img
              src={portrait}
              alt="Supreeth Soundarapandiyan, with the Taj Mahal visible in the distant background."
              loading="eager"
              className="aspect-[4/5] w-full object-cover object-[80%_30%] grayscale transition-all duration-700 hover:grayscale-0"
            />
            <figcaption className="border-t border-border px-3 py-2 font-display text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Pl. 01
            </figcaption>
          </figure>
          <p className="text-balance text-lg leading-relaxed text-foreground/80 md:text-xl">
            I'm <span className="font-medium">Supreeth Soundarapandiyan</span>. I spent two years
            on the offensive side at <span className="font-medium">EY</span> — red teaming,
            pentesting and AI security. Now at{" "}
            <span className="font-medium">Northeastern University</span> I'm pivoting toward{" "}
            <span className="font-medium">blue team</span> and{" "}
            <span className="font-medium">application security</span>, using an attacker's eye
            to build stronger defenses.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-6 font-display text-sm">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Based in</dt>
              <dd className="mt-1 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                Boston, MA
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Available</dt>
              <dd className="mt-1">May — Dec 2026</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Focus</dt>
              <dd className="mt-1">Blue Team · AppSec</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Status</dt>
              <dd className="mt-1">Open to internships</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Blue Team",
    "Application Security",
    "Detection Engineering",
    "Red Team",
    "AI Security",
    "Cloud Security",
  ];
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
        <aside className="col-span-12 lg:sticky lg:top-24 lg:col-span-3 lg:self-start">
          <SectionLabel n="01" label="About" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A short introduction — who I am, where I've been and where I'm headed.
          </p>
        </aside>
        <div className="col-span-12 lg:col-span-8 lg:col-start-5">
          <p className="font-display text-3xl font-light leading-[1.15] tracking-tight text-balance md:text-[44px] xl:text-5xl">
            My background is <span className="italic">red team</span> — two years at EY breaking
            into networks, applications and AI systems. At Northeastern I'm leaning into the other
            side of the table: <span className="italic">blue team</span> and{" "}
            <span className="italic">application security</span>, where the same attacker mindset
            is used to design defenses, harden code and catch threats earlier.
          </p>
          <div className="mt-14 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Areas of Expertise
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {EXPERTISE.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-foreground/20 px-3.5 py-1.5 text-sm text-foreground/80"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Tools & Technologies
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {TOOLS.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-foreground/20 px-3.5 py-1.5 text-sm text-foreground/80"
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

function Experience() {
  return (
    <section id="experience" className="border-b border-border bg-secondary/40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-20 md:gap-10 md:px-10 md:py-32">
        <aside className="col-span-12 lg:sticky lg:top-24 lg:col-span-3 lg:self-start">
          <SectionLabel n="02" label="Experience" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Three years at Ernst & Young — from summer intern to associate consultant on the
            offensive security team.
          </p>
        </aside>
        <div className="col-span-12 lg:col-span-9">
          <ol className="space-y-14">
            {EXPERIENCE.map((e) => (
              <li
                key={e.role + e.year}
                className="grid grid-cols-12 gap-4 border-t border-border pt-8 md:gap-8"
              >
                <div className="col-span-12 font-display text-xs uppercase tracking-[0.22em] text-muted-foreground md:col-span-3">
                  {e.year}
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                    {e.role}
                  </h3>
                  <p className="mt-1.5 text-base text-muted-foreground">{e.company}</p>
                  <ul className="mt-6 space-y-3.5 text-base leading-relaxed text-foreground/85 md:text-lg">
                    {e.points.map((p, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="mt-3 inline-block h-px w-4 flex-shrink-0 bg-foreground/50" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="mt-24 font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Education
          </h3>
          <ul className="mt-6 divide-y divide-border border-t border-border">
            {EDUCATION.map((ed) => (
              <li key={ed.title} className="py-6 md:grid md:grid-cols-12 md:items-baseline md:gap-8">
                <p className="font-display text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:col-span-3">
                  {ed.year}
                </p>
                <div className="mt-2 md:col-span-9 md:mt-0">
                  <p className="font-display text-xl leading-snug md:text-2xl">{ed.title}</p>
                  <p className="mt-1 text-base text-muted-foreground">{ed.place}</p>
                  <p className="mt-1.5 text-base text-foreground/75">{ed.notes}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-20 md:gap-10 md:px-10 md:py-32">
        <aside className="col-span-12 lg:sticky lg:top-24 lg:col-span-3 lg:self-start">
          <SectionLabel n="03" label="Projects & Research" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Selected academic and personal work in offensive and defensive security.
          </p>
        </aside>
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
              <div className="col-span-10 md:col-span-6">
                <h3 className="font-display text-3xl font-medium tracking-tight md:text-5xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/75 group-hover:text-background/75 md:text-lg">
                  {p.blurb}
                </p>
              </div>
              <div className="col-span-12 mt-3 flex flex-col gap-1 font-display text-xs uppercase tracking-[0.18em] text-muted-foreground group-hover:text-background/60 md:col-span-4 md:mt-0 md:items-end md:text-right">
                <span>{p.tag}</span>
                <span>{p.year}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CertsClubs() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-20 md:gap-10 md:px-10 md:py-28">
        <aside className="col-span-12 lg:sticky lg:top-24 lg:col-span-3 lg:self-start">
          <SectionLabel n="04" label="Certifications & Clubs" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Credentials, memberships and the communities I'm part of.
          </p>
        </aside>
        <div className="col-span-12 grid gap-12 lg:col-span-9 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Certifications
            </h3>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {CERTIFICATIONS.map((c) => (
                <li key={c.name} className="py-5">
                  <p className="font-display text-lg leading-snug">{c.name}</p>
                  <p className="mt-1.5 font-display text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {c.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Clubs
            </h3>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {CLUBS.map((c) => (
                <li key={c.name} className="py-5">
                  <p className="font-display text-lg leading-snug">{c.name}</p>
                  <p className="mt-1.5 text-base text-muted-foreground">{c.role}</p>
                </li>
              ))}
            </ul>
          </div>
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
            05 — Contact
          </p>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <h2 className="font-display text-[10vw] font-medium leading-[0.9] tracking-[-0.03em] md:text-7xl xl:text-8xl">
            Let's talk
            <br />
            security.
          </h2>
          <a
            href="mailto:Soundarapandiyan.s@northeastern.edu"
            className="group mt-10 inline-flex items-center gap-3 border-b border-background/40 pb-2 font-display text-xl tracking-tight transition-colors hover:border-background md:text-3xl"
          >
            <Mail className="h-6 w-6" />
            Soundarapandiyan.s@northeastern.edu
            <ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <p className="mt-6 flex items-center gap-3 font-display text-base text-background/70">
            <Phone className="h-4 w-4" />
            +1 (617) 290-3666
          </p>
          <div className="mt-16 grid gap-8 border-t border-background/20 pt-8 md:grid-cols-3">
            <Social
              label="LinkedIn"
              href="https://www.linkedin.com/in/supreeth-soundarapandiyan-2a0a42253/"
              handle="/in/supreeth-soundarapandiyan"
            />
            <Social label="GitHub" href="https://github.com/Hax0023/" handle="@Hax0023" />
            <Social
              label="Résumé"
              href={RESUME_URL}
              handle="Download .docx"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Social({ label, handle, href }: { label: string; handle: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between border-b border-background/20 pb-3"
    >
      <div>
        <p className="font-display text-[10px] uppercase tracking-[0.22em] text-background/60">{label}</p>
        <p className="mt-1 font-display text-base">{handle}</p>
      </div>
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background/60">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 border-t border-background/15 px-6 py-6 font-display text-[11px] uppercase tracking-[0.22em] md:px-10">
        <p>© 2026 — Supreeth Soundarapandiyan</p>
        <p>Boston, MA</p>
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
