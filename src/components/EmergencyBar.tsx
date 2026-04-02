import { Phone, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { PHONE_NUMBERS, PHONE_DISPLAY, makeCall } from "@/lib/contact";

const EmergencyBar = () => {
  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-destructive via-destructive/90 to-secondary text-destructive-foreground py-2 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 animate-pulse" />
            <span className="text-xs md:text-sm font-medium">
              Precisa de ajuda agora?
            </span>
          </div>
          
          <button
            onClick={() => makeCall(PHONE_NUMBERS.main)}
            className="flex items-center gap-2 bg-white text-red-600 px-3 py-1 rounded-full font-bold text-xs md:text-sm hover:bg-red-50 transition-colors shadow-md"
          >
            <Phone className="w-3 h-3 md:w-4 md:h-4" />
            <span>{PHONE_DISPLAY.main}</span>
          </button>
          
          <span className="hidden sm:inline text-xs md:text-sm font-medium bg-white/20 px-2 py-0.5 rounded-full">
            Atendimento 24h
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default EmergencyBar;
