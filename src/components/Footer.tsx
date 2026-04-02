import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock } from "lucide-react";
import logoImage from "@/assets/logo-hospital.png";
import { PHONE_NUMBERS, PHONE_DISPLAY } from "@/lib/contact";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background" id="contato">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Logo e Descrição */}
          <div className="space-y-3">
            <img 
              src={logoImage} 
              alt="Hospital Rumo Certo" 
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-background/70 text-sm leading-relaxed">
              Cuidando da sua saúde mental com excelência. Tratamentos especializados para dependência química.
            </p>
            <div className="flex items-center gap-2">
              <a 
                href="https://www.facebook.com/hospitalrumocerto" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
              </a>
              <a 
                href="https://www.instagram.com/hospitalrumocerto/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/hospitalrumocerto" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-2">
            <h4 className="font-display font-bold text-base">Contato</h4>
            <div className="space-y-2 text-sm">
              <a href={`tel:+${PHONE_NUMBERS.main}`} className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" strokeWidth={1} />
                <span>{PHONE_DISPLAY.main}</span>
              </a>
              <a href={`tel:+${PHONE_NUMBERS.secondary}`} className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" strokeWidth={1} />
                <span>{PHONE_DISPLAY.secondary}</span>
              </a>
              <a href={`tel:+${PHONE_NUMBERS.tertiary}`} className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" strokeWidth={1} />
                <span>{PHONE_DISPLAY.tertiary}</span>
              </a>
              <a href="mailto:adm@rumocerto.com.br" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" strokeWidth={1} />
                <span>adm@rumocerto.com.br</span>
              </a>
              <div className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="currentColor" strokeWidth={1} />
                <span className="text-xs">Via Des. Luiz Carlos de Araújo, 2015, Cabreúva - SP</span>
              </div>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div className="space-y-2">
            <h4 className="font-display font-bold text-base">Funcionamento</h4>
            <div className="space-y-1.5 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" strokeWidth={1} />
                <span className="font-semibold text-background text-xs">24 horas</span>
              </div>
              <div className="pl-6 space-y-0.5 text-xs">
                <p>Visitas: Seg-Sex 9h-17h</p>
                <p>Sáb 9h-12h | Dom 10h-12h</p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="space-y-2">
            <h4 className="font-display font-bold text-base">Localização</h4>
            <div className="rounded-lg overflow-hidden h-28">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0!2d-46.8!3d-23.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI0JzAwLjAiUyA0NsKwNDgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Hospital Rumo Certo"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 mt-4 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-background/50">
            <p>© {new Date().getFullYear()} Hospital Rumo Certo. Todos os direitos reservados.</p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
