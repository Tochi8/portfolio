import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

export default function Section({ className = "", children, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-[120px] ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
