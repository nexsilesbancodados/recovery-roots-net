import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, MapPin, Building2, Users, Heart } from "lucide-react";
import aboutImage from "@/assets/about-hospital.jpg";

const values = [
  "Metodologia dos 12 Passos com reconhecimento internacional",
  "Equipe médica e terapêutica multidisciplinar 24 horas",
  "Mais de 18 anos transformando vidas com excelência",
  "Tratamento individualizado e humanizado",
  "4 unidades especializadas em todo o estado",
  "Acompanhamento pós-alta para prevenção de recaídas",
];

const units = [
  { name: "Sede Hospitalar", location: "Cabreúva, SP", type: "UTI Psiquiátrica", icon: Building2 },
  { name: "Unidade Masculina I", location: "Salto, SP", type: "Internação", icon: Users },
  { name: "Unidade Masculina II", location: "Cabreúva, SP", type: "Internação", icon: Users },
  { name: "Unidade Feminina", location: "Cabreúva, SP", type: "Exclusiva", icon: Heart },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-mesh opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center" ref={ref}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-[4/5] md:aspect-[4/4] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
                <motion.img
                  src={aboutImage}
                  alt="Profissional do Hospital Rumo Certo"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Decorative border */}
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-full h-full rounded-3xl border-2 border-secondary/20 -z-10" />
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="absolute -bottom-6 -right-4 md:-right-8 glass-card p-4 rounded-2xl max-w-[180px] md:max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl bg-gradient-to-br from-secondary to-gold-light flex items-center justify-center shadow-glow-gold">
                    <span className="text-lg md:text-xl font-bold text-secondary-foreground">+18</span>
                  </div>
                  <div>
                    <p className="text-lg md:text-xl font-bold text-foreground">Anos</p>
                    <p className="text-muted-foreground text-xs">Transformando vidas</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-xs uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Sobre o Hospital
            </span>
            
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Referência em{" "}
              <span className="text-primary">Saúde Mental</span> e{" "}
              <span className="text-secondary">Dependência Química</span>
            </h2>
            
            <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">
              Somos o <strong className="text-foreground">Hospital Rumo Certo</strong>, referência há mais de 18 anos no tratamento 
              de dependência química, alcoolismo e transtornos mentais.
            </p>
            
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
              Contamos com infraestrutura hospitalar completa, equipe médica especializada 24 horas 
              e metodologia terapêutica comprovada.
            </p>

            {/* Values List */}
            <ul className="space-y-2 mb-6">
              {values.map((value, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.06 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm">{value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Units Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2">
              Nossas Unidades
            </h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              4 unidades especializadas para melhor atender você e sua família
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {units.map((unit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group glass-card rounded-2xl p-4 hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-3 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                  <unit.icon className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{unit.name}</h4>
                <div className="flex items-center gap-1 text-xs text-secondary font-medium mb-1">
                  <MapPin className="w-3 h-3" />
                  {unit.location}
                </div>
                <span className="text-[10px] text-muted-foreground bg-muted/50 backdrop-blur-sm px-2 py-0.5 rounded-full">
                  {unit.type}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
