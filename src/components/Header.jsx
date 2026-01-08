import { Link, useLocation } from "react-router-dom";
import { FiPhone, FiMail, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

import logo from "../assets/images/cura-logo.png"

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phoneNumber = "31612345678"; // Replace with your number
  const whatsappMessage = "Hallo! Ik wil graag meer informatie.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

 return (
   <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex justify-between items-center py-4">
         {/* Logo */}
         <Link to="/" className="flex items-center gap-2">
           <img
             src={logo}
             alt="Cura Logo"
             className="w-auto h-10 object-contain"
           />
         </Link>

         {/* Desktop Navigation */}
         <nav className="hidden md:flex gap-8">
           <Link
             to="/"
             className={`text-gray-600 hover:text-cyan-500 transition-colors ${
               location.pathname === "/" ? "text-cyan-500 font-semibold" : ""
             }`}
           >
             Over Cura
           </Link>
           <Link
             to="/behandelingen"
             className={`text-gray-600 hover:text-cyan-500 transition-colors ${
               location.pathname === "/behandelingen"
                 ? "text-cyan-500 font-semibold"
                 : ""
             }`}
           >
             Behandelingen
           </Link>
           <Link
             to="/producten"
             className={`text-gray-600 hover:text-cyan-500 transition-colors ${
               location.pathname === "/producten"
                 ? "text-cyan-500 font-semibold"
                 : ""
             }`}
           >
             Producten
           </Link>
           <a
             href="#contact"
             className="text-gray-600 hover:text-cyan-500 transition-colors"
           >
             Contact
           </a>
         </nav>

         {/* Desktop Icons */}
         <div className="hidden md:flex gap-4 items-center">
           <a
             href={whatsappUrl}
             target="_blank"
             rel="noopener noreferrer"
             className="text-green-500 hover:text-green-600 transition-colors"
             title="Chat via WhatsApp"
           >
             <FaWhatsapp size={26} />
           </a>
         </div>

         {/* Mobile Menu Button */}
         <button
           className="md:hidden text-cyan-500"
           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
         >
           {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
         </button>
       </div>

       {/* Mobile Menu */}
       {mobileMenuOpen && (
         <nav className="md:hidden py-4 border-t border-gray-200">
           <div className="flex flex-col space-y-4">
             <Link
               to="/"
               onClick={() => setMobileMenuOpen(false)}
               className={`text-gray-600 hover:text-cyan-500 transition-colors ${
                 location.pathname === "/" ? "text-cyan-500 font-semibold" : ""
               }`}
             >
               Over Cura
             </Link>
             <Link
               to="/behandelingen"
               onClick={() => setMobileMenuOpen(false)}
               className={`text-gray-600 hover:text-cyan-500 transition-colors ${
                 location.pathname === "/behandelingen"
                   ? "text-cyan-500 font-semibold"
                   : ""
               }`}
             >
               Behandelingen
             </Link>
             <Link
               to="/producten"
               onClick={() => setMobileMenuOpen(false)}
               className={`text-gray-600 hover:text-cyan-500 transition-colors ${
                 location.pathname === "/producten"
                   ? "text-cyan-500 font-semibold"
                   : ""
               }`}
             >
               Producten
             </Link>
             <a
               href="#contact"
               onClick={() => setMobileMenuOpen(false)}
               className="text-gray-600 hover:text-cyan-500 transition-colors"
             >
               Contact
             </a>
             <div className="flex gap-4 pt-4">
               <a
                 href={whatsappUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-green-500 hover:text-green-600 transition-colors"
               >
                 <FaWhatsapp size={26} />
               </a>
               <a
                 href="tel:+31612345678"
                 className="text-cyan-500 hover:text-cyan-600 transition-colors"
               >
                 <FiPhone size={24} />
               </a>
               <a
                 href="mailto:info@cura.nl"
                 className="text-cyan-500 hover:text-cyan-600 transition-colors"
               >
                 <FiMail size={24} />
               </a>
             </div>
           </div>
         </nav>
       )}
     </div>
   </header>
 );
};

export default Header;
