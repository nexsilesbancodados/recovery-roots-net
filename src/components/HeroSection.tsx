import heroEquipe from "@/assets/hero-equipe.png";
import logoImage from "@/assets/logo-hospital.png";
import { openWhatsApp } from "@/lib/contact";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden flex flex-col">
      {/* Very light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215,30%,97%)] via-[hsl(215,20%,95%)] to-[hsl(42,20%,96%)]" />
      
      {/* Watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={logoImage}
          alt=""
          className="w-[500px] md:w-[700px] lg:w-[900px] opacity-[0.04] object-contain"
        />
      </div>

      <div className="relative container mx-auto px-4 pt-14 md:pt-16 lg:pt-24 flex-1 flex items-center">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-16 items-end w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8 pb-8 lg:pb-24"
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
              <h1 className="font-display text-[2.2rem] sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-black text-foreground leading-[1.05] sm:leading-[1.1]">
                Tratamentos Premium
                <br />
                para uma {" "}
                <span className="text-secondary relative inline-block mt-1">
                  Vida Saudável
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M2 6C50 2 150 2 198 6" stroke="hsl(var(--secondary))" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
                  </svg>
                </span>
              </h1>
            </div>

            <p className="text-muted-foreground text-base sm:text-lg max-w-lg leading-relaxed">
              Estruturas de ponta e equipe multidisciplinar dedicada ao tratamento 
              humanizado em saúde mental, dependência química e alcoolismo.
            </p>
          </motion.div>

          {/* Right Content - Team Image - bigger */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end items-end self-end mb-0"
          >
            <img
              src={heroEquipe}
              alt="Equipe médica do Hospital Rumo Certo"
              className="w-full max-w-[700px] xl:max-w-[800px] object-contain drop-shadow-xl block"
              style={{ marginBottom: '-4px' }}
              width={1024}
              height={1024}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
