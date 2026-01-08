import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4"
    >
      <div className="max-w-xl mx-auto text-center mt-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Welkom bij Cura Sportmassage
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Bij Cura Sportmassage staan jouw prestaties en welzijn centraal. Met
          jarenlange ervaring in sportmassage en fysiotherapie help ik
          sporters en actieve mensen hun lichaam optimaal te laten presteren. Of
          je nu herstelt van een blessure, je prestaties wilt verbeteren, of
          gewoon wilt ontspannen na een intensieve training - ik ben er voor
          je.
        </p>

        <div className="flex justify-center">
          <motion.div
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-20 h-20 text-cyan-500"
          >
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 10 C30 10 15 25 15 45 C15 65 30 80 50 80 C70 80 85 65 85 45 C85 25 70 10 50 10 M50 20 C64 20 75 31 75 45 C75 59 64 70 50 70 C36 70 25 59 25 45 C25 31 36 20 50 20" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WelcomeSection;
