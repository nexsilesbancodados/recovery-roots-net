import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Dr. Rafael Mendes",
    role: "Diretor Clínico",
    specialty: "Psiquiatria",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dra. Carolina Alves",
    role: "Coordenadora Médica",
    specialty: "Dependência Química",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Marcos Silva",
    role: "Psiquiatra Sênior",
    specialty: "Transtornos de Humor",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dra. Beatriz Costa",
    role: "Psicóloga Clínica",
    specialty: "TCC & Mindfulness",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Fernando Rocha",
    role: "Neurologista",
    specialty: "Neurociências",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dra. Juliana Lima",
    role: "Terapeuta Ocupacional",
    specialty: "Reabilitação",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
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
        { 
          opacity: 0, 
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: {
            amount: 0.6,
            from: "start",
          },
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
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
      className="py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="text-secondary text-sm uppercase tracking-[0.3em] mb-6 block font-medium">
            Curadoria Médica
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-medium leading-tight mb-6">
            Mentes brilhantes dedicadas{" "}
            <span className="text-secondary">a proteger a sua.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nossa equipe reúne os melhores especialistas em saúde mental e dependência química, 
            com formação internacional e experiência comprovada.
          </p>
        </div>

        {/* Team Grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {team.map((member, index) => (
            <div 
              key={index}
              className="team-card group"
            >
              {/* Image */}
              <div className="aspect-[3/4] mb-6 overflow-hidden bg-muted">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover luxury-image-bw group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Info */}
              <div className="space-y-1">
                <p className="text-secondary text-sm uppercase tracking-wider">
                  {member.specialty}
                </p>
                <h3 className="font-serif text-xl text-foreground font-medium">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">
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