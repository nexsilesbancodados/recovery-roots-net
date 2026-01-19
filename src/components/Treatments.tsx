import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Pill, Wine, Briefcase, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const treatments = [
  {
    icon: Brain,
    title: "Saúde Mental Premium",
    subtitle: "Alta Performance",
    description: "Tratamento especializado para depressão, ansiedade e transtornos de alta performance.",
    features: ["Psiquiatria de Precisão", "Terapia Cognitivo-Comportamental", "Mindfulness Clínico"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Pill,
    title: "Reabilitação de Substâncias",
    subtitle: "Desintoxicação",
    description: "Protocolos internacionais de desintoxicação com monitoramento médico 24 horas.",
    features: ["Desintoxicação Segura", "Terapia Intensiva", "Prevenção de Recaídas"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Wine,
    title: "Tratamento de Alcoolismo",
    subtitle: "Recuperação",
    description: "Abordagem médica completa para dependência alcoólica.",
    features: ["Protocolo de Abstinência", "Programa de 12 Passos", "Suporte Familiar"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Briefcase,
    title: "Burnout Executivo",
    subtitle: "Líderes & C-Level",
    description: "Programa exclusivo para CEOs, executivos e lideranças.",
    features: ["Avaliação Complexa", "Coaching Executivo", "Retorno Gradual"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
];

export const Treatments = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply pinning on larger screens
    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      if (!leftPanelRef.current || !cardsContainerRef.current) return;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftPanelRef.current,
        pinSpacing: false,
      });

      const cards = cardsContainerRef.current.querySelectorAll('.treatment-card');
      cards.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              end: "top 40%",
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
      <div className="flex flex-col lg:flex-row">
        {/* Left Panel - Pinned on desktop */}
        <div 
          ref={leftPanelRef}
          className="lg:w-[45%] lg:h-screen flex items-center justify-center p-6 md:p-8 lg:p-12"
        >
          <div className="max-w-md">
            <span className="inline-block text-secondary text-xs uppercase tracking-[0.2em] mb-4 font-medium">
              Nossas Esferas de Atuação
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary-foreground font-medium leading-tight mb-4">
              Tratamentos de{" "}
              <span className="text-secondary">Elite</span>
            </h2>
            <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed mb-5">
              Cada programa é desenhado para atender às necessidades 
              específicas de pacientes que buscam excelência em cuidado.
            </p>
            <div className="h-px w-16 bg-secondary/50" />
          </div>
        </div>

        {/* Right Panel - Scrolling Cards */}
        <div 
          ref={cardsContainerRef}
          className="lg:w-[55%] py-8 md:py-12 px-4 md:px-6 lg:px-10 space-y-4 md:space-y-6"
        >
          {treatments.map((treatment, index) => (
            <div 
              key={index}
              className="treatment-card group bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 p-5 md:p-6 hover:bg-primary-foreground/10 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-video mb-4 md:mb-5 overflow-hidden">
                <img 
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover luxury-image-bw"
                />
              </div>

              {/* Icon */}
              <div className="w-10 h-10 border border-secondary/30 flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors duration-500">
                <treatment.icon className="w-5 h-5 text-secondary" />
              </div>

              {/* Content */}
              <p className="text-secondary text-xs uppercase tracking-wider mb-1">
                {treatment.subtitle}
              </p>
              <h3 className="font-serif text-lg md:text-xl text-primary-foreground font-medium mb-2">
                {treatment.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
                {treatment.description}
              </p>

              {/* Features */}
              <ul className="space-y-1 mb-4">
                {treatment.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-primary-foreground/70 text-xs">
                    <span className="w-1 h-1 bg-secondary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a 
                href="#contato"
                className="inline-flex items-center gap-2 text-secondary font-medium text-xs uppercase tracking-wider group-hover:gap-3 transition-all duration-500"
              >
                Saber mais
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
