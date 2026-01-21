import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@/assets/logo-hospital.png";
import AgendamentoModal from "@/components/AgendamentoModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Links de seção (scroll na página principal)
  const sectionLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Estrutura", href: "#estrutura" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  // Links de páginas separadas
  const pageLinks = [
    { label: "Sobre Nós", href: "/sobre-nos" },
    { label: "Como Funciona", href: "/como-funciona" },
    { label: "Apoio à Família", href: "/apoio-familia" },
    { label: "UTI", href: "/uti" },
    { label: "Desintoxicação", href: "/desintoxicacao" },
  ];

  // Botões rápidos para mobile (páginas separadas)
  const quickPageLinks = [
    { label: "Família", href: "/apoio-familia" },
    { label: "UTI", href: "/uti" },
    { label: "Como Funciona", href: "/como-funciona" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Se for link de página, deixa o Link do react-router lidar
    if (href.startsWith("/")) return;
    
    e.preventDefault();
    const targetId = href.replace("#", "");
    
    // Se não estiver na home, vai pra home primeiro
    if (!isHomePage) {
      window.location.href = "/" + href;
      return;
    }
    
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
          <Link
            to="/"
            className="flex items-center"
          >
            <img
              src={logoImage}
              alt="Hospital Rumo Certo"
              className={`transition-all duration-300 ${
                isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"
              } w-auto`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Section Links */}
            {sectionLinks.map((link) => (
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
            
            {/* Separator */}
            <div className={`w-px h-5 ${isScrolled ? "bg-border" : "bg-white/30"}`} />
            
            {/* Page Links */}
            {pageLinks.slice(0, 3).map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`transition-colors font-medium text-sm hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsModalOpen(true)}
            >
              Agende sua Visita
            </Button>
          </div>

          {/* Mobile - Quick Links + Menu */}
          <div className="lg:hidden flex items-center gap-2 relative">
            {/* Quick Page Links Buttons */}
            {quickPageLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`hidden sm:block text-xs font-medium px-2 py-1 rounded-full transition-colors ${
                  isScrolled 
                    ? "bg-primary/10 text-primary hover:bg-primary/20" 
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Menu Button */}
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
                  className="absolute top-full right-0 mt-2 w-64 bg-background/95 backdrop-blur-md rounded-xl shadow-xl border border-border"
                >
                  <div className="flex flex-col p-4 gap-2">
                    {/* Section Links */}
                    <span className="text-xs text-muted-foreground uppercase font-medium mb-1">Navegação</span>
                    {sectionLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-foreground hover:text-primary transition-colors font-medium text-sm py-1"
                      >
                        {link.label}
                      </a>
                    ))}
                    
                    <div className="border-t border-border my-2" />
                    
                    {/* Page Links */}
                    <span className="text-xs text-muted-foreground uppercase font-medium mb-1">Saiba Mais</span>
                    {pageLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-foreground hover:text-primary transition-colors font-medium text-sm py-1"
                      >
                        {link.label}
                      </Link>
                    ))}
                    
                    <Button
                      className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-3"
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
