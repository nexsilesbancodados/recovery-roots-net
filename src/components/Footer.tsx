import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock } from "lucide-react";
import logoImage from "@/assets/logo-hospital.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background" id="contato">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img 
              src={logoImage} 
              alt="Hospital Rumo Certo" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-background/80 text-base leading-relaxed">
              Cuidando da sua saúde mental com excelência e acolhimento. 
              Tratamentos especializados para dependência química e transtornos psiquiátricos.
            </p>
            {/* Redes Sociais */}
            <div className="flex items-center gap-2 pt-2">
              <a 
                href="https://www.facebook.com/hospitalrumocerto" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/hospitalrumocerto/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/hospitalrumocerto" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xl">Contato</h4>
            <div className="space-y-3 text-base">
              <a href="tel:+5511988104793" className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>(11) 98810-4793</span>
              </a>
              <a href="mailto:adm@rumocerto.com.br" className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>adm@rumocerto.com.br</span>
              </a>
              <div className="flex items-start gap-3 text-background/80">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Via Des. Luiz Carlos de Araújo, 2015<br />Nova Pinhal, Cabreúva - SP, 13315-000</span>
              </div>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xl">Horário de Funcionamento</h4>
            <div className="space-y-3 text-base text-background/80">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-semibold text-background">Atendimento 24 horas</span>
              </div>
              <div className="pl-8 space-y-1">
                <p><strong>Visitas:</strong></p>
                <p>Segunda a Sexta: 9h às 17h</p>
                <p>Sábados: 9h às 12h</p>
                <p>Domingos e Feriados: 10h às 12h</p>
              </div>
              <div className="pl-8">
                <p><strong>Emergências:</strong> 24 horas</p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xl">Localização</h4>
            <div className="rounded-lg overflow-hidden h-40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0!2d-46.8!3d-23.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI0JzAwLjAiUyA0NsKwNDgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Hospital Rumo Certo"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© {new Date().getFullYear()} Hospital Rumo Certo. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
