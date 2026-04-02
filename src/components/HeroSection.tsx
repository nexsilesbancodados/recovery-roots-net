import { Users, BedDouble, Award, Ambulance } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDoctor from "@/assets/hero-doctor.png";
import { openWhatsApp } from "@/lib/contact";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, value: "3000+", label: "Pacientes Atendidos", color: "text-emerald-700", bg: "bg-emerald-100" },
  { icon: BedDouble, value: "200", label: "Leitos Disponíveis", color: "text-blue-700", bg: "bg-blue-100" },
  { icon: Award, value: "500+", label: "Prêmios e Certificações", color: "text-amber-700", bg: "bg-amber-100" },
  { icon: Ambulance, value: "24h", label: "Resgate e Ambulância", color: "text-rose-700", bg: "bg-rose-100" },
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-background via-accent/5 to-primary/5 overflow-hidden min-h-[85vh] flex flex-col">
      {/* Decorative elements */}
      <div className="absolute top-20 right-[35%] w-72 h-72 rounded-full bg-accent/8 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute top-32 right-[20%] w-16 h-16 rounded-full border-[3px] border-accent/20 hidden lg:block" />
      <div className="absolute top-52 right-[28%] w-5 h-5 rounded-full bg-accent/40 hidden lg:block" />
      <div className="absolute bottom-40 left-[15%] w-3 h-3 rounded-full bg-primary/30 hidden lg:block" />

      <div className="container mx-auto px-4 pt-16 lg:pt-24 flex-1 flex items-center">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-end w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 pb-12 lg:pb-24"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block text-primary font-semibold text-sm uppercase tracking-[0.2em]"
              >
                Hospital Rumo Certo
              </motion.span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-foreground leading-[1.1]">
                Tratamentos Premium{" "}
                <br className="hidden sm:block" />
                para uma{" "}
                <span className="text-primary relative">
                  Vida Saudável
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M2 6C50 2 150 2 198 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
                  </svg>
                </span>
              </h1>
            </div>

            <p className="text-muted-foreground text-base sm:text-lg max-w-lg leading-relaxed">
              Estruturas de ponta e equipe multidisciplinar dedicada ao tratamento 
              humanizado em saúde mental, dependência química e alcoolismo.
            </p>


          </motion.div>

          {/* Right Content - Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end items-end"
          >
            {/* Background decorative shape */}
            <div className="absolute bottom-0 right-[5%] w-[85%] h-[80%] bg-gradient-to-t from-accent/12 via-accent/8 to-transparent rounded-t-[50%] z-0" />
            <div className="absolute bottom-0 right-[10%] w-[75%] h-[70%] bg-gradient-to-t from-primary/5 to-transparent rounded-t-[50%] z-0" />
            
            <img
              src={heroDoctor}
              alt="Médica especialista do Hospital Rumo Certo"
              className="relative z-10 w-[300px] sm:w-[360px] lg:w-[420px] xl:w-[460px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              width={768}
              height={1024}
            />
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="bg-card/80 backdrop-blur-md border-t border-border/30 shadow-[0_-4px_30px_rgba(0,0,0,0.05)]"
      >
        <div className="container mx-auto px-4 py-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300`}>
                    <IconComponent className={`w-[22px] h-[22px] ${stat.color}`} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground tracking-tight">{stat.value}</p>
                    <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
