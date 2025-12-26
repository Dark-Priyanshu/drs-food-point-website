import { useState } from 'react';
import { Pizza, Sandwich, Flame, Soup, Cake, Coffee } from 'lucide-react';

type Category = 'all' | 'pizza' | 'burger' | 'fastfood' | 'southindian' | 'bakery' | 'beverages';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories = [
    { id: 'all' as Category, name: 'All', icon: null },
    { id: 'pizza' as Category, name: 'Pizza', icon: Pizza },
    { id: 'burger' as Category, name: 'Burger', icon: Sandwich },
    { id: 'fastfood' as Category, name: 'Fast Food', icon: Flame },
    { id: 'southindian' as Category, name: 'South Indian', icon: Soup },
    { id: 'bakery' as Category, name: 'Bakery', icon: Cake },
    { id: 'beverages' as Category, name: 'Beverages', icon: Coffee },
  ];

  const menuItems = [
    { name: 'Margherita Pizza', category: 'pizza', price: '₹149' },
    { name: 'Cheese Pizza', category: 'pizza', price: '₹179' },
    { name: 'Veggie Supreme Pizza', category: 'pizza', price: '₹199' },
    { name: 'Paneer Pizza', category: 'pizza', price: '₹229' },
    { name: 'Classic Burger', category: 'burger', price: '₹89' },
    { name: 'Cheese Burger', category: 'burger', price: '₹109' },
    { name: 'Aloo Tikki Burger', category: 'burger', price: '₹79' },
    { name: 'Paneer Burger', category: 'burger', price: '₹119' },
    { name: 'Chilli Potato', category: 'fastfood', price: '₹99' },
    { name: 'Hakka Noodles', category: 'fastfood', price: '₹89' },
    { name: 'Veg Manchurian', category: 'fastfood', price: '₹109' },
    { name: 'Spring Rolls', category: 'fastfood', price: '₹79' },
    { name: 'French Fries', category: 'fastfood', price: '₹69' },
    { name: 'Masala Dosa', category: 'southindian', price: '₹79' },
    { name: 'Plain Dosa', category: 'southindian', price: '₹59' },
    { name: 'Paneer Dosa', category: 'southindian', price: '₹99' },
    { name: 'Idli Sambar', category: 'southindian', price: '₹49' },
    { name: 'Chocolate Cake', category: 'bakery', price: '₹399' },
    { name: 'Black Forest Cake', category: 'bakery', price: '₹449' },
    { name: 'Pineapple Cake', category: 'bakery', price: '₹349' },
    { name: 'Pastries', category: 'bakery', price: '₹49' },
    { name: 'Cold Coffee', category: 'beverages', price: '₹69' },
    { name: 'Mango Shake', category: 'beverages', price: '₹79' },
    { name: 'Oreo Shake', category: 'beverages', price: '₹89' },
    { name: 'Lassi', category: 'beverages', price: '₹49' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-12 sm:py-16 md:py-24 bg-card">
      <div className="container px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Our <span className="text-primary">Menu</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Explore our delicious variety of fast food, snacks, and beverages
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category.icon && <category.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.name}
              className="bg-background rounded-lg sm:rounded-xl p-3 sm:p-4 border border-border hover:border-primary/30 hover:shadow-card transition-all animate-scale-in"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-foreground text-sm sm:text-base">{item.name}</h3>
                <span className="text-primary font-bold text-sm sm:text-base">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
