import { createFileRoute, Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/BrandMark";
import { Reveal } from "@/components/Reveal";

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
  return (
    <div className="min-h-screen metal-bg text-foreground font-body antialiased selection:bg-primary/20">
      <header className="sticky top-0 z-30 border-b border-border bg-background/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <div className="flex items-center gap-2.5">
            <BrandMark />
            <span className="font-display text-[19px] font-bold tracking-tight">Vektara</span>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
            <a href="#stacks" className="transition-colors duration-200 hover:text-foreground">
              Stacks
            </a>
            <a href="#process" className="transition-colors duration-200 hover:text-foreground">
              Process
            </a>
            <a href="#work" className="transition-colors duration-200 hover:text-foreground">
              Work
            </a>
            <a href="#engage" className="transition-colors duration-200 hover:text-foreground">
              Engage
            </a>
            <Link to="/contact" className="transition-colors duration-200 hover:text-foreground">
              Contact
            </Link>
          </nav>
          <Link
            to="/contact"
            className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
          >
            Start a build
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="grid grid-cols-1 gap-10 pt-14 pb-20 lg:grid-cols-12 lg:gap-8 lg:pt-24">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel [animation:rise_700ms_var(--ease-machined)_both]">
              Remote-first · Engineering studio · EST 2026
            </p>
            <h1 className="mt-6 max-w-[16ch] font-display text-5xl font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl [animation:rise_750ms_var(--ease-machined)_120ms_both]">
              Production-grade software, milled to tolerance.
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg text-pretty text-muted [animation:rise_750ms_var(--ease-machined)_260ms_both]">
              We design, build and ship the platforms ambitious international teams depend on —
              from React and Next.js front-ends to Laravel and Python back-ends, assembled to
              specification.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3 [animation:rise_800ms_var(--ease-machined)_400ms_both]">
              <Link
                to="/contact"
                className="rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
              >
                Book an engineering audit
              </Link>
              <a
                href="#work"
                className="rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-foreground/30"
              >
                See the work
              </a>
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
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl plate p-1.5 ring-1 ring-black/10 [animation:rise_800ms_var(--ease-machined)_320ms_both]">
              <div className="pointer-events-none absolute inset-y-0 w-1/3 animate-sheen bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <div className="rounded-xl bg-background p-6 ring-1 ring-black/5">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  <span>Build status</span>
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
                          className="h-full rounded-full bg-gradient-to-r from-steel to-primary"
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
              </div>
            </div>
          </div>
        </section>

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
            {stacks.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-steel/60"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                    {s.tag}
                  </span>
                  <span className="font-mono text-[11px] text-muted">{s.n}</span>
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
            ))}
          </div>
        </section>

        <section id="process" className="border-t border-border py-20">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel">
              (b) Process
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Machined in four passes
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {passes.map((p) => (
              <div key={p.n} className="relative border-t border-border pt-6">
                <span
                  className={`absolute -top-[5px] left-0 size-2.5 rounded-full ${p.dot} ring-4 ring-background`}
                />
                <span className="font-mono text-[11px] tracking-[0.16em] text-muted">{p.n}</span>
                <h3 className="mt-2 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-pretty text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="border-t border-border py-20">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel">
              (c) Proof
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Shipped and measured
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {proof.map((p) => (
              <div
                key={p.title}
                className="flex flex-col rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-steel/60"
              >
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
                  <div className="font-mono text-[11px] text-muted">{p.weeks}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="engage" className="border-t border-border py-20">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel">
            (d) Engagement
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Two ways to work with us
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border p-7">
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
            <div className="rounded-2xl plate p-7 ring-1 ring-black/10">
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
