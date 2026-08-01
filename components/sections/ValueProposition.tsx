import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import Reveal from "@/components/ui/Reveal";

export default function ValueProposition() {
  return (
    <section className="py-16 md:py-24 lg:py-[120px]">
      <Container>
        <Divider className="mb-12 md:mb-16" />
        <Reveal>
          <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-tight text-text-primary md:text-4xl lg:text-5xl">
            Building scalable products that people enjoy using.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
            Every project starts with the same question: what does the
            person on the other side of the screen actually need? The
            architecture, the stack, the animations. All of it is in
            service of that answer, not the other way around.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
