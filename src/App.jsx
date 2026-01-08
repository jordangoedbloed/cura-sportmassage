import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Behandelingen from "./pages/Behandelingen";
import Producten from "./pages/Producten";
import ContactForm from "./components/ContactForm";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/behandelingen" element={<Behandelingen />} />
          <Route path="/producten" element={<Producten />} />
        </Routes>
      </AnimatePresence>
      <ContactForm />
      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
}

export default App;

