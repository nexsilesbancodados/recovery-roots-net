import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const manifestoLines = [
  "Não tratamos apenas sintomas.",
  "Realizamos uma curadoria de vida.",
  "Privacidade total.",
  "Ética inabalável.",
  "Resultados extraordinários."
];

export const Manifesto = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (linesRef.current) {
        const lines = linesRef.current.querySelectorAll('.manifesto-line');
        
        lines.forEach((line, index) => {
          gsap.fromTo(line,
            { 
              opacity: 0, 
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: line,
                start: "top 80%",
                end: "top 30%",
                scrub: 1,
                toggleActions: "play none none reverse",
              },
            }
          );

          // Fade out as it scrolls up
          gsap.to(line, {
            opacity: 0.2,
            scrollTrigger: {
              trigger: line,
              start: "top 30%",
              end: "top 10%",
              scrub: 1,
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="manifesto" 
      className="min-h-[200vh] bg-background relative"
    >
      <div className="sticky top-0 min-h-screen flex items-center justify-center py-20">
        <div 
          ref={linesRef}
          className="container mx-auto px-4 max-w-4xl"
        >
          <div className="space-y-8 md:space-y-12">
            {manifestoLines.map((line, index) => (
              <p 
                key={index}
                className="manifesto-line font-serif text-3xl md:text-5xl lg:text-6xl text-foreground text-center leading-tight font-medium"
                style={{
                  color: index === 1 || index === 4 ? 'hsl(43 60% 50%)' : undefined,
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};