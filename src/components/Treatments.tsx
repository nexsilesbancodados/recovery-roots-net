import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Pill, Wine, Briefcase, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const treatments = [
  {
    icon: Brain,
    title: "Saúde Mental Premium",
    subtitle: "Alta Performance & Equilíbrio",
    description: "Tratamento especializado para depressão, ansiedade e transtornos de alta performance. Protocolos exclusivos para executivos e profissionais que buscam excelência.",
    features: ["Psiquiatria de Precisão", "Terapia Cognitivo-Comportamental", "Mindfulness Clínico"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Pill,
    title: "Reabilitação de Substâncias",
    subtitle: "Desintoxicação Supervisionada",
    description: "Protocolos internacionais de desintoxicação com monitoramento médico 24 horas. Ambiente seguro para sua jornada de recuperação.",
    features: ["Desintoxicação Segura", "Terapia Individual Intensiva", "Prevenção de Recaídas"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Wine,
    title: "Tratamento de Alcoolismo",
    subtitle: "Recuperação & Ressocialização",
    description: "Abordagem médica completa para dependência alcoólica, combinando farmacologia de ponta com terapias comprovadas.",
    features: ["Protocolo de Abstinência", "Programa de 12 Passos", "Suporte Familiar"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Briefcase,
    title: "Burnout & Stress Executivo",
    subtitle: "Líderes & C-Level",
    description: "Programa exclusivo para CEOs, executivos e lideranças. Recupere sua energia, foco e capacidade de liderar com excelência.",
    features: ["Avaliação de Alta Complexidade", "Coaching Executivo", "Retorno Gradual"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
];

export const Treatments = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!leftPanelRef.current || !cardsContainerRef.current) return;

      // Pin the left panel while cards scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftPanelRef.current,
        pinSpacing: false,
      });

      // Animate cards as they come into view
      const cards = cardsContainerRef.current.querySelectorAll('.treatment-card');
      cards.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              end: "top 30%",
              toggleActions: "play none none reverse",
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
      id="tratamentos" 
      className="relative bg-primary"
    >
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Panel - Pinned */}
        <div 
          ref={leftPanelRef}
          className="lg:w-1/2 lg:h-screen flex items-center justify-center p-8 lg:p-16"
        >
          <div className="max-w-lg">
            <span className="inline-block text-secondary text-sm uppercase tracking-[0.3em] mb-6 font-medium">
              Nossas Esferas de Atuação
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-medium leading-tight mb-8">
              Tratamentos de{" "}
              <span className="text-secondary">Elite</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Cada programa é meticulosamente desenhado para atender às necessidades 
              específicas de pacientes que buscam excelência em cuidado e total discrição.
            </p>
            <div className="h-px w-20 bg-secondary/50" />
          </div>
        </div>

        {/* Right Panel - Scrolling Cards */}
        <div 
          ref={cardsContainerRef}
          className="lg:w-1/2 py-20 px-8 lg:px-16 space-y-8"
        >
          {treatments.map((treatment, index) => (
            <div 
              key={index}
              className="treatment-card group bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 p-8 lg:p-10 hover:bg-primary-foreground/10 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-video mb-8 overflow-hidden">
                <img 
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover luxury-image-bw"
                />
              </div>

              {/* Icon */}
              <div className="w-14 h-14 border border-secondary/30 flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors duration-500">
                <treatment.icon className="w-6 h-6 text-secondary" />
              </div>

              {/* Content */}
              <p className="text-secondary text-sm uppercase tracking-wider mb-2">
                {treatment.subtitle}
              </p>
              <h3 className="font-serif text-2xl lg:text-3xl text-primary-foreground font-medium mb-4">
                {treatment.title}
              </h3>
              <p className="text-primary-foreground/60 leading-relaxed mb-6">
                {treatment.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {treatment.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a 
                href="#contato"
                className="inline-flex items-center gap-2 text-secondary font-medium text-sm uppercase tracking-wider group-hover:gap-4 transition-all duration-500"
              >
                Saber mais
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};