import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const spaces = [
  {
    title: "Suítes Master",
    subtitle: "Conforto que abraça a alma.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Alta Gastronomia",
    subtitle: "Nutrição planejada por chefs e nutrólogos.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Áreas de Convivência",
    subtitle: "Integração total com a natureza de Cabreúva.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Centro de Terapias",
    subtitle: "Espaços projetados para sua recuperação.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Jardins Terapêuticos",
    subtitle: "Harmonia entre mente e natureza.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
  },
];

export const Infrastructure = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !wrapperRef.current) return;

      const totalWidth = wrapperRef.current.scrollWidth - window.innerWidth;

      gsap.to(wrapperRef.current, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Animate each card as it comes into view
      const cards = wrapperRef.current.querySelectorAll('.space-card');
      cards.forEach((card, index) => {
        gsap.fromTo(card.querySelector('.space-image'),
          { scale: 1.2 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: gsap.getById("horizontal-scroll"),
              start: "left right",
              end: "left left",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="estrutura" 
      className="relative bg-background overflow-hidden"
    >
      {/* Section Header */}
      <div className="absolute top-8 left-8 z-10">
        <span className="text-muted-foreground text-sm uppercase tracking-[0.3em]">
          O Santuário
        </span>
      </div>

      <div ref={containerRef} className="h-screen overflow-hidden">
        <div 
          ref={wrapperRef}
          className="flex h-full items-center"
          style={{ width: `${spaces.length * 80}vw` }}
        >
          {/* Intro Card */}
          <div className="w-[40vw] h-full flex items-center justify-center px-16 flex-shrink-0">
            <div className="max-w-md">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground font-medium leading-tight mb-6">
                Infraestrutura{" "}
                <span className="text-secondary">Exclusiva</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Cada detalhe do nosso espaço foi projetado para proporcionar 
                conforto, privacidade e um ambiente propício à recuperação.
              </p>
            </div>
          </div>

          {/* Space Cards */}
          {spaces.map((space, index) => (
            <div 
              key={index}
              className="space-card w-[60vw] h-[80vh] flex-shrink-0 relative mx-4 overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={space.image}
                  alt={space.title}
                  className="space-image w-full h-full object-cover luxury-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              </div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-16">
                <p className="text-secondary text-sm uppercase tracking-[0.2em] mb-3">
                  0{index + 1}
                </p>
                <h3 className="font-serif text-3xl lg:text-4xl text-white font-medium mb-3">
                  {space.title}
                </h3>
                <p className="text-white/70 text-lg">
                  {space.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* End spacer */}
          <div className="w-[20vw] flex-shrink-0" />
        </div>
      </div>
    </section>
  );
};