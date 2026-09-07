import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

import { scrollToHash } from "@/lib/scroll-to-hash";

/** How long to keep looking for the target section before giving up. */
const LOOKUP_TIMEOUT_MS = 2000;
/** Cap on waiting for web fonts, which shift section offsets when they swap in. */
const FONT_SETTLE_TIMEOUT_MS = 300;

/**
 * Scrolls to `location.hash` after the route that owns the section has actually
 * rendered. Arriving from another route (/contact -> /#process) mounts the home
 * page and scrolls in the same tick, so the section may not exist yet — we retry
 * across frames until it does.
 *
 * Keyed on the history key as well as the hash so back/forward re-runs it.
 */
export function useHashScroll() {
  const hash = useRouterState({ select: (s) => s.location.hash });
  const historyKey = useRouterState({ select: (s) => s.location.state.__TSR_key });

  useEffect(() => {
    if (!hash) return;

    let cancelled = false;
    let frame = 0;
    const startedAt = performance.now();

    const attempt = () => {
      if (cancelled) return;
      if (scrollToHash(hash)) return;
      if (performance.now() - startedAt < LOOKUP_TIMEOUT_MS) {
        frame = requestAnimationFrame(attempt);
      }
    };

    // Let fonts settle first so we don't land short, but never block on them.
    void Promise.race([
      document.fonts?.ready ?? Promise.resolve(),
      new Promise((resolve) => setTimeout(resolve, FONT_SETTLE_TIMEOUT_MS)),
    ]).then(attempt);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [hash, historyKey]);
}
