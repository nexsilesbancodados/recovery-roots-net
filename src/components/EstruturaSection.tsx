import { useEffect, useRef } from "react";
import { Home, Utensils, TreePine, Dumbbell, Waves, Heart, Bed, Music, BookOpen, Palette, Dog, Coffee, Tv, Flower2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import GaleriaEstrutura from "@/components/GaleriaEstrutura";
import gsap from "gsap";
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
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    const cardsWrapper = cardsWrapperRef.current;
    
    if (!section || !cardsContainer || !cardsWrapper) return;

    // Check screen size - disable GSAP pinning on tablets and mobile
    const isSmallScreen = window.innerWidth < 1024;
    
    if (isSmallScreen) return; // Skip GSAP on mobile/tablet

    const ctx = gsap.context(() => {
      // Calculate scroll distance
      const scrollWidth = cardsWrapper.scrollWidth - cardsContainer.offsetWidth;

      // Start from the right (negative position) and scroll to the left (0)
      gsap.set(cardsWrapper, { x: -scrollWidth });
      
      // Pin the section and scroll horizontally TO THE RIGHT
      gsap.to(cardsWrapper, {
        x: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative z-30 py-12 sm:py-16 bg-muted/30 lg:min-h-screen lg:flex lg:flex-col lg:justify-center overflow-hidden" id="estrutura">
      {/* Header */}
      <div className="container mx-auto px-4 mb-6 sm:mb-8">
        <div className="text-center lg:text-left lg:max-w-xl">
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Infraestrutura
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-2">
            Nossa Estrutura
          </h2>
          <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
            Ambientes pensados para o seu conforto e recuperação
          </p>
          <div className="hidden lg:flex items-center gap-2 text-muted-foreground text-sm mt-4">
            <span>→</span>
            <span>Role para explorar</span>
            <span>←</span>
          </div>
        </div>
      </div>

      {/* Desktop: Horizontal scroll with GSAP */}
      <div ref={cardsContainerRef} className="hidden lg:block overflow-hidden flex-1">
        <div ref={cardsWrapperRef} className="flex gap-6 px-8 py-4 w-max">
          {recursos.map((recurso) => {
            const IconComponent = recurso.icon;
            return (
              <div
                key={recurso.id}
                className="flex-shrink-0 w-[320px]"
              >
                <Card
                  className="group relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-card/80 overflow-hidden h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                  
                  <CardContent className="p-6 relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${recurso.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md group-hover:shadow-lg`}>
                      <IconComponent className={`w-7 h-7 ${recurso.color} transition-colors duration-300`} />
                    </div>

                    <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {recurso.nome}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {recurso.descricao}
                    </p>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tablet: Horizontal scroll with touch */}
      <div className="hidden sm:block lg:hidden overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
        <div className="flex gap-4 min-w-max px-4">
          {recursos.map((recurso) => {
            const IconComponent = recurso.icon;
            return (
              <div
                key={recurso.id}
                className="flex-shrink-0 w-[280px]"
              >
                <Card
                  className="group relative border-0 shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-card/80 overflow-hidden h-full"
                >
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full" />
                  
                  <CardContent className="p-5 relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${recurso.bgColor} flex items-center justify-center mb-3 shadow-md`}>
                      <IconComponent className={`w-6 h-6 ${recurso.color}`} />
                    </div>

                    <h3 className="text-base font-display font-bold text-foreground mb-2">
                      {recurso.nome}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {recurso.descricao}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-3 text-muted-foreground">
          <div className="flex items-center gap-2 text-xs">
            <span>←</span>
            <span>Arraste para ver mais</span>
            <span>→</span>
          </div>
        </div>
      </div>

      {/* Mobile: Vertical grid */}
      <div className="sm:hidden px-4">
        <div className="grid grid-cols-1 gap-3">
          {recursos.slice(0, 6).map((recurso) => {
            const IconComponent = recurso.icon;
            return (
              <Card
                key={recurso.id}
                className="group relative border-0 shadow-md bg-gradient-to-br from-card to-card/80 overflow-hidden"
              >
                <CardContent className="p-4 relative z-10 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${recurso.bgColor} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <IconComponent className={`w-6 h-6 ${recurso.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-display font-bold text-foreground mb-1">
                      {recurso.nome}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {recurso.descricao}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4">
          E muito mais recursos para sua recuperação
        </p>
      </div>

      {/* Galeria de Fotos */}
      <div className="container mx-auto px-4 mt-8 sm:mt-12">
        <GaleriaEstrutura />
      </div>
    </section>
  );
};

export default EstruturaSection;
