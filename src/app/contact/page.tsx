"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can integrate API call or email service
    console.log(formData);
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      {/* 🔷 Topbar */}
      <div className="w-full bg-gray-900 text-white py-2 px-4 flex justify-center items-center">
        <p className="text-[14px] leading-[21px] font-[400] text-center">
          Contact Exclusive! We’re here to help you with any queries or feedback.
        </p>
      </div>

      {/* 🔶 Header */}
      <header className="w-full bg-white text-gray-900 shadow-sm py-3 px-6 flex flex-wrap justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold ml-4 md:ml-8">Exclusive</h1>
        <nav className="hidden md:flex space-x-8 text-[16px] font-medium">
          <a href="/" className="hover:text-gray-600 underline">Home</a>
          <a href="/contact" className="hover:text-gray-600 transition underline">Contact</a>
          <a href="/about" className="hover:text-gray-600 transition">About</a>
          <a href="/signup" className="hover:text-gray-600 transition">SignUp</a>
        </nav>
      </header>


      {/* 🔹 Contact Section */}
      <section className="px-6 md:px-12 mt-12 max-w-[800px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">Get in Touch</h2>
        <p className="text-gray-700 text-lg md:text-xl mb-8 text-center">
          Have any questions or feedback? Fill out the form below, and we’ll get back to you as soon as possible.
        </p>

        {success && (
          <p className="text-green-600 text-center mb-4 font-semibold">
            Thank you! Your message has been sent.
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* 🔹 Contact Info Section */}
      <section className="px-6 md:px-12 mt-16 max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2 text-gray-900">Email</h3>
          <p className="text-gray-700">wazeemaamir145@gmail.com</p>
        </div>
        <div className="p-6 border rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2 text-gray-900">Phone</h3>
          <p className="text-gray-700">+92 370 2440409</p>
        </div>
        <div className="p-6 border rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2 text-gray-900">Address</h3>
          <p className="text-gray-700">Dadyal, Pakistan</p>
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-[1200px] mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-100">Exclusive</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Support</li>
              <li>Account</li>
              <li>Quick Link</li>
              <li>Download App</li>
              <li>Subscribe</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-100">Contact</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>wazeemaamir145@gmail.com</li>
              <li>+923702440409</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-100">Account & Offers</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Save $3 with App</li>
              <li>10% off first order</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-100">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>FAQ</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-800 py-4 text-center text-gray-400 text-sm">
          &copy; Exclusive 2025. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
