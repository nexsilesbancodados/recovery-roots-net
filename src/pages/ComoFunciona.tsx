import PageLayout from "@/components/PageLayout";
import { Phone, ClipboardCheck, Home, Stethoscope, Smile, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import grupoApoio from "@/assets/grupo-apoio.png";

const etapas = [
  {
    icon: Phone,
    numero: "01",
    titulo: "Primeiro Contato",
    descricao: "Entre em contato por telefone ou WhatsApp, disponível 24 horas. Nossa equipe de acolhimento vai ouvir sua situação com empatia e sigilo absoluto.",
    detalhes: [
      "Atendimento humanizado e sem julgamentos",
      "Orientação sobre tipos de internação",
      "Esclarecimento de dúvidas sobre convênios",
      "Agendamento de avaliação presencial",
    ],
  },
  {
    icon: ClipboardCheck,
    numero: "02",
    titulo: "Avaliação Inicial",
    descricao: "Avaliação médica e psicológica completa para entender as necessidades específicas do paciente e elaborar o plano terapêutico individualizado.",
    detalhes: [
      "Anamnese detalhada com histórico clínico",
      "Avaliação psiquiátrica",
      "Exames laboratoriais quando necessário",
      "Definição do plano de tratamento",
    ],
  },
  {
    icon: Home,
    numero: "03",
    titulo: "Acolhimento",
    descricao: "Recepção do paciente na unidade mais adequada ao seu perfil, com todo o suporte necessário para adaptação ao ambiente terapêutico.",
    detalhes: [
      "Apresentação das instalações e equipe",
      "Orientação sobre a rotina de tratamento",
      "Suporte emocional para paciente e família",
      "Início do processo de desintoxicação (se necessário)",
    ],
  },
  {
    icon: Stethoscope,
    numero: "04",
    titulo: "Tratamento Intensivo",
    descricao: "Programa terapêutico completo com atividades diárias, terapias individuais e em grupo, acompanhamento médico e atividades complementares.",
    detalhes: [
      "Psicoterapia individual e em grupo",
      "Programa de 12 Passos adaptado",
      "Atividades terapêuticas (arte, música, esportes)",
      "Acompanhamento psiquiátrico e medicamentoso",
    ],
  },
  {
    icon: Smile,
    numero: "05",
    titulo: "Preparação para Alta",
    descricao: "Fase de consolidação do tratamento com foco na reinserção social, prevenção de recaídas e fortalecimento da rede de apoio.",
    detalhes: [
      "Plano de prevenção de recaídas personalizado",
      "Orientação familiar para continuidade do cuidado",
      "Encaminhamento para acompanhamento ambulatorial",
      "Grupos de apoio e recursos pós-tratamento",
    ],
  },
];

const tiposInternacao = [
  {
    titulo: "Internação Voluntária",
    descricao: "Quando o paciente reconhece a necessidade de tratamento e aceita ser internado por vontade própria.",
    indicacao: "Pacientes com consciência da doença e motivação para o tratamento.",
  },
  {
    titulo: "Internação Involuntária",
    descricao: "Realizada sem o consentimento do paciente, mediante laudo médico e comunicação ao Ministério Público.",
    indicacao: "Casos de risco para si ou terceiros, quando o paciente não tem condições de decidir.",
  },
  {
    titulo: "Internação Compulsória",
    descricao: "Determinada por ordem judicial, geralmente em casos de reincidência ou situações de maior gravidade.",
    indicacao: "Determinação judicial após avaliação de autoridades competentes.",
  },
];

const ComoFunciona = () => {
  const openWhatsApp = () => {
    const mensagem = encodeURIComponent(
      "Olá! Gostaria de entender como funciona o processo de internação."
    );
    window.open(`https://wa.me/5511955931301?text=${mensagem}`, "_blank");
  };

  return (
    <PageLayout>
      {/* Hero with Image */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={grupoApoio} 
            alt="Grupo de apoio mútuo - Recuperação e esperança"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </section>

      {/* Etapas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Etapas do Tratamento
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {etapas.map((etapa, index) => {
              const IconComponent = etapa.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-4xl font-bold text-primary/20 md:hidden">
                      {etapa.numero}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="hidden md:block text-sm font-bold text-primary/50">
                        ETAPA {etapa.numero}
                      </span>
                      <h3 className="font-bold text-xl text-foreground">
                        {etapa.titulo}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {etapa.descricao}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {etapa.detalhes.map((detalhe, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {detalhe}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tipos de Internação */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
            Tipos de Internação
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A Lei 10.216/2001 prevê três modalidades de internação psiquiátrica, 
            cada uma adequada a diferentes situações.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiposInternacao.map((tipo, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-lg text-foreground mb-3">
                  {tipo.titulo}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {tipo.descricao}
                </p>
                <div className="pt-4 border-t border-border">
                  <span className="text-xs font-medium text-primary uppercase">Indicação:</span>
                  <p className="text-sm text-foreground mt-1">{tipo.indicacao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nossa equipe está disponível 24 horas para esclarecer suas dúvidas 
            e orientar sobre o melhor caminho para cada caso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={openWhatsApp}>
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </Button>
            <Button size="lg" variant="outline" onClick={openWhatsApp}>
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Avaliação
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ComoFunciona;
