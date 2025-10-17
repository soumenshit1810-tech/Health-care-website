import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Stethoscope, Syringe, ShieldPlus, Ambulance, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import pic1 from "../assets/health2.png"
import pic2 from "../assets/health1.png"

export default function Home() {
  const services = [
    { icon: <Stethoscope className="w-8 h-8 text-blue-600" />, title: "General Consultation", desc: "Comprehensive diagnosis and treatment for all health concerns." },
    { icon: <Syringe className="w-8 h-8 text-blue-600" />, title: "Vaccinations", desc: "Protect yourself and your family with the latest immunizations." },
    { icon: <ShieldPlus className="w-8 h-8 text-blue-600" />, title: "Health Checkups", desc: "Full body checkups with advanced equipment and expert doctors." },
    { icon: <Ambulance className="w-8 h-8 text-blue-600" />, title: "Emergency Services", desc: "24/7 ambulance and trauma care for critical situations." },
  ];

  return (
    <div className="text-gray-800">
      {/* 🩺 Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 leading-tight mb-4">
              Compassionate Care, <br /> Modern Medicine.
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              At <span className="font-semibold text-blue-600">CarePlus</span>, we combine technology and empathy to deliver world-class healthcare services — anytime, anywhere.
            </p>
            <div className="flex gap-4">
              <Link
                to="/appointments"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center gap-2"
              >
                Book Appointment <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <img
              src={pic1}
              alt="Healthcare illustration"
              className="w-full rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* 🩹 Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-blue-700 mb-4"
          >
            Our Medical Services
          </motion.h2>
          <p className="text-gray-600 mb-12">
            Discover our wide range of professional healthcare services designed for every need.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blue-50 rounded-2xl p-6 shadow hover:shadow-md transition cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="bg-white p-4 rounded-full shadow-sm">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-blue-700">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 👩‍⚕️ About Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            src={pic2}
            alt="About healthcare"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Your Health, Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are committed to offering personalized, affordable, and accessible healthcare solutions. 
              Our experienced doctors and modern infrastructure ensure you receive the best possible care.
            </p>
            <Link
              to="/doctors"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Meet Our Doctors
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ❤️ Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step Toward Better Health?</h2>
          <p className="text-blue-100 mb-8">
            Book your appointment online and let our experts take care of you.
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
