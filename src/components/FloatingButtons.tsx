import { useState, useEffect, forwardRef } from "react";
import { MessageCircle, ArrowUp, Siren } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SOSModal from "@/components/SOSModal";

const FloatingButtons = forwardRef<HTMLDivElement>((_, ref) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isSOSModalOpen, setIsSOSModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const mensagem = encodeURIComponent(
      "Olá! Gostaria de mais informações sobre o Hospital Rumo Certo."
    );
    window.open(`https://wa.me/5511955931301?text=${mensagem}`, "_blank");
  };

  return (
    <>
      <div ref={ref} className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Botão Voltar ao Topo */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-muted text-muted-foreground shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Botão SOS - Emergência */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => setIsSOSModalOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform relative overflow-hidden group"
          aria-label="SOS - Emergência 24h"
        >
          {/* Pulse effect */}
          <span className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-30" />
          <Siren className="w-6 h-6 relative z-10 group-hover:animate-pulse" />
        </motion.button>

        {/* Botão WhatsApp */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          onClick={openWhatsApp}
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.button>
      </div>

      {/* Modal SOS */}
      <SOSModal open={isSOSModalOpen} onOpenChange={setIsSOSModalOpen} />
    </>
  );
});

FloatingButtons.displayName = "FloatingButtons";

export default FloatingButtons;
