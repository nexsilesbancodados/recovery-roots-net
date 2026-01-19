import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Programa de 12 Passos reconhecido internacionalmente",
  "Equipe de profissionais altamente qualificados",
  "Ambiente sereno e acolhedor em Cabreúva, SP",
  "Abordagem holística e integrada de tratamento",
  "Unidades específicas para diferentes públicos",
  "Suporte contínuo para reconstrução da vida",
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 gradient-soft">
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
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                alt="Equipe médica do Hospital Rumo Certo"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-card max-w-[280px]"
            >
              <div className="text-4xl font-serif font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground text-sm">
                Taxa de sucesso no tratamento com acompanhamento completo
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
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Dedicamo-nos a proporcionar tratamentos excepcionais e especializados para saúde mental, 
              alcoolismo e dependência química. Situado em um ambiente sereno e acolhedor em Cabreúva, 
              nosso hospital é projetado para oferecer conforto e segurança, garantindo uma recuperação 
              eficaz em um espaço que respeita a dignidade e a individualidade de cada paciente.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Com uma equipe de profissionais altamente qualificados e um compromisso inabalável com 
              a excelência em cuidados de saúde, oferecemos uma gama completa de serviços de tratamento 
              personalizados. Desde terapias individuais até programas de grupo, como o reconhecido 
              Programa de 12 Passos.
            </p>

            {/* Values List */}
            <ul className="space-y-4">
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
      </div>
    </section>
  );
};
