"use client";

import { motion } from "framer-motion";
import { Brain, TrendingUp, Users } from "lucide-react";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const stats = [
    {
      icon: TrendingUp,
      value: "40%",
      label: "Faster Assessments",
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: Users,
      value: "500+",
      label: "Clinics Worldwide",
      color: "from-navy-500 to-navy-600",
    },
    {
      icon: Brain,
      value: "NLP",
      label: "Powered Insights",
      color: "from-primary-600 to-navy-600",
    },
  ];

  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Gradient orbs background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-navy-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border border-primary-200 bg-white/50 backdrop-blur-sm rounded-full"
          >
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-700">
              Next-Gen Clinical Assessment
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            className="text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-[0.9] tracking-tight"
          >
            Transform
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-navy-600 bg-clip-text text-transparent">
              Mental Health Care
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-gray-600 mb-16 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Advanced clinical assessment tools that empower healthcare providers
            to deliver exceptional outcomes through intelligent, data-driven
            insights.
          </motion.p>

          {/* Stats - Modern horizontal layout */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-12 md:gap-16 mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                className="relative group"
              >
                {/* Icon with gradient background */}
                <div className="flex flex-col items-center gap-3">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon
                      className="w-8 h-8 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
