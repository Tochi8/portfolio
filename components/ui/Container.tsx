import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Container({ className = "", children, ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-content px-4 md:px-5 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
