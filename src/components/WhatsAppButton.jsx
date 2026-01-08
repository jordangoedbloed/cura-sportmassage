import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number (include country code, no + or spaces)
  // Example: Netherlands +31 6 12345678 becomes 31612345678
  const phoneNumber = "31612345678";

  // Pre-filled message (optional)
  const message =
    "Hallo! Ik wil graag meer informatie over de massagebehandelingen.";

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <FaWhatsapp size={32} className="group-hover:animate-pulse" />

      {/* Tooltip */}
      <span className="absolute left-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat via WhatsApp
      </span>

      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
    </motion.a>
  );
};

export default WhatsAppButton;
