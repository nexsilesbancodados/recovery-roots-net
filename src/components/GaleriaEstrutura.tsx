import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

// Imagens das instalações - Unidade Masculina Cabreúva
import unidadeMasculinaCabreuva from "@/assets/estrutura/unidade-masculina-cabreuva.png";

// Unidade Feminina Cabreúva
import unidadeFemininaCabreuva1 from "@/assets/estrutura/unidade-feminina-cabreuva-1.png";
import unidadeFemininaCabreuva2 from "@/assets/estrutura/unidade-feminina-cabreuva-2.png";
import unidadeFemininaCabreuva3 from "@/assets/estrutura/unidade-feminina-cabreuva-3.png";
import unidadeFemininaCabreuva4 from "@/assets/estrutura/unidade-feminina-cabreuva-4.png";

// Unidade Masculina Salto
import unidadeMasculinaSalto1 from "@/assets/estrutura/unidade-masculina-salto-1.png";
import unidadeMasculinaSalto2 from "@/assets/estrutura/unidade-masculina-salto-2.png";
import unidadeMasculinaSalto3 from "@/assets/estrutura/unidade-masculina-salto-3.png";
import unidadeMasculinaSalto4 from "@/assets/estrutura/unidade-masculina-salto-4.png";
import unidadeMasculinaSalto5 from "@/assets/estrutura/unidade-masculina-salto-5.png";
import unidadeMasculinaSalto6 from "@/assets/estrutura/unidade-masculina-salto-6.png";

// Unidade Masculina 3
import unidade3_1 from "@/assets/estrutura/unidade-3-1.png";
import unidade3_2 from "@/assets/estrutura/unidade-3-2.png";
import unidade3_3 from "@/assets/estrutura/unidade-3-3.png";

const galeriaImagens = [
  { src: unidadeMasculinaCabreuva, alt: "Unidade Masculina Cabreúva - Piscina e área de convivência" },
  { src: unidadeFemininaCabreuva1, alt: "Unidade Feminina Cabreúva - Academia" },
  { src: unidadeFemininaCabreuva2, alt: "Unidade Feminina Cabreúva - Refeitório" },
  { src: unidadeFemininaCabreuva3, alt: "Unidade Feminina Cabreúva - Área externa com fogueira" },
  { src: unidadeFemininaCabreuva4, alt: "Unidade Feminina Cabreúva - Vista aérea" },
  { src: unidadeMasculinaSalto1, alt: "Unidade Masculina Salto - Vista aérea com piscina e quadras" },
  { src: unidadeMasculinaSalto2, alt: "Unidade Masculina Salto - Vista panorâmica" },
  { src: unidadeMasculinaSalto3, alt: "Unidade Masculina Salto - Quarto" },
  { src: unidadeMasculinaSalto4, alt: "Unidade Masculina Salto - Quarto individual" },
  { src: unidadeMasculinaSalto5, alt: "Unidade Masculina Salto - Enfermaria" },
  { src: unidadeMasculinaSalto6, alt: "Unidade Masculina Salto - Lanchonete" },
  { src: unidade3_1, alt: "Unidade Masculina 3 - Vista aérea" },
  { src: unidade3_2, alt: "Unidade Masculina 3 - Instalações" },
  { src: unidade3_3, alt: "Unidade Masculina 3 - Área comum" },
];

const GaleriaEstrutura = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <div className="mt-8">
      <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
          Nossas Unidades
        </h3>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            AutoScroll({
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galeriaImagens.map((imagem, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div
                  className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(imagem)}
                >
                  <img
                    src={imagem.src}
                    alt={imagem.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-4" />
          <CarouselNext className="hidden sm:flex -right-4" />
        </Carousel>
      </div>

      {/* Modal de Imagem Ampliada */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GaleriaEstrutura;
