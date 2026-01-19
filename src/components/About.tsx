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
  "4 unidades especializadas: masculina, feminina e hospitalar",
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
    <section id="sobre" className="py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center" ref={ref}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
                <motion.img
                  src={aboutImage}
                  alt="Profissional do Hospital Rumo Certo"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl border-4 border-secondary/30 -z-10" />
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="absolute -bottom-10 -right-10 lg:-right-16 bg-white p-6 rounded-2xl shadow-elevated max-w-[280px] border border-border/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondary-foreground">+18</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">Anos</p>
                    <p className="text-muted-foreground text-sm">Transformando vidas</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Sobre o Hospital
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Referência em{" "}
              <span className="text-primary">Saúde Mental</span> e{" "}
              <span className="text-secondary">Dependência Química</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Somos o <strong className="text-foreground">Hospital Rumo Certo</strong>, referência há mais de 18 anos no tratamento 
              de dependência química, alcoolismo e transtornos mentais. Nossa missão é devolver 
              a dignidade, a saúde e a esperança para pacientes e suas famílias.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Contamos com infraestrutura hospitalar completa, equipe médica especializada 24 horas 
              e metodologia terapêutica comprovada, incluindo o renomado Programa de 12 Passos.
            </p>

            {/* Values List */}
            <ul className="space-y-3 mb-8">
              {values.map((value, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Units Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 lg:mt-32"
        >
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Nossas Unidades
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              4 unidades especializadas estrategicamente localizadas para melhor atender você e sua família
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {units.map((unit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 border border-border/50 hover:border-secondary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                  <unit.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{unit.name}</h4>
                <div className="flex items-center gap-1 text-sm text-secondary font-medium mb-2">
                  <MapPin className="w-3 h-3" />
                  {unit.location}
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
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