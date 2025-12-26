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
    <section id="contact" className="py-16 md:py-24 bg-gradient-warm">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Visit us today or give us a call to place your order
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="flex items-start gap-4 bg-card p-6 rounded-xl shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-primary hover:underline">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.content}</p>
                  )}
                </div>
              </div>
            ))}

            <Button size="lg" className="w-full gap-2" asChild>
              <a
                href="https://maps.google.com/?q=DRS+Food+Point+Saurikh+Rura+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="w-5 h-5" />
                Get Directions on Google Maps
              </a>
            </Button>
          </div>

          {/* Map Embed */}
          <div className="h-[400px] rounded-xl overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.5!2d80.1!3d26.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI0JzAwLjAiTiA4MMKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
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
