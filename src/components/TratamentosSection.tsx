import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, Heart, Brain, Shield, Users, Sparkles, AlertTriangle, Leaf, HandHeart } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Import background images
import bgAlcoolismo from "@/assets/tratamentos/alcoolismo.jpg";
import bgDependenciaQuimica from "@/assets/tratamentos/dependencia-quimica.jpg";
import bgDependenciaFeminina from "@/assets/tratamentos/dependencia-feminina.jpg";
import bgDepressao from "@/assets/tratamentos/depressao.jpg";
import bgEsquizofrenia from "@/assets/tratamentos/esquizofrenia.jpg";
import bgFarmacodependencia from "@/assets/tratamentos/farmacodependencia.jpg";
import bgPrevencaoSuicidio from "@/assets/tratamentos/prevencao-suicidio.jpg";
import bgSaudeMental from "@/assets/tratamentos/saude-mental.jpg";

gsap.registerPlugin(ScrollTrigger);

interface Tratamento {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDescription: string;
  fullDescription: string;
  howWeHelp: string[];
  color: string;
  bgImage?: string;
}

const tratamentos: Tratamento[] = [
  {
    id: "alcoolismo",
    title: "Alcoolismo",
    icon: <Shield className="w-8 h-8" />,
    shortDescription: "Tratamento especializado para dependência alcoólica com abordagem humanizada",
    fullDescription: "O alcoolismo é uma doença crônica e progressiva que afeta não apenas o indivíduo, mas toda a sua rede familiar e social. No Hospital Rumo Certo, entendemos que cada pessoa tem uma história única e merece um tratamento personalizado. Nossa equipe multidisciplinar trabalha com protocolos baseados em evidências científicas, combinando desintoxicação segura, psicoterapia intensiva e acompanhamento médico 24 horas. Acreditamos na recuperação como um processo de transformação de vida, não apenas de abstinência.",
    howWeHelp: [
      "Desintoxicação supervisionada com monitoramento médico 24h e manejo seguro da síndrome de abstinência",
      "Psicoterapia individual focada em gatilhos emocionais e padrões de comportamento",
      "Terapia em grupo com metodologia dos 12 passos adaptada e dinâmicas de partilha",
      "Programa de orientação e terapia familiar para reconstrução de vínculos",
      "Plano de prevenção de recaídas personalizado e acompanhamento pós-alta"
    ],
    color: "from-amber-500 to-orange-600",
    bgImage: bgAlcoolismo
  },
  {
    id: "dependencia-quimica",
    title: "Dependência Química",
    icon: <Brain className="w-8 h-8" />,
    shortDescription: "Recuperação integral com foco na reinserção social e qualidade de vida",
    fullDescription: "A dependência química é uma condição complexa que envolve fatores biológicos, psicológicos e sociais. No Hospital Rumo Certo, oferecemos um programa de tratamento completo que vai além da desintoxicação. Nossa abordagem terapêutica trabalha as causas profundas da dependência, ajudando o paciente a desenvolver novas habilidades de enfrentamento, reconstruir relacionamentos e redescobrir propósito de vida. O ambiente acolhedor e seguro favorece a recuperação genuína e duradoura.",
    howWeHelp: [
      "Avaliação médica e psiquiátrica completa para diagnóstico preciso e plano terapêutico individualizado",
      "Terapia cognitivo-comportamental para identificação e modificação de padrões destrutivos",
      "Atividades terapêuticas ocupacionais: arte, música, esportes e jardinagem",
      "Programa de espiritualidade respeitando crenças individuais como ferramenta de fortalecimento",
      "Reinserção social assistida com orientação vocacional e apoio na reconstrução de vida"
    ],
    color: "from-blue-500 to-indigo-600",
    bgImage: bgDependenciaQuimica
  },
  {
    id: "dependencia-feminina",
    title: "Dependência Química Feminina",
    icon: <Heart className="w-8 h-8" />,
    shortDescription: "Ambiente exclusivo que acolhe as particularidades da mulher em recuperação",
    fullDescription: "Mulheres enfrentam desafios únicos na jornada de recuperação da dependência química. Questões como maternidade, relacionamentos abusivos, traumas de violência e a pressão social exigem uma abordagem especializada e sensível. O Hospital Rumo Certo oferece um programa exclusivo feminino, com ambiente protegido e equipe preparada para acolher essas especificidades. Trabalhamos o empoderamento, a autoestima e a reconstrução da identidade feminina, oferecendo suporte integral para mães em recuperação.",
    howWeHelp: [
      "Ambiente exclusivo feminino com segurança e privacidade para tratamento focado",
      "Abordagem terapêutica das questões de gênero, traumas e relacionamentos",
      "Suporte especializado para mães, incluindo orientação sobre guarda e vínculos familiares",
      "Grupos de empoderamento feminino e reconstrução da autoestima",
      "Tratamento de transtornos associados: ansiedade, depressão e transtornos alimentares"
    ],
    color: "from-pink-500 to-rose-600",
    bgImage: bgDependenciaFeminina
  },
  {
    id: "depressao",
    title: "Depressão",
    icon: <Sparkles className="w-8 h-8" />,
    shortDescription: "Tratamento multidisciplinar para recuperar a alegria de viver",
    fullDescription: "A depressão é muito mais que tristeza: é uma doença que afeta o corpo, a mente e a alma, roubando energia, motivação e esperança. No Hospital Rumo Certo, oferecemos um tratamento integral que combina psiquiatria de ponta, psicoterapia intensiva e atividades terapêuticas que reconectam o paciente consigo mesmo e com a vida. Nossa equipe acolhe cada pessoa com compaixão, respeitando seu tempo e trabalhando para que ela redescubra suas forças internas e o prazer de viver.",
    howWeHelp: [
      "Avaliação psiquiátrica detalhada com ajuste medicamentoso preciso e acompanhamento contínuo",
      "Psicoterapia individual e em grupo com técnicas de TCC, ACT e terapia interpessoal",
      "Atividades de ressocialização e reconexão: arte-terapia, musicoterapia e atividades ao ar livre",
      "Práticas de mindfulness, meditação e técnicas de regulação emocional",
      "Orientação familiar para criar rede de apoio sólida na recuperação"
    ],
    color: "from-violet-500 to-purple-600",
    bgImage: bgDepressao
  },
  {
    id: "esquizofrenia",
    title: "Esquizofrenia",
    icon: <Brain className="w-8 h-8" />,
    shortDescription: "Cuidado humanizado para estabilização e qualidade de vida",
    fullDescription: "A esquizofrenia é um transtorno mental grave, mas tratável. Com o acompanhamento adequado, pessoas com esquizofrenia podem ter uma vida plena e significativa. No Hospital Rumo Certo, oferecemos tratamento especializado com foco na estabilização dos sintomas, adesão ao tratamento medicamentoso e desenvolvimento de habilidades para o dia a dia. Nossa equipe trabalha em parceria com a família, oferecendo orientação e suporte para que todos compreendam a condição e participem ativamente do processo de recuperação.",
    howWeHelp: [
      "Estabilização medicamentosa com antipsicóticos de última geração e monitoramento de efeitos",
      "Acompanhamento psiquiátrico contínuo com ajustes terapêuticos personalizados",
      "Terapia ocupacional focada em habilidades sociais e atividades da vida diária",
      "Psicoeducação familiar: entendendo a doença, sinais de crise e como apoiar",
      "Reabilitação psicossocial visando autonomia e reinserção comunitária"
    ],
    color: "from-teal-500 to-cyan-600",
    bgImage: bgEsquizofrenia
  },
  {
    id: "farmacodependencia",
    title: "Farmacodependência",
    icon: <AlertTriangle className="w-8 h-8" />,
    shortDescription: "Desmame seguro e tratamento da dependência de medicamentos",
    fullDescription: "A dependência de medicamentos prescritos — como benzodiazepínicos, opioides e estimulantes — é uma realidade silenciosa que afeta milhares de pessoas. Muitas vezes iniciada com uma prescrição médica legítima, a farmacodependência desenvolve-se gradualmente e pode ser tão devastadora quanto qualquer outra dependência. O Hospital Rumo Certo oferece um programa especializado de desmame seguro, com protocolos médicos rigorosos que minimizam o desconforto da abstinência, além de tratamento das condições subjacentes que levaram ao uso.",
    howWeHelp: [
      "Desmame gradual e supervisionado com protocolos que minimizam sintomas de abstinência",
      "Substituição medicamentosa quando indicada, com transição segura para alternativas",
      "Tratamento da condição original: dor crônica, ansiedade, insônia ou outros transtornos",
      "Psicoterapia focada em estratégias alternativas de manejo sem dependência de substâncias",
      "Educação sobre uso responsável de medicamentos e prevenção de recaídas"
    ],
    color: "from-red-500 to-rose-600",
    bgImage: bgFarmacodependencia
  },
  {
    id: "prevencao-suicidio",
    title: "Prevenção ao Suicídio",
    icon: <HandHeart className="w-8 h-8" />,
    shortDescription: "Acolhimento urgente e especializado para momentos de crise",
    fullDescription: "Quando a dor emocional se torna insuportável, é essencial ter um lugar seguro para buscar ajuda. O Hospital Rumo Certo oferece acolhimento especializado para pessoas em sofrimento intenso e com ideação suicida. Nossa equipe é treinada em intervenção em crise e trabalha com compaixão e sem julgamentos. O ambiente protegido permite que o paciente encontre alívio do sofrimento enquanto desenvolve, junto à equipe, um plano de segurança e novas perspectivas de vida. A vida vale a pena ser vivida — estamos aqui para ajudar você a redescobrir isso.",
    howWeHelp: [
      "Acolhimento imediato 24 horas em ambiente seguro e livre de julgamentos",
      "Monitoramento contínuo com equipe especializada em prevenção ao suicídio",
      "Intervenção em crise com técnicas de estabilização emocional e DBT",
      "Psicoterapia intensiva para tratamento de desesperança, trauma e transtornos associados",
      "Construção de plano de segurança personalizado e rede de apoio para pós-alta"
    ],
    color: "from-emerald-500 to-green-600",
    bgImage: bgPrevencaoSuicidio
  },
  {
    id: "saude-mental",
    title: "Saúde Mental",
    icon: <Leaf className="w-8 h-8" />,
    shortDescription: "Programa integral para equilíbrio emocional e bem-estar",
    fullDescription: "A saúde mental é tão importante quanto a saúde física — e ambas estão profundamente conectadas. O Hospital Rumo Certo oferece um programa abrangente para pessoas que buscam recuperar ou fortalecer seu bem-estar emocional. Seja para tratar ansiedade, burnout, crises de pânico, transtorno bipolar ou simplesmente para um período de autocuidado intensivo, nossa abordagem holística integra psiquiatria, psicoterapia, práticas integrativas e atividades que reconectam corpo e mente. Aqui, você encontra espaço para se cuidar e se redescobrir.",
    howWeHelp: [
      "Avaliação multidisciplinar completa: psiquiátrica, psicológica e clínica",
      "Plano terapêutico personalizado conforme diagnóstico e objetivos individuais",
      "Grupos terapêuticos temáticos: ansiedade, regulação emocional, autoconhecimento",
      "Práticas integrativas: yoga, meditação, acupuntura e fitoterapia complementar",
      "Programa de alta assistida com acompanhamento ambulatorial contínuo"
    ],
    color: "from-green-500 to-emerald-600",
    bgImage: bgSaudeMental
  }
];

const TratamentosSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [selectedTratamento, setSelectedTratamento] = useState<Tratamento | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    if (!section || !trigger) return;

    const cards = section.querySelector(".cards-container") as HTMLElement;
    if (!cards) return;

    // Wait for layout to settle
    const timeout = setTimeout(() => {
      const totalWidth = cards.scrollWidth - window.innerWidth;

      const ctx = gsap.context(() => {
        gsap.to(cards, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            start: "top top",
            end: () => `+=${totalWidth * 1.2}`,
            pin: true,
            pinSpacing: true,
            scrub: 0.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          }
        });
      }, section);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <section 
        ref={sectionRef} 
        id="tratamentos" 
        className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 z-20"
      >
        <div ref={triggerRef} className="min-h-screen overflow-hidden pb-16">
          {/* Header */}
          <div className="pt-12 pb-8 px-4">
            <div className="container mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Especialidades
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-1 mb-3">
                Tratamentos Oferecidos
              </h2>
              <p className="text-muted-foreground text-base max-w-xl">
                Oferecemos tratamento especializado e humanizado para diversas condições.
              </p>
            </div>
          </div>

          {/* Horizontal Scroll Cards */}
          <div className="cards-container flex gap-6 pl-4 md:pl-12 pr-32 items-center min-h-[60vh]">
{tratamentos.map((tratamento) => (
              <div
                key={tratamento.id}
                onClick={() => setSelectedTratamento(tratamento)}
                className={`
                  flex-shrink-0 w-72 md:w-80 h-64 rounded-2xl p-6 cursor-pointer
                  text-white relative overflow-hidden
                  transform transition-all duration-300
                  hover:scale-105 hover:shadow-2xl hover:-translate-y-2
                  flex flex-col justify-between
                  group
                `}
              >
                {/* Background - Image or Gradient */}
                {tratamento.bgImage ? (
                  <>
                    <img 
                      src={tratamento.bgImage} 
                      alt={tratamento.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                  </>
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${tratamento.color}`} />
                )}
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
                    {tratamento.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3">
                    {tratamento.title}
                  </h3>
                  <p className="text-white/95 text-base leading-relaxed">
                    {tratamento.shortDescription}
                  </p>
                </div>
                <div className="relative z-10 flex items-center gap-2 text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                  <span>Saiba mais</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground animate-pulse">
            <span className="text-xs mb-1">Role para explorar</span>
            <div className="flex gap-1">
              <span>←</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Detalhes */}
      <Dialog open={!!selectedTratamento} onOpenChange={() => setSelectedTratamento(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          {selectedTratamento && (
            <>
              <DialogHeader>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedTratamento.color} flex items-center justify-center text-white mb-4`}>
                  {selectedTratamento.icon}
                </div>
                <DialogTitle className="font-display text-2xl">
                  {selectedTratamento.title}
                </DialogTitle>
                <DialogDescription className="text-base text-foreground/80 mt-2">
                  {selectedTratamento.fullDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Como o Hospital Rumo Certo Ajuda
                </h4>
                <ul className="space-y-3">
                  {selectedTratamento.howWeHelp.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className={`w-6 h-6 rounded-full bg-gradient-to-br ${selectedTratamento.color} text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5`}>
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t">
                <button
                  className={`w-full py-3 rounded-xl bg-gradient-to-r ${selectedTratamento.color} text-white font-semibold hover:opacity-90 transition-opacity`}
                >
                  Agende uma Consulta
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TratamentosSection;
