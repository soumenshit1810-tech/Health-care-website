import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

// Sample doctor images (replace with your own in /assets)
import doc1 from "../assets/doctor1.png";
import doc2 from "../assets/doctor2.png";
import doc3 from "../assets/doctor3.png";
import doc4 from "../assets/doctor4.png";

export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Arjun Mehta",
      specialty: "Cardiologist",
      img: doc1,
      desc: "Heart care specialist with 15+ years of experience in cardiac health and surgery.",
    },
    {
      name: "Dr. Priya Nair",
      specialty: "Pediatrician",
      img: doc2,
      desc: "Dedicated to providing compassionate care to infants, children, and adolescents.",
    },
    {
      name: "Dr. Rakesh Gupta",
      specialty: "Orthopedic Surgeon",
      img: doc3,
      desc: "Expert in joint replacement, trauma, and sports injury rehabilitation.",
    },
    {
      name: "Dr. Neha Sharma",
      specialty: "Dermatologist",
      img: doc4,
      desc: "Specialized in skin, hair, and cosmetic treatments using advanced techniques.",
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
          Meet Our Expert Doctors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Our team of dedicated healthcare professionals is here to ensure your well-being with care and compassion.
        </motion.p>
      </section>

      {/* 👨‍⚕️ Doctors Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {doctors.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-50 rounded-2xl shadow hover:shadow-lg transition overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-700 mb-1">{doc.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">{doc.specialty}</p>
                <p className="text-gray-600 text-sm mb-4">{doc.desc}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💙 Our Approach Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-blue-700 mb-4"
          >
            Our Approach to Care
          </motion.h2>
          <p className="text-gray-600 mb-10">
            We believe in providing holistic healthcare by combining modern technology, empathy, and personalized treatment for every patient.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            {[
              {
                icon: <Stethoscope className="w-8 h-8 text-blue-600 mx-auto mb-3" />,
                title: "Patient First",
                text: "Every treatment is tailored to individual needs with compassion and trust.",
              },
              {
                icon: <Stethoscope className="w-8 h-8 text-blue-600 mx-auto mb-3" />,
                title: "Expert Team",
                text: "Our specialists bring years of medical expertise and experience to ensure top-notch care.",
              },
              {
                icon: <Stethoscope className="w-8 h-8 text-blue-600 mx-auto mb-3" />,
                title: "Continuous Innovation",
                text: "We stay ahead with the latest medical advancements to serve you better.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-md transition"
              >
                {item.icon}
                <h4 className="font-semibold text-lg text-blue-700 mb-2">{item.title}</h4>
                <p className="text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
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
          <h2 className="text-3xl font-bold mb-4">Book an Appointment with Our Experts</h2>
          <p className="text-blue-100 mb-8">
            Get personalized consultation and advanced medical care from our trusted doctors.
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
