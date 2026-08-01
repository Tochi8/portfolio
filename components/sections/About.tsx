import Image from "next/image";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-[120px]">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface lg:aspect-auto lg:h-full">
              <Image
                src="/images/about-portrait.jpg"
                alt="Tochukwu Chinatu at work"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Heading eyebrow="About" size="lg" className="mb-6">
              From curiosity to production
            </Heading>
            <div className="space-y-4 text-sm leading-relaxed text-text-secondary md:text-base">
              <p>
                I started with HTML and CSS out of curiosity about how
                websites worked, built my first demo website and kept going until curiosity turned into a
                career. Today I build full products: frontend,
                backend, and the infrastructure in between.
              </p>
              <p>
                I care about the details most users never consciously notice:
                load times, error states, the moment a form tells you
                exactly what went wrong. Those details are the difference
                between software people tolerate and software people trust.
              </p>
              <p>
                Outside client work, I build and maintain my own products,
                which keeps me honest about what &ldquo;production-ready&rdquo;
                actually means.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
