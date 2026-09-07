/**
 * Section anchors ("/#work") are scrolled manually rather than by the router's
 * built-in `hashScrollIntoView`, which fires a single synchronous
 * `scrollIntoView` before the incoming route has settled and ignores the sticky
 * header. See `useHashScroll` for the navigation side.
 */

/** Sticky header height plus breathing room, so headings aren't tucked under it. */
export const HEADER_SCROLL_OFFSET = 88;

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Scrolls the section with this id into view. Returns false if it isn't mounted yet. */
export function scrollToHash(hash: string, behavior?: ScrollBehavior) {
  if (typeof document === "undefined" || !hash) return false;
  const el = document.getElementById(hash);
  if (!el) return false;

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_SCROLL_OFFSET;
  window.scrollTo({
    top: Math.max(top, 0),
    behavior: behavior ?? (prefersReducedMotion() ? "auto" : "smooth"),
  });
  return true;
}
