import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroHospital from "@/assets/hero-hospital.png";
import heroConvenios from "@/assets/hero-convenios-banner.png";
import heroCombate from "@/assets/hero-combate-drogas-banner.png";
import heroSetembro from "@/assets/hero-setembro-amarelo-banner.png";
import heroResgate from "@/assets/hero-resgate-banner.png";

const heroImages = [
  { src: heroHospital, alt: "Hospital Rumo Certo - Ambiente terapêutico" },
  { src: heroConvenios, alt: "Trabalhamos com os melhores convênios" },
  { src: heroCombate, alt: "Combate às drogas e alcoolismo" },
  { src: heroSetembro, alt: "Setembro Amarelo - Prevenção ao suicídio" },
  { src: heroResgate, alt: "Resgate 24 horas" },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden" id="inicio">
      {/* Background Images Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentIndex].src}
            alt={heroImages[currentIndex].alt}
            className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary w-6"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Trust Indicators at bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-white/80 text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Resgate em todo Brasil</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Unidade Feminina Exclusiva</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Aceitamos Convênios</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
