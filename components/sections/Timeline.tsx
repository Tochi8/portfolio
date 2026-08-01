import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const milestones = [
  {
    year: "2024",
    title: "First lines of code",
    description:
      "Taught myself HTML, CSS, and JavaScript, building small static sites for practice.",
  },
  {
    year: "2025",
    title: "Full stack fundamentals",
    description:
      "Moved into Node.js, React, and databases, taking on early freelance projects.",
  },
  {
    year: "2026",
    title: "Modern stack, real clients",
    description:
      "Adopted Next.js, TypeScript, and Supabase as my default stack for client work.",
  },
  {
    year: "2026\u2013Present",
    title: "Building my own products",
    description:
      "Launched Polly while continuing freelance development work.",
  },
];

export default function TimelineSection() {
  return (
    <section className="py-16 md:py-24 lg:py-[120px]">
      <Container>
        <ol className="relative border-l border-border pl-8 gap-3">
          {milestones.map((m, i) => (
              <li className="relative pb-16 last:pb-0">
                <Reveal key={m.year} delay={i * 80}>
                <span className="absolute -left-[37px] top-1 h-2.5 w-2.5 rounded-full bg-accent" />
                <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
                  {m.year}
                </p>
                <h3 className="mb-2 font-heading text-lg font-semibold text-text-primary md:text-xl">
                  {m.title}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-text-secondary md:text-base">
                  {m.description}
                </p>
                  </Reveal>
              </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
