import PageLayout from "@/components/PageLayout";
import { Heart, Users, Phone, BookOpen, Shield, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import familiaRecuperacao from "@/assets/familia-recuperacao.png";

const orientacoes = [
  {
    icon: Heart,
    titulo: "Reconheça os Sinais",
    descricao: "Mudanças de comportamento, isolamento, alterações de humor, problemas financeiros inexplicáveis, negligência com aparência e responsabilidades são sinais de alerta.",
  },
  {
    icon: Users,
    titulo: "Não Enfrente Sozinho",
    descricao: "A dependência afeta toda a família. Busque apoio profissional e grupos de apoio para familiares como Al-Anon e Nar-Anon.",
  },
  {
    icon: Shield,
    titulo: "Estabeleça Limites Saudáveis",
    descricao: "Amar não significa permitir comportamentos destrutivos. Limites claros protegem você e incentivam a busca por tratamento.",
  },
  {
    icon: MessageCircle,
    titulo: "Comunicação sem Julgamento",
    descricao: "Expresse preocupação com amor, sem acusações. Use frases como 'Estou preocupado com você' em vez de 'Você está destruindo a família'.",
  },
  {
    icon: BookOpen,
    titulo: "Eduque-se sobre a Doença",
    descricao: "A dependência é uma doença crônica do cérebro, não uma falha de caráter. Entender isso muda a forma como você lida com a situação.",
  },
  {
    icon: Phone,
    titulo: "Saiba Quando Intervir",
    descricao: "Em situações de risco de vida ou quando a pessoa não consegue tomar decisões por si, a internação involuntária pode ser necessária.",
  },
];

import { openWhatsApp as openWhatsAppUtil } from "@/lib/contact";

const ApoioFamilia = () => {
  const handleWhatsApp = () => {
    openWhatsAppUtil("Olá! Sou familiar e preciso de orientação sobre como ajudar meu ente querido.");
  };

  return (
    <PageLayout>
      {/* Hero with Image */}
      <section className="relative w-full">
        <img 
          src={familiaRecuperacao} 
          alt="Família celebrando recuperação"
          className="w-full h-auto"
        />
      </section>

      {/* Orientações */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-primary text-center mb-12">
            Orientações para Familiares
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orientacoes.map((item, index) => {
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

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-primary mb-4">
            Precisa de Ajuda Agora?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nossa equipe está disponível 24 horas para orientar famílias sobre internação, 
            tipos de tratamento e como proceder em situações de emergência.
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

export default ApoioFamilia;
