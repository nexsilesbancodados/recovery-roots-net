import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Logos importadas
import bradescoSaude from "@/assets/convenios/bradesco-saude.png";
import cabesp from "@/assets/convenios/cabesp.png";
import cassi from "@/assets/convenios/cassi.png";
import mediservice from "@/assets/convenios/mediservice.png";
import saoluiz from "@/assets/convenios/saoluiz.png";
import portoSaude from "@/assets/convenios/porto-saude.png";
import realGrandeza from "@/assets/convenios/real-grandeza.png";
import phsSamaritano from "@/assets/convenios/phs-samaritano.png";
import donaSaude from "@/assets/convenios/dona-saude.png";
import ipref from "@/assets/convenios/ipref.png";

gsap.registerPlugin(ScrollTrigger);

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "Bradesco Saúde", logo: bradescoSaude },
  { name: "Cabesp", logo: cabesp },
  { name: "Cassi", logo: cassi },
  { name: "Mediservice", logo: mediservice },
  { name: "São Luiz", logo: saoluiz },
  { name: "Porto Saúde", logo: portoSaude },
  { name: "Real Grandeza", logo: realGrandeza },
  { name: "PHS Samaritano", logo: phsSamaritano },
  { name: "Dona Saúde", logo: donaSaude },
  { name: "IPREF", logo: ipref },
];

export const Partners = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  const duplicatedPartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current.children,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Parallax effect on tracks
      if (track1Ref.current && track2Ref.current) {
        gsap.to(track1Ref.current, {
          x: -100,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(track2Ref.current, {
          x: 50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-16 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden relative"
    >
      <div className="container mx-auto px-4 mb-8" ref={titleRef}>
        <div className="text-center max-w-xl mx-auto">
          <p className="text-secondary font-medium tracking-[0.15em] uppercase text-xs mb-2">
            Conveniência Absoluta
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-3">
            Convênios Aceitos
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cuidamos de toda a burocracia para que sua única preocupação seja o seu bem-estar.
          </p>
        </div>
      </div>

      {/* Track 1 - Moving Left */}
      <div className="relative mb-6">
        <div 
          ref={track1Ref}
          className="flex animate-scroll-left"
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`track1-${partner.name}-${index}`}
              className="flex-shrink-0 mx-4"
            >
              <div className="w-[180px] h-[120px] bg-white/80 backdrop-blur-sm border border-border/50 flex items-center justify-center p-6 group hover:border-secondary/30 hover:shadow-soft transition-all duration-500">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-[60px] max-w-[120px] w-auto h-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Track 2 - Moving Right (slower) */}
      <div className="relative">
        <div 
          ref={track2Ref}
          className="flex animate-scroll-left"
          style={{ animationDirection: 'reverse', animationDuration: '70s' }}
        >
          {[...duplicatedPartners].reverse().map((partner, index) => (
            <div
              key={`track2-${partner.name}-${index}`}
              className="flex-shrink-0 mx-4"
            >
              <div className="w-[180px] h-[120px] bg-white/80 backdrop-blur-sm border border-border/50 flex items-center justify-center p-6 group hover:border-secondary/30 hover:shadow-soft transition-all duration-500">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-[60px] max-w-[120px] w-auto h-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center mt-12">
        <p className="text-sm text-muted-foreground">
          E muitos outros convênios • 
          <a href="#contato" className="text-secondary hover:text-secondary/80 font-medium ml-1 transition-colors">
            Consulte disponibilidade
          </a>
        </p>
      </div>
    </section>
  );
};
