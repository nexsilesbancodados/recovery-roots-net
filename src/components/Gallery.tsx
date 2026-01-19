import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
    title: "Recepção Principal",
    description: "Ambiente acolhedor e profissional"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80",
    title: "Área de Convivência",
    description: "Espaços amplos para socialização"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80",
    title: "Quartos Privativos",
    description: "Acomodações confortáveis"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
    title: "Área de Exercícios",
    description: "Atividades físicas terapêuticas"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    title: "Sala de Terapia",
    description: "Sessões terapêuticas coletivas"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    title: "Jardim Terapêutico",
    description: "Contato com a natureza"
  }
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    setSelectedImage((prev) =>
      prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setSelectedImage((prev) =>
      prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <section id="galeria" className="py-12 md:py-16 lg:py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-xs uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Galeria
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            Conheça Nossas <span className="text-primary">Instalações</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
            Ambientes projetados para oferecer conforto e bem-estar.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer shadow-soft hover:shadow-card transition-all duration-500"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-semibold text-sm mb-0.5">
                    {image.title}
                  </h3>
                  <p className="text-white/80 text-xs line-clamp-1">
                    {image.description}
                  </p>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Fechar galeria"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-4 rounded-b-xl">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-white/80 text-sm">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="text-white text-xs">
                {selectedImage + 1} / {galleryImages.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
