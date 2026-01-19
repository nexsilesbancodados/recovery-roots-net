import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-hospital.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Equipe", href: "#equipe" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Animate header on load
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <>
      {/* Top Bar - Info */}
      <div 
        ref={topBarRef}
        className={`hidden md:block fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-9 opacity-100'
        }`}
      >
      <div className="glass-emerald text-primary-foreground/90 text-xs h-9">
          <div className="container mx-auto px-4 h-full">
            <div className="flex items-center justify-between h-full">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-secondary" />
                  <span className="font-light">24 horas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-secondary" />
                  <span className="font-light">Cabreúva e Salto, SP</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-secondary" />
                <a href="tel:5511955931301" className="hover:text-secondary transition-colors font-medium">
                  (11) 95593-1301
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        ref={headerRef}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'top-0 bg-white/95 backdrop-blur-xl shadow-soft py-2' 
            : 'top-9 md:top-9 bg-transparent py-3 md:py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex items-center relative z-10">
              <img 
                src={logo} 
                alt="Hospital Rumo Certo" 
                className={`transition-all duration-500 ${
                  isScrolled 
                    ? 'h-8 md:h-10' 
                    : 'h-10 md:h-12 brightness-0 invert'
                } w-auto`}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-xs font-medium tracking-wide transition-all duration-300 relative group ${
                    isScrolled 
                      ? 'text-foreground hover:text-primary' 
                      : 'text-white/80 hover:text-white'
                  }`}
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  {item.label}
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[1.5px] transition-all duration-300 group-hover:w-1/2 w-0 ${
                    isScrolled ? 'bg-secondary' : 'bg-secondary'
                  }`} />
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <div className={`hidden lg:flex items-center gap-1.5 px-2 py-1 text-[10px] font-medium tracking-wider uppercase ${
                isScrolled 
                  ? 'text-primary' 
                  : 'text-white/70'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span>Online</span>
              </div>
              <Button 
                asChild
                size="sm"
                className={`rounded-none px-5 text-xs transition-all duration-500 tracking-wide font-medium ${
                  isScrolled 
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                }`}
              >
                <a href="#contato">Agendar</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-3 transition-colors ${
                isScrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-border shadow-elevated absolute top-full left-0 right-0"
            >
              <nav className="container mx-auto px-4 py-8 flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors py-4 px-4 border-b border-border/50 last:border-0"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-2 text-sm text-muted-foreground py-4 px-4 mt-4 bg-muted/30">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="font-medium">(11) 95593-1301</span>
                </div>
                <Button asChild className="mt-4 rounded-none">
                  <a href="#contato">Agendar Consulta</a>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
