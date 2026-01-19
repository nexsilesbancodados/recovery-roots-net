import { Facebook, Instagram, Linkedin, Youtube, Phone, MapPin, Mail, Clock, Heart } from "lucide-react";
import logo from "@/assets/logo-hospital.png";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const quickLinks = [
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Contato", href: "#contato" },
];

const treatments = [
  { label: "Saúde Mental", href: "#tratamentos" },
  { label: "Dependência Química", href: "#tratamentos" },
  { label: "Alcoolismo", href: "#tratamentos" },
  { label: "Programa 12 Passos", href: "#tratamentos" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={logo} 
                alt="Hospital Rumo Certo" 
                className="h-20 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed text-sm">
              Há mais de 18 anos oferecendo tratamentos especializados 
              em saúde mental, alcoolismo e dependência química. 
              4 unidades em Cabreúva e Salto, SP.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary rounded-full" />
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-semibold text-base mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary rounded-full" />
              Tratamentos
            </h4>
            <ul className="space-y-3">
              {treatments.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-base mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary rounded-full" />
              Contato
            </h4>
            <ul className="space-y-4 text-primary-foreground/80 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-white">(11) 95593-1301</p>
                  <p className="text-xs text-primary-foreground/60">WhatsApp</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="pt-1">contato@hospitalrumocerto.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="pt-1">Cabreúva e Salto, SP</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-white">Atendimento 24 horas</p>
                  <p className="text-xs text-primary-foreground/60">Todos os dias</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
              © {currentYear} Hospital Rumo Certo. Feito com <Heart className="w-3 h-3 text-secondary fill-secondary" /> para transformar vidas.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-secondary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};