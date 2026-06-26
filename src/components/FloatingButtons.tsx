import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { openWhatsApp, makeCall } from "@/lib/contact";

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    openWhatsApp("Olá! Gostaria de mais informações sobre o Hospital Rumo Certo.");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Ligar 24h */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        onClick={() => makeCall()}
        className="group flex items-center gap-2 rounded-full bg-primary text-primary-foreground shadow-lg pl-4 pr-3 py-3 hover:scale-105 transition-transform"
        aria-label="Ligar agora 24h"
      >
        <span className="text-sm font-bold hidden sm:inline">Ligar 24h</span>
        <Phone className="w-5 h-5" fill="currentColor" strokeWidth={1} />
      </motion.button>

      {/* WhatsApp com pulsação */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={handleWhatsApp}
        className="relative flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg pl-4 pr-3 py-3 hover:scale-105 transition-transform"
        aria-label="Contato via WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping" />
        <span className="relative text-sm font-bold hidden sm:inline">Fale conosco</span>
        <MessageCircle className="relative w-6 h-6" fill="currentColor" strokeWidth={1} />
      </motion.button>
    </div>
  );
};

export default FloatingButtons;
