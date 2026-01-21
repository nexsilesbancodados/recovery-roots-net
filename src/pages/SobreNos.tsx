import PageLayout from "@/components/PageLayout";
import { Award, Users, Heart, Target, Shield, Clock, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import sobreNosLogo from "@/assets/sobre-nos-logo.jpg";
const valores = [
  {
    icon: Heart,
    titulo: "Humanização",
    descricao: "Cada paciente é tratado com dignidade, respeito e compaixão, independente de sua condição.",
  },
  {
    icon: Shield,
    titulo: "Ética e Sigilo",
    descricao: "Compromisso absoluto com a confidencialidade e os princípios éticos da medicina.",
  },
  {
    icon: Target,
    titulo: "Excelência",
    descricao: "Busca constante pela melhor prática clínica e atualização profissional contínua.",
  },
  {
    icon: Users,
    titulo: "Trabalho em Equipe",
    descricao: "Abordagem multidisciplinar integrando diferentes especialidades para o cuidado completo.",
  },
];

const historia = [
  {
    ano: "2004",
    titulo: "Fundação",
    descricao: "Início das atividades com foco em tratamento humanizado para dependência química.",
  },
  {
    ano: "2010",
    titulo: "Expansão",
    descricao: "Abertura da unidade feminina exclusiva, pioneira na região.",
  },
  {
    ano: "2015",
    titulo: "Modernização",
    descricao: "Implementação de novos protocolos e ampliação da equipe multidisciplinar.",
  },
  {
    ano: "2020",
    titulo: "Reconhecimento",
    descricao: "Consolidação como referência em saúde mental no interior de São Paulo.",
  },
  {
    ano: "Hoje",
    titulo: "+3000 Vidas",
    descricao: "Mais de 3000 pacientes atendidos com índice de satisfação superior a 98%.",
  },
];

const SobreNos = () => {
  const openWhatsApp = () => {
    const mensagem = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre o Hospital Rumo Certo."
    );
    window.open(`https://wa.me/5511988104793?text=${mensagem}`, "_blank");
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Imagem */}
            <div className="flex justify-center">
              <img
                src={sobreNosLogo}
                alt="Hospital Rumo Certo - Logo Institucional"
                className="w-64 md:w-80 h-auto object-contain"
              />
            </div>
            
            {/* Texto */}
            <div className="text-center md:text-left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Nossa História
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Sobre o Hospital Rumo Certo
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Há mais de 20 anos, o Hospital Rumo Certo dedica-se à recuperação de vidas 
                afetadas pela dependência química e transtornos mentais. 
                Nossa missão é oferecer tratamento humanizado, com excelência técnica e acolhimento genuíno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Nossa Missão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar tratamento integral e humanizado para pessoas com dependência química 
                e transtornos mentais, promovendo a recuperação da saúde, dignidade e reinserção social.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-muted/50 border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Nossa Visão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência nacional em tratamento de saúde mental e dependência química, 
                reconhecidos pela excelência no cuidado, inovação terapêutica e resultados transformadores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Nossos Valores
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border/50 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
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

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Nossa Trajetória
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {historia.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-20 flex-shrink-0 text-right">
                  <span className="font-bold text-primary text-lg">{item.ano}</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div className="flex-1 pb-6 border-b border-border last:border-0">
                  <h3 className="font-bold text-foreground mb-1">{item.titulo}</h3>
                  <p className="text-muted-foreground">{item.descricao}</p>
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
            Conheça Nossa Estrutura
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende uma visita e conheça pessoalmente nossas instalações, 
            equipe e metodologia de tratamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={openWhatsApp}>
              <Phone className="w-5 h-5 mr-2" />
              Agendar Visita
            </Button>
            <Button size="lg" variant="outline" onClick={openWhatsApp}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SobreNos;
