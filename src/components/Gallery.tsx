import { useState } from "react";
import { X } from "lucide-react";

import burgerImg from "@/assets/burger.jpg";
import cakeImg from "@/assets/cake.jpg";
import chilliPotatoImg from "@/assets/chilli-potato.jpg";
import heroFoodImg from "@/assets/hero-food.jpg";
import noodlesImg from "@/assets/noodles.jpg";
import pizzaImg from "@/assets/pizza.jpg";

const galleryImages = [
  { src: heroFoodImg, alt: "Restaurant Ambiance", category: "ambiance" },
  { src: burgerImg, alt: "Delicious Burger", category: "food" },
  { src: pizzaImg, alt: "Fresh Pizza", category: "food" },
  { src: noodlesImg, alt: "Hot Noodles", category: "food" },
  { src: chilliPotatoImg, alt: "Chilli Potato", category: "food" },
  { src: cakeImg, alt: "Sweet Cake", category: "dessert" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Our Gallery
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
            A glimpse of our delicious food and cozy restaurant ambiance
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-sm md:text-base">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
