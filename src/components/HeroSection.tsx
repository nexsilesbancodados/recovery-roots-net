import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Shield, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import heroImage1 from "@/assets/hero-hospital.png";
import heroImage2 from "@/assets/hero-resgate.png";
import heroImage3 from "@/assets/hero-setembro-amarelo.png";
import heroImage4 from "@/assets/hero-combate-drogas.png";
import heroImage5 from "@/assets/hero-convenios.png";
import AgendamentoModal from "@/components/AgendamentoModal";

const heroImages = [
  { src: heroImage1, alt: "Hospital Rumo Certo - Ambiente terapêutico" },
  { src: heroImage2, alt: "Hospital Rumo Certo - Resgate 24 horas" },
  { src: heroImage3, alt: "Setembro Amarelo - Prevenção ao suicídio" },
  { src: heroImage4, alt: "Combate às Drogas e Alcoolismo" },
  { src: heroImage5, alt: "Convênios de saúde aceitos" },
];

const badges = [
  { icon: Shield, text: "Sigilo Absoluto" },
  { icon: Clock, text: "Atendimento 24h" },
  { icon: Award, text: "20+ Anos de Experiência" },
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const openWhatsApp = () => {
    const mensagem = encodeURIComponent(
      "Olá! Preciso falar com um especialista sobre tratamento."
    );
    window.open(`https://wa.me/5511955931301?text=${mensagem}`, "_blank");
  };

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden" id="inicio">
      {/* Background Images with Ken Burns Effect */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite]"
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 md:pt-40 pb-16 min-h-[90vh] md:min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {badges.map((badge, index) => (
              <div 
                key={index}
                className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full"
              >
                <badge.icon className="w-3.5 h-3.5 text-primary" />
                <span className="text-white text-xs font-medium">{badge.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4"
          >
            Recuperação com{" "}
            <span className="text-primary">Dignidade</span>
            <br />
            e Acolhimento
          </motion.h1>

          {/* Value Proposition */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed"
          >
            Hospital psiquiátrico de referência com tratamento humanizado para 
            dependência química, alcoolismo e transtornos mentais. 
            <strong className="text-primary"> Privacidade absoluta</strong> e equipe especializada 24h.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Fale com Especialista
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsModalOpen(true)}
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl transition-all"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agende uma Visita
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10 pt-8 border-t border-white/10"
          >
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white/70 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>Resgate em todo Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>Unidade Feminina Exclusiva</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>Aceitamos Convênios</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-primary w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal de Agendamento */}
      <AgendamentoModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
};

export default HeroSection;
