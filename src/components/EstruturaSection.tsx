import { Home, Utensils, TreePine, Dumbbell, Waves, Heart, Bed, Music, BookOpen, Palette, Dog, Coffee, Tv, Flower2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import GaleriaEstrutura from "@/components/GaleriaEstrutura";

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
    color: "text-primary",
    bgColor: "from-primary/20 to-primary/5",
  },
  {
    id: 2,
    nome: "Alimentação Balanceada",
    descricao: "Cardápios elaborados por nutricionistas, com refeições saudáveis e saborosas para cada fase do tratamento.",
    icon: Utensils,
    color: "text-secondary",
    bgColor: "from-secondary/20 to-secondary/5",
  },
  {
    id: 3,
    nome: "Área Verde",
    descricao: "Amplos espaços verdes e jardins para momentos de reflexão, meditação e conexão com a natureza.",
    icon: TreePine,
    color: "text-primary",
    bgColor: "from-primary/20 to-primary/5",
  },
  {
    id: 4,
    nome: "Atividades Esportivas",
    descricao: "Quadras e espaços para prática de esportes, promovendo saúde física e mental durante a recuperação.",
    icon: Dumbbell,
    color: "text-destructive",
    bgColor: "from-destructive/20 to-destructive/5",
  },
  {
    id: 5,
    nome: "Piscinas",
    descricao: "Piscinas para atividades aquáticas terapêuticas e momentos de lazer e relaxamento.",
    icon: Waves,
    color: "text-accent",
    bgColor: "from-accent/20 to-accent/5",
  },
  {
    id: 6,
    nome: "Passeio a Cavalo",
    descricao: "Equoterapia e passeios a cavalo que auxiliam no tratamento e proporcionam experiências únicas.",
    icon: Heart,
    color: "text-secondary",
    bgColor: "from-secondary/20 to-secondary/5",
  },
  {
    id: 7,
    nome: "Quartos Privativos",
    descricao: "Acomodações individuais e compartilhadas com todo conforto necessário para uma estadia tranquila.",
    icon: Bed,
    color: "text-accent",
    bgColor: "from-accent/20 to-accent/5",
  },
  {
    id: 8,
    nome: "Musicoterapia",
    descricao: "Sessões de musicoterapia para expressão emocional e desenvolvimento de habilidades sociais.",
    icon: Music,
    color: "text-primary",
    bgColor: "from-primary/20 to-primary/5",
  },
  {
    id: 9,
    nome: "Biblioteca",
    descricao: "Espaço de leitura e estudo com acervo variado para momentos de reflexão e aprendizado.",
    icon: BookOpen,
    color: "text-secondary",
    bgColor: "from-secondary/20 to-secondary/5",
  },
  {
    id: 10,
    nome: "Arteterapia",
    descricao: "Atividades artísticas como pintura e desenho para expressão criativa e autoconhecimento.",
    icon: Palette,
    color: "text-destructive",
    bgColor: "from-destructive/20 to-destructive/5",
  },
  {
    id: 11,
    nome: "Pet Terapia",
    descricao: "Interação com animais para reduzir o estresse e promover bem-estar emocional.",
    icon: Dog,
    color: "text-secondary",
    bgColor: "from-secondary/20 to-secondary/5",
  },
  {
    id: 12,
    nome: "Espaço de Convivência",
    descricao: "Áreas comuns para socialização, jogos e momentos de descontração entre os pacientes.",
    icon: Coffee,
    color: "text-accent",
    bgColor: "from-accent/20 to-accent/5",
  },
  {
    id: 13,
    nome: "Sala de TV",
    descricao: "Ambiente confortável para assistir filmes e programas em grupo, promovendo integração.",
    icon: Tv,
    color: "text-muted-foreground",
    bgColor: "from-muted/40 to-muted/10",
  },
  {
    id: 14,
    nome: "Jardim Terapêutico",
    descricao: "Espaço dedicado à horticultura e jardinagem como forma de terapia ocupacional.",
    icon: Flower2,
    color: "text-primary",
    bgColor: "from-primary/20 to-primary/5",
  },
];

const EstruturaSection = () => {
  return (
    <section className="relative z-30 py-12 sm:py-16 bg-muted/30 overflow-hidden" id="estrutura">
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
        </div>
      </div>

      {/* Desktop & Tablet: Grid layout */}
      <div className="hidden sm:block container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recursos.map((recurso) => {
            const IconComponent = recurso.icon;
            return (
              <Card
                key={recurso.id}
                className="group relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-card/80 overflow-hidden"
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
            );
          })}
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
