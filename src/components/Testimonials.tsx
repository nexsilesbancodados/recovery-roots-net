import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Cheguei ao Hospital Rumo Certo sem esperança, depois de 15 anos lutando contra o álcool. Hoje, estou há 3 anos sóbrio, reconstruí minha família e minha carreira. A equipe me tratou com dignidade quando eu mais precisava.",
    author: "R.M.",
    role: "Paciente em recuperação",
    duration: "Alta em 2022",
    rating: 5,
  },
  {
    id: 2,
    content: "Minha filha estava perdida nas drogas. O Hospital Rumo Certo não apenas a salvou, mas nos devolveu como família. O programa de 12 passos e o suporte aos familiares foram fundamentais para nossa recuperação conjunta.",
    author: "S.P.",
    role: "Mãe de paciente",
    duration: "Tratamento em 2023",
    rating: 5,
  },
  {
    id: 3,
    content: "Sofria de depressão grave e síndrome do pânico. O tratamento psiquiátrico no Rumo Certo, com medicação adequada e terapia, me devolveu a vontade de viver. Hoje sou uma nova pessoa.",
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
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            Depoimentos
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Histórias de <span className="text-primary">Transformação</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
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
              <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-500 border border-border/50 h-full flex flex-col">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
                
                {/* Content */}
                <blockquote className="text-foreground/80 leading-relaxed mb-6 flex-grow text-sm">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t border-border pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-secondary mt-0.5">{testimonial.duration}</p>
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
          className="mt-20"
        >
          <p className="text-muted-foreground text-sm mb-8 text-center">
            Depoimentos reais de pacientes e familiares. Identidades preservadas por questões de privacidade.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-bold text-primary">+2.500</p>
              <p className="text-sm text-muted-foreground mt-2">Pacientes atendidos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-bold text-secondary">18+</p>
              <p className="text-sm text-muted-foreground mt-2">Anos de experiência</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-bold text-primary">4</p>
              <p className="text-sm text-muted-foreground mt-2">Unidades especializadas</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-bold text-secondary">24h</p>
              <p className="text-sm text-muted-foreground mt-2">Atendimento contínuo</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};