"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Lightbulb, Users, ShieldCheck, 
  Layers, Target, Award, 
  ChevronRight, Globe, Zap 
} from "lucide-react";

// --- Data ---
const stats = [
  { label: "Successful Projects", value: "10+", sub: "+25% Growth" },
  { label: "Satisfaction", value: "100%", sub: "Retention Rate" },
  { label: "Tech Experts", value: "15+", sub: "World Class Talent" },
  { label: "Global Support", value: "24/7", sub: "Always Available" },
];

const values = [
  {
    title: "Innovation And Adaptability",
    desc: "Our team always keeps an eye on the latest advancements in AI, ML, and cloud computing.",
    icon: Lightbulb,
  },
  {
    title: "Customer-centric Approach",
    desc: "All our services are designed according to the needs and preferences of our clients.",
    icon: Users,
  },
  {
    title: "Transparency",
    desc: "We ensure 100% transparency at all stages of our implementation and consulting services.",
    icon: ShieldCheck,
  },
  {
    title: "Technical Brilliance",
    desc: "Cutting-edge technical expertise is non-negotiable. We strive to enhance our services daily.",
    icon: Layers,
  },
  {
    title: "Seamless Collaboration",
    desc: "Our team of professionals works in perfect sync to help every client attain core objectives.",
    icon: Target,
  },
  {
    title: "Commitment to Excellence",
    desc: "We hold ourselves to the highest standards, ensuring each project is executed with precision.",
    icon: Award,
  },
];

const leaders = [
  { name: "Chitiz Agarwal", role: "Chairman & Managing Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
  { name: "Sushil Tiwari", role: "Chief Executive Officer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  { name: "Anamika Mishra", role: "Company Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
  { name: "Prakash Kattoli", role: "Director Consulting Services", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
  { name: "Soniya Sharma", role: "HR Leader", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
];

// --- Animation Variants ---
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("Global");

  return (
    <div className=" min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className=" bg-black relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40" 
            alt="Office Building"
          />
        </div>
        
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="relative z-20 text-center px-6 max-w-4xl"
        >
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
            Bridging Technology <br /> 
            <span className="text-blue-500 italic">and Innovation</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            We build the digital infrastructure for the next generation of industry leaders, 
            turning complex technical challenges into strategic growth.
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20">
              Discover Our Story
            </button>
            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all">
              View Success Stories
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-12 bg-blue-100 border-b border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold  mb-1">{stat.value}</h2>
              <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">{stat.label}</p>
              <p className="text-blue-500 text-xs font-medium">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Who We Are Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <p className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Our Foundation</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Who We Are</h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Apex Bridge is a premier technology consultancy dedicated to delivering high-end corporate solutions. 
              We specialize in bridging the gap between complex technical challenges and innovative business outcomes.
            </p>
            <p>
              Founded on the principle that technology should be an enabler, not a hurdle, 
              we have spent years refining our approach to digital transformation for market leaders.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            <div className="py-6 px-2 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group">
              <Zap className="text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold mb-2">Enterprise Grade</h4>
              <p className="text-sm text-gray-500">Solutions built for scale and security.</p>
            </div>
            <div className="py-6 px-2 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group">
              <Target className="text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold mb-2">Agile Strategy</h4>
              <p className="text-sm text-gray-500">Fast delivery with precision results.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} className="relative"
        >
          <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full z-0" />
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
            className="rounded-3xl relative z-10 border border-white/10 shadow-2xl" 
            alt="Team meeting"
          />
          <div className="absolute -bottom-6 -left-6 bg-blue-600 p-8 rounded-2xl z-20 shadow-xl hidden md:block">
            <p className="text-4xl font-bold text-white">5+</p>
            <p className="text-blue-100 text-sm">Years of Excellence</p>
          </div>
        </motion.div>
      </section>

      {/* 4. What We Stand For Grid */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">What We <span className="text-blue-500">Stand For</span></h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <motion.div 
                key={i} whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-blue-600/[0.05] hover:border-blue-500/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <val.icon className="text-blue-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Executive Leadership Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Executive Leadership Team</h2>
         
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {leaders.map((person, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4 bg-white/5 border border-white/10">
                <img 
                  src={person.img} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                  alt={person.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="font-bold text-lg group-hover:text-blue-500 transition-colors">{person.name}</h4>
              <p className="text-gray-500 text-xs uppercase tracking-wider font-medium">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

    
    </div>
  );
}