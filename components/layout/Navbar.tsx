"use client";

import { useState } from "react";
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
const [open, setOpen] = useState(false);

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
className="hidden sm:inline-flex"
>
Let&rsquo;s Build Together
</Button>

<button
onClick={() => setOpen(!open)}
className="flex items-center justify-center rounded-md p-2 text-text-primary md:hidden"
aria-label={open ? "Close menu" : "Open menu"}
aria-expanded={open}
>
{open ? (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
</svg>
) : (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
</svg>
)}
</button>
</Container>

{open && (
<nav className="border-t border-border bg-background md:hidden" aria-label="Mobile">
<Container className="flex flex-col gap-1 py-4">
{links.map((link) => (
<Link
key={link.label}
href={link.href}
onClick={() => setOpen(false)}
className="rounded-md px-2 py-3 text-sm text-text-secondary transition-colors duration-200 hover:bg-surface hover:text-text-primary"
>
{link.label}
</Link>
))}
<Link
href="https://wa.me/2349068138044"
target="_blank"
rel="noopener noreferrer"
onClick={() => setOpen(false)}
className="mt-2 rounded-lg bg-accent px-2 py-3 text-center text-sm font-medium text-background"
>
Let&rsquo;s Build Together
</Link>
</Container>
</nav>
)}
</header>
);
}
