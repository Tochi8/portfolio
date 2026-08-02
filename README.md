# Tochukwu Chinatu — Portfolio

Personal portfolio site for Tochukwu Chinatu, a full-stack developer building modern web applications, SaaS platforms, and Web3 products.

**Live site:** 

## Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Self-hosted variable fonts (Space Grotesk + Inter)

## Featured Projects

- **Crypto Street** — A modern Web3 brand website showcasing the organization's mission, founder, and community-driven street interview series.
- **Polly** — A blockchain-powered voting platform ensuring every vote is transparent, tamper-proof, and permanently verifiable on-chain.
- **PeakFit** — A conversion-focused fitness brand website built to turn visitors into clients.


app/
  layout.tsx               Root layout, fonts, metadata
  page.tsx                 Assembles all sections
  globals.css              Base styles, focus states, reduced-motion, reveal utility
components/
  ui/                      Button, PillButton, Container, Section, Divider, Heading, Card, Badge, Reveal
  layout/                  Navbar, Footer
  sections/                Hero, ValueProposition, FeaturedProjects, Skills,
                           EngineeringPhilosophy, About, Timeline, Contact
public/
  images/                  Portrait and project screenshots
  fonts/                   Self-hosted Space Grotesk + Inter
  resume.pdf               Downloadable resume



