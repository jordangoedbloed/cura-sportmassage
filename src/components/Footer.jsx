import { Link } from "react-router-dom";
import { FiMapPin, FiInstagram, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="contact" className="bg-cyan-500 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Website</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline transition-all">
                Over Cura
              </Link>
            </li>
            <li>
              <Link
                to="/behandelingen"
                className="hover:underline transition-all"
              >
                Behandelingen
              </Link>
            </li>
            <li>
              <Link to="/producten" className="hover:underline transition-all">
                Producten
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Behandelingen</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/behandelingen"
                className="hover:underline transition-all"
              >
                Sportmassage
              </Link>
            </li>
            <li>
              <Link
                to="/behandelingen"
                className="hover:underline transition-all"
              >
                Triggerpointtherapie
              </Link>
            </li>
            <li>
              <Link
                to="/behandelingen"
                className="hover:underline transition-all"
              >
                Dry Needling
              </Link>
            </li>
            <li>
              <Link
                to="/behandelingen"
                className="hover:underline transition-all"
              >
                Cupping Therapie
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://wa.me/31123456789"
                className="hover:underline transition-all"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="mailto:info@cura.nl"
                className="hover:underline transition-all"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="tel:+31123456789"
                className="hover:underline transition-all"
              >
                Telefoon
              </a>
            </li>
          </ul>
          <h3 className="text-xl font-bold mt-6 mb-4">Socials</h3>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-200 transition-colors"
            >
              <FiInstagram size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-200 transition-colors"
            >
              <FiFacebook size={24} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Tarieven</h3>
          <p className="mb-4">Tarieven op aanvraag</p>
          <div className="bg-white rounded-lg p-4 text-cyan-500">
            <div className="flex items-start gap-2 mb-2">
              <FiMapPin className="mt-1 shrink-0" size={20} />
              <div>
                <p className="font-semibold">Riederhoeve 5, 2993</p>
                <p>XA Barendrecht</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-cyan-400 text-center">
        <p>
          &copy; {new Date().getFullYear()} Cura Sportmassage. Alle rechten
          voorbehouden.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
