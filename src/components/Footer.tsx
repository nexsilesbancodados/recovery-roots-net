import { Facebook, Instagram, Linkedin, Youtube, Phone, MapPin, Mail, Heart } from "lucide-react";
import logo from "@/assets/logo-hospital.png";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Equipe", href: "#equipe" },
  { label: "Contato", href: "#contato" },
];

const treatments = [
  { label: "Saúde Mental", href: "#tratamentos" },
  { label: "Dependência Química", href: "#tratamentos" },
  { label: "Alcoolismo", href: "#tratamentos" },
  { label: "Burnout Executivo", href: "#tratamentos" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-beige-linen">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <img 
                src={logo} 
                alt="Hospital Rumo Certo" 
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/60 mb-8 leading-relaxed text-sm">
              Há mais de 18 anos transformando vidas com excelência, 
              discrição e cuidado humanizado em saúde mental e dependência química.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-charcoal transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6 font-medium">
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6 font-medium">
              Tratamentos
            </h4>
            <ul className="space-y-3">
              {treatments.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6 font-medium">
              Contato
            </h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:5511955931301" className="hover:text-secondary transition-colors">
                  (11) 95593-1301
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" />
                <span>contato@hospitalrumocerto.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <span>Cabreúva e Salto, SP</span>
              </li>
            </ul>

            <div className="mt-8 p-4 border border-white/10 bg-white/5">
              <p className="text-secondary text-sm font-medium uppercase tracking-wider mb-1">
                Atendimento 24h
              </p>
              <p className="text-white/60 text-xs">
                Plantão para admissões e emergências
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40 flex items-center gap-1">
              © {currentYear} Hospital Rumo Certo. Feito com{" "}
              <Heart className="w-3 h-3 text-secondary fill-secondary" />{" "}
              para transformar vidas.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/40">
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