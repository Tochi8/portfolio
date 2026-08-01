import Link from "next/link";
import Container from "@/components/ui/Container";

const socials = [
  { label: "GitHub", href: "https://github.com/Tochi8" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tochukwu-chinatu-8572a5332?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
  { label: "X", href: "https://x.com/tochi_ch9" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center gap-4 text-sm text-text-secondary sm:flex-row sm:justify-between">
        <span className="font-heading font-semibold text-text-primary">
          Tochukwu<span className="text-accent">.</span>
        </span>
        <p>&copy; {new Date().getFullYear()} Tochukwu Chinatu. All rights reserved.</p>
        <nav className="flex items-center gap-5" aria-label="Social links">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className="transition-colors duration-200 hover:text-accent"
            >
              {s.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
