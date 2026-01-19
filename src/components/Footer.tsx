import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Facebook, Instagram, Linkedin, Youtube, Phone, MapPin, Mail, Heart, ArrowUp } from "lucide-react";
import logo from "@/assets/logo-hospital.png";

gsap.registerPlugin(ScrollTrigger);

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
  { label: "Saúde Mental Premium", href: "#tratamentos" },
  { label: "Dependência Química", href: "#tratamentos" },
  { label: "Alcoolismo", href: "#tratamentos" },
  { label: "Burnout Executivo", href: "#tratamentos" },
];

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer reveal effect
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
          },
        }
      );

      // Content stagger animation
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-secondary/90 transition-colors shadow-lg"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-20 relative">
        <div ref={contentRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <img 
                src={logo} 
                alt="Hospital Rumo Certo" 
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/60 mb-8 leading-relaxed text-sm">
              Há mais de 18 anos transformando vidas com excelência, 
              discrição e cuidado humanizado em saúde mental e dependência química.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 font-medium tracking-wide">
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300 text-sm tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-serif text-lg mb-6 font-medium tracking-wide">
              Tratamentos
            </h4>
            <ul className="space-y-3">
              {treatments.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300 text-sm tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 font-medium tracking-wide">
              Contato
            </h4>
            <ul className="space-y-4 text-primary-foreground/60 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="tel:5511955931301" className="hover:text-secondary transition-colors tracking-wide">
                  (11) 95593-1301
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="tracking-wide">contato@hospitalrumocerto.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <span className="tracking-wide">Cabreúva e Salto, SP</span>
              </li>
            </ul>

            <div className="mt-8 p-5 border border-primary-foreground/10 bg-primary-foreground/5">
              <p className="text-secondary text-sm font-medium uppercase tracking-[0.15em] mb-1">
                Atendimento 24h
              </p>
              <p className="text-primary-foreground/50 text-xs tracking-wide">
                Plantão para admissões e emergências
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/40 flex items-center gap-1 tracking-wide">
              © {currentYear} Hospital Rumo Certo. Feito com{" "}
              <Heart className="w-3 h-3 text-secondary fill-secondary" />{" "}
              para transformar vidas.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/40">
              <a href="#" className="hover:text-secondary transition-colors tracking-wide">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-secondary transition-colors tracking-wide">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
