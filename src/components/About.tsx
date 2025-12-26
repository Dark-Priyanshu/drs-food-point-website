import { Users, Wallet, ChefHat, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Cooperative Staff',
      description: 'Friendly and helpful team ready to serve you',
    },
    {
      icon: Wallet,
      title: 'Affordable Pricing',
      description: 'Delicious food that fits your budget',
    },
    {
      icon: ChefHat,
      title: 'Wide Variety',
      description: 'From pizza to dosa, we have it all',
    },
    {
      icon: Heart,
      title: 'Family Favorite',
      description: 'Perfect for families and friends',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-gradient-warm">
      <div className="container px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            About <span className="text-primary">DRS Food Point</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Located in the heart of Saurikh, DRS Food Point has become a beloved local favorite 
            for fast food enthusiasts. We serve a wide variety of delicious snacks and meals 
            that bring families together.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-4 sm:p-6 shadow-card hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center px-2">
          <p className="text-foreground/80 text-sm sm:text-base md:text-lg">
            Our popular items include <span className="text-primary font-medium">Pizza</span>, 
            <span className="text-primary font-medium"> Burgers</span>, 
            <span className="text-primary font-medium"> Chilli Potato</span>, 
            <span className="text-primary font-medium"> Noodles</span>, and 
            <span className="text-primary font-medium"> Cakes</span> — all prepared fresh with love!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
