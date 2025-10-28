"use client";

import { motion } from "framer-motion";

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

  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
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
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border border-primary-200 bg-white/50 backdrop-blur-sm rounded-full"
          >
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-700">
              Next-Gen Clinical Assessment
            </span>
          </motion.div>

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

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-gray-600 mb-16 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Advanced clinical assessment tools that empower healthcare providers
            to deliver exceptional outcomes through intelligent, data-driven
            insights.
          </motion.p>

          <motion.div
            variants={item}
            className="relative mt-24 mb-12 h-[500px] max-w-5xl mx-auto"
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.15) 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />

            <svg
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: 0 }}
            >
              {/* Flowing curved connection paths */}
              <motion.path
                d="M 180 100 Q 300 120, 420 140 Q 480 150, 540 160 T 660 180"
                stroke="url(#blueFlowGradient)"
                strokeWidth="2.5"
                fill="none"
                opacity="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 0.5, 0.5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.7, 1],
                }}
              />
              <motion.path
                d="M 180 250 Q 280 240, 380 250 Q 460 260, 540 250 T 660 245"
                stroke="url(#purpleFlowGradient)"
                strokeWidth="2.5"
                fill="none"
                opacity="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 0.5, 0.5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                  times: [0, 0.3, 0.7, 1],
                }}
              />
              <motion.path
                d="M 180 400 Q 260 380, 350 360 Q 440 340, 520 320 T 660 310"
                stroke="url(#orangeFlowGradient)"
                strokeWidth="2.5"
                fill="none"
                opacity="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 0.5, 0.5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.6,
                  times: [0, 0.3, 0.7, 1],
                }}
              />

              {/* Flowing particle streams */}
              {[...Array(8)].map((_, i) => (
                <motion.circle
                  key={`particle-${i}`}
                  r="2.5"
                  fill={
                    i % 3 === 0
                      ? "#3b82f6"
                      : i % 3 === 1
                      ? "#a855f7"
                      : "#f97316"
                  }
                  opacity="0"
                  animate={{
                    cx: [
                      180,
                      220 + i * 15,
                      300 + i * 20,
                      400 + i * 15,
                      520 + i * 10,
                      660,
                    ],
                    cy: [
                      100 + (i % 3) * 150,
                      110 + (i % 3) * 140 + Math.sin(i) * 20,
                      140 + (i % 3) * 130 + Math.sin(i) * 30,
                      150 + (i % 3) * 120 + Math.sin(i) * 20,
                      160 + (i % 3) * 110 + Math.sin(i) * 15,
                      180 + (i % 3) * 100,
                    ],
                    opacity: [0, 0.6, 0.8, 0.6, 0.4, 0],
                  }}
                  transition={{
                    duration: 3.5 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              ))}

              <defs>
                <linearGradient
                  id="blueFlowGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient
                  id="purpleFlowGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#c084fc" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient
                  id="orangeFlowGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#fb923c" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center gap-4"
                style={{ transform: "translateY(-150px)" }}
              >
                <motion.div className="relative w-20 h-20 rounded-full border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-blue-500"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <div className="text-left">
                  <div className="text-sm text-gray-600">Comprehensive</div>
                  <div className="text-sm text-gray-600">Assessments</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex items-center gap-4"
              >
                <motion.div className="relative w-20 h-20 rounded-full border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-purple-500"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                  />
                </motion.div>
                <div className="text-left">
                  <div className="text-sm text-gray-600">NLP/ML Risk</div>
                  <div className="text-sm text-gray-600">Assessment</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex items-center gap-4"
                style={{ transform: "translateY(150px)" }}
              >
                <motion.div className="relative w-20 h-20 rounded-full border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-orange-500"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6,
                    }}
                  />
                </motion.div>
                <div className="text-left">
                  <div className="text-sm text-gray-600">Personalized</div>
                  <div className="text-sm text-gray-600">Patient Reports</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.div
                className="relative w-32 h-32 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.2), rgba(249, 115, 22, 0.15))",
                  backdropFilter: "blur(20px)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.4), rgba(249, 115, 22, 0.4), rgba(59, 130, 246, 0.4))",
                    filter: "blur(8px)",
                  }}
                  animate={{
                    rotate: [0, -360],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    opacity: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />
                <div className="relative grid grid-cols-2 gap-2">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.3, 0.8],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-5"
            >
              <div className="text-right">
                <div className="text-lg font-semibold text-gray-700">
                  Improved
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                  Treatment
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                  Outcomes
                </div>
              </div>
              <motion.div className="relative w-28 h-28 rounded-full border-3 border-indigo-300 bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center shadow-lg">
                <motion.div
                  className="w-4 h-4 rounded-full bg-indigo-600"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-300/30 to-blue-300/30 blur-lg"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
