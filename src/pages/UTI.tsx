import PageLayout from "@/components/PageLayout";
import { Activity, HeartPulse, Stethoscope, Clock, Shield, Users, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import uptiQuarto from "@/assets/upti-quarto.png";

const recursos = [
  {
    icon: HeartPulse,
    titulo: "Atenção 24 Horas",
    descricao: "Equipe multidisciplinar composta por psiquiatras, enfermeiros, psicólogos e outros profissionais oferece cuidados constantes.",
  },
  {
    icon: Shield,
    titulo: "Ambiente Seguro",
    descricao: "Estrutura adaptada para garantir a segurança dos pacientes, com medidas para prevenir automutilações e situações de risco.",
  },
  {
    icon: Activity,
    titulo: "Tratamento Intensivo",
    descricao: "Intervenções farmacológicas, psicoterapia, contenção emocional e suporte para estabilizar o quadro clínico.",
  },
  {
    icon: Stethoscope,
    titulo: "Gestão de Crises",
    descricao: "Estabilização de crises psicóticas, episódios maníacos ou depressivos graves, e pacientes com risco imediato.",
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
  "Episódios maníacos ou depressivos graves",
  "Quadros de agitação psicomotora intensa",
  "Pacientes com risco imediato para si ou para os outros",
  "Intoxicação aguda grave",
];

import { openWhatsApp as openWhatsAppUtil } from "@/lib/contact";

const UTI = () => {
  const handleWhatsApp = () => {
    openWhatsAppUtil("Olá! Preciso de informações sobre a UPTI e internação de emergência.");
  };

  return (
    <PageLayout>
      {/* Hero with Image */}
      <section className="relative w-full">
        <img 
          src={uptiQuarto} 
          alt="UPTI - Unidade Psiquiátrica de Tratamento Intensivo"
          className="w-full h-auto"
        />
      </section>

      {/* Sobre a UPTI */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Cuidados Intensivos
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
              UPTI - Unidade Psiquiátrica de Tratamento Intensivo
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A UPTI é voltada para o atendimento de pacientes que apresentam transtornos mentais graves, 
              muitas vezes em situações de crise aguda, que requerem monitoramento contínuo e cuidados intensivos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Esse tipo de unidade oferece um nível de cuidado especializado que vai além da internação 
              psiquiátrica convencional, garantindo que o paciente em estado crítico receba o suporte 
              necessário para sua recuperação ou estabilização.
            </p>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-primary text-center mb-12">
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
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
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
            <h2 className="font-display text-3xl font-bold text-primary text-center mb-8">
              Quando a UPTI é Indicada?
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
          <h2 className="font-display text-3xl font-bold text-primary mb-4">
            Emergência Psiquiátrica?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nossa equipe está disponível 24 horas para atendimento emergencial. 
            Em casos de risco de vida, entre em contato imediatamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-destructive hover:bg-destructive/90" onClick={handleWhatsApp}>
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora - Emergência
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

export default UTI;
