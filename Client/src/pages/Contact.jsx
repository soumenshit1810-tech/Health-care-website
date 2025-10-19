import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-100 to-blue-200">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-4"
        >
          Get in Touch With Us
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          We're here to help you with all your healthcare needs. Reach out to us anytime —
          your health is our top priority.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Phone className="text-blue-600 w-8 h-8 mx-auto" />,
            title: "Call Us",
            info: "+91 98765 43210",
          },
          {
            icon: <Mail className="text-green-600 w-8 h-8 mx-auto" />,
            title: "Email Us",
            info: "support@healthcareplus.com",
          },
          {
            icon: <MapPin className="text-red-600 w-8 h-8 mx-auto" />,
            title: "Visit Us",
            info: "123 Wellness Street, New Delhi, India",
          },
          {
            icon: <Clock className="text-purple-600 w-8 h-8 mx-auto" />,
            title: "Working Hours",
            info: "Mon - Sat: 9 AM - 8 PM",
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
            <p className="text-gray-500">{card.info}</p>
          </motion.div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Have questions or need assistance? Fill out the form and our team will get back to
              you within 24 hours.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>📍 123 Wellness Street, New Delhi, India</li>
              <li>📞 +91 98765 43210</li>
              <li>📧 support@healthcareplus.com</li>
            </ul>
          </div>

          {/* Right Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-6 rounded-2xl shadow-md"
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message here..."
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">Find Us on the Map</h2>
        <p className="text-gray-600 mb-6">We’re located at the heart of the city for easy access.</p>
        <div className="max-w-5xl mx-auto h-72 rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="map"
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
