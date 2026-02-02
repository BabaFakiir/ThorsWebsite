'use client';

export default function HeroSection() {
  return (
    <section className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611339555312-e607c04352fa?w=1600&q=80)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8 md:mb-12">
          <p className="text-sm md:text-base text-muted-foreground mb-4 tracking-widest">
            WELCOME TO THORS
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Elevate Your Ride
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto leading-relaxed">
            Discover remarkable and innovative car accessories to keep your vehicle up to date with style and performance.
          </p>
        </div>

        {/* Search and CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-12 md:mt-16">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search our collection..."
              className="px-6 py-3 md:py-4 bg-black/30 backdrop-blur-md border border-accent/30 rounded-full text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent w-full sm:w-80 transition-all"
            />
          </div>
          <button className="px-8 py-3 md:py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap shadow-lg">
            Explore Collection
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
