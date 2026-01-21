import { useRef, useEffect } from "react";
import { Home, Utensils, TreePine, Dumbbell, Waves, Heart, Bed, Music, BookOpen, Palette, Dog, Coffee, Tv, Flower2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import GaleriaEstrutura from "@/components/GaleriaEstrutura";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Recurso {
  id: number;
  nome: string;
  descricao: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

const recursos: Recurso[] = [
  {
    id: 1,
    nome: "Instalações Confortáveis",
    descricao: "Quartos acolhedores e espaços terapêuticos projetados para proporcionar bem-estar e tranquilidade.",
    icon: Home,
    color: "text-blue-600",
    bgColor: "from-blue-500/20 to-blue-500/5",
  },
  {
    id: 2,
    nome: "Alimentação Balanceada",
    descricao: "Cardápios elaborados por nutricionistas, com refeições saudáveis e saborosas para cada fase do tratamento.",
    icon: Utensils,
    color: "text-orange-600",
    bgColor: "from-orange-500/20 to-orange-500/5",
  },
  {
    id: 3,
    nome: "Área Verde",
    descricao: "Amplos espaços verdes e jardins para momentos de reflexão, meditação e conexão com a natureza.",
    icon: TreePine,
    color: "text-green-600",
    bgColor: "from-green-500/20 to-green-500/5",
  },
  {
    id: 4,
    nome: "Atividades Esportivas",
    descricao: "Quadras e espaços para prática de esportes, promovendo saúde física e mental durante a recuperação.",
    icon: Dumbbell,
    color: "text-red-600",
    bgColor: "from-red-500/20 to-red-500/5",
  },
  {
    id: 5,
    nome: "Piscinas",
    descricao: "Piscinas para atividades aquáticas terapêuticas e momentos de lazer e relaxamento.",
    icon: Waves,
    color: "text-cyan-600",
    bgColor: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    id: 6,
    nome: "Passeio a Cavalo",
    descricao: "Equoterapia e passeios a cavalo que auxiliam no tratamento e proporcionam experiências únicas.",
    icon: Heart,
    color: "text-pink-600",
    bgColor: "from-pink-500/20 to-pink-500/5",
  },
  {
    id: 7,
    nome: "Quartos Privativos",
    descricao: "Acomodações individuais e compartilhadas com todo conforto necessário para uma estadia tranquila.",
    icon: Bed,
    color: "text-indigo-600",
    bgColor: "from-indigo-500/20 to-indigo-500/5",
  },
  {
    id: 8,
    nome: "Musicoterapia",
    descricao: "Sessões de musicoterapia para expressão emocional e desenvolvimento de habilidades sociais.",
    icon: Music,
    color: "text-purple-600",
    bgColor: "from-purple-500/20 to-purple-500/5",
  },
  {
    id: 9,
    nome: "Biblioteca",
    descricao: "Espaço de leitura e estudo com acervo variado para momentos de reflexão e aprendizado.",
    icon: BookOpen,
    color: "text-amber-600",
    bgColor: "from-amber-500/20 to-amber-500/5",
  },
  {
    id: 10,
    nome: "Arteterapia",
    descricao: "Atividades artísticas como pintura e desenho para expressão criativa e autoconhecimento.",
    icon: Palette,
    color: "text-rose-600",
    bgColor: "from-rose-500/20 to-rose-500/5",
  },
  {
    id: 11,
    nome: "Pet Terapia",
    descricao: "Interação com animais para reduzir o estresse e promover bem-estar emocional.",
    icon: Dog,
    color: "text-yellow-600",
    bgColor: "from-yellow-500/20 to-yellow-500/5",
  },
  {
    id: 12,
    nome: "Espaço de Convivência",
    descricao: "Áreas comuns para socialização, jogos e momentos de descontração entre os pacientes.",
    icon: Coffee,
    color: "text-teal-600",
    bgColor: "from-teal-500/20 to-teal-500/5",
  },
  {
    id: 13,
    nome: "Sala de TV",
    descricao: "Ambiente confortável para assistir filmes e programas em grupo, promovendo integração.",
    icon: Tv,
    color: "text-slate-600",
    bgColor: "from-slate-500/20 to-slate-500/5",
  },
  {
    id: 14,
    nome: "Jardim Terapêutico",
    descricao: "Espaço dedicado à horticultura e jardinagem como forma de terapia ocupacional.",
    icon: Flower2,
    color: "text-lime-600",
    bgColor: "from-lime-500/20 to-lime-500/5",
  },
];

const EstruturaSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards) return;

    const totalScroll = cards.scrollWidth - cards.clientWidth;

    const ctx = gsap.context(() => {
      gsap.to(cards, {
        x: totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-muted/30 overflow-hidden" id="estrutura">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-hospital-primary font-semibold text-sm uppercase tracking-wider">
            Infraestrutura
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Nossa Estrutura
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Ambientes pensados para o seu conforto e recuperação, com recursos que fazem a diferença no tratamento
          </p>
        </div>

        {/* Cards - Horizontal Scroll */}
        <div 
          ref={cardsRef}
          className="flex gap-6"
          style={{ transform: `translateX(-${recursos.length * 320 - window.innerWidth + 100}px)` }}
        >
          {recursos.map((recurso) => {
            const IconComponent = recurso.icon;
            return (
              <div
                key={recurso.id}
                className="flex-shrink-0 w-[300px] md:w-[350px]"
              >
                <Card
                  className="group relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-card/80 overflow-hidden h-full"
                >
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-hospital-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Decorative corner accent */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-hospital-primary/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                  
                  <CardContent className="p-6 relative z-10">
                    {/* Icon Container */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${recurso.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md group-hover:shadow-lg`}>
                      <IconComponent className={`w-7 h-7 ${recurso.color} transition-colors duration-300`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-hospital-primary transition-colors duration-300">
                      {recurso.nome}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {recurso.descricao}
                    </p>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-hospital-primary/0 via-hospital-primary to-hospital-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Galeria de Fotos - Outside pinned area */}
      <div className="container mx-auto px-4 mt-12">
        <GaleriaEstrutura />
      </div>
    </section>
  );
};

export default EstruturaSection;
