import { motion } from 'framer-motion'
import heroImage from '../assets/images/hero.jpg'

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Rounded Card Container */}
        <div className="relative h-[600px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6 md:px-12">
            {/* Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-sm font-medium">
                Cura
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl"
            >
              Ontdek de échte voordelen van sportmassages in praktijk
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base md:text-lg lg:text-xl mb-8 text-gray-100 max-w-2xl"
            >
              Ervaar persoonlijke zorg die inspeelt op de unieke behoeften van jouw lichaam
            </motion.p>

            {/* Button */}
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block bg-cyan-600 hover:bg-cyan-800 text-white px-10 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-base md:text-lg"
            >
              Stuur een bericht
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero