import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Shield, Award, Users, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    value: "(11) 95593-1301",
    description: "Atendimento humanizado",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "(11) 95593-1301",
    description: "Resposta rápida",
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "Cabreúva, SP",
    description: "Ambiente sereno",
  },
  {
    icon: Clock,
    title: "Atendimento",
    value: "24 horas",
    description: "Suporte contínuo",
  },
];

const credentials = [
  { icon: Shield, label: "Ambiente Seguro" },
  { icon: Award, label: "Equipe Especializada" },
  { icon: Users, label: "Programa 12 Passos" },
];

const conditions = [
  { id: "dependencia-quimica", label: "Dependência Química" },
  { id: "doenca-mental", label: "Doença Mental" },
  { id: "farmacodependencia", label: "Farmacodependência" },
  { id: "alcoolismo", label: "Alcoolismo" },
];

export const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    internationType: "voluntaria",
    conditions: [] as string[],
    message: "",
  });

  const handleConditionChange = (conditionId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      conditions: checked 
        ? [...prev.conditions, conditionId]
        : prev.conditions.filter(c => c !== conditionId)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const conditionLabels = formData.conditions
      .map(c => conditions.find(cond => cond.id === c)?.label)
      .filter(Boolean)
      .join(", ");
    
    const internationType = formData.internationType === "voluntaria" 
      ? "Voluntária" 
      : "Involuntária";
    
    const message = `*Novo Contato - Hospital Rumo Certo*

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Tipo de Internação:* ${internationType}
*Condição(ões):* ${conditionLabels || "Não especificado"}
${formData.message ? `*Mensagem:* ${formData.message}` : ""}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=5511955931301&text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Credibility Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {credentials.map((cred, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-border/50 shadow-soft"
            >
              <cred.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{cred.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - CTA Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
              Estamos Prontos Para Ajudar
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              O primeiro passo para a <span className="text-primary">mudança</span> começa agora
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Preencha o formulário ao lado e nossa equipe entrará em contato 
              para acolher você ou seu familiar e iniciar o caminho da recuperação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" asChild>
                <a href="tel:5511955931301">
                  <Phone className="mr-2 w-5 h-5" />
                  Ligar Agora
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Atendimento confidencial e humanizado</p>
              <div className="flex items-center gap-6 text-sm text-foreground/80">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Sigilo total</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>24 horas</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-card/90 backdrop-blur-sm border-border/50 shadow-card">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Solicite Contato
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo *</Label>
                    <Input
                      id="name"
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>

                  {/* Internation Type */}
                  <div className="space-y-3">
                    <Label>Tipo de Internação *</Label>
                    <RadioGroup
                      value={formData.internationType}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, internationType: value }))}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="voluntaria" id="voluntaria" />
                        <Label htmlFor="voluntaria" className="font-normal cursor-pointer">
                          Voluntária
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="involuntaria" id="involuntaria" />
                        <Label htmlFor="involuntaria" className="font-normal cursor-pointer">
                          Involuntária
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Conditions */}
                  <div className="space-y-3">
                    <Label>Condição (selecione uma ou mais)</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {conditions.map((condition) => (
                        <div key={condition.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={condition.id}
                            checked={formData.conditions.includes(condition.id)}
                            onCheckedChange={(checked) => 
                              handleConditionChange(condition.id, checked as boolean)
                            }
                          />
                          <Label 
                            htmlFor={condition.id} 
                            className="font-normal cursor-pointer text-sm"
                          >
                            {condition.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem (opcional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Descreva brevemente a situação..."
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      rows={3}
                    />
                  </div>

                  {/* Submit */}
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 w-5 h-5" />
                    Enviar via WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Ao enviar, você será redirecionado para o WhatsApp com os dados preenchidos.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{info.title}</h3>
                  <p className="text-lg font-semibold text-primary mb-1">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
