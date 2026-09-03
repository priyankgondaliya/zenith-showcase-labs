export function BrandMark({ className = "size-8" }: { className?: string }) {
  return (
    <div
      className={`grid ${className} place-items-center rounded-[7px] plate ring-1 ring-black/10`}
    >
      <div className="relative size-4">
        <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
        <span className="absolute inset-0 rounded-full border border-foreground/30 [animation:spin-slow_9s_linear_infinite]" />
      </div>
    </div>
  );
}
