import { forwardRef } from "react";
import { Phone, MessageCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface SOSModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SOSModal = forwardRef<HTMLDivElement, SOSModalProps>(
  ({ open, onOpenChange }, ref) => {
    const phoneNumber = "5511955931301";

    const handleCall = () => {
      window.location.href = `tel:+${phoneNumber}`;
    };

    const handleWhatsApp = (type: "emergencia" | "consulta") => {
      const mensagem =
        type === "emergencia"
          ? "EMERGÊNCIA: Preciso de ajuda urgente para internação."
          : "Olá! Gostaria de informações sobre consulta e tratamento.";
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`,
        "_blank"
      );
      onOpenChange(false);
    };

    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent ref={ref} className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <DialogTitle className="text-xl text-center">
              Atendimento de Emergência 24h
            </DialogTitle>
            <DialogDescription className="text-center">
              Nossa equipe está pronta para ajudar. Escolha como deseja ser
              atendido:
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3 mt-4">
            {/* Ligar agora */}
            <Button
              size="lg"
              onClick={handleCall}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </Button>

            {/* WhatsApp Emergência */}
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleWhatsApp("emergencia")}
              className="w-full border-red-300 text-red-600 hover:bg-red-50 py-6 text-base"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp - Emergência
            </Button>

            {/* Separador */}
            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  ou para consulta
                </span>
              </div>
            </div>

            {/* WhatsApp Consulta */}
            <Button
              size="lg"
              variant="secondary"
              onClick={() => handleWhatsApp("consulta")}
              className="w-full py-5"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Quero mais informações
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-4">
            Sigilo total garantido. Equipe especializada 24 horas.
          </p>
        </DialogContent>
      </Dialog>
    );
  }
);

SOSModal.displayName = "SOSModal";

export default SOSModal;
