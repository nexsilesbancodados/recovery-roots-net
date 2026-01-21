import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-hospital.png";
import AgendamentoModal from "@/components/AgendamentoModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openWhatsApp = () => {
    const mensagem = encodeURIComponent(
      "Olá! Preciso falar com um especialista sobre tratamento."
    );
    window.open(`https://wa.me/5511955931301?text=${mensagem}`, "_blank");
  };

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden" id="inicio">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hospital Rumo Certo - Ambiente terapêutico"
          className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite]"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 md:pt-40 pb-16 min-h-[90vh] md:min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">

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
      </div>

      {/* Modal de Agendamento */}
      <AgendamentoModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
};

export default HeroSection;
