import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { openWhatsApp } from "@/lib/contact";

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    openWhatsApp("Olá! Gostaria de mais informações sobre o Hospital Rumo Certo.");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={handleWhatsApp}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" fill="currentColor" strokeWidth={1} />
      </motion.button>
    </div>
  );
};

export default FloatingButtons;
