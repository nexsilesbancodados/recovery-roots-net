import { Facebook, Instagram, Linkedin, Youtube, Phone, MapPin, Mail, Clock } from "lucide-react";
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
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
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
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed text-sm">
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
                  className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-5">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-semibold text-base mb-5">Tratamentos</h4>
            <ul className="space-y-3">
              {treatments.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-base mb-5">Contato</h4>
            <ul className="space-y-4 text-secondary-foreground/80 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">(11) 95593-1301</p>
                  <p className="text-xs text-secondary-foreground/60">WhatsApp</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contato@hospitalrumocerto.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Cabreúva, São Paulo</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Atendimento 24 horas</p>
                  <p className="text-xs text-secondary-foreground/60">Todos os dias</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © {currentYear} Hospital Rumo Certo. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary-foreground/60">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
