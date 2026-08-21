'use client';
import { useState, useEffect } from 'react';

export default function PhotoCarousel() {
  // Generic placeholder items (can be swapped with image URLs later)
  const slides = [
    { id: 1, title: "[  ]" },
    { id: 2, title: "[  ]" },
    { id: 3, title: "[  ]" },
    { id: 4, title: "[  ]" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-loop every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const getSlideIndex = (offset) => {
    return (currentIndex + offset + slides.length) % slides.length;
  };

  const prevSlide = slides[getSlideIndex(-1)];
  const currentSlide = slides[getSlideIndex(0)];
  const nextSlide = slides[getSlideIndex(1)];

  return (
    <div className="relative w-full max-w-4xl mx-auto h-72 overflow-hidden flex items-center justify-center my-8 rounded-xl bg-[#151b30] border border-slate-700 shadow-2xl">
      
      {/* Left Flanking Image (Blurred & Oversized, bleeds past edge) */}
      <div className="absolute -left-12 w-80 h-56 bg-white/10 rounded-xl filter blur-sm opacity-40 transform scale-110 flex items-center justify-center text-slate-400 text-xs border border-white/5 transition-all duration-700">
        {prevSlide.title}
      </div>

      {/* Center Focused Image (Sharp & Normal Size) */}
      <div className="z-10 w-80 h-56 bg-white rounded-xl shadow-2xl flex items-center justify-center text-black font-bold text-sm border-2 border-[#E8A93B] transition-all duration-700">
        {currentSlide.title}
      </div>

      {/* Right Flanking Image (Blurred & Oversized, bleeds past edge) */}
      <div className="absolute -right-12 w-80 h-56 bg-white/10 rounded-xl filter blur-sm opacity-40 transform scale-110 flex items-center justify-center text-slate-400 text-xs border border-white/5 transition-all duration-700">
        {nextSlide.title}
      </div>

      {/* Manual Navigation Indicators */}
      <div className="absolute bottom-3 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentIndex === idx ? 'bg-[#E8A93B] w-6' : 'bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}