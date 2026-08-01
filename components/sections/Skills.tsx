import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

const groups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Nest.js", "PostgreSQL"],
  },
  {
    title: "Infrastructure",
    items: ["Supabase", "Vercel", "Docker", "GitHub Actions"],
  },
];

export default function Skills() {
  return (
    <section className="py-16 md:py-24 lg:py-[120px]">
      <Container>
        <Heading eyebrow="Toolset" size="lg" className="mb-12 md:mb-16">
          Skills
        </Heading>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <Card className="h-full">
                <h3 className="mb-5 font-heading text-lg font-semibold text-text-primary">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-text-secondary"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
