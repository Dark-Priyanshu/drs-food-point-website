import { Star, UtensilsCrossed, Car, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-food.jpg';

const Hero = () => {
  const services = [
    { icon: UtensilsCrossed, label: 'Dine-in' },
    { icon: Car, label: 'Drive-through' },
    { icon: Package, label: 'No-contact Delivery' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Delicious fast food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="container relative z-10 py-12 md:py-20">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/90 rounded-full mb-6 animate-fade-up">
            <Star className="w-5 h-5 text-secondary-foreground fill-secondary-foreground" />
            <span className="font-semibold text-secondary-foreground">4.2</span>
            <span className="text-secondary-foreground/80 text-sm">(231 Reviews)</span>
          </div>

          {/* Restaurant Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-card mb-2 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            DRS Food Point
          </h1>
          <p className="text-2xl md:text-3xl text-card/90 font-medium mb-4 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            डीआरएस फूड पॉइंट
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-card/80 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Fast Food • Pizza • Snacks • Family Taste
          </p>

          {/* Services */}
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            {services.map((service) => (
              <div
                key={service.label}
                className="flex items-center gap-2 px-4 py-2 bg-card/10 backdrop-blur-sm rounded-lg border border-card/20"
              >
                <service.icon className="w-5 h-5 text-secondary" />
                <span className="text-sm text-card font-medium">{service.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow" asChild>
              <a href="#menu">View Menu</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-card/10 border-card/30 text-card hover:bg-card/20" asChild>
              <a href="tel:08423004192">Order by Phone</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-card/10 border-card/30 text-card hover:bg-card/20" asChild>
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
