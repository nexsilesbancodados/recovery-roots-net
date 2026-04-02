import PageLayout from "@/components/PageLayout";
import { Phone, Clock, MapPin, Shield, Ambulance, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import resgateHumanizado from "@/assets/resgate-humanizado.png";

const diferenciais = [
  {
    icon: Clock,
    titulo: "Atendimento 24 Horas",
    descricao: "Nossa equipe está disponível 24 horas por dia, 7 dias por semana, incluindo feriados.",
  },
  {
    icon: MapPin,
    titulo: "Cobertura Nacional",
    descricao: "Realizamos remoções em todo o território brasileiro com veículos equipados.",
  },
  {
    icon: Shield,
    titulo: "Sigilo Absoluto",
    descricao: "Veículos descaracterizados e equipe treinada para garantir total discrição.",
  },
  {
    icon: Ambulance,
    titulo: "Equipe Especializada",
    descricao: "Profissionais de saúde experientes em abordagem e transporte de pacientes psiquiátricos.",
  },
];

const etapasResgate = [
  {
    numero: "01",
    titulo: "Contato Inicial",
    descricao: "Ligue ou envie mensagem. Nossa equipe vai entender a situação e orientar os próximos passos.",
  },
  {
    numero: "02",
    titulo: "Avaliação Remota",
    descricao: "Colhemos informações sobre o paciente para planejar a abordagem mais adequada.",
  },
  {
    numero: "03",
    titulo: "Deslocamento da Equipe",
    descricao: "Enviamos nossa equipe com veículo adequado ao local indicado.",
  },
  {
    numero: "04",
    titulo: "Abordagem Humanizada",
    descricao: "Nossa equipe realiza a abordagem com respeito, empatia e técnicas não traumáticas.",
  },
  {
    numero: "05",
    titulo: "Transporte Seguro",
    descricao: "Conduzimos o paciente até nossa unidade com acompanhamento profissional durante todo o trajeto.",
  },
];

import { openWhatsApp as openWhatsAppUtil, makeCall, PRIMARY_PHONE, PHONE_DISPLAY } from "@/lib/contact";

const Resgate = () => {
  const handleWhatsApp = () => {
    openWhatsAppUtil("Olá! Preciso de ajuda com resgate/remoção de paciente.");
  };

  const ligarAgora = () => {
    makeCall(PRIMARY_PHONE);
  };

  return (
    <PageLayout>
      {/* Hero with Image */}
      <section className="relative w-full">
        <img 
          src={resgateHumanizado} 
          alt="Equipe de resgate humanizado"
          className="w-full h-auto"
        />
      </section>

      {/* Diferenciais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Por Que Escolher Nosso Serviço
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
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

      {/* Etapas do Resgate */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Como Funciona o Resgate
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {etapasResgate.map((etapa, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-card rounded-2xl border border-border/50"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  {etapa.numero}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">
                    {etapa.titulo}
                  </h3>
                  <p className="text-muted-foreground">
                    {etapa.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Emergência */}
      <section className="py-16 bg-destructive">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-destructive-foreground mb-4">
            Situação de Emergência?
          </h2>
          <p className="text-destructive-foreground/90 mb-8 max-w-2xl mx-auto">
            Não espere. Nossa equipe está pronta para ajudar agora mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={ligarAgora} className="bg-white text-red-600 hover:bg-white/90">
              <Phone className="w-5 h-5 mr-2" />
              {PHONE_DISPLAY.main}
            </Button>
            <Button size="lg" variant="outline" onClick={handleWhatsApp} className="border-white text-white hover:bg-white/10">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp 24h
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Resgate;