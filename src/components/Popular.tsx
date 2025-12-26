import pizzaImg from '@/assets/pizza.jpg';
import burgerImg from '@/assets/burger.jpg';
import chilliPotatoImg from '@/assets/chilli-potato.jpg';
import noodlesImg from '@/assets/noodles.jpg';
import cakeImg from '@/assets/cake.jpg';

const Popular = () => {
  const popularItems = [
    { name: 'Pizza', image: pizzaImg, description: 'Cheesy & delicious' },
    { name: 'Burger', image: burgerImg, description: 'Juicy & satisfying' },
    { name: 'Chilli Potato', image: chilliPotatoImg, description: 'Crispy & spicy' },
    { name: 'Noodles', image: noodlesImg, description: 'Indo-Chinese favorite' },
    { name: 'Cake', image: cakeImg, description: 'Fresh from bakery' },
  ];

  return (
    <section id="popular" className="py-16 md:py-24 bg-gradient-warm">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular <span className="text-primary">Items</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Customer favorites that keep them coming back for more
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {popularItems.map((item, index) => (
            <div
              key={item.name}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-card">{item.name}</h3>
                <p className="text-card/80 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
