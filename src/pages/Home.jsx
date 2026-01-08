import { motion } from "framer-motion";
import Hero from "../components/Hero";
import WelcomeSection from "../components/WelcomeSection";
import AboutSection from "../components/AboutSection";
import ServicesPreview from "../components/ServicesPreview";


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <WelcomeSection />
      <AboutSection />
      <ServicesPreview />
    </motion.div>
  );
};

export default Home;