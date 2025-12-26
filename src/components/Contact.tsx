import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'CSB Road, Gandhi Nagar, Saurikh Rura, Uttar Pradesh 209728',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '084230 04192',
      link: 'tel:08423004192',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Open Daily • Closes 10:30 PM',
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-gradient-warm">
      <div className="container px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Find <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Visit us today or give us a call to place your order
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="flex items-start gap-3 sm:gap-4 bg-card p-4 sm:p-6 rounded-xl shadow-soft">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-primary hover:underline text-sm sm:text-base">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm sm:text-base">{info.content}</p>
                  )}
                </div>
              </div>
            ))}

            <Button size="lg" className="w-full gap-2" asChild>
              <a
                href="https://maps.app.goo.gl/BTxuyKsHoez2cbes9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="w-5 h-5" />
                Get Directions on Google Maps
              </a>
            </Button>
          </div>

          {/* Map Embed */}
          <div className="h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4287.468024965042!2d79.49039342742853!3d27.031083204068455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e1bb15085feb1%3A0x9d7cc4fa442f09bc!2sDRS%20Food%20Point!5e1!3m2!1sen!2sin!4v1766749105745!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DRS Food Point Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
