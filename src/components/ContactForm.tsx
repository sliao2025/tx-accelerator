"use client";

import { useState } from "react";
import { Button } from "./ui/Button";

interface ContactFormProps {
  type: "trial" | "consultation";
}

export default function ContactForm({ type }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    clinic: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (you can integrate with your backend)
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch soon.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label
          htmlFor="clinic"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Clinic/Organization *
        </label>
        <input
          type="text"
          id="clinic"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          value={formData.clinic}
          onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {type === "trial"
            ? "What would you like to achieve?"
            : "How can we help you?"}
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>

      <Button type="submit" className="w-full" size="lg">
        {type === "trial" ? "Start Free Trial" : "Schedule Meeting"}
      </Button>
    </form>
  );
}
