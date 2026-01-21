import PageLayout from "@/components/PageLayout";
import { Activity, HeartPulse, Stethoscope, Clock, Shield, Users, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const recursos = [
  {
    icon: HeartPulse,
    titulo: "Monitoramento 24 Horas",
    descricao: "Acompanhamento contínuo de sinais vitais com equipamentos de última geração e equipe de enfermagem especializada.",
  },
  {
    icon: Stethoscope,
    titulo: "Equipe Médica Especializada",
    descricao: "Psiquiatras, clínicos gerais e enfermeiros com experiência em cuidados intensivos psiquiátricos.",
  },
  {
    icon: Activity,
    titulo: "Estabilização de Crises",
    descricao: "Manejo seguro de quadros agudos, surtos psicóticos, ideação suicida e abstinência grave.",
  },
  {
    icon: Shield,
    titulo: "Ambiente Protegido",
    descricao: "Instalações projetadas para segurança do paciente, com supervisão constante e protocolos rigorosos.",
  },
  {
    icon: Clock,
    titulo: "Atendimento Imediato",
    descricao: "Disponibilidade 24 horas para admissões emergenciais, incluindo resgate em todo o Brasil.",
  },
  {
    icon: Users,
    titulo: "Suporte Familiar",
    descricao: "Comunicação constante com a família sobre evolução do quadro e orientações para visitas.",
  },
];

const indicacoes = [
  "Síndrome de abstinência alcoólica grave (risco de delirium tremens)",
  "Abstinência de benzodiazepínicos ou opioides",
  "Surtos psicóticos agudos",
  "Ideação suicida com risco iminente",
  "Quadros de agitação psicomotora intensa",
  "Comorbidades clínicas que exigem monitoramento",
  "Intoxicação aguda grave",
  "Recusa alimentar com risco nutricional",
];

const UTI = () => {
  const openWhatsApp = () => {
    const mensagem = encodeURIComponent(
      "Olá! Preciso de informações sobre a UTI Psiquiátrica e internação de emergência."
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
              Cuidados Intensivos
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              UTI Psiquiátrica
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Unidade de Terapia Intensiva especializada em saúde mental, 
              oferecendo cuidados de alta complexidade para quadros psiquiátricos agudos 
              que exigem monitoramento contínuo e intervenção especializada.
            </p>
            <Button size="lg" onClick={openWhatsApp} className="bg-primary hover:bg-primary/90">
              <Phone className="w-5 h-5 mr-2" />
              Emergência 24h
            </Button>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Estrutura e Recursos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recursos.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Indicações */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Quando a UTI é Indicada?
            </h2>
            
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <ul className="space-y-3">
                {indicacoes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Emergência Psiquiátrica?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nossa equipe está disponível 24 horas para atendimento emergencial. 
            Em casos de risco de vida, entre em contato imediatamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700" onClick={openWhatsApp}>
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora - Emergência
            </Button>
            <Button size="lg" variant="outline" onClick={openWhatsApp}>
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default UTI;
