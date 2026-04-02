import { Truck, Users, Shield, Heart, Clock, Award } from "lucide-react";

interface Diferencial {
  icon: React.ElementType;
  titulo: string;
  descricao: string;
}

const diferenciais: Diferencial[] = [
  {
    icon: Truck,
    titulo: "Resgate em Todo Brasil",
    descricao: "Equipe especializada disponível 24h para transporte seguro e humanizado em qualquer estado.",
  },
  {
    icon: Users,
    titulo: "Unidade Feminina Exclusiva",
    descricao: "Ambiente dedicado às mulheres com abordagem especializada em questões de gênero.",
  },
  {
    icon: Shield,
    titulo: "Sigilo Absoluto",
    descricao: "Total confidencialidade em todo o processo. Sua privacidade é nossa prioridade.",
  },
  {
    icon: Heart,
    titulo: "Programa 12 Passos",
    descricao: "Metodologia reconhecida mundialmente adaptada com abordagem terapêutica moderna.",
  },
  {
    icon: Clock,
    titulo: "Atendimento 24 Horas",
    descricao: "Equipe médica e de enfermagem disponível dia e noite para qualquer necessidade.",
  },
  {
    icon: Award,
    titulo: "Equipe Multidisciplinar",
    descricao: "Psiquiatras, psicólogos, terapeutas ocupacionais e enfermeiros especializados.",
  },
];

const DiferenciaisSection = () => {
  return (
    <section id="diferenciais" className="py-12 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Diferenciais
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Por que Escolher o Rumo Certo?
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Mais de 20 anos cuidando de vidas com excelência, humanização e resultados comprovados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {diferenciais.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {item.titulo}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.descricao}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
