"use client";
import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      {/* 🔷 Topbar */}
      <div className="w-full bg-gray-900 text-white py-2 px-4 flex justify-center items-center">
        <p className="text-[14px] leading-[21px] font-[400] text-center">
          Welcome to Exclusive! Your one-stop shop for fashion, electronics, groceries, and more!
        </p>
      </div>

      {/* 🔶 Header */}
      <header className="w-full bg-white text-gray-900 shadow-sm py-3 px-6 flex flex-wrap justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold ml-4 md:ml-8">Exclusive</h1>
        <nav className="hidden md:flex space-x-8 text-[16px] font-medium">
          <a href="/" className="hover:text-gray-600 underline">Home</a>
          <a href="/contact" className="hover:text-gray-600 transition">Contact</a>
          <a href="/about" className="hover:text-gray-600 transition underline">About</a>
          <a href="/signup" className="hover:text-gray-600 transition">SignUp</a>
        </nav>
      </header>

    
      {/* 🔹 About Section */}
      <section className="px-6 md:px-12 mt-12">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Exclusive
          </h2>
          <p className="text-gray-800 text-lg md:text-xl mb-6">
            Exclusive is a modern e-commerce platform built to bring you the best deals and a seamless shopping experience. 
            From fashion to electronics, groceries to toys, we provide a wide range of products with excellent quality 
            and affordable prices.
          </p>
          <p className="text-gray-800 text-lg md:text-xl">
            Our mission is to make online shopping easy, enjoyable, and secure for everyone. With fast delivery, 
            hassle-free returns, and customer support, we aim to ensure you have the best experience every time you shop with us.
          </p>
        </div>
      </section>

      {/* 🔹 Our Values */}
      <section className="px-6 md:px-12 mt-16">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Customer First</h3>
            <p className="text-gray-700">We prioritize your satisfaction and strive to offer a seamless shopping experience.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Wide Selection</h3>
            <p className="text-gray-700">From electronics to fashion, we have everything you need under one roof.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Fast Delivery</h3>
            <p className="text-gray-700">Quick shipping ensures your orders reach you safely and on time.</p>
          </div>
        </div>
      </section>

      {/* 🔹 Contact / CTA */}
      <section className="px-6 md:px-12 mt-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get in Touch</h2>
        <p className="text-gray-700 mb-6 text-lg">Have questions or feedback? We'd love to hear from you!</p>
        <a
          href="/contact"
          className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
        >
          Contact Us
        </a>
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
