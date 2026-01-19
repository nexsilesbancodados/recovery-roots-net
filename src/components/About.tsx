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
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
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
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl border border-secondary/20 -z-10" />
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="absolute -bottom-4 -right-2 md:-right-4 glass-card p-3 rounded-xl max-w-[150px]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary to-gold-light flex items-center justify-center shadow-glow-gold">
                    <span className="text-sm font-bold text-secondary-foreground">+18</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Anos</p>
                    <p className="text-muted-foreground text-[10px]">Transformando vidas</p>
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
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
            {units.map((unit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="group glass-card rounded-xl p-3 hover:shadow-card transition-all duration-300"
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-2 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                  <unit.icon className="w-3.5 h-3.5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-xs mb-0.5">{unit.name}</h4>
                <div className="flex items-center gap-1 text-[10px] text-secondary font-medium mb-0.5">
                  <MapPin className="w-2.5 h-2.5" />
                  {unit.location}
                </div>
                <span className="text-[9px] text-muted-foreground bg-muted/50 backdrop-blur-sm px-1.5 py-0.5 rounded-full">
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
