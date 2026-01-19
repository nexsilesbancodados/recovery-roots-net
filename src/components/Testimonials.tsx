import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Cheguei ao Hospital Rumo Certo sem esperança, depois de 15 anos lutando contra o álcool. Hoje, estou há 3 anos sóbrio e reconstruí minha vida.",
    author: "R.M.",
    role: "Paciente recuperado",
    duration: "Alta em 2022",
    rating: 5,
  },
  {
    id: 2,
    content: "Minha filha estava perdida nas drogas. O Hospital Rumo Certo não apenas a salvou, mas nos devolveu como família.",
    author: "S.P.",
    role: "Mãe de paciente",
    duration: "Tratamento em 2023",
    rating: 5,
  },
  {
    id: 3,
    content: "Sofria de depressão grave. O tratamento psiquiátrico me devolveu a vontade de viver. Hoje sou uma nova pessoa.",
    author: "L.F.",
    role: "Paciente recuperada",
    duration: "Alta em 2024",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export const Testimonials = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-xs uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Depoimentos
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            Histórias de <span className="text-primary">Transformação</span>
          </h2>
          
          <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
            Conheça relatos reais de pessoas que encontraram o caminho para a recuperação.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 md:gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-white rounded-xl p-5 md:p-6 shadow-soft hover:shadow-card transition-all duration-500 border border-border/50 h-full flex flex-col">
                {/* Rating */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-secondary text-secondary" />
                  ))}
                </div>
                
                {/* Quote Icon */}
                <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <Quote className="w-4 h-4 text-primary" />
                </div>
                
                {/* Content */}
                <blockquote className="text-foreground/80 leading-relaxed mb-4 flex-grow text-sm">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 md:mt-12"
        >
          <p className="text-muted-foreground text-xs mb-6 text-center">
            Depoimentos reais. Identidades preservadas por privacidade.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-primary">+2.500</p>
              <p className="text-xs text-muted-foreground mt-1">Pacientes atendidos</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-secondary">18+</p>
              <p className="text-xs text-muted-foreground mt-1">Anos de experiência</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-primary">4</p>
              <p className="text-xs text-muted-foreground mt-1">Unidades</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-secondary">24h</p>
              <p className="text-xs text-muted-foreground mt-1">Atendimento</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
