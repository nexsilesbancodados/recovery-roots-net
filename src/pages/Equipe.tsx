import PageLayout from "@/components/PageLayout";
import { Phone, MessageCircle, Stethoscope, Brain, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const especialidades = [
  {
    icon: Stethoscope,
    titulo: "Psiquiatras",
    descricao: "Médicos especialistas em diagnóstico e tratamento de transtornos mentais, com experiência em dependência química.",
  },
  {
    icon: Brain,
    titulo: "Psicólogos",
    descricao: "Profissionais especializados em psicoterapia individual e em grupo, com diversas abordagens terapêuticas.",
  },
  {
    icon: Heart,
    titulo: "Enfermagem 24h",
    descricao: "Equipe de enfermagem especializada em saúde mental, disponível 24 horas para cuidado contínuo.",
  },
  {
    icon: Users,
    titulo: "Terapeutas Ocupacionais",
    descricao: "Profissionais que desenvolvem atividades terapêuticas para reabilitação e reinserção social.",
  },
];

const diferenciais = [
  "Equipe multidisciplinar integrada",
  "Supervisão médica 24 horas",
  "Profissionais com experiência comprovada",
  "Formação contínua da equipe",
  "Abordagem humanizada e sem julgamentos",
  "Protocolos baseados em evidências científicas",
];

const Equipe = () => {
  const openWhatsApp = () => {
    const mensagem = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre a equipe médica do hospital."
    );
    window.open(`https://wa.me/5511955931301?text=${mensagem}`, "_blank");
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-500/10 via-background to-cyan-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nossa Equipe
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Profissionais Especializados
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nossa equipe multidisciplinar é formada por profissionais altamente qualificados, 
              dedicados a oferecer o melhor tratamento com humanidade e competência.
            </p>
            <Button size="lg" onClick={openWhatsApp} className="bg-primary hover:bg-primary/90">
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com a Equipe
            </Button>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Áreas de Atuação
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {especialidades.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Nossos Diferenciais
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {diferenciais.map((diferencial, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{diferencial}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Conheça Nossa Equipe
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende uma visita para conhecer nossas instalações e 
            conversar com nossa equipe sobre o tratamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={openWhatsApp}>
              <Phone className="w-5 h-5 mr-2" />
              Agendar Visita
            </Button>
            <Button size="lg" variant="outline" onClick={openWhatsApp}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Tirar Dúvidas
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Equipe;