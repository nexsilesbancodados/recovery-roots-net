import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    pergunta: "Quanto tempo dura o tratamento?",
    resposta: "A duração varia conforme o caso e a evolução do paciente. Em média, os tratamentos têm duração de 30 a 90 dias, mas cada plano terapêutico é personalizado para atender às necessidades individuais.",
  },
  {
    pergunta: "Como funciona a internação involuntária?",
    resposta: "A internação involuntária é realizada conforme a Lei 10.216/2001, mediante laudo médico e comunicação ao Ministério Público em até 72 horas. Nossa equipe orienta a família em todo o processo, garantindo que seja feito de forma ética e humanizada.",
  },
  {
    pergunta: "Quais convênios são aceitos?",
    resposta: "Aceitamos os principais convênios do Brasil, incluindo Bradesco Saúde, Porto Saúde, Care Plus, Cassi, entre outros. Entre em contato para confirmar a cobertura do seu plano.",
  },
  {
    pergunta: "Posso visitar meu familiar durante o tratamento?",
    resposta: "Sim, temos dias e horários específicos para visitas, pois entendemos a importância do vínculo familiar na recuperação. As visitas são orientadas pela equipe terapêutica.",
  },
  {
    pergunta: "O tratamento é sigiloso?",
    resposta: "Sim, garantimos total sigilo e confidencialidade. Todas as informações do paciente são protegidas pelo sigilo médico e nossa equipe é treinada para manter a privacidade absoluta.",
  },
  {
    pergunta: "Vocês fazem resgate em outras cidades?",
    resposta: "Sim, realizamos resgate em todo o Brasil com equipe especializada e veículos adequados. O transporte é feito de forma segura e humanizada, 24 horas por dia.",
  },
  {
    pergunta: "Como é a alimentação durante a internação?",
    resposta: "Oferecemos cardápios balanceados elaborados por nutricionistas, com opções para dietas especiais. A alimentação saudável é parte importante do tratamento.",
  },
  {
    pergunta: "Existe acompanhamento após a alta?",
    resposta: "Sim, oferecemos programa de acompanhamento pós-tratamento com consultas ambulatoriais, grupos de apoio e orientação familiar para prevenção de recaídas.",
  },
  {
    pergunta: "Qual a diferença entre as unidades masculina e feminina?",
    resposta: "As unidades são separadas para proporcionar um ambiente mais adequado às necessidades específicas de cada gênero. A unidade feminina conta com abordagem especializada em questões da mulher.",
  },
  {
    pergunta: "Como posso agendar uma visita à clínica?",
    resposta: "Você pode agendar uma visita pelo telefone, WhatsApp ou através do formulário em nosso site. Nossa equipe terá prazer em apresentar as instalações e esclarecer todas as dúvidas.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o tratamento, processo de internação e estrutura.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-5 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-4">
                  {faq.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
