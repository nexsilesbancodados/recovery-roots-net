import { Phone, AlertCircle } from "lucide-react";
import { PHONE_NUMBERS, PHONE_DISPLAY, makeCall } from "@/lib/contact";

const EmergencyBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground py-1 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 animate-pulse" fill="currentColor" strokeWidth={1} />
            <span className="text-xs md:text-sm font-medium">
              Precisa de ajuda agora?
            </span>
          </div>

          <button
            onClick={() => makeCall(PHONE_NUMBERS.main)}
            className="flex items-center gap-2 bg-primary-foreground text-primary px-3 py-1 rounded-full font-bold text-xs md:text-sm hover:bg-primary-foreground/90 transition-colors shadow-md"
          >
            <Phone className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" strokeWidth={1} />
            <span>Ligar 24h · {PHONE_DISPLAY.main}</span>
          </button>

          <span className="hidden sm:inline text-xs md:text-sm font-medium bg-white/15 px-2 py-0.5 rounded-full">
            Atendimento 24h
          </span>
        </div>
      </div>
    </div>
  );
};


export default EmergencyBar;
