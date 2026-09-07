import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Code2 } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { useHashScroll } from "@/hooks/use-hash-scroll";
import { scrollToHash } from "@/lib/scroll-to-hash";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vektara — Senior Engineering Studio for Global Teams" },
      {
        name: "description",
        content:
          "Vektara builds production-grade software for international teams: React, Next.js, Node.js, Laravel and Python, engineered to specification.",
      },
      { property: "og:title", content: "Vektara — Senior Engineering Studio" },
      {
        property: "og:description",
        content:
          "React, Next.js, Node.js, Laravel and Python builds for ambitious international product teams.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stacks = [
  {
    tag: "JS / TS",
    n: "01",
    title: "Front-end & full-stack JS",
    body: "React, Next.js, Node.js and TypeScript — real-time interfaces, dashboards and BFFs that scale.",
    chips: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    tag: "PHP",
    n: "02",
    title: "PHP & Laravel",
    body: "Laravel APIs, multi-tenant SaaS and legacy modernisation — dependable back-ends with clean boundaries.",
    chips: ["Laravel", "PHP 8", "MySQL"],
  },
  {
    tag: "Python",
    n: "03",
    title: "Python & data platforms",
    body: "FastAPI services, ML pipelines and data tooling — the analytical spine behind product decisions.",
    chips: ["FastAPI", "Django", "DuckDB"],
  },
];

const passes = [
  {
    n: "01",
    title: "Intake & scope",
    body: "We map the domain, constraints and success metrics before a single line is written.",
    dot: "bg-primary",
  },
  {
    n: "02",
    title: "Architecture",
    body: "A reviewed system design with explicit seams, so teams can extend it later.",
    dot: "bg-steel",
  },
  {
    n: "03",
    title: "Build & integrate",
    body: "Weekly shippable increments, CI-gated, with a shared feature backlog.",
    dot: "bg-steel",
  },
  {
    n: "04",
    title: "Handoff & run",
    body: "Documented, monitored and supported — with your team trained to own it.",
    dot: "bg-foreground",
  },
];

const proof = [
  {
    meta: "Payments · 2023",
    title: "Checkout rebuild",
    body: "Rebuilt a fragmented payments flow on a Next.js + Node.js core for a fintech scaling across 9 markets.",
    metric: "−41%",
    label: "Checkout time",
    weeks: "12 wk",
  },
  {
    meta: "Retail · 2024",
    title: "Laravel storefront",
    body: "A multi-tenant headless storefront on Laravel serving 40+ storefronts with a shared data layer.",
    metric: "3.2×",
    label: "Carts / month",
    weeks: "16 wk",
  },
  {
    meta: "Logistics · 2024",
    title: "Routing intelligence",
    body: "A Python optimization service that re-plans last-mile routes in real time for a European carrier.",
    metric: "−28%",
    label: "Fuel cost",
    weeks: "10 wk",
  },
];

const bars = [
  { label: "Uptime", value: "99.98%", w: "98%" },
  { label: "Median latency", value: "28 ms", w: "62%" },
  { label: "Deploy frequency", value: "Weekly", w: "80%" },
];

function Index() {
  useHashScroll();

  return (
    <div className="min-h-screen metal-bg text-foreground font-body antialiased selection:bg-primary/20">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-6">
        <section className="relative grid grid-cols-1 gap-12 overflow-hidden pt-16 pb-24 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pt-24">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-primary [animation:rise_700ms_var(--ease-machined)_both]">
              <span className="size-1.5 rounded-full bg-primary animate-pulse-ring" />
              Senior engineering studio · EST 2026
            </div>
            <h1 className="mt-7 max-w-[15ch] font-display text-5xl font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl [animation:rise_750ms_var(--ease-machined)_120ms_both]">
              Software engineered for your <span className="text-primary">next market.</span>
            </h1>
            <p className="mt-7 max-w-[48ch] text-lg leading-8 text-pretty text-muted [animation:rise_750ms_var(--ease-machined)_260ms_both]">
              We design, build and ship the platforms ambitious international teams depend on —
              from React and Next.js front-ends to Laravel and Python back-ends, assembled to
              specification.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3 [animation:rise_800ms_var(--ease-machined)_400ms_both]">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
              >
                Book an engineering audit
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                to="/"
                hash="work"
                onClick={() => scrollToHash("work")}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/50 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
              >
                See the work
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted [animation:rise_800ms_var(--ease-machined)_520ms_both]">
              <span>React</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>Laravel</span>
              <span>Python</span>
              <span>TypeScript</span>
            </div>
          </div>
          <div className="relative py-6 lg:col-span-5">
            <div className="pointer-events-none absolute inset-4 animate-machine rounded-full border border-primary/15" />
            <div className="pointer-events-none absolute inset-10 animate-orbit rounded-full border border-dashed border-steel/30" />
            <div className="relative overflow-hidden rounded-lg plate p-1.5 shadow-[var(--shadow-float)] ring-1 ring-foreground/10 [animation:rise_800ms_var(--ease-machined)_320ms_both]">
              <div className="pointer-events-none absolute inset-y-0 w-1/3 animate-sheen bg-gradient-to-r from-transparent via-background/60 to-transparent" />
              <div className="technical-grid relative overflow-hidden rounded-md bg-background/92 p-6 ring-1 ring-foreground/5 backdrop-blur">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 animate-scan bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  <span className="flex items-center gap-2"><Code2 className="size-3.5 text-primary" /> Build status</span>
                  <span className="flex items-center gap-2 text-primary">
                    <span className="size-1.5 rounded-full bg-primary animate-pulse-ring" />
                    Operational
                  </span>
                </div>
                <div className="mt-5 space-y-4">
                  {bars.map((b) => (
                    <div key={b.label}>
                      <div className="flex justify-between font-mono text-[11px] text-muted">
                        <span>{b.label}</span>
                        <span>{b.value}</span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-foreground/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-steel to-primary animate-bar-fill"
                          style={{ width: b.w }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5 text-center">
                  {[
                    ["04", "Years"],
                    ["38", "Released"],
                    ["12", "Countries"],
                  ].map(([v, l]) => (
                    <div key={l}>
                      <div className="font-display text-2xl font-bold">{v}</div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                        {l}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2 rounded-md border border-primary/15 bg-primary/5 px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                  <Check className="size-3.5" />
                  Release pipeline verified
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="overflow-hidden border-y border-border bg-foreground/[0.03] py-3.5">
        <div className="flex w-max animate-marquee gap-10 font-mono text-[12px] uppercase tracking-[0.2em] text-muted">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 gap-10" aria-hidden={copy === 1}>
              {[
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Laravel",
                "PHP 8",
                "Python",
                "FastAPI",
                "PostgreSQL",
                "AWS",
                "Docker",
                "GraphQL",
              ].map((t) => (
                <span key={t} className="flex items-center gap-10">
                  {t}
                  <span className="size-1 rounded-full bg-steel" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6">
        <section id="stacks" className="border-t border-border py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel">
                (a) Capabilities
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Three disciplines, one assembly line
              </h2>
            </div>
            <p className="hidden max-w-[30ch] text-sm text-muted md:block">
              Every stack is maintained by senior engineers who own it end to end.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {stacks.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
              <div className="chrome-panel card-lift h-full rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                    {s.tag}
                  </span>
                  <span className="font-mono text-[11px] text-muted">{s.n}</span>
                </div>
                <div className="mt-5 grid size-10 place-items-center rounded-md bg-foreground text-background shadow-md">
                  <Code2 className="size-4" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-md bg-foreground/5 px-2 py-1 font-mono text-[11px] text-muted"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="process" className="border-t border-border py-24">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel">
              (b) Process
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Machined in four passes
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {passes.map((p, i) => (
              <Reveal key={p.n} delay={i * 120}>
               <div className="group relative border-t border-border pt-6 transition-colors duration-300 hover:border-primary/50">
                <span
                  className={`absolute -top-[5px] left-0 size-2.5 rounded-full ${p.dot} ring-4 ring-background`}
                />
                <span className="font-mono text-[11px] tracking-[0.16em] text-muted">{p.n}</span>
                <h3 className="mt-2 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-pretty text-muted">{p.body}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="work" className="border-t border-border py-24">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel">
              (c) Proof
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Shipped and measured
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {proof.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
              <div className="chrome-panel card-lift flex h-full flex-col rounded-lg p-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                  {p.meta}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-pretty text-muted">{p.body}</p>
                 <div className="mt-6 flex items-end justify-between border-t border-border pt-4">
                  <div>
                    <div className="font-display text-3xl font-bold text-primary">{p.metric}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      {p.label}
                    </div>
                  </div>
                   <div className="flex items-center gap-1 font-mono text-[11px] text-muted">{p.weeks}<ArrowUpRight className="size-3" /></div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="engage" className="border-t border-border py-24">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel">
            (d) Engagement
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Two ways to work with us
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Reveal>
            <div className="chrome-panel card-lift h-full rounded-lg p-7">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold">Dedicated team</h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  Ongoing
                </span>
              </div>
              <p className="mt-3 max-w-[38ch] text-sm text-pretty text-muted">
                A senior pod embedded in your roadmap — flexible scope, weekly delivery, shared
                backlog.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {[
                  "Senior engineers, 2–5 seats",
                  "Monthly planning cadence",
                  "From 25 hours / week",
                ].map((i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            </Reveal>
            <Reveal delay={140}>
            <div className="card-lift relative h-full overflow-hidden rounded-lg plate p-7 ring-1 ring-foreground/10">
              <div className="pointer-events-none absolute inset-y-0 w-1/3 animate-sheen bg-gradient-to-r from-transparent via-background/60 to-transparent" />
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold">Fixed scope</h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  Productized
                </span>
              </div>
              <p className="mt-3 max-w-[38ch] text-sm text-pretty text-muted">
                A defined deliverable with a locked spec, timeline and price — ideal for new builds
                and rescues.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {[
                  "Fixed quote in 5 days",
                  "Milestones, not open-ended",
                  "Typical build: 6–14 weeks",
                ].map((i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <BrandMark />
              <span className="font-display text-lg font-bold tracking-tight">Vektara</span>
            </div>
            <p className="mt-4 max-w-[34ch] text-sm text-pretty text-muted">
              A senior engineering studio for international product teams. We build it, we ship it,
              we stay for the long run.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
              Contact
            </div>
            <a
              href="mailto:hello@vektara.studio"
              className="mt-3 block font-display text-xl font-bold tracking-tight transition-colors duration-200 hover:text-primary"
            >
              hello@vektara.studio
            </a>
            <Link
              to="/contact"
              className="mt-2 inline-block text-sm font-medium text-foreground underline decoration-steel/60 underline-offset-4 transition-colors duration-200 hover:text-primary"
            >
              Open the contact page →
            </Link>
            <p className="mt-3 text-sm text-muted">Response within one business day.</p>
          </div>
          <div className="md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
              Global coverage
            </div>
            <div className="mt-3 flex flex-col gap-1.5 font-mono text-[12px] text-muted">
              <span>London · 09:00–18:00</span>
              <span>Singapore · 09:00–18:00</span>
              <span>São Paulo · 10:00–19:00</span>
              <span className="mt-2 text-foreground">UTC+1 base · 12 time zones</span>
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Vektara Studio</span>
            <span>Built to specification</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
