import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "/resume.pdf", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="#" className="font-heading text-lg font-semibold tracking-tight">
          Tochukwu<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button 
        href="https://wa.me/2349068138044"
        target="_blank"
        rel="noopener noreferrer"
         className="hidden sm:inline-flex">
          Let&rsquo;s Build Together
        </Button>
      </Container>
    </header>
  );
}
