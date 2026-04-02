import { useEffect, useRef, useState } from "react";
import { Users, BedDouble, Award, Ambulance } from "lucide-react";

interface Numero {
  icon: React.ElementType;
  valor: number;
  sufixo: string;
  label: string;
}

const numeros: Numero[] = [
  {
    icon: Users,
    valor: 3000,
    sufixo: "+",
    label: "Pacientes Atendidos",
  },
  {
    icon: BedDouble,
    valor: 200,
    sufixo: "",
    label: "Leitos Disponíveis",
  },
  {
    icon: Award,
    valor: 500,
    sufixo: "+",
    label: "Prêmios e Certificações",
  },
  {
    icon: Ambulance,
    valor: 24,
    sufixo: "h",
    label: "Resgate e Ambulância",
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
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
    }, 2000 / steps);
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
    <section className="py-10 md:py-12 bg-card border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {numeros.map((numero, index) => {
            const IconComponent = numero.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 md:gap-4 px-2 py-2"
              >
                <div className="w-11 h-11 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-primary" fill="currentColor" strokeWidth={1} />
                </div>
                <div className="min-w-0">
                  <div className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                    <CountUp end={numero.valor} suffix={numero.sufixo} />
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm truncate">
                    {numero.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NumerosImpacto;
