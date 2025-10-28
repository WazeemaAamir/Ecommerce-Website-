"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    password: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" });

  // 🔹 handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage({ text: "", type: "" }); // clear message when typing
  };

  // 🔹 handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, contact, password } = formData;

    if (!name || !contact || !password) {
      setMessage({
        text: "⚠️ Please fill all the fields before creating an account.",
        type: "error",
      });
      return;
    }

    // If all fields filled
    setMessage({
      text: "✅ Account created successfully!",
      type: "success",
    });

    // You can replace below with your backend API / Firebase logic
    console.log("User Account:", formData);

    // Clear form after success
    setFormData({ name: "", contact: "", password: "" });
  };

  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      {/* 🔷 Topbar */}
      <div className="w-full bg-gray-900 text-white py-2 px-4 flex justify-center items-center">
        <div className="flex flex-wrap justify-center items-center gap-4 text-center">
          <p className="text-[14px] leading-[21px] font-[400]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a
            href="#"
            className="text-[14px] leading-[24px] font-[600] underline"
          >
            ShopNow
          </a>
        </div>
      </div>

      {/* 🔶 Header */}
      <header className="w-full bg-white text-gray-900 shadow-sm py-3 px-6 flex flex-wrap justify-between items-center">
        <h1 className="text-xl font-bold ml-4 md:ml-8">Exclusive</h1>

        <nav className="hidden md:flex space-x-8 text-[16px] font-medium">
          <a href="#" className="hover:text-gray-600 underline">
            Home
          </a>
          <a href="#" className="hover:text-gray-600 transition">
            Contact
          </a>
          <a href="#" className="hover:text-gray-600 transition">
            About
          </a>
          <a href="/Signup" className="hover:text-gray-600 transition">
            SignUp
          </a>
        </nav>

        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <div className="relative flex items-center w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-full pl-4 pr-10 py-1.5 text-sm w-full sm:w-[250px] focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <Search
              size={18}
              className="absolute right-3 text-gray-500 cursor-pointer"
            />
          </div>
        </div>
      </header>

      {/* 🖼️ Signup Section */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full mt-10 px-4 md:px-12">
        {/* Left Image */}
        <div className="relative w-full md:w-[805px] h-[781px]">
          <Image
            src="/Side Image.png"
            alt="Signup Side Visual"
            width={805}
            height={781}
            className="object-cover rounded-tr-[4px] rounded-br-[4px]"
          />
        </div>

        {/* Right Signup Form */}
        <div className="flex flex-col justify-center md:ml-16 mt-10 md:mt-0 w-full md:w-[400px]">
          <h2 className="text-3xl font-semibold mb-2">Create an account</h2>
          <p className="text-gray-600 mb-6">Enter your details below</p>

          {/* Validation Message */}
          {message.text && (
            <div
              className={`mb-3 text-sm font-medium ${
                message.type === "error" ? "text-red-600" : "text-green-600"
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Email or Phone Number"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 rounded-md font-medium hover:bg-gray-800 transition-all"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-2 text-sm text-gray-500">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Google Button */}
          <button className="w-full border border-gray-400 text-gray-800 font-medium py-2 rounded-md flex justify-center items-center gap-2 hover:bg-gray-100">
            <FcGoogle size={20} />
             Sign up with Google
          </button>
          {/* Login Redirect */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-gray-900 font-medium underline">
              Log in
            </a>
          </p>
        </div>
        
      </div>
      {/* 🔹 Footer Section */}
<footer className="bg-gray-900 text-white mt-12">
  <div className="max-w-[1200px] mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Column 1: Exclusive */}
    <div>
      <h3 className="text-lg font-bold mb-4">Exclusive</h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li>Support</li>
        <li>Account</li>
        <li>Quick Link</li>
        <li>Download App</li>
        <li>Subscribe</li>
      </ul>
    </div>

    {/* Column 2: Contact */}
    <div>
      <h3 className="text-lg font-bold mb-4">Contact</h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</li>
        <li>wazeemaamir145@gmail.com</li>
        <li>+923702440409</li>
      </ul>
    </div>

    {/* Column 3: Account & Offers */}
    <div>
      <h3 className="text-lg font-bold mb-4">Account & Offers</h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li>My Account</li>
        <li>Login / Register</li>
        <li>Save $3 with App (New User Only)</li>
        <li>Get 10% off your first order</li>
      </ul>
    </div>

    {/* Column 4: Policies & Quick Links */}
    <div>
      <h3 className="text-lg font-bold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li>Privacy Policy</li>
        <li>Terms Of Use</li>
        <li>Cart</li>
        <li>Wishlist</li>
        <li>FAQ</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
      {/* Social Icons */}
      <div className="flex gap-4 mt-4">
        <a href="https://www.facebook.com/profile.php?id=61556963592487" className="hover:text-red-600 transition">
          <i className="fab fa-facebook-f"></i> Facebook
        </a>
        <a href="https://x.com/A54154Amir" className="hover:text-red-600 transition">
          <i className="fab fa-twitter"></i> Twitter
        </a>
        <a href="" className="hover:text-red-600 transition">
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </div>
    </div>
  </div>

  {/* Newsletter Signup + App Download */}
  <div className="bg-gray-800 py-6 px-6 text-center">
    <p className="text-gray-300 mb-4">Enter your email to subscribe</p>
    <div className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-md mx-auto mb-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="rounded-l-md px-4 py-2 focus:outline-none text-gray-900 w-full sm:w-auto"
      />
      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-r-md font-semibold">
        Subscribe
      </button>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="bg-gray-900 py-4 text-center text-gray-400 text-sm">
    &copy; Rimel 2022. All rights reserved.
  </div>
</footer>
    </div>
  );
}
