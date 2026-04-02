import { Quote, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

// Import avatars
import avatar1 from "@/assets/depoimentos/avatar-1.jpg";
import avatar2 from "@/assets/depoimentos/avatar-2.jpg";
import avatar3 from "@/assets/depoimentos/avatar-3.jpg";
import avatar4 from "@/assets/depoimentos/avatar-4.jpg";
import avatar5 from "@/assets/depoimentos/avatar-5.jpg";
import avatar6 from "@/assets/depoimentos/avatar-6.jpg";
import avatar7 from "@/assets/depoimentos/avatar-7.jpg";
import avatar8 from "@/assets/depoimentos/avatar-8.jpg";
import avatar9 from "@/assets/depoimentos/avatar-9.jpg";
import avatar10 from "@/assets/depoimentos/avatar-10.jpg";
import avatar11 from "@/assets/depoimentos/avatar-11.jpg";
import avatar12 from "@/assets/depoimentos/avatar-12.jpg";
import avatar13 from "@/assets/depoimentos/avatar-13.jpg";
import avatar14 from "@/assets/depoimentos/avatar-14.jpg";
import avatar15 from "@/assets/depoimentos/avatar-15.jpg";
import avatar16 from "@/assets/depoimentos/avatar-16.jpg";
import avatar17 from "@/assets/depoimentos/avatar-17.jpg";
import avatar18 from "@/assets/depoimentos/avatar-18.jpg";
import avatar19 from "@/assets/depoimentos/avatar-19.jpg";
import avatar20 from "@/assets/depoimentos/avatar-20.jpg";

const depoimentos = [
  {
    nome: "Carlos M.",
    idade: 42,
    tratamento: "Dependência Química",
    texto: "O Hospital Rumo Certo me devolveu a vida. Depois de anos lutando sozinho, encontrei aqui o apoio que precisava.",
    estrelas: 5,
    avatar: avatar1,
  },
  {
    nome: "Ana Paula S.",
    idade: 35,
    tratamento: "Depressão",
    texto: "A equipe multidisciplinar fez toda a diferença. O acompanhamento humanizado me ajudou a superar momentos difíceis.",
    estrelas: 5,
    avatar: avatar2,
  },
  {
    nome: "Roberto F.",
    idade: 55,
    tratamento: "Alcoolismo",
    texto: "O Programa de 12 Passos transformou minha forma de ver a vida. Agradeço eternamente a cada profissional.",
    estrelas: 5,
    avatar: avatar3,
  },
  {
    nome: "Mariana L.",
    idade: 28,
    tratamento: "Ansiedade",
    texto: "Encontrei acolhimento e profissionalismo. Hoje tenho uma nova perspectiva sobre a vida.",
    estrelas: 5,
    avatar: avatar4,
  },
  {
    nome: "José A.",
    idade: 48,
    tratamento: "Dependência Química",
    texto: "Três anos limpo graças ao tratamento aqui. Minha família está unida novamente.",
    estrelas: 5,
    avatar: avatar5,
  },
  {
    nome: "Fernanda R.",
    idade: 32,
    tratamento: "Depressão",
    texto: "O suporte 24h fez toda diferença na minha recuperação. Profissionais incríveis.",
    estrelas: 5,
    avatar: avatar6,
  },
  {
    nome: "Pedro H.",
    idade: 45,
    tratamento: "Alcoolismo",
    texto: "Depois de várias tentativas em outros lugares, aqui finalmente consegui me recuperar.",
    estrelas: 5,
    avatar: avatar7,
  },
  {
    nome: "Lucia M.",
    idade: 50,
    tratamento: "Saúde Mental",
    texto: "O ambiente terapêutico e a equipe especializada foram fundamentais para minha melhora.",
    estrelas: 5,
    avatar: avatar8,
  },
  {
    nome: "Ricardo S.",
    idade: 38,
    tratamento: "Dependência Química",
    texto: "Recuperei minha dignidade e meu emprego. O hospital salvou minha vida.",
    estrelas: 5,
    avatar: avatar9,
  },
  {
    nome: "Camila T.",
    idade: 29,
    tratamento: "Ansiedade",
    texto: "Tratamento humanizado de verdade. Me senti acolhida desde o primeiro dia.",
    estrelas: 5,
    avatar: avatar10,
  },
  {
    nome: "Antônio J.",
    idade: 60,
    tratamento: "Alcoolismo",
    texto: "Aos 60 anos, encontrei uma nova vida. Nunca é tarde para recomeçar.",
    estrelas: 5,
    avatar: avatar11,
  },
  {
    nome: "Patricia V.",
    idade: 41,
    tratamento: "Depressão",
    texto: "A terapia individual combinada com grupo foi perfeita para meu caso.",
    estrelas: 5,
    avatar: avatar12,
  },
  {
    nome: "Marcos D.",
    idade: 33,
    tratamento: "Dependência Química",
    texto: "Minha esposa e filhos têm o pai que merecem agora. Gratidão eterna.",
    estrelas: 5,
    avatar: avatar13,
  },
  {
    nome: "Sandra C.",
    idade: 47,
    tratamento: "Farmacodependência",
    texto: "Profissionais capacitados que entendem a complexidade da dependência de medicamentos.",
    estrelas: 5,
    avatar: avatar14,
  },
  {
    nome: "Eduardo N.",
    idade: 52,
    tratamento: "Alcoolismo",
    texto: "O acompanhamento pós-tratamento fez toda diferença na minha manutenção.",
    estrelas: 5,
    avatar: avatar15,
  },
  {
    nome: "Juliana P.",
    idade: 36,
    tratamento: "Saúde Mental",
    texto: "Ambiente seguro e equipe preparada. Recomendo a todos que precisam de ajuda.",
    estrelas: 5,
    avatar: avatar16,
  },
  {
    nome: "Gustavo B.",
    idade: 44,
    tratamento: "Dependência Química",
    texto: "Dois anos em recuperação e contando. O hospital me deu as ferramentas certas.",
    estrelas: 5,
    avatar: avatar17,
  },
  {
    nome: "Renata O.",
    idade: 39,
    tratamento: "Depressão",
    texto: "Voltei a sorrir e a ter esperança. O tratamento mudou minha vida completamente.",
    estrelas: 5,
    avatar: avatar18,
  },
  {
    nome: "Felipe G.",
    idade: 27,
    tratamento: "Dependência Química",
    texto: "Jovem, mas já tinha perdido tudo. Hoje reconstruí minha vida com ajuda daqui.",
    estrelas: 5,
    avatar: avatar19,
  },
  {
    nome: "Beatriz A.",
    idade: 54,
    tratamento: "Ansiedade",
    texto: "Finalmente encontrei paz interior. O tratamento superou minhas expectativas.",
    estrelas: 5,
    avatar: avatar20,
  },
];

const DepoimentosSection = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Histórias de Recuperação
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto mt-3">
            Conheça as histórias de quem encontrou um novo caminho através do nosso tratamento.
          </p>
        </div>
      </div>

      {/* Mobile: 2-column grid */}
      <div className="sm:hidden container mx-auto px-4">
        <div className="grid grid-cols-2 gap-2">
          {depoimentos.slice(0, 8).map((depoimento, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-3 shadow-sm border border-border/50 relative"
            >
              <div className="flex items-center gap-2 mb-2">
                <img 
                  src={depoimento.avatar} 
                  alt={depoimento.nome}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-foreground text-[11px] leading-tight">
                    {depoimento.nome}, {depoimento.idade}
                  </p>
                  <p className="text-muted-foreground text-[10px]">
                    {depoimento.tratamento}
                  </p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-1">
                {Array.from({ length: depoimento.estrelas }).map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-foreground text-[11px] leading-snug italic line-clamp-3">
                "{depoimento.texto}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Carousel */}
      <div className="hidden sm:block overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="flex-shrink-0 basis-[280px] md:basis-[300px] bg-background rounded-xl p-4 shadow-sm border border-border/50 relative"
            >
              <Quote className="absolute top-3 right-3 w-5 h-5 text-primary/30" fill="currentColor" strokeWidth={0} />
              
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={depoimento.avatar} 
                  alt={depoimento.nome}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-foreground text-base">
                    {depoimento.nome}, {depoimento.idade} anos
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {depoimento.tratamento}
                  </p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: depoimento.estrelas }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                ))}
              </div>

              <p className="text-foreground text-sm leading-relaxed italic line-clamp-3">
                "{depoimento.texto}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
