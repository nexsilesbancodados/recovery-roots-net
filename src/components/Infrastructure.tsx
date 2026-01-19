import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const spaces = [
  {
    title: "Suítes Master",
    subtitle: "Conforto que abraça a alma.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Alta Gastronomia",
    subtitle: "Nutrição planejada por especialistas.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Áreas de Convivência",
    subtitle: "Integração com a natureza.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Centro de Terapias",
    subtitle: "Espaços para sua recuperação.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Jardins Terapêuticos",
    subtitle: "Harmonia entre mente e natureza.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
  },
];

export const Infrastructure = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply horizontal scroll on larger screens
    if (window.innerWidth < 1024) return;

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="estrutura" 
      className="relative bg-background overflow-hidden"
    >
      {/* Section Header - Desktop */}
      <div className="hidden lg:block absolute top-6 left-6 z-10">
        <span className="text-muted-foreground text-xs uppercase tracking-[0.2em]">
          O Santuário
        </span>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-2 block">
              O Santuário
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-medium">
              Infraestrutura <span className="text-secondary">Exclusiva</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {spaces.map((space, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <img 
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-secondary text-xs uppercase tracking-wider mb-1">0{index + 1}</p>
                  <h3 className="font-serif text-lg text-white font-medium mb-0.5">{space.title}</h3>
                  <p className="text-white/70 text-xs">{space.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Horizontal Scroll */}
      <div ref={containerRef} className="hidden lg:block h-screen overflow-hidden">
        <div 
          ref={wrapperRef}
          className="flex h-full items-center"
          style={{ width: `${spaces.length * 50 + 40}vw` }}
        >
          {/* Intro Card */}
          <div className="w-[30vw] h-full flex items-center justify-center px-10 flex-shrink-0">
            <div className="max-w-sm">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-medium leading-tight mb-4">
                Infraestrutura{" "}
                <span className="text-secondary">Exclusiva</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cada detalhe foi projetado para proporcionar 
                conforto, privacidade e ambiente propício à recuperação.
              </p>
            </div>
          </div>

          {/* Space Cards */}
          {spaces.map((space, index) => (
            <div 
              key={index}
              className="space-card w-[45vw] h-[70vh] flex-shrink-0 relative mx-3 overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={space.image}
                  alt={space.title}
                  className="space-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-secondary text-xs uppercase tracking-[0.15em] mb-2">
                  0{index + 1}
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-white font-medium mb-1">
                  {space.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {space.subtitle}
                </p>
              </div>
            </div>
          ))}

          <div className="w-[10vw] flex-shrink-0" />
        </div>
      </div>
    </section>
  );
};
