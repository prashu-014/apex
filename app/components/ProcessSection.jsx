"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "1. Discover & Strategize",
    description:
      "We understand your business goals and define the right strategy and roadmap for the project.",
  },
  {
    icon: Code2,
    title: "2. Design & Develop",
    description:
      "Our team designs and develops scalable solutions with seamless integrations and rigorous testing.",
  },
  {
    icon: Rocket,
    title: "3. Deploy & Support",
    description:
      "We deploy the solution smoothly and provide continuous support and optimization to ensure long-term success.",
  },
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  
  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth out the progress bar movement
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="bg-white py-24 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:sticky lg:top-40"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Our Process in 3 steps
          </h2>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            From initial discovery to successful deployment and support, our 
            structured process ensures seamless delivery of innovative and 
            scalable technology solutions.
          </p>

          <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
            Get Started Today
          </button>
        </motion.div>

        {/* RIGHT SIDE - Timeline with Scroll Animation */}
        <div className="relative pt-4">
          {/* Static Background Line */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-gray-100 rounded-full" />
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full z-10" 
          />

          <div className="space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  className="relative pl-20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Icon Circle with active state logic */}
                  <motion.div 
                    className="absolute left-0 top-0 w-12 h-12 bg-white border-2 border-gray-100 flex items-center justify-center rounded-2xl z-20 shadow-sm"
                    whileInView={{ borderColor: "#3b82f6" }}
                    transition={{ delay: 0.2 }}
                  >
                    <Icon className="text-slate-700" size={22} />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-md leading-relaxed max-w-md">
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