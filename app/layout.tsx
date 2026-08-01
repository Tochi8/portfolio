import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = localFont({
  src: "../public/fonts/SpaceGrotesk-Variable.ttf",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "500 700",
});

const inter = localFont({
  src: "../public/fonts/Inter-Variable.ttf",
  variable: "--font-inter",
  display: "swap",
  weight: "400 600",
});

export const metadata: Metadata = {
  title: "Tochukwu Chinatu — Full Stack Engineer",
  description:
    "Tochukwu Chinatu is a full-stack developer building modern web applications, SaaS platforms, and Web3 products.",
  openGraph: {
    title: "Tochukwu Chinatu — Full Stack Engineer",
    description:
      "Tochukwu Chinatu is a full-stack developer building modern web applications, SaaS platforms, and Web3 products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body bg-background text-text-primary antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-background focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
