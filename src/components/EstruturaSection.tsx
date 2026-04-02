import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/contact";
import GaleriaEstrutura from "@/components/GaleriaEstrutura";
import imgInstalacoes from "@/assets/estrutura/instalacoes.jpg";
import imgAlimentacao from "@/assets/estrutura/alimentacao.jpg";
import imgAreaVerde from "@/assets/estrutura/area-verde.jpg";
import imgEsportes from "@/assets/estrutura/esportes.jpg";
import imgPiscinas from "@/assets/estrutura/piscinas.jpg";
import imgCavalo from "@/assets/estrutura/passeio-cavalo.jpg";
import imgQuartos from "@/assets/estrutura/quartos-privativos.jpg";

import imgBiblioteca from "@/assets/estrutura/biblioteca.jpg";
import imgArte from "@/assets/estrutura/arteterapia.jpg";
import imgPet from "@/assets/estrutura/pet-terapia.jpg";
import imgConvivencia from "@/assets/estrutura/convivencia.jpg";
import imgSalaTV from "@/assets/estrutura/sala-tv.jpg";
import imgJardim from "@/assets/estrutura/jardim-terapeutico.jpg";



interface Recurso {
  id: number;
  nome: string;
  descricao: string;
  image: string;
}

const recursos: Recurso[] = [
  { id: 1, nome: "Instalações Confortáveis", descricao: "Quartos acolhedores e espaços terapêuticos projetados para proporcionar bem-estar e tranquilidade.", image: imgInstalacoes },
  { id: 2, nome: "Alimentação Balanceada", descricao: "Cardápios elaborados por nutricionistas, com refeições saudáveis e saborosas para cada fase do tratamento.", image: imgAlimentacao },
  { id: 3, nome: "Área Verde", descricao: "Amplos espaços verdes e jardins para momentos de reflexão, meditação e conexão com a natureza.", image: imgAreaVerde },
  { id: 4, nome: "Atividades Esportivas", descricao: "Quadras e espaços para prática de esportes, promovendo saúde física e mental durante a recuperação.", image: imgEsportes },
  { id: 5, nome: "Piscinas", descricao: "Piscinas para atividades aquáticas terapêuticas e momentos de lazer e relaxamento.", image: imgPiscinas },
  { id: 6, nome: "Passeio a Cavalo", descricao: "Equoterapia e passeios a cavalo que auxiliam no tratamento e proporcionam experiências únicas.", image: imgCavalo },
  { id: 7, nome: "Quartos Privativos", descricao: "Acomodações individuais e compartilhadas com todo conforto necessário para uma estadia tranquila.", image: imgQuartos },
  
  { id: 9, nome: "Biblioteca", descricao: "Espaço de leitura e estudo com acervo variado para momentos de reflexão e aprendizado.", image: imgBiblioteca },
  { id: 10, nome: "Arteterapia", descricao: "Atividades artísticas como pintura e desenho para expressão criativa e autoconhecimento.", image: imgArte },
  { id: 11, nome: "Pet Terapia", descricao: "Interação com animais para reduzir o estresse e promover bem-estar emocional.", image: imgPet },
  { id: 12, nome: "Espaço de Convivência", descricao: "Áreas comuns para socialização, jogos e momentos de descontração entre os pacientes.", image: imgConvivencia },
  { id: 13, nome: "Sala de TV", descricao: "Ambiente confortável para assistir filmes e programas em grupo, promovendo integração.", image: imgSalaTV },
  { id: 14, nome: "Jardim Terapêutico", descricao: "Espaço dedicado à horticultura e jardinagem como forma de terapia ocupacional.", image: imgJardim },
];

const ImageCard = ({ recurso }: { recurso: Recurso }) => (
  <div className="group relative h-52 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:-translate-y-1">
    <img src={recurso.image} alt={recurso.nome} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10 group-hover:from-black/65 transition-colors" />
    <div className="absolute bottom-0 left-0 right-0 p-4 relative z-10">
      <h3 className="text-sm font-display font-bold text-white mb-1 drop-shadow-lg">{recurso.nome}</h3>
      <p className="text-xs text-white/80 leading-relaxed line-clamp-2">{recurso.descricao}</p>
    </div>
  </div>
);

const EstruturaSection = () => {
  return (
    <section className="relative z-30 py-16 sm:py-24 bg-muted/30 overflow-hidden" id="estrutura">
      {/* Header */}
      <div className="container mx-auto px-4 mb-6 sm:mb-8">
        <div className="text-center lg:text-left lg:max-w-xl">
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Infraestrutura
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-2">
            Nossa Estrutura
          </h2>
          <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
            Ambientes pensados para o seu conforto e recuperação
          </p>
        </div>
      </div>

      {/* Desktop & Tablet: Grid layout */}
      <div className="hidden sm:block container mx-auto px-4">
        {/* Row 1 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recursos.slice(0, 4).map((recurso) => (
            <ImageCard key={recurso.id} recurso={recurso} />
          ))}
        </div>

        {/* Banner 1 */}
        <div className="my-5 rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl md:text-2xl font-extrabold text-secondary">Conheça nossa estrutura pessoalmente</h3>
            <p className="text-secondary/80 text-sm mt-1">Agende uma visita e veja de perto todo o conforto que oferecemos.</p>
          </div>
          <Button
            onClick={() => openWhatsApp("Olá! Gostaria de agendar uma visita para conhecer a estrutura.")}
            className="bg-white text-primary hover:bg-white/90 rounded-xl px-6 py-5 font-bold shrink-0 shadow-md"
          >
            Agendar Visita <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Row 2 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recursos.slice(4, 8).map((recurso) => (
            <ImageCard key={recurso.id} recurso={recurso} />
          ))}
        </div>

        {/* Banner 2 */}
        <div className="my-5 rounded-2xl bg-gradient-to-r from-secondary to-secondary/80 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl md:text-2xl font-extrabold text-primary">Atendimento 24h — Ligue agora</h3>
            <p className="text-primary/70 text-sm mt-1">Equipe médica disponível dia e noite para qualquer necessidade.</p>
          </div>
          <Button
            onClick={() => openWhatsApp("Olá! Preciso de atendimento.")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-6 py-5 font-bold shrink-0 shadow-md"
          >
            <Phone className="w-4 h-4 mr-2" /> Falar Agora
          </Button>
        </div>

        {/* Row 3 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recursos.slice(8, 12).map((recurso) => (
            <ImageCard key={recurso.id} recurso={recurso} />
          ))}
        </div>

        {/* Row 4 - last card expanded */}
        <div className="grid grid-cols-1 gap-4 mt-4">
          {recursos.slice(12, 13).map((recurso) => (
            <div key={recurso.id} className="group relative h-52 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer hover:scale-[1.01]">
              <img src={recurso.image} alt={recurso.nome} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10 group-hover:from-black/65 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-sm font-display font-bold text-white mb-1 drop-shadow-lg">{recurso.nome}</h3>
                <p className="text-xs text-white/80 leading-relaxed line-clamp-2">{recurso.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: Vertical grid with images */}
      <div className="sm:hidden px-4 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {recursos.slice(0, 4).map((recurso) => (
            <div key={recurso.id} className="group relative h-40 rounded-xl overflow-hidden shadow-md">
              <img src={recurso.image} alt={recurso.nome} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                <h3 className="text-xs font-display font-bold text-white mb-0.5 drop-shadow-lg">{recurso.nome}</h3>
                <p className="text-[10px] text-white/80 leading-relaxed line-clamp-2">{recurso.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-5 text-center shadow-lg">
          <h3 className="font-display text-lg font-extrabold text-secondary mb-1">Conheça nossa estrutura</h3>
          <p className="text-secondary/80 text-xs mb-3">Agende uma visita e veja de perto.</p>
          <Button
            onClick={() => openWhatsApp("Olá! Gostaria de agendar uma visita para conhecer a estrutura.")}
            className="bg-white text-primary hover:bg-white/90 rounded-xl px-5 py-3 font-bold text-sm shadow-md"
          >
            Agendar Visita <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {recursos.slice(4, 8).map((recurso) => (
            <div key={recurso.id} className="group relative h-40 rounded-xl overflow-hidden shadow-md">
              <img src={recurso.image} alt={recurso.nome} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                <h3 className="text-xs font-display font-bold text-white mb-0.5 drop-shadow-lg">{recurso.nome}</h3>
                <p className="text-[10px] text-white/80 leading-relaxed line-clamp-2">{recurso.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-gradient-to-r from-secondary to-secondary/80 p-5 text-center shadow-lg">
          <h3 className="font-display text-lg font-extrabold text-primary mb-1">Atendimento 24h — Ligue agora</h3>
          <p className="text-primary/70 text-xs mb-3">Equipe médica disponível dia e noite para qualquer necessidade.</p>
          <Button
            onClick={() => openWhatsApp("Olá! Preciso de atendimento.")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-5 py-3 font-bold text-sm shadow-md"
          >
            <Phone className="w-4 h-4 mr-2" /> Falar Agora
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {recursos.slice(8, 12).map((recurso) => (
            <div key={recurso.id} className="group relative h-40 rounded-xl overflow-hidden shadow-md">
              <img src={recurso.image} alt={recurso.nome} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                <h3 className="text-xs font-display font-bold text-white mb-0.5 drop-shadow-lg">{recurso.nome}</h3>
                <p className="text-[10px] text-white/80 leading-relaxed line-clamp-2">{recurso.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        {recursos.slice(12, 13).map((recurso) => (
          <div key={recurso.id} className="group relative h-44 rounded-xl overflow-hidden shadow-md">
            <img src={recurso.image} alt={recurso.nome} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
            <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
              <h3 className="text-xs font-display font-bold text-white mb-0.5 drop-shadow-lg">{recurso.nome}</h3>
              <p className="text-[10px] text-white/80 leading-relaxed line-clamp-2">{recurso.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Galeria de Fotos */}
      <div className="container mx-auto px-4 mt-8 sm:mt-12">
        <GaleriaEstrutura />
      </div>
    </section>
  );
};

export default EstruturaSection;