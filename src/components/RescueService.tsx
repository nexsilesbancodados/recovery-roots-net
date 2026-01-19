import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Clock, MapPin, Phone, Shield, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "24 horas por dia",
    description: "Atendimento ininterrupto, 7 dias por semana",
  },
  {
    icon: MapPin,
    title: "Todo o Brasil",
    description: "Buscamos em qualquer cidade do país",
  },
  {
    icon: Shield,
    title: "Sigilo Total",
    description: "Processo discreto e confidencial",
  },
  {
    icon: HeartHandshake,
    title: "Equipe Especializada",
    description: "Profissionais treinados e humanizados",
  },
];

export const RescueService = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background - Gradiente Palha para Azul Royal */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(32_45%_35%)] via-[hsl(220_60%_30%)] to-[hsl(225_70%_25%)]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <span className="text-white/90 font-semibold text-sm uppercase tracking-wider">
                Serviço Exclusivo
              </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Resgate e Remoção <br />
              <span className="text-white/80">em Todo o Brasil</span>
            </h2>
            
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">
              Buscamos o paciente em <strong>qualquer lugar do Brasil</strong>, a qualquer hora. 
              Nossa equipe especializada realiza o resgate com total sigilo, segurança e 
              humanização, facilitando o início do tratamento.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{benefit.title}</h3>
                    <p className="text-white/70 text-xs">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://wa.me/5511955931301?text=Olá! Preciso de informações sobre o serviço de resgate/remoção."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Solicitar Resgate Agora
            </motion.a>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main circle */}
              <div className="w-80 h-80 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <div className="w-60 h-60 rounded-full bg-white/15 flex items-center justify-center border border-white/20">
                  <div className="w-40 h-40 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-white mb-1">24h</div>
                      <div className="text-white/80 text-sm font-medium">7 dias</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-8 bg-white rounded-xl px-4 py-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary text-sm">Todo Brasil</span>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-8 left-4 bg-white rounded-xl px-4 py-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary text-sm">Sigilo Garantido</span>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -left-4 bg-white rounded-xl px-4 py-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary text-sm">Humanizado</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};