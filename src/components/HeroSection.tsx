import { Users, Bed, Award, Ambulance, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDoctor from "@/assets/hero-doctor.png";
import { openWhatsApp } from "@/lib/contact";

const stats = [
  { icon: Users, value: "3000+", label: "Pacientes Atendidos" },
  { icon: Bed, value: "200", label: "Leitos Disponíveis" },
  { icon: Award, value: "500+", label: "Prêmios e Certificações" },
  { icon: Ambulance, value: "24h", label: "Resgate e Ambulância" },
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-background via-accent/5 to-primary/5 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-[30%] w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute top-10 right-10 w-20 h-20 rounded-full border-4 border-accent/20" />
      <div className="absolute top-40 right-[25%] w-8 h-8 rounded-full bg-accent/30" />

      <div className="container mx-auto px-4 pt-12 pb-0 lg:pt-20 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          {/* Left Content */}
          <div className="space-y-6 pb-12 lg:pb-20">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              2500+ Médicos Online
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Tratamentos Premium para uma{" "}
              <span className="text-primary">Vida Saudável</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg max-w-lg leading-relaxed">
              Avançamos continuamente com estruturas de ponta, oferecendo tratamentos 
              humanizados e especializados em saúde mental, dependência química e alcoolismo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => openWhatsApp("Olá! Gostaria de conhecer o hospital.")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Conheça Nosso Hospital
              </Button>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <div className="flex items-center bg-card border border-border rounded-2xl shadow-lg px-5 py-4 gap-3">
                <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-foreground">Pesquise o Tratamento</p>
                  <p className="text-xs text-muted-foreground">Com o melhor sistema de cuidado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Doctor Image */}
          <div className="relative flex justify-center lg:justify-end items-end">
            {/* Background decorative shape */}
            <div className="absolute bottom-0 right-0 w-[90%] h-[85%] bg-gradient-to-t from-accent/15 to-accent/5 rounded-t-[40%] z-0" />
            
            <img
              src={heroDoctor}
              alt="Médica especialista do Hospital Rumo Certo"
              className="relative z-10 w-[320px] sm:w-[380px] lg:w-[440px] xl:w-[480px] object-contain drop-shadow-2xl"
              width={768}
              height={1024}
            />
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-card border-t border-border/50 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
