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
        
        lines.forEach((line) => {
          gsap.fromTo(line,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: line,
                start: "top 85%",
                end: "top 40%",
                scrub: 1,
                toggleActions: "play none none reverse",
              },
            }
          );

          gsap.to(line, {
            opacity: 0.2,
            scrollTrigger: {
              trigger: line,
              start: "top 40%",
              end: "top 15%",
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
      className="min-h-[150vh] md:min-h-[180vh] bg-background relative"
    >
      <div className="sticky top-0 min-h-screen flex items-center justify-center py-12 md:py-16">
        <div 
          ref={linesRef}
          className="container mx-auto px-4 max-w-3xl"
        >
          <div className="space-y-5 md:space-y-8">
            {manifestoLines.map((line, index) => (
              <p 
                key={index}
                className="manifesto-line font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground text-center leading-tight font-medium"
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
