import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesPreview = () => {
  const services = [
    {
      title: "Behandelingen",
      description: "Klik hieronder om al mijn behandelingen te bekijken",
      link: "/behandelingen",
      linkText: "Behandelingen",
      image:
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800",
    },
    {
      title: "Producten",
      description: "Klik hieronder om al mijn producten te bekijken",
      link: "/producten",
      linkText: "Producten",
      image:
        "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-xl group"
            >
              <Link to={service.link} className="block h-full">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-cyan-600/90 to-cyan-500/40 flex flex-col items-center justify-center text-white p-8">
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg mb-6 text-center">
                    {service.description}
                  </p>
                  <span className="inline-block bg-white text-cyan-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    {service.linkText}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
