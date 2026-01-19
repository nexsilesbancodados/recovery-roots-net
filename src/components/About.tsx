import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, MapPin } from "lucide-react";
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
  { name: "Sede Hospitalar", location: "Cabreúva, SP", type: "UTI Psiquiátrica" },
  { name: "Unidade Masculina I", location: "Salto, SP", type: "Internação" },
  { name: "Unidade Masculina II", location: "Cabreúva, SP", type: "Internação" },
  { name: "Unidade Feminina", location: "Cabreúva, SP", type: "Exclusiva" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
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
            {/* Floating Card - Years of Experience */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-card max-w-[280px]"
            >
              <div className="text-4xl font-serif font-bold text-primary mb-2">+18 anos</div>
              <p className="text-muted-foreground text-sm">
                Recuperando vidas e transformando famílias
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Sobre o Hospital
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              Referência em Saúde Mental e Dependência Química
            </h2>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Somos o <strong>Hospital Rumo Certo</strong>, referência há mais de 18 anos no tratamento 
              de dependência química, alcoolismo e transtornos mentais. Nossa missão é devolver 
              a dignidade, a saúde e a esperança para pacientes e suas famílias.
            </p>
            <p className="text-white/70 mb-8 leading-relaxed">
              Contamos com infraestrutura hospitalar completa, equipe médica especializada 24 horas 
              e metodologia terapêutica comprovada, incluindo o renomado Programa de 12 Passos. 
              Cada tratamento é personalizado, respeitando as necessidades individuais de recuperação.
            </p>

            {/* Values List */}
            <ul className="space-y-3 mb-8">
              {values.map((value, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-white/90">{value}</span>
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
          className="mt-20"
        >
          <h3 className="font-serif text-2xl font-bold text-white text-center mb-10">
            Nossas Unidades
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {units.map((unit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{unit.name}</h4>
                <p className="text-sm text-primary font-medium mb-1">{unit.location}</p>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
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
