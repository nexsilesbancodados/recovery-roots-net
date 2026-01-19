import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-hospital.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className={`hidden md:block transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-10 opacity-100'}`}>
        <div className="bg-primary text-primary-foreground/90 text-sm h-10">
          <div className="container mx-auto px-4 h-full">
            <div className="flex items-center justify-between h-full">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-secondary" />
                  <span>Atendimento 24 horas</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-secondary" />
                  <span>Cabreúva e Salto, SP</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-secondary" />
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
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex items-center relative z-10">
              <img 
                src={logo} 
                alt="Hospital Rumo Certo" 
                className={`transition-all duration-500 ${isScrolled ? 'h-14' : 'h-16'} w-auto`}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative group ${
                    isScrolled 
                      ? 'text-foreground hover:text-primary hover:bg-primary/5' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-1/2 rounded-full" />
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <div className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                isScrolled 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-white/10 text-white/90 backdrop-blur-sm'
              }`}>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Online agora
              </div>
              <Button 
                asChild 
                className={`rounded-full px-6 transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-primary hover:bg-primary/90' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                }`}
              >
                <a href="#contato">Fale Conosco</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
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
              className="lg:hidden bg-white border-t border-border shadow-xl"
            >
              <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors py-3 px-4 rounded-xl"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-2 text-sm text-muted-foreground py-3 px-4 mt-2 border-t border-border">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="font-medium">(11) 95593-1301</span>
                </div>
                <Button asChild className="mt-4 rounded-full">
                  <a href="#contato">Fale Conosco</a>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};