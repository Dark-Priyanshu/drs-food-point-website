import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Popular', href: '#popular' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/98 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-1.5 group">
            <span className="text-xl md:text-2xl font-extrabold text-primary group-hover:text-primary/90 transition-colors">
              DRS
            </span>
            <span className="text-sm md:text-base font-semibold text-foreground">
              Food Point
            </span>
            <span className="hidden sm:inline text-xs md:text-sm text-muted-foreground ml-1">
              डीआरएस फूड पॉइंट
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-1.5 text-foreground/70 hover:text-primary" asChild>
              <a href="tel:08423004192">
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">Call</span>
              </a>
            </Button>
            <Button size="sm" className="gap-1.5" asChild>
              <a href="https://maps.google.com/?q=DRS+Food+Point+Saurikh" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-4 h-4" />
                Directions
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-3 border-t border-border/50 animate-fade-up">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2.5 px-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-2 mt-3 pt-3 border-t border-border/50">
              <Button variant="outline" size="sm" className="flex-1 gap-1.5" asChild>
                <a href="tel:08423004192">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
              <Button size="sm" className="flex-1 gap-1.5" asChild>
                <a href="https://maps.google.com/?q=DRS+Food+Point+Saurikh" target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-4 h-4" />
                  Directions
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
