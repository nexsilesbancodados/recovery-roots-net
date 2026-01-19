import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, MessageCircle, MapPin, Clock, Shield, Award, Users, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

gsap.registerPlugin(ScrollTrigger);

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
    description: "Resposta em minutos",
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
    description: "Plantão contínuo",
  },
];

const credentials = [
  { icon: Shield, label: "Sigilo Absoluto" },
  { icon: Award, label: "Equipe de Elite" },
  { icon: Users, label: "Programa 12 Passos" },
];

const conditions = [
  { id: "dependencia-quimica", label: "Dependência Química" },
  { id: "doenca-mental", label: "Transtorno Mental" },
  { id: "farmacodependencia", label: "Farmacodependência" },
  { id: "alcoolismo", label: "Alcoolismo" },
];

export const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    internationType: "voluntaria",
    conditions: [] as string[],
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badges animation
      if (badgesRef.current) {
        gsap.fromTo(
          badgesRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: badgesRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Content animation
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Form animation
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { x: 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Cards animation
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    
    const message = `*Contato - Hospital Rumo Certo*

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Tipo de Internação:* ${internationType}
*Condição(ões):* ${conditionLabels || "Não especificado"}
${formData.message ? `*Mensagem:* ${formData.message}` : ""}`;

    const encodedMessage = encodeURIComponent(message);
    
    setIsSubmitted(true);
    
    setTimeout(() => {
      window.open(`https://api.whatsapp.com/send?phone=5511955931301&text=${encodedMessage}`, "_blank");
    }, 800);
  };

  return (
    <section 
      ref={sectionRef}
      id="contato" 
      className="py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.02] to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-secondary/[0.03] to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Credibility Badges */}
        <div ref={badgesRef} className="flex flex-wrap justify-center gap-4 mb-16">
          {credentials.map((cred, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-white border border-border/50 shadow-soft"
            >
              <cred.icon className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium text-foreground tracking-wide">{cred.label}</span>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 mb-20">
          {/* Left - CTA Text */}
          <div ref={contentRef} className="flex flex-col justify-center">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-6">
              Concierge de Admissão
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Dê o Primeiro Passo Rumo à{" "}
              <span className="text-primary">Recuperação</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Entendemos que buscar ajuda é um ato de coragem. Por isso, nossa equipe 
              está preparada para acolher você ou seu familiar com todo o respeito, 
              sigilo e humanização que este momento exige.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="rounded-none px-10 py-7 text-base font-medium tracking-wide" 
                asChild
              >
                <a href="tel:5511955931301">
                  <Phone className="mr-3 w-5 h-5" />
                  Ligar Agora
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-none px-10 py-7 text-base font-medium tracking-wide border-2" 
                asChild
              >
                <a 
                  href="https://wa.me/5511955931301?text=Olá! Gostaria de mais informações sobre o tratamento."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-3 w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                Atendimento confidencial
              </p>
              <div className="flex items-center gap-8 text-sm text-foreground/70">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-secondary" />
                  <span>Sigilo total</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span>24 horas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-secondary" />
                  <span>+18 anos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div ref={formRef}>
            <Card className="bg-white border-border/50 shadow-card overflow-hidden">
              <CardContent className="p-8 lg:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                      Redirecionando...
                    </h3>
                    <p className="text-muted-foreground">
                      Você será direcionado ao WhatsApp em instantes.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-serif text-2xl font-medium text-foreground mb-2">
                      Solicite Contato
                    </h3>
                    <p className="text-sm text-muted-foreground mb-8">
                      Preencha o formulário e responderemos em minutos
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground font-medium">
                          Nome completo *
                        </Label>
                        <Input
                          id="name"
                          placeholder="Digite seu nome"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          required
                          className="rounded-none border-border/50 focus:border-primary h-12"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground font-medium">
                          Telefone/WhatsApp *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(00) 00000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          required
                          className="rounded-none border-border/50 focus:border-primary h-12"
                        />
                      </div>

                      {/* Internation Type */}
                      <div className="space-y-3">
                        <Label className="text-foreground font-medium">Tipo de Internação *</Label>
                        <RadioGroup
                          value={formData.internationType}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, internationType: value }))}
                          className="flex gap-6"
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
                        <Label className="text-foreground font-medium">
                          Condição (selecione uma ou mais)
                        </Label>
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
                        <Label htmlFor="message" className="text-foreground font-medium">
                          Mensagem (opcional)
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Descreva brevemente a situação..."
                          value={formData.message}
                          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                          rows={3}
                          className="rounded-none border-border/50 focus:border-primary resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full rounded-none h-14 text-base font-medium tracking-wide"
                      >
                        <Send className="mr-2 w-5 h-5" />
                        Enviar via WhatsApp
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Ao enviar, você será redirecionado para o WhatsApp.
                      </p>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className="text-center bg-white border-border/50 hover:border-secondary/30 hover:shadow-card transition-all duration-500 group"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center mx-auto mb-5 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-medium text-foreground mb-1 tracking-wide">{info.title}</h3>
                <p className="text-xl font-serif font-medium text-secondary mb-1">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
