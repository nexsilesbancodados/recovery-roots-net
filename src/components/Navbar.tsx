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
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "top-0" : "top-10"
      } ${
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

            {/* CTA Button */}
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 text-sm shadow-[0_4px_14px_-3px_hsl(var(--primary)/0.4)] hover:shadow-[0_6px_20px_-3px_hsl(var(--primary)/0.5)] hover:-translate-y-px transition-all duration-300"
            >
              Agende sua Visita
            </Button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              size="sm"
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-xs px-4"
            >
              Agendar
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
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-1 mx-4 bg-card/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50 overflow-hidden"
                >
                  <div className="p-5 space-y-1">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mb-2">Navegação</p>
                    {mainLinks.map((link) =>
                      link.isPage ? (
                        <Link
                          key={link.label}
                          to={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-2.5 px-3 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          key={link.label}
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className="block py-2.5 px-3 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                        >
                          {link.label}
                        </a>
                      )
                    )}
                  </div>
                </motion.div>
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
