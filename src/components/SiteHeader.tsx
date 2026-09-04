import { Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/BrandMark";

const sections = [
  { label: "Stacks", hash: "stacks" },
  { label: "Process", hash: "process" },
  { label: "Work", hash: "work" },
  { label: "Engage", hash: "engage" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Vektara home">
          <BrandMark />
          <span className="font-display text-[19px] font-bold tracking-tight">Vektara</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {sections.map((s) => (
            <Link
              key={s.hash}
              to="/"
              hash={s.hash}
              className="transition-colors duration-200 hover:text-foreground"
            >
              {s.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="transition-colors duration-200 hover:text-foreground"
            activeProps={{ className: "text-foreground font-medium" }}
          >
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
  );
}
