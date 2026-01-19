import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hospital.jpg";

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
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
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6">
              Ambiente sereno e acolhedor em Cabreúva, SP
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
            className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl"
          >
            Tratamentos excepcionais e especializados para saúde mental, alcoolismo e dependência química. 
            Com o reconhecido Programa de 12 Passos e equipe altamente qualificada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" variant="secondary" asChild className="group">
              <a href="#contato">
                Agende uma Avaliação
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="#tratamentos">Conheça os Tratamentos</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 mt-16 max-w-lg"
          >
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-6 h-6 text-primary-foreground/80" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">3</div>
              <div className="text-sm text-primary-foreground/70">Unidades especializadas</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Heart className="w-6 h-6 text-primary-foreground/80" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">12</div>
              <div className="text-sm text-primary-foreground/70">Passos para recuperação</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Shield className="w-6 h-6 text-primary-foreground/80" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">24h</div>
              <div className="text-sm text-primary-foreground/70">Suporte contínuo</div>
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
