import React, { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, User, Mail, Phone, Stethoscope, MessageSquare } from "lucide-react";

export default function Appointments() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your appointment has been requested successfully.`);
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      date: "",
      message: "",
    });
  };

  return (
    <div className="text-gray-800">
      {/* 🏥 Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
        >
          Book an Appointment
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Schedule a visit with our experienced doctors. We’ll get back to confirm your appointment as soon as possible.
        </motion.p>
      </section>

      {/* 🩺 Appointment Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 bg-blue-50 p-10 rounded-2xl shadow-md">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-blue-700 mb-8 text-center"
          >
            Fill in Your Details
          </motion.h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="col-span-1">
              <label className="block mb-2 font-medium text-gray-700">Full Name</label>
              <div className="flex items-center border border-blue-200 bg-white rounded-lg px-3">
                <User className="text-blue-500 mr-2" size={18} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full py-2 outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Email */}
            <div className="col-span-1">
              <label className="block mb-2 font-medium text-gray-700">Email</label>
              <div className="flex items-center border border-blue-200 bg-white rounded-lg px-3">
                <Mail className="text-blue-500 mr-2" size={18} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full py-2 outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="col-span-1">
              <label className="block mb-2 font-medium text-gray-700">Phone Number</label>
              <div className="flex items-center border border-blue-200 bg-white rounded-lg px-3">
                <Phone className="text-blue-500 mr-2" size={18} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 9876543210"
                  className="w-full py-2 outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Department */}
            <div className="col-span-1">
              <label className="block mb-2 font-medium text-gray-700">Department</label>
              <div className="flex items-center border border-blue-200 bg-white rounded-lg px-3">
                <Stethoscope className="text-blue-500 mr-2" size={18} />
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full py-2 outline-none bg-transparent"
                >
                  <option value="">Select Department</option>
                  <option value="General">General Medicine</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Dermatology">Dermatology</option>
                </select>
              </div>
            </div>

            {/* Date */}
            <div className="col-span-1">
              <label className="block mb-2 font-medium text-gray-700">Preferred Date</label>
              <div className="flex items-center border border-blue-200 bg-white rounded-lg px-3">
                <CalendarDays className="text-blue-500 mr-2" size={18} />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full py-2 outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Message */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 font-medium text-gray-700">Message (Optional)</label>
              <div className="flex items-start border border-blue-200 bg-white rounded-lg px-3">
                <MessageSquare className="text-blue-500 mr-2 mt-2" size={18} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describe your health concern..."
                  className="w-full py-2 outline-none bg-transparent resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit */}
            <div className="col-span-1 md:col-span-2 text-center mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition"
              >
                Request Appointment
              </motion.button>
            </div>
          </form>
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
          <h2 className="text-3xl font-bold mb-4">We’re Ready to Help You Feel Better</h2>
          <p className="text-blue-100 mb-8">
            Our specialists are always here to listen and guide you toward a healthier tomorrow.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
