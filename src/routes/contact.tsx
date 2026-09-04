import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { BrandMark } from "@/components/BrandMark";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vektara — Start a Build" },
      {
        name: "description",
        content:
          "Talk to Vektara about your next build: React, Next.js, Node.js, Laravel or Python. Scoping reply within one business day.",
      },
      { property: "og:title", content: "Contact Vektara — Start a Build" },
      {
        property: "og:description",
        content:
          "International engineering studio for React, Next.js, Node.js, Laravel and Python builds. Tell us about your project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const budgets = ["< $10k", "$10k – $30k", "$30k – $80k", "$80k+"];
const interests = ["React / Next.js", "Node.js APIs", "Laravel / PHP", "Python & data"];

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast.success("Request received — we reply within one business day.");
  }

  const inputCls =
    "w-full rounded-lg border border-input bg-background/70 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors";

  return (
    <div className="min-h-screen metal-bg text-foreground font-body antialiased selection:bg-primary/20">
      <header className="sticky top-0 z-30 border-b border-border bg-background/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <Link to="/" className="flex items-center gap-2.5">
            <BrandMark />
            <span className="font-display text-[19px] font-bold tracking-tight">Vektara</span>
          </Link>
          <Link
            to="/"
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:border-foreground/30"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24">
        <section className="grid grid-cols-1 gap-12 pt-14 lg:grid-cols-12 lg:pt-20">
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel [animation:rise_700ms_var(--ease-machined)_both]">
              Contact · Scoping reply in 1 business day
            </p>
            <h1 className="mt-6 max-w-[16ch] font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl [animation:rise_750ms_var(--ease-machined)_120ms_both]">
              Tell us what you're building.
            </h1>
            <p className="mt-5 max-w-[42ch] text-pretty text-muted [animation:rise_750ms_var(--ease-machined)_260ms_both]">
              Share the shape of the project — product, stack, timeline — and a senior engineer
              (not a sales rep) will reply with a scoping plan.
            </p>

            <div className="mt-10 space-y-5 border-t border-border pt-8 [animation:rise_800ms_var(--ease-machined)_400ms_both]">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                  Email
                </div>
                <a
                  href="mailto:hello@vektara.studio"
                  className="mt-1.5 block font-display text-lg font-bold tracking-tight transition-colors duration-200 hover:text-primary"
                >
                  hello@vektara.studio
                </a>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                  Global coverage
                </div>
                <div className="mt-1.5 flex flex-col gap-1 font-mono text-[12px] text-muted">
                  <span>London · 09:00–18:00</span>
                  <span>Singapore · 09:00–18:00</span>
                  <span>São Paulo · 10:00–19:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl plate p-1.5 ring-1 ring-black/10 [animation:rise_800ms_var(--ease-machined)_320ms_both]">
              <div className="pointer-events-none absolute inset-y-0 w-1/3 animate-sheen bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <div className="rounded-xl bg-background p-7 ring-1 ring-black/5 sm:p-9">
                {sent ? (
                  <div className="py-14 text-center">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="size-2.5 rounded-full bg-primary" />
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-bold tracking-tight">
                      Request received
                    </h2>
                    <p className="mx-auto mt-2 max-w-[36ch] text-sm text-muted">
                      A senior engineer will reply with a scoping plan within one business day.
                    </p>
                    <Link
                      to="/"
                      className="mt-7 inline-flex rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                    >
                      Back to Vektara
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                          Name
                        </span>
                        <input required placeholder="Ada Lovelace" className={inputCls} />
                      </label>
                      <label className="block">
                        <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                          Work email
                        </span>
                        <input
                          required
                          type="email"
                          placeholder="ada@company.com"
                          className={inputCls}
                        />
                      </label>
                    </div>
                    <label className="block">
                      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                        Company
                      </span>
                      <input placeholder="Company Ltd." className={inputCls} />
                    </label>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                          Stack interest
                        </span>
                        <select className={inputCls} defaultValue={interests[0]}>
                          {interests.map((i) => (
                            <option key={i}>{i}</option>
                          ))}
                        </select>
                      </label>
                      <label className="block">
                        <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                          Budget
                        </span>
                        <select className={inputCls} defaultValue={budgets[1]}>
                          {budgets.map((b) => (
                            <option key={b}>{b}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <label className="block">
                      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                        Project brief
                      </span>
                      <textarea
                        required
                        rows={5}
                        placeholder="What are you building, for whom, and by when?"
                        className={`${inputCls} resize-none`}
                      />
                    </label>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-foreground px-5 py-3.5 text-sm font-medium text-background transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                    >
                      Send the brief
                    </button>
                    <p className="text-center font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                      NDA-friendly · Response within one business day
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
