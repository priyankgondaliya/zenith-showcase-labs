import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // Restore scroll normally for plain URLs, but hand hash locations entirely
    // to `useHashScroll` — otherwise back/forward restores the old offset and
    // then the hash scroll jumps again, which reads as a double jump.
    scrollRestoration: ({ location }) => !location.hash,
    // `useHashScroll` waits for the incoming route to render and offsets the
    // sticky header. The built-in version fires a single synchronous
    // scrollIntoView before the section exists and would fight it.
    defaultHashScrollIntoView: false,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
