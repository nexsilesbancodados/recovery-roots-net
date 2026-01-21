import { motion } from "framer-motion";
import heroImage from "@/assets/hero-hospital.png";

const HeroSection = () => {
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

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
