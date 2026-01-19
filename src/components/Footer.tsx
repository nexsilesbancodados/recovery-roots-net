import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

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

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-bold">RC</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">Rumo Certo</h3>
                <p className="text-sm text-secondary-foreground/70">Hospital Psiquiátrico</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md leading-relaxed">
              Dedicamo-nos a proporcionar tratamentos excepcionais e especializados para saúde mental, 
              alcoolismo e dependência química em Cabreúva, São Paulo.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li>(11) 95593-1301</li>
              <li>WhatsApp: (11) 95593-1301</li>
              <li>contato@hospitalrumocerto.com.br</li>
              <li>Cabreúva, SP</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © 2024 Hospital Rumo Certo. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/60">
            <a href="#" className="hover:text-secondary-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-secondary-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
