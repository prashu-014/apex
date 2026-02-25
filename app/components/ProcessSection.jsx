"use client";

import { motion } from "framer-motion";
import { Search, Settings, Brain } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1- AI Strategy Audit",
    description:
      "We analyze a company’s workflows and identify AI automation opportunities.",
  },
  {
    icon: Settings,
    title: "2- AI Implementation & Integration",
    description:
      "We recommend the best AI tools and integrate them into business operations.",
  },
  {
    icon: Brain,
    title: "3- AI Training & Ongoing Optimization",
    description:
      "We train teams on AI best practices and provide ongoing support.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Process in 3 steps
          </h2>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Discover how we guide you from identifying AI opportunities to
            seamless integration and ongoing support — a clear, step-by-step
            process designed to help your business harness the power of AI
            with confidence.
          </p>

          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
            Get Started Today
          </button>
        </motion.div>

        {/* RIGHT SIDE - Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-400 rounded-full"></div>

          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  className="relative pl-20"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Icon Circle */}
                  <div className="absolute left-0 top-0 w-12 h-12 bg-indigo-100 flex items-center justify-center rounded-xl shadow-md">
                    <Icon className="text-indigo-600" size={24} />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}