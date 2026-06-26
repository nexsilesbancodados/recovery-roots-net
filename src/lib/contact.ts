// Números de contato centralizados do Hospital Rumo Certo
export const PHONE_NUMBERS = {
  main: "5511988104793",
  secondary: "5511995117736",
  tertiary: "5511955931301",
} as const;

export const PHONE_DISPLAY = {
  main: "(11) 98810-4793",
  secondary: "(11) 99511-7736",
  tertiary: "(11) 95593-1301",
} as const;

// Número principal para WhatsApp e ligações
export const PRIMARY_PHONE = PHONE_NUMBERS.main;
export const PRIMARY_PHONE_DISPLAY = PHONE_DISPLAY.main;

// Dispara evento de conversão no GA4 e no Meta Pixel (se disponíveis)
type W = typeof window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};
const trackLead = (method: "whatsapp" | "call") => {
  const w = window as W;
  w.gtag?.("event", "generate_lead", { method });
  w.fbq?.("track", "Lead", { method });
};

// Função auxiliar para abrir WhatsApp
export const openWhatsApp = (message: string, phone: string = PRIMARY_PHONE) => {
  trackLead("whatsapp");
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
};

// Função auxiliar para fazer ligação
export const makeCall = (phone: string = PRIMARY_PHONE) => {
  trackLead("call");
  window.location.href = `tel:+${phone}`;
};
