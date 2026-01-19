import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  options?: QuickOption[];
}

interface QuickOption {
  label: string;
  value: string;
}

const quickOptions: QuickOption[] = [
  { label: "Tipos de tratamento", value: "tratamentos" },
  { label: "Valores e convênios", value: "valores" },
  { label: "Como funciona a internação", value: "internacao" },
  { label: "Localização das unidades", value: "localizacao" },
  { label: "Falar com atendente", value: "whatsapp" },
];

const responses: Record<string, string> = {
  tratamentos: `Oferecemos tratamentos especializados para:

• **Dependência Química** - álcool, drogas ilícitas e medicamentos
• **Saúde Mental** - depressão, ansiedade, transtornos psiquiátricos
• **Alcoolismo** - programa específico de recuperação

Utilizamos o reconhecido **Programa de 12 Passos** com equipe multidisciplinar (psiquiatras, psicólogos, terapeutas).

Gostaria de saber mais detalhes sobre algum tratamento específico?`,

  valores: `Trabalhamos com os **principais convênios** de saúde, incluindo:
Bradesco Saúde, Porto Saúde, Cassi, Mediservice, São Luiz, entre outros.

Para **valores particulares** e condições de pagamento, nosso atendimento personalizado pode te ajudar com uma proposta adequada ao seu caso.

Posso te direcionar para nosso atendente para uma cotação personalizada?`,

  internacao: `O processo de internação é **humanizado e acolhedor**:

1️⃣ **Avaliação inicial** - conversa com nossa equipe para entender o caso
2️⃣ **Indicação de unidade** - temos 4 unidades especializadas
3️⃣ **Internação** - pode ser voluntária ou involuntária
4️⃣ **Tratamento** - duração média de 30 a 90 dias

Oferecemos **atendimento 24 horas** para emergências.

Quer falar com nossa equipe para iniciar uma avaliação?`,

  localizacao: `Temos **4 unidades especializadas**:

📍 **Unidade Hospitalar** - Cabreúva, SP (principal)
📍 **Unidade Masculina II** - Salto, SP
📍 **Unidade Masculina III** - Região
📍 **Unidade Feminina** - Cabreúva, SP

Todas em ambientes serenos, cercados pela natureza, ideais para recuperação.

Posso te ajudar a agendar uma visita?`,

  whatsapp: `Vou te direcionar para nosso atendimento via WhatsApp, onde nossa equipe poderá te ajudar de forma personalizada! 💚`,

  default: `Entendo! Sou a assistente virtual do Hospital Rumo Certo e posso te ajudar com informações sobre:

• Tipos de tratamento
• Valores e convênios
• Processo de internação
• Localização das unidades

Sobre o que você gostaria de saber mais?`,

  greeting: `Olá! 👋 Sou a **assistente virtual** do Hospital Rumo Certo.

Há mais de **18 anos** ajudamos famílias na recuperação de dependentes químicos e pacientes com transtornos mentais.

Como posso te ajudar hoje?`,
};

const findResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes("tratamento") || lowerInput.includes("droga") || lowerInput.includes("álcool") || lowerInput.includes("alcool") || lowerInput.includes("dependência") || lowerInput.includes("dependencia") || lowerInput.includes("mental")) {
    return responses.tratamentos;
  }
  if (lowerInput.includes("valor") || lowerInput.includes("preço") || lowerInput.includes("preco") || lowerInput.includes("custo") || lowerInput.includes("convênio") || lowerInput.includes("convenio") || lowerInput.includes("plano")) {
    return responses.valores;
  }
  if (lowerInput.includes("internação") || lowerInput.includes("internacao") || lowerInput.includes("internar") || lowerInput.includes("como funciona") || lowerInput.includes("processo")) {
    return responses.internacao;
  }
  if (lowerInput.includes("onde") || lowerInput.includes("local") || lowerInput.includes("endereço") || lowerInput.includes("endereco") || lowerInput.includes("unidade") || lowerInput.includes("cabreúva") || lowerInput.includes("cabreuva") || lowerInput.includes("salto")) {
    return responses.localizacao;
  }
  if (lowerInput.includes("whatsapp") || lowerInput.includes("atendente") || lowerInput.includes("humano") || lowerInput.includes("pessoa") || lowerInput.includes("falar")) {
    return responses.whatsapp;
  }
  
  return responses.default;
};

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            text: responses.greeting,
            isBot: true,
            options: quickOptions,
          },
        ]);
      }, 500);
    }
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: text,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const responseText = findResponse(text);
      const isWhatsAppRedirect = text.toLowerCase() === "whatsapp" || responseText === responses.whatsapp;

      const botMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        isBot: true,
        options: isWhatsAppRedirect ? undefined : quickOptions,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);

      if (isWhatsAppRedirect) {
        setTimeout(() => {
          window.open(
            "https://api.whatsapp.com/send?phone=5511955931301&text=Ol%C3%A1%2C+vim+pelo+site+e+desejo+mais+informa%C3%A7%C3%B5es%21",
            "_blank"
          );
        }, 1500);
      }
    }, 1000 + Math.random() * 500);
  };

  const handleQuickOption = (option: QuickOption) => {
    handleSendMessage(option.value);
  };

  return (
    <>
      {/* Chat Button with Gold Glow */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 2, duration: 0.4, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpen}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 shadow-elevated hover:shadow-glow-gold transition-all duration-500 animate-pulse-glow"
            aria-label="Abrir chat"
          >
            <Bot className="w-6 h-6" />
            <span className="font-medium text-sm hidden sm:inline-block tracking-wide">
              Tire suas dúvidas
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-50 w-[400px] max-w-[calc(100vw-2rem)] bg-white shadow-elevated overflow-hidden border border-border/50"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-white/10 flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-sm tracking-wide">Assistente Virtual</h3>
                  <p className="text-xs text-primary-foreground/70">Hospital Rumo Certo</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 transition-colors"
                aria-label="Fechar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[380px] overflow-y-auto p-5 space-y-4 bg-muted/20">
              {messages.map((message) => (
                <div key={message.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2 ${message.isBot ? "" : "flex-row-reverse"}`}
                  >
                    <div
                      className={`w-8 h-8 flex items-center justify-center flex-shrink-0 ${
                        message.isBot ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>
                    <div
                      className={`max-w-[80%] px-4 py-3 text-sm ${
                        message.isBot
                          ? "bg-white border border-border/50 text-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      <div 
                        className="whitespace-pre-line [&_strong]:font-semibold leading-relaxed"
                        dangerouslySetInnerHTML={{ 
                          __html: message.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Quick Options */}
                  {message.isBot && message.options && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-3 ml-10 flex flex-wrap gap-2"
                    >
                      {message.options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuickOption(option)}
                          className="text-xs px-3 py-1.5 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {option.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white border border-border/50 px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/50 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(input);
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 border-border/50 focus-visible:ring-primary rounded-none"
                />
                <Button type="submit" size="icon" className="flex-shrink-0 rounded-none">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Ou fale direto via{" "}
                <a
                  href="https://api.whatsapp.com/send?phone=5511955931301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary inline-flex items-center gap-1 font-medium transition-colors"
                >
                  WhatsApp <ArrowRight className="w-3 h-3" />
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
