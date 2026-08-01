import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface PillButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon?: ReactNode;
  emphasis?: boolean;
}

export default function PillButton({
  href,
  icon,
  emphasis = false,
  className = "",
  children,
  ...props
}: PillButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ease-smooth ${
        emphasis
          ? "border-accent bg-accent text-background hover:bg-accent/90"
          : "border-border bg-surface text-text-primary hover:border-accent/50 hover:text-accent"
      } ${className}`}
      {...props}
    >
      {icon}
      {children}
    </Link>
  );
}
