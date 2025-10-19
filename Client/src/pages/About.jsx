import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Stethoscope, Users, ShieldPlus, Hospital } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
    const values = [
        {
            icon: <HeartPulse className="text-blue-600 w-8 h-8" />,
            title: "Compassion",
            text: "We treat every patient with empathy, respect, and care.",
        },
        {
            icon: <ShieldPlus className="text-green-600 w-8 h-8" />,
            title: "Integrity",
            text: "We are committed to honesty, transparency, and ethical healthcare.",
        },
        {
            icon: <Stethoscope className="text-red-600 w-8 h-8" />,
            title: "Excellence",
            text: "We continuously strive for quality and innovation in all our services.",
        },
        {
            icon: <Users className="text-purple-600 w-8 h-8" />,
            title: "Teamwork",
            text: "Our multidisciplinary team works together for your health.",
        },
    ];

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
                    Caring for Life — Every Step of the Way
                </motion.h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-700">
                    At <span className="font-semibold text-blue-700">HealthCare+</span>, we combine compassion,
                    innovation, and expertise to deliver world-class medical care to our community.
                </p>
            </section>

            {/* Mission Section */}
            <section className="py-12 max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-semibold text-blue-800 mb-6">Our Mission</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    To provide patient-centered healthcare through excellence in clinical service, research,
                    and education. Our goal is to make high-quality care accessible to everyone.
                </p>
            </section>

            {/* Vision Section */}
            <section className="py-12 bg-white text-center">
                <h2 className="text-3xl font-semibold text-blue-800 mb-6">Our Vision</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    To be a trusted healthcare provider recognized for innovation, quality, and patient
                    satisfaction — improving lives and promoting wellness across all generations.
                </p>
            </section>

            {/* Core Values Section */}
            <section className="py-16 bg-gray-100">
                <h2 className="text-3xl font-semibold text-blue-800 mb-10 text-center">Our Core Values</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl p-6 shadow-md text-center border border-gray-100"
                        >
                            <div className="flex justify-center mb-3">{value.icon}</div>
                            <h3 className="font-semibold text-lg mb-2 text-gray-700">{value.title}</h3>
                            <p className="text-gray-500">{value.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-white text-center">
                <h2 className="text-3xl font-semibold text-blue-800 mb-6">Why Choose HealthCare+</h2>
                <div className="max-w-4xl mx-auto text-gray-600 space-y-2">
                    <p>✅ 24/7 Emergency & Critical Care Services</p>
                    <p>✅ Advanced Diagnostic and Surgical Facilities</p>
                    <p>✅ Experienced Medical Professionals</p>
                    <p>✅ Affordable & Transparent Billing</p>
                    <p>✅ Patient-Centered Approach</p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white text-center">
                <Hospital className="w-12 h-12 mx-auto mb-4" />
                <h2 className="text-3xl font-semibold mb-4">Your Health, Our Priority</h2>
                <p className="max-w-2xl mx-auto mb-6">
                    Schedule an appointment today and experience healthcare that truly cares about you.
                </p>
                <Link
                    to="/appointments"
                    className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition"
                >
                    Book Appointment
                </Link>
            </section>
        </div>
    );
}
