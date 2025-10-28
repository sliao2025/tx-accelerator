"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/Dialog";
import ContactForm from "./ContactForm";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gray-900">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-navy-600 to-gray-900 opacity-90" />

      {/* Animated orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary-400/30 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-navy-400/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/20 bg-white/10 backdrop-blur-sm rounded-full"
          >
            <Sparkles className="w-4 h-4 text-primary-200" />
            <span className="text-sm font-medium">Join 500+ Clinics</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
            Ready to Transform
            <br />
            Your Practice?
          </h2>

          <p className="text-xl md:text-2xl mb-16 text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
            Start delivering better patient outcomes with intelligent clinical
            assessment tools designed for modern healthcare.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-10 py-7 group font-semibold hover:scale-105 transition-transform"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    Start Your Trial
                  </DialogTitle>
                  <DialogDescription>
                    Experience TxAccelerator firsthand. Fill out the form below
                    to get started.
                  </DialogDescription>
                </DialogHeader>
                <ContactForm type="trial" />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 bg-transparent hover:bg-white/10 border-2 border-white/40 text-white font-semibold hover:scale-105 transition-transform"
                >
                  Schedule a Demo
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    Schedule a Demo
                  </DialogTitle>
                  <DialogDescription>
                    Let us show you how TxAccelerator can work for your clinic.
                  </DialogDescription>
                </DialogHeader>
                <ContactForm type="consultation" />
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
