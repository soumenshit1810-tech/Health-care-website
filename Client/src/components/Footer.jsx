import React from "react";
import { HeartPulse, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
    { name: "Book Appointment", href: "/appointments" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <Facebook />, href: "#" },
    { icon: <Instagram />, href: "#" },
    { icon: <Twitter />, href: "#" },
    { icon: <Linkedin />, href: "#" },
  ];

  return (
    <footer className="bg-blue-50 text-gray-700 pt-16 pb-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1️⃣ Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2">
            <HeartPulse className="w-7 h-7 text-blue-600" />
            <h2 className="text-2xl font-bold text-blue-700">CarePlus</h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">
            Providing world-class healthcare with compassion and technology. 
            Your health is our top priority, every step of the way.
          </p>
        </motion.div>

        {/* 2️⃣ Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-blue-600 transition text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 3️⃣ Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Contact Us</h3>
          <div className="flex items-start gap-3 text-sm">
            <Phone className="text-blue-600 w-5 h-5" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <Mail className="text-blue-600 w-5 h-5" />
            <span>support@careplus.com</span>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="text-blue-600 w-5 h-5" />
            <span>123 Health Avenue, Kolkata, India</span>
          </div>
        </motion.div>

        {/* 4️⃣ Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Stay Updated</h3>
          <p className="text-sm text-gray-600">
            Subscribe to our newsletter for health tips & latest medical updates.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition text-sm"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="my-10 border-t border-gray-200"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} <span className="font-semibold text-blue-700">CarePlus</span>. Build By Soumen😊.
        </p>

        {/* Social Links */}
        <div className="flex gap-4">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-600 hover:text-blue-600 transition"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
