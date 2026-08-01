import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "solid" | "outline";
}

export default function Button({
  href,
  variant = "solid",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-colors duration-200 ease-smooth";
  const styles =
    variant === "solid"
      ? "bg-accent text-background hover:bg-accent/90"
      : "border border-border text-text-primary hover:border-accent/60 hover:text-accent";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </Link>
  );
}
