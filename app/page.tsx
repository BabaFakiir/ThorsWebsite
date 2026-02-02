'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/sections/hero-section';
import ProductsCarouselSection from '@/components/sections/products-carousel-section';
import VisionSection from '@/components/sections/vision-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const containerRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'hero', component: HeroSection },
    { id: 'products', component: ProductsCarouselSection },
    { id: 'vision', component: VisionSection },
    { id: 'contact', component: ContactSection },
  ];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;
      let newSection = currentSection;

      if (delta > 0 && currentSection < sections.length - 1) {
        newSection = currentSection + 1;
      } else if (delta < 0 && currentSection > 0) {
        newSection = currentSection - 1;
      }

      if (newSection !== currentSection) {
        setIsScrolling(true);
        setCurrentSection(newSection);
        
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 1000);

        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection, isScrolling, sections.length]);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-background dark">
      <Header />
      
      <div className="relative w-full h-screen">
        {sections.map((section, index) => {
          const SectionComponent = section.component;
          const isActive = index === currentSection;
          const isVisible = Math.abs(index - currentSection) <= 1;

          return (
            <div
              key={section.id}
              className={`absolute inset-0 w-full h-screen transition-all duration-1000 ease-in-out ${
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              {isVisible && <SectionComponent />}
            </div>
          );
        })}
      </div>

      {/* Scroll indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {currentSection + 1} / {sections.length}
          </span>
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
