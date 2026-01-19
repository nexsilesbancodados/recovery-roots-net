import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Dr. Rafael Mendes",
    role: "Diretor Clínico",
    specialty: "Psiquiatria",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dra. Carolina Alves",
    role: "Coordenadora Médica",
    specialty: "Dependência Química",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Marcos Silva",
    role: "Psiquiatra Sênior",
    specialty: "Transtornos de Humor",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dra. Beatriz Costa",
    role: "Psicóloga Clínica",
    specialty: "TCC & Mindfulness",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Fernando Rocha",
    role: "Neurologista",
    specialty: "Neurociências",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dra. Juliana Lima",
    role: "Terapeuta",
    specialty: "Reabilitação",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
  },
];

export const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!gridRef.current) return;

      const cards = gridRef.current.querySelectorAll('.team-card');
      
      gsap.fromTo(cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: { amount: 0.4, from: "start" },
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="equipe" 
      className="py-12 md:py-16 lg:py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-10 md:mb-12">
          <span className="text-secondary text-xs uppercase tracking-[0.2em] mb-3 block font-medium">
            Curadoria Médica
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground font-medium leading-tight mb-4">
            Mentes brilhantes dedicadas{" "}
            <span className="text-secondary">a proteger a sua.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Nossa equipe reúne os melhores especialistas em saúde mental e dependência química.
          </p>
        </div>

        {/* Team Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {team.map((member, index) => (
            <div 
              key={index}
              className="team-card group"
            >
              {/* Image */}
              <div className="aspect-[3/4] mb-3 md:mb-4 overflow-hidden bg-muted rounded-lg">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover luxury-image-bw group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Info */}
              <div className="space-y-0.5">
                <p className="text-secondary text-[10px] md:text-xs uppercase tracking-wider">
                  {member.specialty}
                </p>
                <h3 className="font-serif text-sm md:text-base text-foreground font-medium">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-xs">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
