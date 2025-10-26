import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Stethoscope, Phone } from "lucide-react";

export default function Appointments() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    doctor: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Appointment booked successfully!");
    console.log("Appointment Details:", form);
    setForm({
      name: "",
      phone: "",
      service: "",
      doctor: "",
      date: "",
      time: "",
    });
  };

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
          Book Your Appointment
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Schedule your visit easily with our online booking system.  
          Choose your doctor, service, and preferred time — we’ll take care of the rest.
        </p>
      </section>

      {/* Appointment Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Appointment Form
          </h2>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <User className="inline w-4 h-4 mr-1 text-blue-600" /> Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <Phone className="inline w-4 h-4 mr-1 text-green-600" /> Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <Stethoscope className="inline w-4 h-4 mr-1 text-red-600" /> Select Service
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              >
                <option value="">-- Choose a Service --</option>
                <option value="General Checkup">General Checkup</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Dental">Dental</option>
                <option value="Dermatology">Dermatology</option>
              </select>
            </div>

            {/* Doctor */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                👨‍⚕️ Select Doctor
              </label>
              <select
                name="doctor"
                value={form.doctor}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              >
                <option value="">-- Choose a Doctor --</option>
                <option value="Dr. Anita Sharma">Dr. Anita Sharma — Cardiologist</option>
                <option value="Dr. Raj Patel">Dr. Raj Patel — General Physician</option>
                <option value="Dr. Neha Verma">Dr. Neha Verma — Pediatrician</option>
                <option value="Dr. Arjun Singh">Dr. Arjun Singh — Dentist</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <Calendar className="inline w-4 h-4 mr-1 text-purple-600" /> Date
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <Clock className="inline w-4 h-4 mr-1 text-orange-600" /> Time
              </label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-8 rounded-full font-semibold shadow hover:bg-blue-700 transition"
              >
                Book Appointment
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">Need Immediate Help?</h2>
        <p className="text-gray-600 mb-6">
          For emergencies or urgent cases, please call our 24/7 helpline.
        </p>
        <p className="text-lg font-semibold text-blue-700">📞 +91 9339652501</p>
      </section>
    </div>
  );
}
