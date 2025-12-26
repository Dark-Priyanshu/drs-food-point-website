import { Phone, Navigation } from 'lucide-react';

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-card border-t border-border shadow-lg z-50">
      <div className="grid grid-cols-2 gap-0">
        <a
          href="tel:08423004192"
          className="flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-medium"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=DRS+Food+Point+Firozabad"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 bg-secondary text-secondary-foreground font-medium"
        >
          <Navigation className="w-5 h-5" />
          Directions
        </a>
      </div>
    </div>
  );
};

export default MobileBottomBar;
