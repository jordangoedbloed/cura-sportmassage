import { motion } from "framer-motion";

const Producten = () => {
  const products = [
    {
      title: "Massage Olie",
      price: "€24,95",
      description:
        "Hoogwaardige natuurlijke massage olie voor optimale glijding.",
      image:
        "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800",
    },
    {
      title: "Foam Roller",
      price: "€34,95",
      description: "Professionele foam roller voor zelfmassage en herstel.",
      image:
        "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800",
    },
    {
      title: "Massage Bal Set",
      price: "€19,95",
      description: "Set van 3 massage ballen voor triggerpointtherapie.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
    },
    {
      title: "Kinesio Tape",
      price: "€12,95",
      description: "Professionele kinesio tape voor ondersteuning en herstel.",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
    },
    {
      title: "Resistance Bands",
      price: "€29,95",
      description: "Complete set weerstandsbanden voor kracht en mobiliteit.",
      image:
        "https://images.unsplash.com/photo-1598632640487-6ea4a4e8b963?w=800",
    },
    {
      title: "Herstel Pakket",
      price: "€79,95",
      description: "Complete set met alles voor optimaal herstel na training.",
      image: "https://images.unsplash.com/photo-1556817411-58c45dd94e8c?w=800",
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
          Producten
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto"
        >
          Vind de perfecte producten om je herstel en prestaties thuis te
          optimaliseren. Alle producten zijn door ons geselecteerd en getest.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
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
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-cyan-500 font-bold text-xl mb-3">
                  {product.price}
                </p>
                <p className="text-gray-600 mb-4">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Producten;
