import { Phone, ClipboardCheck, Home, Stethoscope, Smile } from "lucide-react";

interface Etapa {
  icon: React.ElementType;
  titulo: string;
  descricao: string;
  cor: string;
}

const etapas: Etapa[] = [
  {
    icon: Phone,
    titulo: "1. Contato",
    descricao: "Entre em contato 24h pelo telefone ou WhatsApp. Nossa equipe está pronta para acolher você.",
    cor: "bg-blue-500",
  },
  {
    icon: ClipboardCheck,
    titulo: "2. Avaliação",
    descricao: "Avaliação médica e psicológica para entender suas necessidades e criar um plano personalizado.",
    cor: "bg-green-500",
  },
  {
    icon: Home,
    titulo: "3. Internação",
    descricao: "Acolhimento na unidade mais adequada, com todo suporte necessário para você e sua família.",
    cor: "bg-purple-500",
  },
  {
    icon: Stethoscope,
    titulo: "4. Tratamento",
    descricao: "Programa terapêutico completo com equipe multidisciplinar, terapias e atividades diárias.",
    cor: "bg-orange-500",
  },
  {
    icon: Smile,
    titulo: "5. Alta",
    descricao: "Preparação para a reinserção social com plano de acompanhamento e prevenção de recaídas.",
    cor: "bg-emerald-500",
  },
];

const TimelineInternacao = () => {
  return (
    <section id="como-funciona" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Processo
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Como Funciona a Internação
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Um processo transparente e humanizado, do primeiro contato até a recuperação completa.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Linha conectora */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full" />
          
          <div className="grid grid-cols-5 gap-4">
            {etapas.map((etapa, index) => {
              const IconComponent = etapa.icon;
              return (
                <div key={index} className="relative flex flex-col items-center text-center">
                  {/* Ícone */}
                  <div className={`w-14 h-14 rounded-full ${etapa.cor} flex items-center justify-center text-white shadow-lg z-10`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="mt-6 p-4">
                    <h3 className="font-bold text-foreground mb-2">{etapa.titulo}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {etapa.descricao}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-4">
          {etapas.map((etapa, index) => {
            const IconComponent = etapa.icon;
            return (
              <div key={index} className="flex gap-4 items-start">
                <div className={`w-12 h-12 rounded-full ${etapa.cor} flex-shrink-0 flex items-center justify-center text-white shadow-lg`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex-1 pb-4 border-b border-border last:border-0">
                  <h3 className="font-bold text-foreground mb-1">{etapa.titulo}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {etapa.descricao}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineInternacao;
