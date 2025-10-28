"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Screenshots() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            See It
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-navy-600 bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl font-light">
            Intuitive interface designed to simplify clinical workflows and
            enhance productivity.
          </p>
        </motion.div>

        {/* Staggered screenshot layout */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-10 mb-8 md:mb-0 md:mr-20"
          >
            <div className="relative rounded-lg aspect-video overflow-hidden border border-gray-200 bg-white">
              <Image
                src="/clinician-dashboard.png"
                alt="TxAccelerator Dashboard"
                fill
                className="object-cover object-top"
                // Change object-position: object-top, object-center, object-bottom
                // Or use object-left-top, object-right-top, etc.
                // Or custom: style={{ objectPosition: '50% 25%' }}
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/5 to-transparent pointer-events-none" />
            </div>
            {/* Floating label */}
            <div className="absolute -top-4 -left-4 px-4 py-2 bg-white border border-gray-200 text-sm font-semibold text-gray-900">
              Dashboard Overview
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative md:absolute md:right-0 md:top-32 md:w-3/5 z-20"
          >
            <div className="relative rounded-lg aspect-video overflow-hidden border border-gray-200 bg-white">
              <Image
                src="/storysection.png"
                alt="TxAccelerator Assessment Tools"
                fill
                className="object-cover object-top"
                // Change object-position: object-top, object-center, object-bottom
                // Or use object-left-top, object-right-top, etc.
                // Or custom: style={{ objectPosition: '50% 25%' }}
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-600/5 to-transparent pointer-events-none" />
            </div>
            {/* Floating label */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-white border border-gray-200 text-sm font-semibold text-gray-900">
              Assessment Tools
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
