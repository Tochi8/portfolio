import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import Reveal from "@/components/ui/Reveal";

export default function EngineeringPhilosophy() {
  return (
    <section className="py-16 md:py-24 lg:py-[120px]">
      <Container>
        <Divider className="mb-12 md:mb-16" />
        <Reveal>
          <blockquote className="max-w-3xl font-heading text-2xl font-medium leading-snug tracking-tight text-text-primary md:text-3xl lg:text-4xl">
            &ldquo;I believe software should be fast, maintainable,
            accessible, and built around real user needs.&rdquo;
          </blockquote>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-text-secondary md:text-base">
            Every technical decision gets weighed against those four
            standards. If a shortcut breaks one of them, it isn&rsquo;t a
            shortcut but debt with someone else&rsquo;s name on
            it.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
