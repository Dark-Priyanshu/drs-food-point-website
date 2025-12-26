import { Star, UtensilsCrossed, Car, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-food.jpg';

const Hero = () => {
  const services = [
    { icon: UtensilsCrossed, label: 'Dine-in' },
    { icon: Car, label: 'Drive-through' },
    { icon: Package, label: 'Delivery' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-14 md:pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Delicious fast food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50 md:from-foreground/90 md:via-foreground/70 md:to-foreground/40" />
      </div>

      <div className="container relative z-10 py-8 sm:py-12 md:py-20 px-4">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/90 rounded-full mb-4 sm:mb-6 animate-fade-up">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-foreground fill-secondary-foreground" />
            <span className="font-semibold text-secondary-foreground text-sm sm:text-base">4.2</span>
            <span className="text-secondary-foreground/80 text-xs sm:text-sm">(231 Reviews)</span>
          </div>

          {/* Restaurant Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-card mb-1 sm:mb-2 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            DRS Food Point
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-card/90 font-medium mb-3 sm:mb-4 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            डीआरएस फूड पॉइंट
          </p>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-card/80 mb-6 sm:mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Fast Food • Pizza • Snacks • Family Taste
          </p>

          {/* Services */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            {services.map((service) => (
              <div
                key={service.label}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-card/10 backdrop-blur-sm rounded-lg border border-card/20"
              >
                <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                <span className="text-xs sm:text-sm text-card font-medium">{service.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow w-full sm:w-auto" asChild>
              <a href="#menu">View Menu</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-card/10 border-card/30 text-card hover:bg-card/20 w-full sm:w-auto" asChild>
              <a href="tel:08423004192">Order by Phone</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-card/10 border-card/30 text-card hover:bg-card/20 w-full sm:w-auto" asChild>
              <a href="https://maps.app.goo.gl/BTxuyKsHoez2cbes9" target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
