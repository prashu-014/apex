"use client";

import { motion } from "framer-motion";

const strengths = [
  {
    title: "Certified Experts",
    description: "Skilled developers and specialists bringing industry best practices to every project.",
    icon: "✅",
  },
  {
    title: "Technology Expertise",
    description: "Cloud platforms, automation, and scalable architectures for high-performance solutions.",
    icon: "🚀",
  },
  {
    title: "Client-Centric Collaboration",
    description: "Strong partnerships to ensure solutions are perfectly aligned with your business goals.",
    icon: "🤝",
  },
  {
    title: "End-to-End Delivery",
    description: "From initial planning and development to deployment and ongoing support.",
    icon: "📦",
  },
  {
    title: "Scalable & Reliable",
    description: "Systems designed to scale with your growth, ensuring long-term flexibility.",
    icon: "📈",
  },
];


const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function WhyChooseUs() {
  return (
    <main className="min-h-screen bg-black text-white px-6 lg:px-20 py-24">
      {/* --- Header Section --- */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <p className="text-blue-500 uppercase tracking-[0.2em] text-sm font-bold mb-4">
            Why Choose Us
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Redefining Digital <br />
            <span className="text-gray-500">Transformation</span>
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-gray-400 text-lg leading-relaxed">
            At Apex Bridge, we partner with businesses to design, develop, and deliver scalable technology solutions that drive innovation and long-term growth.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            From concept to deployment, we help organizations modernize technology, streamline operations, and build future-ready solutions.
          </p>
        </div>
      </div>

      {/* --- Strengths Grid --- */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
      >
        {strengths.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:bg-[#111] transition-colors group"
          >
            <div className="text-2xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

     
    </main>
  );
}