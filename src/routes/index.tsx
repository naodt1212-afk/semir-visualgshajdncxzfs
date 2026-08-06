import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Projects } from "@/components/site/Projects";
import { TestimonialHighlight } from "@/components/site/TestimonialHighlight";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { FloatingWidget } from "@/components/site/FloatingWidget";
import { ParticleField } from "@/components/motion/ParticleField";
import { MagneticCursor } from "@/components/motion/MagneticCursor";

const title = "Ruchit P. — Brand, Packaging & UI/UX Designer";
const description =
  "Independent designer helping brands turn ideas into structured, meaningful experiences — identity, packaging and digital design.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <MagneticCursor />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Projects />
          <TestimonialHighlight />
          <Services />
          <About />
          <Testimonials />
          <Faq />
        </main>
        <Footer />
        <FloatingWidget />
      </div>
    </div>
  );
}
