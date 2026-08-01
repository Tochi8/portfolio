import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverLift?: boolean;
}

export default function Card({ className = "", hoverLift = false, children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface p-6 md:p-8 ${
        hoverLift
          ? "transition-transform duration-300 ease-smooth hover:-translate-y-1 hover:border-accent/30"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
