import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const ctx = gsap.context(() => {
      // Hero title animation - mask reveal
      if (titleRef.current) {
        const titleLines = titleRef.current.querySelectorAll('.title-line');
        gsap.set(titleLines, { y: 100, opacity: 0 });
        
        gsap.to(titleLines, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.15,
          delay: 0.5,
        });
      }

      // Subtitle animation
      if (subtitleRef.current) {
        gsap.fromTo(subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1 }
        );
      }

      // CTA buttons animation
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current.children,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1, delay: 1.3 }
        );
      }

      // Parallax effect on scroll
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0.9,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      id="inicio" 
      className="relative min-h-screen flex items-center overflow-hidden bg-primary"
    >
      {/* Background Video/Image with Ken Burns */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover animate-ken-burns"
          poster="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1920&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-tree-tops-seen-from-above-7-large.mp4" type="video/mp4" />
        </video>
        
        {/* Dark elegant overlay */}
        <div 
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90"
        />
        
        {/* Subtle grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title with mask reveal */}
          <h1 
            ref={titleRef}
            className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-foreground font-medium leading-[1.1] mb-8 overflow-hidden"
          >
            <span className="title-line block">A Arte de</span>
            <span className="title-line block text-secondary">Recompor</span>
            <span className="title-line block">o Amanhã.</span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-primary-foreground/80 leading-relaxed mb-12 max-w-2xl mx-auto font-light"
          >
            Onde a ciência de elite e a privacidade absoluta convergem 
            para o seu restabelecimento pleno.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-wrap justify-center gap-6">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-10 py-7 rounded-none border-2 border-secondary font-medium tracking-wide transition-all duration-500 hover:shadow-glow-gold"
              asChild
            >
              <a href="#contato">
                Agendar Consultoria Exclusiva
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 text-base px-10 py-7 rounded-none font-medium tracking-wide transition-all duration-500"
              asChild
            >
              <a href="tel:5511955931301">
                <Phone className="w-5 h-5 mr-3" />
                (11) 95593-1301
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div 
            className={`mt-20 flex justify-center gap-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '1.8s' }}
          >
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif text-secondary font-medium">+18</p>
              <p className="text-sm text-primary-foreground/60 mt-1 tracking-wider uppercase">Anos</p>
            </div>
            <div className="w-px bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif text-secondary font-medium">2.500+</p>
              <p className="text-sm text-primary-foreground/60 mt-1 tracking-wider uppercase">Vidas</p>
            </div>
            <div className="w-px bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif text-secondary font-medium">24h</p>
              <p className="text-sm text-primary-foreground/60 mt-1 tracking-wider uppercase">Suporte</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '2.2s' }}
      >
        <a 
          href="#manifesto"
          className="flex flex-col items-center gap-3 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors group"
        >
          <span className="text-xs uppercase tracking-[0.3em]">Descobrir</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};