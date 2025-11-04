"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    password: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage({ text: "", type: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, contact, password } = formData;

    if (!name || !contact || !password) {
      setMessage({
        text: "⚠️ Please fill all fields before creating an account.",
        type: "error",
      });
      return;
    }

    setMessage({
      text: "✅ Account created successfully!",
      type: "success",
    });

    console.log("User Account:", formData);
    setFormData({ name: "", contact: "", password: "" });
  };

  return (
    <div className="w-full min-h-screen bg-white font-poppins flex flex-col">
      {/* 🔷 Topbar */}
      <div className="w-full bg-gray-900 text-white py-2 px-4 flex justify-center items-center text-center">
        <p className="text-[14px] leading-[21px] font-[400]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <a href="#" className="font-[600] underline ml-1">
            ShopNow
          </a>
        </p>
      </div>

      {/* 🔷 Header */}
      <header className="w-full bg-white text-gray-900 shadow-sm py-3 px-6 flex flex-wrap justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">Exclusive</h1>
<nav className="hidden md:flex space-x-8 text-[16px] font-medium">
    <a href="/" className="hover:text-gray-600 ">Home</a>
    <a href="contact" className="hover:text-gray-600 transition">Contact</a>
    <a href="about" className="hover:text-gray-600 transition">About</a>
    <a href="signup" className="hover:text-gray-600 transition">SignUp</a>
  </nav>
      </header>

      {/* 🔷 Signup Section */}
      <main className="flex flex-col md:flex-row justify-center items-center w-full flex-grow mt-10 px-4 md:px-10">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <Image
            src="/Side Image.png"
            alt="Signup Visual"
            width={600}
            height={600}
            className="object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 max-w-md bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-semibold mb-2 text-gray-900">
            Create an account
          </h2>
          <p className="text-gray-600 mb-6">Enter your details below</p>

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
  {/* Name */}
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-700 mb-1">Full Name</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Enter your full name"
      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
    />
  </div>

  {/* Contact */}
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-700 mb-1">Email / WhatsApp Number</label>
    <input
      type="text"
      name="contact"
      value={formData.contact}
      onChange={handleChange}
      placeholder="Enter email or WhatsApp number"
      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
    />
  </div>

  {/* Password */}
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-700 mb-1">Password</label>
    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Enter password"
      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
    />
  </div>

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
          <button className="w-full border border-gray-400 text-gray-800 font-medium py-2 rounded-md hover:bg-gray-100 transition">
            Sign up with Google
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-gray-900 font-medium underline">
              Log in
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
