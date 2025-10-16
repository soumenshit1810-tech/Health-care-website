import React, { useState } from "react";
import { HeartPulse, Menu, X, Phone, User, Stethoscope } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
    { name: "Appointments", href: "/appointments" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center gap-2">
          <HeartPulse className="text-blue-600 w-7 h-7" />
          <span className="text-xl font-bold text-gray-800">CarePlus</span>
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `text-[15px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
          <NavLink
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition"
          >
            <User className="w-5 h-5" />
            <span>Login</span>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-100"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="text-gray-700 text-lg font-medium hover:text-blue-600 transition"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <Stethoscope className="w-5 h-5" />
                <span>Book Appointment</span>
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
