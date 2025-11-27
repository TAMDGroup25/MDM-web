import whatsappIcon from "../../assets/whatsapp.png";

const WhatsappButton = () => {
  const phone = "34664686850";
  const message = "Hola, estoy interesado/a en ";
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed md:bottom-6 bottom-4 right-5 md:right-10 z-50 bg-primary hover:bg-detail text-white p-4 rounded-full shadow-lg  transition-all"
      aria-label="WhatsApp"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-7 sm:w-8 filter brightness-0 invert"
      />
    </a>
  );
};

export default WhatsappButton;
