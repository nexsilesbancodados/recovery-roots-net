import { useEffect, useRef, useState } from "react";
import { Users, Calendar, Heart, Award } from "lucide-react";

interface Numero {
  icon: React.ElementType;
  valor: number;
  sufixo: string;
  label: string;
  color: string;
}

const numeros: Numero[] = [
  {
    icon: Users,
    valor: 3000,
    sufixo: "+",
    label: "Pacientes Atendidos",
    color: "text-blue-500",
  },
  {
    icon: Calendar,
    valor: 20,
    sufixo: "+",
    label: "Anos de Experiência",
    color: "text-green-500",
  },
  {
    icon: Heart,
    valor: 98,
    sufixo: "%",
    label: "Taxa de Satisfação",
    color: "text-red-500",
  },
  {
    icon: Award,
    valor: 50,
    sufixo: "+",
    label: "Profissionais Especializados",
    color: "text-purple-500",
  },
];

const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return (
    <span ref={ref}>
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
};

const NumerosImpacto = () => {
  return (
    <section id="numeros" className="py-12 bg-gradient-to-r from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Resultados
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Números que Inspiram Confiança
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {numeros.map((numero, index) => {
            const IconComponent = numero.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card shadow-lg border border-border/50 hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 mx-auto rounded-full bg-muted flex items-center justify-center mb-4`}>
                  <IconComponent className={`w-7 h-7 ${numero.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  <CountUp end={numero.valor} suffix={numero.sufixo} />
                </div>
                <p className="text-muted-foreground text-sm font-medium">
                  {numero.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NumerosImpacto;
