import { motion } from "framer-motion";

const Behandelingen = () => {
  const treatments = [
    {
      title: "Sportmassage",
      description:
        "Een diepgaande massage gericht op herstel en prestatieverbetering voor sporters.",
      duration: "60 min",
      price: "€65,00",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800",
    },
    {
      title: "Triggerpointtherapie",
      description:
        "Behandeling van pijnlijke knooppunten in spieren voor directe pijnverlichting.",
      duration: "45 min",
      price: "€55,00",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800",
    },
    {
      title: "Dry Needling",
      description:
        "Effectieve behandeling met dunne naalden voor diepe spierverkortingen.",
      duration: "30 min",
      price: "€45,00",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
    },
    {
      title: "Cupping Therapie",
      description:
        "Oude Chinese technieken voor verbeterde doorbloeding en herstel.",
      duration: "45 min",
      price: "€50,00",
      image:
        "https://images.unsplash.com/photo-1598677194044-c73138af1c08?w=800",
    },
    {
      title: "Pre-Event Massage",
      description:
        "Voorbereiding op sportprestaties met activerende massagetechnieken.",
      duration: "30 min",
      price: "€40,00",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    },
    {
      title: "Post-Event Massage",
      description: "Herstel na intensieve inspanning voor sneller herstel.",
      duration: "45 min",
      price: "€55,00",
      image: "https://images.unsplash.com/photo-1540206395-68808572332f?w=800",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-12 px-4 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold text-gray-800 mb-4 text-center"
        >
          Behandelingen
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto"
        >
          Ontdek ons uitgebreide aanbod van professionele behandelingen, elk
          zorgvuldig afgestemd op jouw specifieke behoeften en doelen.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${treatment.image})` }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {treatment.title}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-cyan-500 font-semibold">
                    {treatment.duration}
                  </p>
                  <p className="text-2xl font-bold text-gray-800">
                    {treatment.price}
                  </p>
                </div>
                <p className="text-gray-600">{treatment.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: Call to action at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Wil je een afspraak maken of meer informatie?
          </p>
          <a
            href="#contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            Neem contact op
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Behandelingen;
