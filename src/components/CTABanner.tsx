import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/contact";
import bannerImg from "@/assets/banner-hospital.webp";

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
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/55" />

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl text-primary-foreground">
          <h2 className="font-display text-xl sm:text-2xl md:text-4xl font-extrabold leading-tight mb-2 sm:mb-3 text-primary-foreground">
            Transforme sua vida com quem entende de recuperação
          </h2>
          <p className="text-primary-foreground/85 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 leading-relaxed">
            Mais de 20 anos de experiência com tratamento humanizado, equipe multidisciplinar e infraestrutura completa.
          </p>
          <button
            onClick={() => openWhatsApp("Olá! Gostaria de mais informações sobre o tratamento.")}
            className="inline-flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 rounded-full px-6 py-3 font-bold shadow-lg hover:scale-[1.02] transition-transform"
          >
            <MessageCircle className="w-5 h-5" fill="currentColor" strokeWidth={1} />
            Falar no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
