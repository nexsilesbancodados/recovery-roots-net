import { motion } from "framer-motion";
import { ChevronDown, Phone, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hospital.jpg";

const stats = [
  { icon: Clock, label: "Atendimento", value: "24 horas" },
  { icon: Shield, label: "Experiência", value: "+18 anos" },
  { icon: Award, label: "Pacientes", value: "+2.500" },
];

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hospital Rumo Certo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-secondary blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-secondary blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Referência em Saúde Mental há mais de 18 anos</span>
            </motion.div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight mb-6">
              Sua Jornada de{" "}
              <span className="text-secondary">Recuperação</span>{" "}
              Começa Aqui
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10 max-w-2xl">
              Tratamento especializado e humanizado para dependência química, 
              alcoolismo e transtornos mentais. Devolvemos vida, esperança e dignidade.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="#contato">
                  Fale com um Especialista
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full backdrop-blur-sm"
                asChild
              >
                <a href="tel:5511955931301">
                  <Phone className="w-5 h-5 mr-2" />
                  (11) 95593-1301
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                </div>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#sobre"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Saiba mais</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};