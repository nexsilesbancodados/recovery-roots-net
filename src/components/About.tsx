import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, MapPin } from "lucide-react";
import aboutImage from "@/assets/about-hospital.jpg";
const values = [
  "Programa de 12 Passos reconhecido internacionalmente",
  "Equipe multidisciplinar altamente qualificada",
  "Mais de 18 anos de experiência em recuperação",
  "Abordagem holística e integrada de tratamento",
  "4 unidades especializadas para diferentes públicos",
  "Suporte contínuo para reconstrução da vida",
];

const units = [
  { name: "Unidade Hospitalar", location: "Cabreúva, SP", type: "Principal" },
  { name: "Unidade Masculina II", location: "Salto, SP", type: "Masculina" },
  { name: "Unidade Masculina III", location: "Região", type: "Masculina" },
  { name: "Unidade Feminina", location: "Cabreúva, SP", type: "Feminina" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 bg-background">
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Hospital Rumo Certo
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Há mais de 18 anos dedicamo-nos a proporcionar tratamentos excepcionais e especializados 
              para saúde mental, alcoolismo e dependência química. Com 4 unidades estrategicamente 
              localizadas, oferecemos atendimento especializado para diferentes perfis de pacientes.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Com uma equipe multidisciplinar altamente qualificada e um compromisso inabalável com 
              a excelência em cuidados de saúde, oferecemos uma gama completa de serviços de tratamento 
              personalizados, incluindo o reconhecido Programa de 12 Passos.
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
                  <span className="text-foreground">{value}</span>
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
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-10">
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
                className="bg-white rounded-xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
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
