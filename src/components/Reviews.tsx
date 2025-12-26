import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Rahul Kumar',
      rating: 5,
      text: 'Best pizza in Saurikh! The staff is very friendly and the food is always fresh and hot.',
      date: '2 weeks ago',
    },
    {
      name: 'Priya Singh',
      rating: 4,
      text: 'Great variety of fast food options. Chilli potato is my favorite! Affordable prices too.',
      date: '1 month ago',
    },
    {
      name: 'Amit Verma',
      rating: 5,
      text: 'Family-friendly atmosphere. Kids love the burgers here. Very cooperative staff.',
      date: '3 weeks ago',
    },
    {
      name: 'Neha Sharma',
      rating: 4,
      text: 'Good food quality. Sometimes takes a bit longer during rush hours but worth the wait.',
      date: '1 month ago',
    },
    {
      name: 'Vikram Yadav',
      rating: 3,
      text: 'Decent food. Parking space could be better. Overall okay experience.',
      date: '2 months ago',
    },
    {
      name: 'Sunita Devi',
      rating: 5,
      text: 'My go-to place for birthday cakes. They are fresh and beautifully decorated!',
      date: '1 week ago',
    },
  ];

  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <section id="reviews" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Customer <span className="text-primary">Reviews</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${
                    star <= Math.round(averageRating)
                      ? 'text-secondary fill-secondary'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-xl font-bold text-foreground">{averageRating.toFixed(1)}</span>
            <span className="text-muted-foreground">(231 reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-all animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground/80 mb-4">{review.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating
                          ? 'text-secondary fill-secondary'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
