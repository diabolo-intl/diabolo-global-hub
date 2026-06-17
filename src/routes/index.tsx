import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "International Diabolo Federation 国际扯铃联盟" },
      { name: "description", content: "Promoting the sport of Diabolo globally — 15 associations across China, Malaysia, Taiwan, Japan and Macau." },
      { property: "og:title", content: "International Diabolo Federation" },
      { property: "og:description", content: "Promoting the sport of Diabolo globally." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/site/index.html"
      title="International Diabolo Federation"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}
