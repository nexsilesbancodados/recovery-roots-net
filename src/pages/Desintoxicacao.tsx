import PageLayout from "@/components/PageLayout";
import { Pill, Shield, Clock, Stethoscope, Heart, Activity, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const etapas = [
  {
    numero: "01",
    titulo: "Avaliação Médica Completa",
    descricao: "Exames clínicos e laboratoriais para avaliar o estado de saúde e planejar o processo de desintoxicação de forma segura.",
  },
  {
    numero: "02",
    titulo: "Protocolo de Desintoxicação",
    descricao: "Protocolo médico individualizado para manejo dos sintomas de abstinência, com medicação quando necessário.",
  },
  {
    numero: "03",
    titulo: "Monitoramento Contínuo",
    descricao: "Acompanhamento 24 horas por equipe de enfermagem e médicos para garantir segurança durante todo o processo.",
  },
  {
    numero: "04",
    titulo: "Estabilização",
    descricao: "Após a fase aguda, o paciente é estabilizado e preparado para a próxima etapa do tratamento terapêutico.",
  },
];

const diferenciais = [
  {
    icon: Shield,
    titulo: "Segurança em Primeiro Lugar",
    descricao: "Protocolos rigorosos para evitar complicações da abstinência, especialmente em casos de álcool e benzodiazepínicos.",
  },
  {
    icon: Stethoscope,
    titulo: "Equipe Médica 24h",
    descricao: "Médicos clínicos e psiquiatras disponíveis dia e noite para qualquer intercorrência.",
  },
  {
    icon: Pill,
    titulo: "Medicação Adequada",
    descricao: "Uso criterioso de medicamentos para aliviar sintomas e prevenir complicações graves.",
  },
  {
    icon: Heart,
    titulo: "Conforto Durante o Processo",
    descricao: "Ambiente acolhedor e equipe humanizada para tornar esse momento o mais confortável possível.",
  },
  {
    icon: Activity,
    titulo: "Monitoramento de Sinais",
    descricao: "Acompanhamento constante de pressão, frequência cardíaca e outros sinais vitais.",
  },
  {
    icon: Clock,
    titulo: "Tempo Adequado",
    descricao: "Cada organismo responde de forma diferente. Respeitamos o tempo necessário para cada paciente.",
  },
];

import { openWhatsApp as openWhatsAppUtil } from "@/lib/contact";

const Desintoxicacao = () => {
  const handleWhatsApp = () => {
    openWhatsAppUtil("Olá! Preciso de informações sobre o processo de desintoxicação.");
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Primeira Etapa
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Desintoxicação Segura
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A desintoxicação é o primeiro passo da jornada de recuperação. 
              Realizamos esse processo com segurança, supervisão médica constante 
              e todo o suporte necessário para minimizar o desconforto.
            </p>
            <Button size="lg" onClick={handleWhatsApp} className="bg-primary hover:bg-primary/90">
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Etapas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Como Funciona o Processo
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {etapas.map((etapa, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-primary/20 mb-2">
                  {etapa.numero}
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {etapa.titulo}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {etapa.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Nossos Diferenciais
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center mb-4">
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

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Pronto para Dar o Primeiro Passo?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            A desintoxicação é o início de uma nova vida. 
            Entre em contato e nossa equipe vai orientar você sobre todo o processo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleWhatsApp}>
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </Button>
            <Button size="lg" variant="outline" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Desintoxicacao;
