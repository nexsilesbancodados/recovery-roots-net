import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { openWhatsApp } from "@/lib/contact";
import bannerImg from "@/assets/banner-hospital.jpg";

const CTABanner = () => {
  return (
    <section className="relative h-[220px] sm:h-[280px] md:h-[320px] overflow-hidden">
      <img
        src={bannerImg}
        alt="Hospital Rumo Certo - Estrutura moderna"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={512}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/50" />
      
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl text-primary-foreground">
          <h2 className="font-display text-2xl md:text-4xl font-extrabold leading-tight mb-3 text-secondary">
            Transforme sua vida com quem entende de recuperação
          </h2>
          <p className="text-primary-foreground/85 text-sm md:text-base mb-5 leading-relaxed">
            Mais de 20 anos de experiência com tratamento humanizado, equipe multidisciplinar e infraestrutura completa.
          </p>
          <Button
            onClick={() => openWhatsApp("Olá! Gostaria de mais informações sobre o tratamento.")}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl px-6 py-5 font-bold shadow-lg"
          >
            Fale com um Especialista
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;