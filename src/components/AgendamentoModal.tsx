import { useState } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { openWhatsApp } from "@/lib/contact";
interface AgendamentoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const agendamentoSchema = z.object({
  nome: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  telefone: z.string().trim().min(10, "Telefone inválido").max(20),
  email: z.string().trim().email("E-mail inválido").max(255),
  data: z.string().min(1, "Selecione uma data"),
  horario: z.string().min(1, "Selecione um horário"),
  mensagem: z.string().max(500).optional(),
});

const AgendamentoModal = ({ open, onOpenChange }: AgendamentoModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    data: "",
    horario: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = agendamentoSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    
    // Criar mensagem para WhatsApp
    const mensagemWhatsApp = 
      `Olá! Gostaria de agendar uma visita.\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Data:* ${formData.data}\n` +
      `*Horário:* ${formData.horario}\n` +
      `${formData.mensagem ? `*Observações:* ${formData.mensagem}` : ""}`;
    
    openWhatsApp(mensagemWhatsApp);
    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Complete o agendamento pelo WhatsApp.",
    });
    
    onOpenChange(false);
    setFormData({
      nome: "",
      telefone: "",
      email: "",
      data: "",
      horario: "",
      mensagem: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-display">
            <Calendar className="w-5 h-5 text-primary" fill="currentColor" strokeWidth={1} />
            Agende sua Visita
          </DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo para agendar uma visita ao Hospital Rumo Certo.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="nome" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Nome completo
            </Label>
            <Input
              id="nome"
              placeholder="Seu nome"
              value={formData.nome}
              onChange={(e) => handleChange("nome", e.target.value)}
              className={errors.nome ? "border-destructive" : ""}
            />
            {errors.nome && <p className="text-xs text-destructive">{errors.nome}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="telefone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Telefone
              </Label>
              <Input
                id="telefone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.telefone}
                onChange={(e) => handleChange("telefone", e.target.value)}
                className={errors.telefone ? "border-destructive" : ""}
              />
              {errors.telefone && <p className="text-xs text-destructive">{errors.telefone}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="data" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Data preferencial
              </Label>
              <Input
                id="data"
                type="date"
                value={formData.data}
                onChange={(e) => handleChange("data", e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className={errors.data ? "border-destructive" : ""}
              />
              {errors.data && <p className="text-xs text-destructive">{errors.data}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="horario" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Horário
              </Label>
              <select
                id="horario"
                value={formData.horario}
                onChange={(e) => handleChange("horario", e.target.value)}
                className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  errors.horario ? "border-destructive" : "border-input"
                }`}
              >
                <option value="">Selecione</option>
                <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
              </select>
              {errors.horario && <p className="text-xs text-destructive">{errors.horario}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensagem" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Observações (opcional)
            </Label>
            <Textarea
              id="mensagem"
              placeholder="Alguma informação adicional..."
              value={formData.mensagem}
              onChange={(e) => handleChange("mensagem", e.target.value)}
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            Enviar Solicitação
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AgendamentoModal;
