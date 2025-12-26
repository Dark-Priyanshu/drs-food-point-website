import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-2xl font-bold text-card">DRS Food Point</span>
            <p className="text-card/60 text-sm">डीआरएस फूड पॉइंट</p>
          </div>
          <p className="text-card/60 text-sm mb-4">
            Fast Food • Pizza • Snacks • Family Taste
          </p>
          <p className="text-card/40 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Saurikh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
