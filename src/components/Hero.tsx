import heroImage from "@/assets/hero-hospital.jpg";

export const Hero = () => {
  return (
    <section id="inicio" className="w-full">
      <img
        src={heroImage}
        alt="Hospital Rumo Certo - Saúde Mental, Alcoolismo & Dependência Química"
        className="w-full h-auto block"
      />
    </section>
  );
};
