'use client';

export default function VisionSection() {
  return (
    <section className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-3xl mx-auto py-20 md:py-0">
        <div className="mb-8 md:mb-12">
          <p className="text-xs md:text-sm text-accent tracking-widest uppercase mb-6">
            Our Mission
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Vision & Values
          </h2>
        </div>

        {/* Main Content */}
        <div className="space-y-8 md:space-y-12">
          <div className="backdrop-blur-md bg-card/50 border border-border rounded-2xl p-8 md:p-12 hover:border-accent/50 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Deliver Remarkable Innovation
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are committed to delivering remarkable and innovative car accessories that go beyond expectations. Every product is engineered with precision and passion to elevate your driving experience.
            </p>
          </div>

          <div className="backdrop-blur-md bg-card/50 border border-border rounded-2xl p-8 md:p-12 hover:border-accent/50 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Keep Your Car Up to Date
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In a rapidly evolving automotive world, Thors ensures your vehicle stays at the forefront of style and performance. We continuously innovate to bring you the latest technologies and designs.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { label: 'Quality', description: 'Premium materials and craftsmanship' },
              { label: 'Innovation', description: 'Cutting-edge technology and design' },
              { label: 'Customer Focus', description: 'Your satisfaction is our priority' },
            ].map((value, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-card/30 border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 text-center"
              >
                <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">
                  {value.label}
                </p>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
