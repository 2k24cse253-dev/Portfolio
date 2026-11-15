// Server component — must stay a Server Component so the route segment
// is part of the prerender tree (AppShell renders `children`).
export const instant = false;

export default function Home() {
  // Home UI is composed in AppShell (client). This page stays in the
  // render tree so Next 16 Cache Components does not drop the segment.
  return null;
}
