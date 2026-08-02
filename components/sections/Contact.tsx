import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const links = [
  { label: "Email", value: "chinatutochukwu018@gmail.com", href: "mailto:chinatutochukwu018@gmail.com" },
  { label: "GitHub", value: "github.com/Tochi8", href: "https://github.com/Tochi8" },
  { label: "LinkedIn", value: "linkedin.com/in/tochukwu", href: "https://www.linkedin.com/in/tochukwu-chinatu-8572a5332?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
  { label: "X", value: "x.com/tochi_ch9", href: "https://x.com/tochi_ch9" },
  { label: "Resume", value: "Download PDF", href: "/resume.pdf" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-[120px]">
      <Container>
        <Reveal>
          <h2 className="mb-10 max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight text-text-primary md:text-4xl lg:text-5xl">
            Let&rsquo;s build something together.
          </h2>

          <div className="rounded-2xl border border-border bg-surface p-2">
            {links.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center justify-between px-5 py-4 transition-colors duration-200 ease-smooth hover:text-accent ${
                  i !== links.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="text-sm font-medium uppercase tracking-[0.15em] text-text-secondary">
                  {link.label}
                </span>
                <span className="font-heading text-base text-text-primary md:text-lg">
                  {link.value}
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
