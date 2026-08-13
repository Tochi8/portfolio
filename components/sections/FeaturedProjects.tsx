import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

const projects = [
  {
    title: "Crypto Street",
    description:
      "A modern Web3 brand website showcasing the organization's mission, founder, and community-driven street interview series, serving as a central hub for discovery, engagement, and contact.",
    image: "/images/project-cryptostreet.jpg",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://cryptostreet.cv/",
  },
  {
    title: "Polly",
    description:
      "A blockchain-powered voting platform for online communities that ensures every vote is transparent, tamper-proof, and permanently verifiable on-chain.",
    image: "/images/project-polly.jpg",
    stack: ["Next.js", "TypeScript", "Solidity", "Supabase"],
    href: "https://pollyapp.vercel.app/",
  },
  {
    title: "PeakFit",
    description:
      "A conversion-focused website for a fitness brand, designed to turn visitors into clients through clear messaging, streamlined navigation, and easy access to membership and contact information.",
    image: "/images/project-peakfit.jpg",
    stack: ["React", "Tailwind", "Node.js"],
    href: "https://peakfit.pxxl.click/",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-[120px]">
      <Container>
        <Heading eyebrow="Selected Work" size="lg" className="mb-12 md:mb-16">
          Featured Projects
        </Heading>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <Card hoverLift className="group flex h-full flex-col overflow-hidden p-0">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="font-heading text-xl font-semibold text-text-primary">
                      {project.title}
                    </h3>
                    <Link
                      href={project.href}
                      aria-label={`View ${project.title} project`}
                      className="mt-1 shrink-0 rounded-full border border-border p-2 text-text-secondary transition-all duration-200 ease-smooth group-hover:border-accent group-hover:text-accent"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M3.5 12.5L12.5 3.5M12.5 3.5H5.5M12.5 3.5V10.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
