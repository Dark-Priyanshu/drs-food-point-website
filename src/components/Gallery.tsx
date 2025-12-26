import { useState } from "react";
import { X } from "lucide-react";

import burgerImg from "@/assets/burger.jpg";
import chilliPotatoImg from "@/assets/chilli-potato.jpg";
import noodlesImg from "@/assets/noodles.jpg";


// Real restaurant photos
import birthdayCelebrationImg from "@/assets/birthday-celebration.jpg";
import drsLogoWallImg from "@/assets/drs-logo-wall.jpg";
import specialEventImg from "@/assets/special-event.jpg";
import groupGatheringImg from "@/assets/group-gathering.jpg";
import diningExperienceImg from "@/assets/dining-experience.jpg";
import friendsGatheringImg from "@/assets/friends-gathering.jpg";

const galleryImages = [
  { src: drsLogoWallImg, alt: "I ❤ DRS Photo Spot", category: "ambiance" },
  { src: birthdayCelebrationImg, alt: "Birthday Celebration", category: "events" },
  { src: groupGatheringImg, alt: "Group Celebration", category: "events" },
  { src: diningExperienceImg, alt: "Dining Experience", category: "ambiance" },
  { src: friendsGatheringImg, alt: "Friends Gathering", category: "ambiance" },
  { src: specialEventImg, alt: "Special Event", category: "events" },
  { src: burgerImg, alt: "Delicious Burger", category: "food" },
  { src: noodlesImg, alt: "Hot Noodles", category: "food" },
  { src: chilliPotatoImg, alt: "Chilli Potato", category: "food" },
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
            Celebrations, gatherings & delicious food at DRS Food Point
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
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
                <span className="text-white font-medium text-sm md:text-base text-center px-2">
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
