'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Premium Protein Shakes',
    subtitle: 'Fuel Your Fitness',
    cta: 'Shop Now',
    bg: 'bg-gradient-to-r from-blue-600 to-blue-400',
  },
  {
    id: 2,
    title: 'Blood Testing Kits',
    subtitle: 'Know Your Health',
    cta: 'Explore Collabs',
    bg: 'bg-gradient-to-r from-purple-600 to-purple-400',
  },
  {
    id: 3,
    title: 'Up to 50% Off',
    subtitle: 'Limited Time Sale',
    cta: 'View Deals',
    bg: 'bg-gradient-to-r from-orange-600 to-orange-400',
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative h-72 md:h-96 overflow-hidden rounded-xl">
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? 'opacity-100' : 'opacity-0'
          } ${slide.bg} flex items-center justify-center text-center text-white`}
        >
          <div className="px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">{slide.title}</h2>
            <p className="text-base md:text-xl mb-6 md:mb-8">{slide.subtitle}</p>
            <button className="bg-white text-blue-600 font-bold px-6 md:px-8 py-2.5 md:py-3 rounded-lg hover:bg-gray-100">
              {slide.cta}
            </button>
          </div>
        </div>
      ))}

      {/* Prev/Next Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            title={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full transition ${
              idx === current ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
