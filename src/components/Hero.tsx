import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hospital.jpg";

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hospital Rumo Certo - Cabreúva, SP"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Institutional Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-primary-foreground text-sm font-medium border border-white/20">
              <Shield className="w-4 h-4" />
              Tratamento Especializado
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-primary-foreground text-sm font-medium border border-white/20">
              <Clock className="w-4 h-4" />
              Atendimento 24h
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Reconstruindo vidas, restaurando esperanças
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed"
          >
            Tratamentos especializados para saúde mental, alcoolismo e dependência química 
            com o reconhecido Programa de 12 Passos e equipe multidisciplinar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" variant="secondary" asChild className="group shadow-lg">
              <a href="#contato">
                Agende uma Avaliação
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="#tratamentos">Conheça os Tratamentos</a>
            </Button>
          </motion.div>

          {/* Credibility Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-8 mt-16"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">+18 Anos</div>
                <div className="text-sm text-primary-foreground/70">De experiência</div>
              </div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">4 Unidades</div>
                <div className="text-sm text-primary-foreground/70">Especializadas</div>
              </div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">24h</div>
                <div className="text-sm text-primary-foreground/70">Atendimento</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
