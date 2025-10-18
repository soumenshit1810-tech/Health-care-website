import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Syringe, HeartPulse, ShieldPlus, Hospital, Activity, Ambulance, Microscope } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: <Stethoscope className="w-10 h-10 text-blue-600" />,
      title: "General Consultation",
      desc: "Professional diagnosis and personalized treatment for all your health concerns.",
    },
    {
      icon: <Syringe className="w-10 h-10 text-blue-600" />,
      title: "Vaccinations & Immunizations",
      desc: "Stay protected with our comprehensive immunization programs for all age groups.",
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-blue-600" />,
      title: "Cardiology",
      desc: "Advanced heart care services including ECG, stress tests, and heart monitoring.",
    },
    {
      icon: <ShieldPlus className="w-10 h-10 text-blue-600" />,
      title: "Preventive Health Checkups",
      desc: "Early detection saves lives — full-body health screenings and diagnostics.",
    },
    {
      icon: <Hospital className="w-10 h-10 text-blue-600" />,
      title: "In-Patient & ICU Care",
      desc: "State-of-the-art infrastructure for recovery, emergency, and long-term care.",
    },
    {
      icon: <Activity className="w-10 h-10 text-blue-600" />,
      title: "Physiotherapy & Rehabilitation",
      desc: "Rebuild strength and mobility with personalized rehab programs.",
    },
    {
      icon: <Ambulance className="w-10 h-10 text-blue-600" />,
      title: "24/7 Emergency Services",
      desc: "Quick response ambulance and trauma care to handle critical situations.",
    },
    {
      icon: <Microscope className="w-10 h-10 text-blue-600" />,
      title: "Laboratory & Diagnostics",
      desc: "Accurate, fast lab reports powered by modern technology and expert staff.",
    },
  ];

  return (
    <div className="text-gray-800">
      {/* 🏥 Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
        >
          Our Healthcare Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Providing compassionate care and advanced medical services — your health is our top priority.
        </motion.p>
      </section>

      {/* 💙 Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <div className="bg-white inline-block p-4 rounded-full shadow-sm mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💡 Why Choose Us */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-blue-700 mb-6"
          >
            Why Choose <span className="text-blue-600">CarePlus</span>?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-md transition"
            >
              <h4 className="text-xl font-semibold mb-2 text-blue-700">Qualified Specialists</h4>
              <p>Our experienced doctors are dedicated to providing the best possible care for every patient.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-md transition"
            >
              <h4 className="text-xl font-semibold mb-2 text-blue-700">Cutting-edge Technology</h4>
              <p>We use modern equipment for accurate diagnosis and effective treatment.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-md transition"
            >
              <h4 className="text-xl font-semibold mb-2 text-blue-700">Patient-Centered Care</h4>
              <p>We focus on your comfort, trust, and satisfaction at every step of your healthcare journey.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ❤️ CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Exceptional Care?</h2>
          <p className="text-blue-100 mb-8">
            Book your appointment now and take a step toward a healthier future.
          </p>
          <Link
            to="/appointments"
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition"
          >
            Book Appointment
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
