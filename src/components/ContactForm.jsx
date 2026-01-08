import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [phoneError, setPhoneError] = useState("");

  // Replace with your Web3Forms Access Key
  const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate phone number in real-time
    if (name === "phone") {
      validatePhoneNumber(value);
    }
  };

  const validatePhoneNumber = (phone) => {
    if (!phone) {
      setPhoneError("");
      return true;
    }

    // Regular expression for international phone format
    // Matches: +31612345678, +316 12345678, +31 6 12345678, etc.
    const phoneRegex = /^\+[1-9]\d{1,3}[\s\d-]{7,15}$/;

    if (!phone.startsWith("+")) {
      setPhoneError(
        "Telefoonnummer moet beginnen met + en landcode (bijv. +31)"
      );
      return false;
    }

    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      setPhoneError(
        "Voer een geldig telefoonnummer in met landcode (bijv. +316 12345678)"
      );
      return false;
    }

    setPhoneError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Validate phone before submitting
    if (formData.phone && !validatePhoneNumber(formData.phone)) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: "Nieuw contactformulier bericht van Cura Sportmassage",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
          setPhoneError("");
        }, 3000);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (err) {
      console.error("Error sending form:", err);
      setError(
        "Er ging iets mis bij het verzenden. Probeer het later opnieuw."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Stuur mij een bericht!
          </h2>
          <p className="text-lg text-gray-600">
            Heb je een vraag of wil je een afspraak maken? Vul het formulier in
            en ik neem zo snel mogelijk contact met je op.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCheck size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Bericht verzonden!
              </h3>
              <p className="text-gray-600">
                Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je
                op.
              </p>
            </motion.div>
          ) : (
            <>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700"
                >
                  <FiAlertCircle size={20} />
                  <p>{error}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name and Last Name Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Voornaam *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      placeholder="Jouw voornaam"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Achternaam *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      placeholder="Jouw achternaam"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    placeholder="jouw@email.nl"
                  />
                </div>

                {/* Phone Number with Validation */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Telefoonnummer 
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 outline-none transition-all ${
                      phoneError
                        ? "border-red-300 focus:ring-red-500 focus:border-transparent"
                        : "border-gray-300 focus:ring-cyan-500 focus:border-transparent"
                    }`}
                    placeholder="+316 12345678"
                  />
                  {phoneError && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-600 flex items-center gap-1"
                    >
                      <FiAlertCircle size={14} />
                      {phoneError}
                    </motion.p>
                  )}
                  <p className="mt-2 text-sm text-gray-500">
                    Inclusief landcode (bijv. +31 voor Nederland, +32 voor
                    België)
                  </p>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Vertel mij waarmee ik je kan helpen..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || phoneError}
                  whileHover={{ scale: isSubmitting || phoneError ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting || phoneError ? 1 : 0.98 }}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Bezig met verzenden...
                    </>
                  ) : (
                    <>
                      <FiSend size={20} />
                      Verstuur bericht
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  * Verplichte velden
                </p>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
