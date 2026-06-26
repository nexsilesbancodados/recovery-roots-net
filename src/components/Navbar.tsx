import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@/assets/logo-hospital.webp";
import AgendamentoModal from "@/components/AgendamentoModal";
import { openWhatsApp } from "@/lib/contact";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainLinks = [
    { label: "Convênios", href: "/convenios", isPage: true },
    { label: "Sobre Nós", href: "/sobre-nos", isPage: true },
    { label: "Como Funciona", href: "/como-funciona", isPage: true },
    { label: "Apoio à Família", href: "/apoio-familia", isPage: true },
    { label: "UPTI", href: "/uti", isPage: true },
    { label: "Desintoxicação", href: "/desintoxicacao", isPage: true },
    { label: "Resgate 24h", href: "/resgate", isPage: true },
    { label: "Equipe", href: "/equipe", isPage: true },
  ];


  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/")) return;
    e.preventDefault();
    const targetId = href.replace("#", "");
    if (!isHomePage) {
      window.location.href = "/" + href;
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - navHeight, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-10 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-border/30"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logoImage}
              alt="Hospital Rumo Certo"
              className={`transition-all duration-300 ${
                isScrolled ? "h-12 md:h-14" : "h-14 md:h-16"
              } w-auto`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-1">
              {mainLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`relative px-3 py-2 text-[13px] font-medium tracking-wide whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? "text-primary"
                        : "text-foreground/65 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-1 right-1 h-[2px] bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="w-px h-6 bg-border/50" />

            {/* CTA primário: WhatsApp */}
            <button
              onClick={() => openWhatsApp("Olá, preciso de ajuda para um familiar. Podem me orientar?")}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb955] text-white rounded-full px-4 py-2 text-xs font-bold whitespace-nowrap flex-shrink-0 shadow-md hover:-translate-y-px transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" fill="currentColor" strokeWidth={1} />
              Falar no WhatsApp
            </button>

            {/* CTA secundário: Agendar */}
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(true)}
              className="rounded-full px-4 text-xs whitespace-nowrap flex-shrink-0"
            >
              Agendar Visita
            </Button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              size="sm"
              onClick={() => openWhatsApp("Olá, preciso de ajuda para um familiar. Podem me orientar?")}
              className="bg-[#25D366] hover:bg-[#1fb955] text-white rounded-xl text-xs px-3 gap-1.5"
            >
              <MessageCircle className="w-4 h-4" fill="currentColor" strokeWidth={1} />
              WhatsApp
            </Button>
            <button
              className="p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="fixed inset-0 bg-black/30 z-40"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 mr-4 w-56 bg-background z-50 shadow-xl rounded-2xl border border-border/50 overflow-hidden"
                  >
                    <div className="py-2">
                      {mainLinks.map((link) => {
                        const isActive = location.pathname === link.href;
                        return (
                          <Link
                            key={link.label}
                            to={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block py-2 px-5 text-sm font-medium transition-colors ${
                              isActive
                                ? "bg-primary/10 text-primary"
                                : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                            }`}
                          >
                            {link.label}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AgendamentoModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </nav>
  );
};

export default Navbar;
