import { useState, useEffect } from "react";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage1 from "@/assets/hero-hospital.webp";
import heroImage2 from "@/assets/hero-resgate.webp";
import heroImage3 from "@/assets/hero-setembro-amarelo.webp";
import heroImage4 from "@/assets/hero-combate-drogas.webp";
import heroImage5 from "@/assets/hero-convenios.webp";
import logoImage from "@/assets/logo-hospital.webp";
import AgendamentoModal from "@/components/AgendamentoModal";
import { PHONE_DISPLAY } from "@/lib/contact";

const heroImages = [
  { src: heroImage1, alt: "Hospital Rumo Certo - Ambiente terapêutico com piscina e natureza" },
  { src: heroImage2, alt: "Hospital Rumo Certo - Resgate 24 horas" },
  { src: heroImage3, alt: "Setembro Amarelo - Prevenção ao suicídio é todo dia" },
  { src: heroImage4, alt: "Combate às Drogas e Alcoolismo - Todo dia é dia de combate" },
  { src: heroImage5, alt: "Trabalhamos com os melhores convênios de saúde" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
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
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
    
    setIsMenuOpen(false);
  };

  return (
    <header className="relative" id="inicio">
      {/* Combined Top Bar + Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        {/* Top Bar - Compact */}
        <div className="bg-primary text-primary-foreground py-1">
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-xs">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Phone size={12} />
                <span>{PHONE_DISPLAY.main}</span>
              </span>
              <span className="hidden md:flex items-center gap-1">
                <Phone size={12} />
                <span>{PHONE_DISPLAY.secondary}</span>
              </span>
              <span className="hidden lg:flex items-center gap-1">
                <Phone size={12} />
                <span>{PHONE_DISPLAY.tertiary}</span>
              </span>
              <span className="hidden xl:flex items-center gap-1">
                <Clock size={12} />
                <span>Atendimento 24h</span>
              </span>
            </div>
            <span className="hidden sm:flex items-center gap-1">
              <MapPin size={12} />
              <span>Cabreúva, SP</span>
            </span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" onClick={(e) => handleNavClick(e, "#inicio")} className="flex items-center">
              <img 
                src={logoImage} 
                alt="Hospital Rumo Certo" 
                className="h-12 md:h-14 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm"
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
                className="p-2 text-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Mobile Navigation - Dropdown on right side */}
              {isMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-background/95 backdrop-blur-sm rounded-lg shadow-xl border border-border animate-fade-in">
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
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Image Carousel */}
      <div className="relative w-full overflow-hidden">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`w-full h-auto transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100 relative" : "opacity-0 absolute inset-0"
            }`}
          />
        ))}
        
        {/* Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? "bg-primary scale-110" 
                  : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal de Agendamento */}
      <AgendamentoModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </header>
  );
};

export default Header;
