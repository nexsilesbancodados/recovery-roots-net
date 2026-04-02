import { Phone, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/contact";
import GaleriaEstrutura from "@/components/GaleriaEstrutura";
import logoIcon from "@/assets/logo-hospital.png";

interface Recurso {
  id: number;
  nome: string;
  descricao: string;
}

const recursos: Recurso[] = [
  { id: 1, nome: "Instalações Confortáveis", descricao: "Quartos acolhedores e espaços terapêuticos projetados para proporcionar bem-estar e tranquilidade." },
  { id: 2, nome: "Alimentação Balanceada", descricao: "Cardápios elaborados por nutricionistas, com refeições saudáveis e saborosas para cada fase do tratamento." },
  { id: 3, nome: "Área Verde", descricao: "Amplos espaços verdes e jardins para momentos de reflexão, meditação e conexão com a natureza." },
  { id: 4, nome: "Atividades Esportivas", descricao: "Quadras e espaços para prática de esportes, promovendo saúde física e mental durante a recuperação." },
  { id: 5, nome: "Piscinas", descricao: "Piscinas para atividades aquáticas terapêuticas e momentos de lazer e relaxamento." },
  { id: 6, nome: "Passeio a Cavalo", descricao: "Equoterapia e passeios a cavalo que auxiliam no tratamento e proporcionam experiências únicas." },
  { id: 7, nome: "Quartos Privativos", descricao: "Acomodações individuais e compartilhadas com todo conforto necessário para uma estadia tranquila." },
  { id: 8, nome: "Musicoterapia", descricao: "Sessões de musicoterapia para expressão emocional e desenvolvimento de habilidades sociais." },
  { id: 9, nome: "Biblioteca", descricao: "Espaço de leitura e estudo com acervo variado para momentos de reflexão e aprendizado." },
  { id: 10, nome: "Arteterapia", descricao: "Atividades artísticas como pintura e desenho para expressão criativa e autoconhecimento." },
  { id: 11, nome: "Pet Terapia", descricao: "Interação com animais para reduzir o estresse e promover bem-estar emocional." },
  { id: 12, nome: "Espaço de Convivência", descricao: "Áreas comuns para socialização, jogos e momentos de descontração entre os pacientes." },
  { id: 13, nome: "Sala de TV", descricao: "Ambiente confortável para assistir filmes e programas em grupo, promovendo integração." },
  { id: 14, nome: "Jardim Terapêutico", descricao: "Espaço dedicado à horticultura e jardinagem como forma de terapia ocupacional." },
];

const EstruturaSection = () => {
  return (
    <section className="relative z-30 py-12 sm:py-16 bg-muted/30 overflow-hidden" id="estrutura">
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
            <Card key={recurso.id} className="group relative border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-card to-card/80 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-4 relative z-10">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <img src={logoIcon} alt="" className="w-7 h-7 object-contain" />
                </div>
                <h3 className="text-sm font-display font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">{recurso.nome}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{recurso.descricao}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Banner 1 */}
        <div className="my-5 rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="text-primary-foreground text-center md:text-left">
            <h3 className="font-display text-xl md:text-2xl font-extrabold">Conheça nossa estrutura pessoalmente</h3>
            <p className="text-primary-foreground/80 text-sm mt-1">Agende uma visita e veja de perto todo o conforto que oferecemos.</p>
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
            <Card key={recurso.id} className="group relative border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-card to-card/80 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-4 relative z-10">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <img src={logoIcon} alt="" className="w-7 h-7 object-contain" />
                </div>
                <h3 className="text-sm font-display font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">{recurso.nome}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{recurso.descricao}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Banner 2 */}
        <div className="my-5 rounded-2xl bg-gradient-to-r from-secondary to-secondary/80 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="text-secondary-foreground text-center md:text-left">
            <h3 className="font-display text-xl md:text-2xl font-extrabold">Atendimento 24h — Ligue agora</h3>
            <p className="text-secondary-foreground/70 text-sm mt-1">Equipe médica disponível dia e noite para qualquer necessidade.</p>
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
          {recursos.slice(8, 14).map((recurso) => (
            <Card key={recurso.id} className="group relative border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-card to-card/80 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-4 relative z-10">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <img src={logoIcon} alt="" className="w-7 h-7 object-contain" />
                </div>
                <h3 className="text-sm font-display font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">{recurso.nome}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{recurso.descricao}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>


      {/* Mobile: Vertical grid */}
      <div className="sm:hidden px-4">
        <div className="grid grid-cols-1 gap-3">
          {recursos.slice(0, 6).map((recurso) => (
            <Card
              key={recurso.id}
              className="group relative border-0 shadow-md bg-gradient-to-br from-card to-card/80 overflow-hidden"
            >
              <CardContent className="p-4 relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center flex-shrink-0 shadow-md">
                  <img src={logoIcon} alt="" className="w-8 h-8 object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-display font-bold text-foreground mb-1">
                    {recurso.nome}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {recurso.descricao}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4">
          E muito mais recursos para sua recuperação
        </p>
      </div>

      {/* Galeria de Fotos */}
      <div className="container mx-auto px-4 mt-8 sm:mt-12">
        <GaleriaEstrutura />
      </div>
    </section>
  );
};

export default EstruturaSection;
