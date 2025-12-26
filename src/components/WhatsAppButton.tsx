import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "918423004192";
  const message = encodeURIComponent("Hi! I would like to place an order from DRS Food Point.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
