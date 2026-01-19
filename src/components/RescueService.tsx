import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Clock, MapPin, Phone, Shield, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "24 horas",
    description: "Atendimento ininterrupto",
  },
  {
    icon: MapPin,
    title: "Todo o Brasil",
    description: "Qualquer cidade",
  },
  {
    icon: Shield,
    title: "Sigilo Total",
    description: "100% confidencial",
  },
  {
    icon: HeartHandshake,
    title: "Humanizado",
    description: "Equipe especializada",
  },
];

export const RescueService = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-amber-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-white/90 font-semibold text-xs uppercase tracking-wider">
                Serviço Exclusivo
              </span>
            </div>
            
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Resgate e Remoção{" "}
              <span className="text-primary-foreground/90">24h em Todo o Brasil</span>
            </h2>
            
            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6">
              Oferecemos serviço de busca e remoção em <strong>qualquer cidade do Brasil</strong>, 
              com total discrição e segurança. Nossa equipe é treinada para conduzir o processo com humanização.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  className="flex items-start gap-2 bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-xs">{benefit.title}</h3>
                    <p className="text-white/70 text-[10px]">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://wa.me/5511955931301?text=Olá! Preciso de informações sobre o serviço de resgate/remoção."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-sm hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Solicitar Resgate
            </motion.a>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main circle */}
              <div className="w-56 h-56 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <div className="w-40 h-40 rounded-full bg-white/15 flex items-center justify-center border border-white/20">
                  <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-0.5">24h</div>
                      <div className="text-white/80 text-xs font-medium">7 dias</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-2 right-4 bg-white rounded-lg px-3 py-2 shadow-lg"
              >
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="font-semibold text-secondary-foreground text-xs">Todo Brasil</span>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-4 left-2 bg-white rounded-lg px-3 py-2 shadow-lg"
              >
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-foreground text-xs">Sigilo</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
