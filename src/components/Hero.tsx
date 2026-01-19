import heroImage from "@/assets/hero-hospital.jpg";

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[80vh] flex items-center">
      {/* Background Image Only */}
      <div className="w-full h-full">
        <img
          src={heroImage}
          alt="Hospital Rumo Certo - Saúde Mental, Alcoolismo & Dependência Química"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};
