import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock, ExternalLink } from "lucide-react";
import logoImage from "@/assets/logo-hospital.png";
import { PHONE_NUMBERS, PHONE_DISPLAY } from "@/lib/contact";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground" id="contato">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img 
              src={logoImage} 
              alt="Hospital Rumo Certo" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Cuidando da sua saúde mental com excelência. Tratamentos especializados para dependência química.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: "https://www.facebook.com/hospitalrumocerto", icon: Facebook, label: "Facebook" },
                { href: "https://www.instagram.com/hospitalrumocerto/", icon: Instagram, label: "Instagram" },
                { href: "https://www.linkedin.com/company/hospitalrumocerto", icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" fill="currentColor" strokeWidth={label === "Instagram" ? 1 : 0} />
                </a>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-base text-secondary tracking-wide">Contato</h4>
            <div className="space-y-3 text-sm">
              {[
                { phone: PHONE_NUMBERS.main, display: PHONE_DISPLAY.main },
                { phone: PHONE_NUMBERS.secondary, display: PHONE_DISPLAY.secondary },
                { phone: PHONE_NUMBERS.tertiary, display: PHONE_DISPLAY.tertiary },
              ].map(({ phone, display }) => (
                <a
                  key={phone}
                  href={`tel:+${phone}`}
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors group"
                >
                  <Phone className="w-4 h-4 text-secondary/70 group-hover:text-secondary flex-shrink-0" />
                  <span>{display}</span>
                </a>
              ))}
              <a href="mailto:adm@rumocerto.com.br" className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors group">
                <Mail className="w-4 h-4 text-secondary/70 group-hover:text-secondary flex-shrink-0" />
                <span>adm@rumocerto.com.br</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/50 text-xs pt-1">
                <MapPin className="w-4 h-4 text-secondary/50 flex-shrink-0 mt-0.5" />
                <span>Via Des. Luiz Carlos de Araújo, 2015, Cabreúva - SP</span>
              </div>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-base text-secondary tracking-wide">Funcionamento</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-secondary/70 flex-shrink-0" />
                <span className="font-bold text-primary-foreground bg-secondary/15 px-3 py-1 rounded-full text-xs">
                  24 horas
                </span>
              </div>
              <div className="pl-7 space-y-1.5 text-primary-foreground/60">
                <p>Visitas: Seg-Sex 9h-17h</p>
                <p>Sáb 9h-12h | Dom 10h-12h</p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-base text-secondary tracking-wide">Localização</h4>
            <div className="rounded-xl overflow-hidden h-32 ring-1 ring-primary-foreground/10">
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
            <a
              href="https://maps.google.com/?q=Via+Des+Luiz+Carlos+de+Araújo+2015+Cabreúva+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-secondary/70 hover:text-secondary transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Abrir no Google Maps
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/40">
            <p>© {new Date().getFullYear()} Hospital Rumo Certo. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors">Privacidade</a>
              <a href="#" className="hover:text-secondary transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
