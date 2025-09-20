"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CarouselSlide {
  id: number;
  badge: string;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    badge: "NEW IMAGE MODEL",
    title: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    imageUrl: "/wan2.2.webp",
    buttonText: "Try WAN 2.2",
  },
  {
    id: 2,
    badge: "OPEN SOURCE MODEL",
    title: "FLUX.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    imageUrl: "/flux.webp",
    buttonText: "Explore FLUX.1 Krea",
  },
  {
    id: 3,
    badge: "REALTIME VIDEO MODEL",
    title: "Realtime Video – Open Beta",
    description:
      "Our ground-breaking Realtime Video is now accessible to all paid plans. Try it in the Realtime tool.",
    imageUrl: "/realtime-video.webp",
    buttonText: "Try Realtime Video",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // This sets the slide to the first slide when it reaches the end
    // It will make the loop to the first slide seamless
    if (currentSlide === 3) setCurrentSlide(0);

    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;

    // This will make the slide a uni-directional carousel
    if (currentSlide === 1) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    if (currentSlide === extendedSlides.length - 1) {
      setCurrentSlide(1);
    } else if (currentSlide === 0) {
      setCurrentSlide(slides.length);
    }
  };

  return (
    <div className="relative mt-10">
      <div className="overflow-hidden">
        <div
          className={`flex gap-6 ${
            isTransitioning
              ? "transition-transform duration-500 ease-in-out"
              : ""
          }`}
          style={{ transform: `translateX(-${currentSlide * 60}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              className="flex-shrink-0 w-[60%] px-5"
            >
              <div className="relative h-[400px] overflow-hidden rounded-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

                <div className="relative z-10 flex flex-col justify-between h-full px-8 py-6 text-white">
                  <p className="self-start mb-2 text-sm">{slide.badge}</p>

                  <div className="flex items-end justify-between w-full">
                    <div className="max-w-md">
                      <h1 className="text-3xl font-bold mb-2 text-balance">
                        {slide.title}
                      </h1>
                      <p className="text-lg text-white/80 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>

                    <button className="ml-6 bg-white text-black hover:bg-white/90 px-4 py-2 rounded-full cursor-pointer">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 justify-center items-center mt-10 *:cursor-pointer">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index + 1)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index + 1 === currentSlide ? "bg-black" : "bg-[#F6F6F6]"
            }`}
          />
        ))}
      </div>

      <div className="flex justify-end items-center space-x-2 px-4">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="text-black bg-[#F2F2F2] p-1 rounded-full disabled:opacity-50 cursor-pointer"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="text-black bg-[#F2F2F2] p-1 rounded-full disabled:opacity-50 cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
