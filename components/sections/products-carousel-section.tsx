'use client';

import AndroidInfotainmentSystem from '@/public/android.jpeg';
import ThreeSixtyViewCamera from '@/public/360Camera.jpeg';
import Dashcam from '@/public/Dashcam.jpeg';
import CarGPSTracker from '@/public/CarGPSTracker.jpeg';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  image: string;
}

const products: Product[] = [
  { id: 1, title: 'Android Infotainment System', image: AndroidInfotainmentSystem.src },
  { id: 2, title: '360 View Camera', image: ThreeSixtyViewCamera.src },
  { id: 3, title: 'Dashcam', image: Dashcam.src },
  { id: 4, title: 'GPS Tracker', image: CarGPSTracker.src },
];

const CARD_WIDTH = 880;
const CARD_GAP = 40;

export default function ProductsCarouselSection() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentProductIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentProductIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  // Center the active card: track is flexbox-centered, so shift by (track center - card center)
  const trackWidth = products.length * CARD_WIDTH + (products.length - 1) * CARD_GAP;
  const cardCenterFromLeft = currentProductIndex * (CARD_WIDTH + CARD_GAP) + CARD_WIDTH / 2;
  const trackOffset = trackWidth / 2 - cardCenterFromLeft;

  return (
    <section className="w-full h-full flex flex-col relative overflow-hidden bg-black">
      {/* Section title */}
      <div className="relative z-10 pt-10 pb-2 text-center">
        <p className="text-xl md:text-2xl font-bold text-white uppercase tracking-[0.2em]">
          Top Selling Products
        </p>
      </div>

      {/* Carousel */}
      <div className="relative flex-1 flex items-center justify-center min-h-0 w-full px-14 md:px-20">
        {/* Left arrow */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 md:left-8 z-30 p-2 text-white/90 hover:text-white transition-colors"
          aria-label="Previous product"
        >
          <ChevronLeft size={48} strokeWidth={1.5} />
        </button>

        {/* Viewport */}
        <div
          className="flex-1 overflow-hidden flex items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          <div
            className="flex items-center justify-center flex-shrink-0 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${trackOffset}px)`, gap: CARD_GAP }}
          >
            {products.map((product, index) => {
              const offset = index - currentProductIndex;
              const isCenter = offset === 0;
              const scale = isCenter ? 1 : Math.max(0.65, 1 - Math.abs(offset) * 0.18);
              const rotateY = offset * -14;
              const z = isCenter ? 30 : 20 - Math.abs(offset);
              const opacity = isCenter ? 1 : Math.max(0.5, 0.95 - Math.abs(offset) * 0.25);

              return (
                <div
                  key={product.id}
                  className="flex-shrink-0 transition-all duration-500 ease-out cursor-pointer"
                  style={{
                    width: CARD_WIDTH,
                    transform: `scale(${scale}) rotateY(${rotateY}deg)`,
                    transformStyle: 'preserve-3d',
                    zIndex: z,
                    opacity,
                  }}
                  onClick={() => !isCenter && setCurrentProductIndex(index)}
                >
                  <div
                    className={`overflow-hidden rounded-lg border-2 bg-neutral-900 shadow-2xl transition-shadow duration-300 ${
                      isCenter ? 'border-accent/60 shadow-accent/20 shadow-2xl' : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes="880px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                        <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide leading-tight">
                          {product.title}
                        </h3>
                        <Link
                          href="/catalog"
                          className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-semibold text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={goToNext}
          className="absolute right-4 md:right-8 z-30 p-2 text-white/90 hover:text-white transition-colors"
          aria-label="Next product"
        >
          <ChevronRight size={48} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
