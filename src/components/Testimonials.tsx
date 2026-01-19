import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "O Hospital Rumo Certo me devolveu a esperança. Após anos lutando contra a dependência, encontrei aqui o acolhimento e o tratamento que precisava para reconstruir minha vida.",
    author: "M.S.",
    role: "Paciente recuperado",
    duration: "Tratamento em 2023",
  },
  {
    id: 2,
    content: "Como familiar, vi meu irmão renascer. A equipe multidisciplinar e o programa de 12 passos fizeram toda a diferença. Hoje ele está sóbrio há 2 anos.",
    author: "A.L.",
    role: "Familiar de paciente",
    duration: "Acompanhamento desde 2022",
  },
  {
    id: 3,
    content: "O tratamento para saúde mental mudou completamente minha perspectiva. A abordagem humanizada e o ambiente acolhedor foram essenciais para minha recuperação.",
    author: "C.R.",
    role: "Paciente recuperado",
    duration: "Tratamento em 2024",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 relative">
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-4">
            Histórias de <span className="text-primary">Transformação</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Conheça relatos reais de pessoas que encontraram no Hospital Rumo Certo 
            o caminho para a recuperação e uma nova vida.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 border border-border/50 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
                
                {/* Content */}
                <blockquote className="text-foreground/90 leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary/70 mt-0.5">{testimonial.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-white/70 text-sm mb-6">
            Depoimentos reais de pacientes e familiares. Identidades preservadas por questões de privacidade.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary">+2.500</p>
              <p className="text-sm text-white/70 mt-1">Pacientes atendidos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary">18+</p>
              <p className="text-sm text-white/70 mt-1">Anos de experiência</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary">4</p>
              <p className="text-sm text-white/70 mt-1">Unidades especializadas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};