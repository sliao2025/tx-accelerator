"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50"
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="TxAccelerator Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-primary-600 to-navy-700 bg-clip-text text-transparent">
              TxAccelerator
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="lg" className="font-semibold">
                  Talk to Someone
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    Let&apos;s Connect
                  </DialogTitle>
                  <DialogDescription>
                    Schedule a conversation with our team to learn how
                    TxAccelerator can transform your clinical practice.
                  </DialogDescription>
                </DialogHeader>
                <ContactForm type="consultation" />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-600 to-navy-600 hover:from-primary-700 hover:to-navy-700 font-semibold"
                >
                  Try It Now
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
          </div>
        </div>
      </div>
    </motion.header>
  );
}
