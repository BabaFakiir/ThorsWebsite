'use client';
import AndroidInfotainmentSystem from '@/public/android.jpeg';
import ThreeSixtyViewCamera from '@/public/360Camera.jpeg';
import Dashcam from '@/public/Dashcam.jpeg';
import CarGPSTracker from '@/public/CarGPSTracker.jpeg';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Android Infotainment System',
    image: AndroidInfotainmentSystem.src,
  },
  {
    id: 2,
    title: '360 View Camera',
    image: ThreeSixtyViewCamera.src,
  },
  {
    id: 3,
    title: 'Dashcam',
    image: Dashcam.src,
  },
  {
    id: 4,
    title: 'GPS Tracker',
    image: CarGPSTracker.src,
  },
];

export default function ProductsCarouselSection() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentProductIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentProductIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const currentProduct = products[currentProductIndex];

  return (
    <section className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url(${currentProduct.image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full h-full flex items-center justify-between px-4 md:px-12 max-w-7xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="flex-shrink-0 p-3 md:p-4 rounded-full bg-accent/20 hover:bg-accent/40 border border-accent/30 text-accent transition-all hover:scale-110 z-30"
          aria-label="Previous product"
        >
          <ChevronLeft size={28} className="md:w-8 md:h-8" />
        </button>

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8 md:gap-12 px-8">
          <div className="text-center space-y-4 md:space-y-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              {currentProduct.title}
            </h2>
          </div>

          {/* Carousel Dots */}
          <div className="flex gap-3">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProductIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentProductIndex
                    ? 'bg-accent w-8'
                    : 'bg-accent/40 hover:bg-accent/60'
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/catalog"
            className="inline-block px-8 py-3 md:py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-opacity-90 transition-all mt-4 md:mt-8"
          >
            View Catalog
          </Link>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="flex-shrink-0 p-3 md:p-4 rounded-full bg-accent/20 hover:bg-accent/40 border border-accent/30 text-accent transition-all hover:scale-110 z-30"
          aria-label="Next product"
        >
          <ChevronRight size={28} className="md:w-8 md:h-8" />
        </button>
      </div>

      {/* Product Counter */}
      <div className="absolute top-8 right-8 z-30 text-right">
        <p className="text-4xl md:text-5xl font-bold text-accent/30">{String(currentProductIndex + 1).padStart(2, '0')}</p>
        <p className="text-sm text-muted-foreground mt-1">/ {String(products.length).padStart(2, '0')}</p>
      </div>
    </section>
  );
}
