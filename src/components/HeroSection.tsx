import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroConvenios from "@/assets/hero-convenios-banner.png";
import heroCombate from "@/assets/hero-combate-drogas-banner.png";
import heroSetembro from "@/assets/hero-setembro-amarelo-banner.png";
import heroResgate from "@/assets/hero-resgate-banner.png";

const heroImages = [
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
    <section className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden" id="inicio">
      {/* Background Images Carousel - Fixed aspect ratio to prevent layout shift */}
      {heroImages.map((image, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
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
    </section>
  );
};

export default HeroSection;
