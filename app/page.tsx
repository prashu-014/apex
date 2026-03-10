"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Cloud,
  Brain,
  Code,
  Shield,
  CheckCircle,
  Star,
  TrendingUp,
  Calendar,
  Rocket,
} from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import JobSeeking from '@/app/components/JobSeeking'
import AboutUs from '@/app/components/AboutUs'
import WhyChoose from '@/app/components/WhyChoose'
import ClientReview from '@/app/components/ClientReview'
import ProcessSection from '@/app/components/ProcessSection'

const services = [
  {
    icon: Users,
    title: "IT Staff Augmentation",
    description:
      "Skilled IT professionals on contract with flexible hiring options and quick joining resources.",
    href: "/services",
    keyFeatures: [
      "Flexible hiring models",
      "Quick joining resources",
      "Skilled IT professionals",
      "Cost-effective solutions",
    ],
  },
  {
    icon: Cloud,
    title: "Salesforce Services",
    description:
      "Complete Salesforce setup, customization, support, and integration solutions for your business.",
    href: "/services#salesforce",
    keyFeatures: [
      "Custom Salesforce setup",
      "Integration with 3rd parties",
      "Ongoing support and maintenance",
      "Custom app development",
    ],
  },
  {
    icon: Brain,
    title: "Cloud & AI Services",
    description:
      "Cloud setup, management, AI automation, and intelligent chatbot solutions.",
    href: "/services#cloud-ai",
    keyFeatures: [
      "Cloud infrastructure setup",
      "AI automation solutions",
      "Intelligent chatbots",
      "Data analytics platforms",
    ],
  },
];

const stats = [
  { label: "Happy Clients", value: "500+", icon: Star },
  { label: "IT Professionals", value: "1000+", icon: Users },
  { label: "Projects Completed", value: "2000+", icon: CheckCircle },
  { label: "Years of Experience", value: "10+", icon: TrendingUp },
];

const roles = [
  "Salesforce Developers / Admins",
  "Cloud Engineers",
  "AI Engineers",
  "Software Developers",
  "QA & Support Engineers",
];

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Light overlay for better text readability */}
          <div className="absolute inset-0 " />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold  text-white mb-6 leading-tight">
               Bridging Ideas with Scalable Technology Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
               Apex Bridge partners with organizations to design, develop, and deliver scalable technology solutions. From strategy to deployment, we help businesses build reliable digital products and modernize their technology infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                {/* Primary Button: Let's Work Together */}
                <button className="group flex items-center justify-center gap-3 bg-[#0087ff] hover:bg-[#0076e0] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ease-in-out">
                  <span>Let’s Build</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>

                {/* Secondary Button: Chat With Us */}
                <button className="group flex items-center justify-center gap-3 border-2 border-[#0087ff] bg-transparent text-[#0087ff] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#0087ff]/5 transition-all duration-300">
                  <span> let's talk.</span>
                  <div className="relative w-6 h-6 transition-transform duration-300 group-hover:scale-110">
                    {/* Simple WhatsApp-style SVG Icon */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-full h-full"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.185-.573c.948.517 1.882.887 3.144.887 3.185 0 5.769-2.587 5.77-5.768 0-3.182-2.587-5.767-5.768-5.767zm3.391 8.221c-.142.399-.815.728-1.121.772-.284.04-.648.067-1.048-.062-.253-.082-.576-.192-.996-.368-1.773-.745-2.933-2.546-3.021-2.662-.088-.117-.717-.953-.717-1.815s.445-1.286.604-1.452c.159-.166.346-.208.462-.208s.231.001.332.005c.107.005.25-.04.391.302.142.346.487 1.187.529 1.27.042.083.07.18.014.291-.056.111-.083.18-.166.277-.083.097-.175.217-.249.291-.083.083-.171.174-.074.341.097.166.432.714.928 1.156.638.568 1.176.744 1.341.828.166.083.263.07.361-.042.097-.111.415-.484.526-.65.111-.166.221-.139.374-.083.152.055.968.456 1.134.54.166.083.277.125.318.194.042.069.042.401-.1.8z" />
                    </svg>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <JobSeeking />
      <AboutUs />
      <WhyChoose />
      <ProcessSection />
      <ClientReview />

      {/* Services Section */}
      {/* <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What We Provide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs, from
              staff augmentation to cutting-edge AI services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              > */}
                {/* <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {service.keyFeatures
                          .slice(0, 3)
                          .map((feature, index) => (
                            <li
                              key={index}
                              className="text-sm text-muted-foreground flex items-center"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                      </ul>
                    </div>
                    <Button variant="ghost" asChild className="p-0 h-auto">
                      <Link
                        href={service.href}
                        className="flex items-center text-primary hover:underline"
                      >
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card> */}
              {/* </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      {/* <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Clients Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver excellence through our commitment to quality,
              innovation, and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Expert Talent Pool",
                  description:
                    "Access to 1000+ pre-vetted IT professionals with diverse skills and experience.",
                  icon: Users,
                },
                {
                  title: "Quick Deployment",
                  description:
                    "Rapid onboarding process with resources joining within 48-72 hours.",
                  icon: TrendingUp,
                },
                {
                  title: "Flexible Engagement",
                  description:
                    "Customizable hiring models from contract-to-hire to long-term partnerships.",
                  icon: Shield,
                },
                {
                  title: "Quality Assurance",
                  description:
                    "Rigorous screening process ensuring only the best talent for your projects.",
                  icon: CheckCircle,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* <Card className="p-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">
                    Roles We Provide
                  </CardTitle>
                  <CardDescription>
                    Expert professionals across all major IT domains
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {roles.map((role, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{role}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button asChild>
                      <Link href="/roles">View All Roles</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card> */}
            {/* </motion.div>
          </div>
        </div>
      </section> */} 

      {/* Testimonials Section */}
      {/* <section id="testimonials">
        {/* <TestimonialSlider /> */}
      {/* </section>  */}

    <section className="py-20 px-6 bg-black flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-blue-900 px-8 py-16 text-center md:px-16 md:py-20 shadow-2xl shadow-blue-900/20"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Ready to start your <br className="hidden md:block" /> next project?
          </h2>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100/80 md:text-xl leading-relaxed">
            Let's collaborate to build something extraordinary. Our team is ready to help you 
            scale your business with modern technology.
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            {/* Primary Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center space-x-2 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-blue-900 transition-all hover:bg-blue-50"
            >
              <span>Start Project</span>
              <Rocket className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center space-x-2 rounded-2xl border-2 border-white/30 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all"
            >
              <Calendar className="h-5 w-5" />
              <span>Book a Call</span>
            </motion.button>
          </div>
        </div>

        {/* Decorative Light Glows */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-400 blur-[100px] opacity-30"></div>
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-black blur-[100px] opacity-40"></div>
      </motion.div>
    </section>


    </div>
  );
}
