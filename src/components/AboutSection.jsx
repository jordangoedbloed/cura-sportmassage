import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-linear-to-r from-cyan-600 to-cyan-500 py-20 px-4"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-6">Over Gina</h2>
          <p className="text-lg leading-relaxed mb-4">
            Gina is een gediplomeerd sportmasseur met meer dan 10 jaar ervaring
            in het begeleiden van sporters naar optimale prestaties. Haar passie
            voor sport en het menselijk lichaam begon op jonge leeftijd, en deze
            passie heeft ze omgezet in haar werk.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Met een achtergrond in fysiotherapie en gespecialiseerde trainingen
            in sportmassage, dry needling en triggerpoint therapie, biedt Gina
            een holistische benadering van lichaamsherstel en
            prestatieverbetering.
          </p>
          <p className="text-lg leading-relaxed">
            Of je nu een professionele atleet bent of een enthousiaste amateur,
            Gina begrijpt de unieke behoeften van elke sporter en past haar
            behandelingen daarop aan voor maximaal resultaat.
          </p>
        </div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800")',
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
