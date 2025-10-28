"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Comprehensive Assessments",
    description:
      "Evidence-based clinical evaluation tools designed by healthcare professionals. Standardized assessments that capture patient data accurately and efficiently.",
    image: "/feature-assessments.svg",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "NLP/ML Risk Assessment",
    description:
      "Advanced natural language processing and machine learning algorithms analyze patient data to identify risk factors and predict outcomes with precision.",
    image: "/feature-ml.svg",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "HIPAA Compliant",
    description:
      "Enterprise-grade security and compliance standards. Your patient data is protected with end-to-end encryption and strict privacy protocols.",
    image: "/feature-hipaa.svg",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Personalized Patient Reports",
    description:
      "Generate comprehensive, customized reports for each patient. Clear visualizations and actionable insights that inform treatment decisions.",
    image: "/feature-reports.svg",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Improved Treatment Outcomes",
    description:
      "Data-driven insights lead to better patient outcomes. Track progress, measure effectiveness, and optimize treatment plans for superior results.",
    image: "/feature-outcomes.svg",
    gradient: "from-indigo-500 to-blue-500",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-blue-50/30 via-blue-50/10 to-white"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header with animated diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            Powerful Features
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-navy-600 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light mb-16">
            Everything your clinic needs to deliver exceptional patient care.
          </p>
        </motion.div>

        {/* Feature grid - 2 columns then 3 columns */}
        <div className="space-y-8">
          {/* First row - 2 large features */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 1 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-all"
              >
                {/* Image section */}
                <div
                  className={`relative h-64 bg-gradient-to-br ${feature.gradient} overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <img
                      src={feature.image}
                      alt=""
                      className="w-full h-full object-contain opacity-90 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second row - 3 smaller features */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.slice(2).map((feature, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 + 1 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-all"
              >
                {/* Image section */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${feature.gradient} overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <img
                      src={feature.image}
                      alt=""
                      className="w-full h-full object-contain opacity-90 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
