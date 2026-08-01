import Image from "next/image";
import Container from "@/components/ui/Container";
import PillButton from "@/components/ui/PillButton";

export default function Hero() {
  return (
    <section className="border-b border-border pb-16 pt-12 md:pb-24 md:pt-16 lg:pb-[120px] lg:pt-20">
      <Container>
        <div className="mb-10 flex flex-wrap items-center gap-3 md:mb-14">
          <PillButton href="#projects">View Projects</PillButton>
          <PillButton href="https://github.com/Tochi8">GitHub</PillButton>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.4fr_1.1fr] lg:items-end lg:gap-8">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              Role
            </p>
            <p className="mt-3 font-heading text-lg font-medium text-text-primary md:text-xl">
              Full Stack
              <br />
              Developer
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface">
              <Image
                src="/images/portrait.jpg"
                alt="Portrait of Tochukwu Chinatu"
                fill
                priority
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-3">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              Introduction
            </p>
            <p className="mt-3 max-w-none text-sm leading-relaxed text-text-secondary md:text-base">
              I&rsquo;m a full-stack developer passionate about building
              modern web applications that combine thoughtful design,
              scalable engineering, and meaningful user experiences. From
              business websites, to apps, to SaaS platforms and Web3
              products, I enjoy turning ideas into reliable digital solutions
              that are intuitive, performant, and built for long-term growth.
            </p>
          </div>
        </div>

        <div className="mt-20 lg:mt-24">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Full Stack Developer
          </p>
          <h1 className="font-heading text-[15vw] font-semibold leading-[0.9] tracking-tight text-text-primary sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-9xl">
            Tochukwu
            <br />
            Chinatu
          </h1>
        </div>
      </Container>
    </section>
  );
}
