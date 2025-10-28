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
        text: "⚠️ Please fill all the fields before creating an account.",
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
    <div className="w-full min-h-screen bg-white font-poppins">
      {/* Topbar */}
      <div className="w-full bg-gray-900 text-white py-2 px-4 flex justify-center items-center">
        <div className="flex flex-wrap justify-center items-center gap-4 text-center">
          <p className="text-[14px] leading-[21px] font-[400]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a href="#" className="text-[14px] leading-[24px] font-[600] underline">
            ShopNow
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="w-full bg-white text-gray-900 shadow-sm py-3 px-6 flex flex-wrap justify-between items-center">
        <h1 className="text-xl font-bold ml-4 md:ml-8">Exclusive</h1>
        <nav className="hidden md:flex space-x-8 text-[16px] font-medium">
          <a href="#" className="hover:text-gray-600 underline">Home</a>
          <a href="#" className="hover:text-gray-600 transition">Contact</a>
          <a href="#" className="hover:text-gray-600 transition">About</a>
          <a href="/Signup" className="hover:text-gray-600 transition">SignUp</a>
        </nav>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-full pl-4 pr-4 py-1.5 text-sm w-full sm:w-[250px] focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      </header>

      {/* Signup Section */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full mt-10 px-4 md:px-12">
        <div className="relative w-full md:w-[805px] h-[781px]">
          <Image
            src="/Side Image.png"
            alt="Signup Side Visual"
            width={805}
            height={781}
            className="object-cover rounded-tr-[4px] rounded-br-[4px]"
          />
        </div>

        <div className="flex flex-col justify-center md:ml-16 mt-10 md:mt-0 w-full md:w-[400px]">
          <h2 className="text-3xl font-semibold mb-2">Create an account</h2>
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

          {/* Google Button without icon */}
          <button className="w-full border border-gray-400 text-gray-800 font-medium py-2 rounded-md hover:bg-gray-100">
            Sign up with Google
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-gray-900 font-medium underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
