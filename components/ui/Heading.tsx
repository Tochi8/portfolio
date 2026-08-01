import { ElementType, HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: ElementType;
  size?: "xl" | "lg" | "md" | "sm";
  eyebrow?: string;
}

const sizeMap = {
  xl: "text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight",
  lg: "text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight",
  md: "text-2xl md:text-3xl leading-tight tracking-tight",
  sm: "text-lg md:text-xl leading-snug tracking-tight",
};

export default function Heading({
  as: Tag = "h2",
  size = "lg",
  eyebrow,
  className = "",
  children,
  ...props
}: HeadingProps) {
  return (
    <div>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <Tag className={`font-heading font-semibold text-text-primary ${sizeMap[size]} ${className}`} {...props}>
        {children}
      </Tag>
    </div>
  );
}
