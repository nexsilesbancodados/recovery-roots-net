import { Heart, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import institutoAbaImg from "@/assets/projetos/instituto-aba.png";
import jiuJitsuImg from "@/assets/projetos/jiu-jitsu.png";
import combateDrogasImg from "@/assets/projetos/combate-drogas.png";

const projetos = [
  {
    title: "Instituto São Joaquim - ABA",
    description: "Apoio a crianças com autismo através de terapia ABA (Análise do Comportamento Aplicada), fonoaudiologia e desenvolvimento da comunicação.",
    image: institutoAbaImg,
    icon: Heart,
  },
  {
    title: "Campeonatos de Jiu-Jitsu",
    description: "Patrocínio e organização de campeonatos de Jiu-Jitsu para jovens, promovendo disciplina, autocontrole e inclusão social através do esporte.",
    image: jiuJitsuImg,
    icon: Users,
  },
  {
    title: "Combate às Drogas e Álcool",
    description: "Campanhas de conscientização e prevenção ao uso de drogas e álcool em escolas e comunidades, salvando vidas e transformando famílias.",
    image: combateDrogasImg,
    icon: Shield,
  },
];

const ProjetosSociaisSection = () => {
  return (
    <section id="projetos" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Responsabilidade Social
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Projetos Sociais
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base md:text-lg">
            O Hospital Rumo Certo participa e custeia projetos que transformam vidas e fortalecem nossa comunidade.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projetos.map((projeto, index) => {
            const IconComponent = projeto.icon;
            return (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={projeto.image}
                    alt={projeto.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <div className="p-2 bg-primary rounded-full">
                        <IconComponent size={18} className="text-primary-foreground" fill="currentColor" strokeWidth={1} />
                      </div>
                      <h3 className="font-display font-bold text-xl">{projeto.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-5">
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {projeto.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-base">
            Acreditamos que a recuperação vai além do tratamento individual. 
            <span className="text-primary font-semibold"> Juntos, construímos uma sociedade mais saudável.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjetosSociaisSection;
