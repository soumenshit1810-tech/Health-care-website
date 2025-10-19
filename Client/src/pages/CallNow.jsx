import React from "react";
import { motion } from "framer-motion";
import { Phone, Ambulance, Clock, MapPin, HeartPulse } from "lucide-react";

export default function CallNow() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-100 to-blue-200">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-4"
        >
          Need Help? Call Us Now!
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Our healthcare professionals are available 24/7 to provide emergency support and guidance.
          If you or someone you know needs help — don’t wait.
        </p>

        {/* Call Now Button */}
        <motion.a
          href="tel:+919876543210"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="inline-block mt-8 bg-blue-600 text-white py-3 px-10 rounded-full font-semibold shadow hover:bg-blue-700 transition"
        >
          📞 Call Now: +91 98765 43210
        </motion.a>
      </section>

      {/* Emergency Cards Section */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Ambulance className="text-red-600 w-10 h-10 mx-auto" />,
            title: "Emergency Ambulance",
            desc: "Quick response and on-time ambulance service at your doorstep.",
            number: "+91 90123 45678",
          },
          {
            icon: <HeartPulse className="text-pink-600 w-10 h-10 mx-auto" />,
            title: "24/7 Helpline",
            desc: "Our doctors are available round the clock for critical care.",
            number: "+91 91234 56789",
          },
          {
            icon: <Clock className="text-blue-600 w-10 h-10 mx-auto" />,
            title: "Working Hours",
            desc: "OPD Hours: Mon–Sat, 9:00 AM – 8:00 PM",
            number: "Sunday: Emergency Only",
          },
          {
            icon: <MapPin className="text-green-600 w-10 h-10 mx-auto" />,
            title: "Visit Our Hospital",
            desc: "HealthCare+ Hospital, 123 Wellness Street, New Delhi, India",
            number: "Open 24/7",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100"
          >
            {card.icon}
            <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-700">{card.title}</h3>
            <p className="text-gray-500 text-sm mb-3">{card.desc}</p>
            <p className="font-semibold text-blue-700">{card.number}</p>
          </motion.div>
        ))}
      </section>

      {/* Emergency CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">We’re Always Here For You</h2>
        <p className="max-w-2xl mx-auto mb-6">
          For any health emergency, contact our 24-hour support team immediately.
          Your well-being is our top priority.
        </p>
        <a
          href="tel:+919876543210"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-200 transition"
        >
          Call Emergency Helpline
        </a>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">Locate Us</h2>
        <p className="text-gray-600 mb-6">
          Our hospital is centrally located for quick access during emergencies.
        </p>
        <div className="max-w-5xl mx-auto h-72 rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="hospital-map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.104739621357!2d77.2089!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b4f1a3!2sAIIMS%20Hospital!5e0!3m2!1sen!2sin!4v1695505479836!5m2!1sen!2sin"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
