import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@/assets/logo-hospital.png";
import AgendamentoModal from "@/components/AgendamentoModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Estrutura", href: "#estrutura" },
    { label: "Equipe", href: "#equipe" },
    { label: "Contato", href: "#contato" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navHeight = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, "#inicio")}
            className="flex items-center"
          >
            <img
              src={logoImage}
              alt="Hospital Rumo Certo"
              className={`transition-all duration-300 ${
                isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"
              } w-auto`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors font-medium text-sm hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsModalOpen(true)}
            >
              Agende sua Visita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden relative">
            <button
              className={`p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Navigation - Dropdown */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 w-56 bg-background/95 backdrop-blur-md rounded-xl shadow-xl border border-border"
                >
                  <div className="flex flex-col p-4 gap-3">
                    {navLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-foreground hover:text-primary transition-colors font-medium text-sm py-1"
                      >
                        {link.label}
                      </a>
                    ))}
                    <Button
                      className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2"
                      onClick={() => {
                        setIsModalOpen(true);
                        setIsMenuOpen(false);
                      }}
                    >
                      Agende sua Visita
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Modal de Agendamento */}
      <AgendamentoModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </nav>
  );
};

export default Navbar;
