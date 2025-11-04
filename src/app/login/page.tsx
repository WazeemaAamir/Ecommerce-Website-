"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = () => {
    const { emailOrPhone, password } = formData;
    if (!emailOrPhone || !password) {
      setError("⚠️ Please fill in all fields before logging in.");
      return;
    }
    alert("✅ Logged in successfully!");
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
          <a href="/" className="hover:text-gray-600 underline">Home</a>
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

      {/* Login Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 px-6">
        {/* Left Image */}
        <div className="relative w-full md:w-[50%] h-[300px] md:h-[600px]">
          <Image
            src="/Side Image.png"
            alt="Login Visual"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Login Form */}
        <div className="w-full md:w-[40%] md:ml-12 mt-8 md:mt-0">
          <h2 className="text-[32px] font-semibold mb-2 text-gray-900">
            Log in to Exclusive
          </h2>
          <p className="text-gray-600 mb-6 text-[16px]">Enter your details below</p>

          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="emailOrPhone"
              placeholder="Email or Phone Number"
              value={formData.emailOrPhone}
              onChange={handleChange}
              className="border-b border-gray-300 focus:outline-none focus:border-gray-600 py-2 text-[15px]"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="border-b border-gray-300 focus:outline-none focus:border-gray-600 py-2 text-[15px]"
            />

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handleLogin}
                className="bg-red-500 text-white font-medium px-8 py-3 rounded-md hover:bg-red-600 transition"
              >
                Log In
              </button>

              <Link
                href="/forgetpassword"
                className="text-gray-900 hover:underline text-sm"
              >
                Forget Password?
              </Link>
            </div>

            {/* Google Login Button */}
            <button className="w-full border border-gray-400 text-gray-800 font-medium py-2 rounded-md hover:bg-gray-100">
              Sign up with Google
            </button>

            <p className="text-center text-[15px] mt-4">
              Don’t have an account?{" "}
              <a href="/Signup" className="text-red-500 underline font-medium">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-[1200px] mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
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

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</li>
              <li>wazeemaamir145@gmail.com</li>
              <li>+923702440409</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Account & Offers</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Save $3 with App (New User Only)</li>
              <li>Get 10% off your first order</li>
            </ul>
          </div>

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
          </div>
        </div>

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

        <div className="bg-gray-900 py-4 text-center text-gray-400 text-sm">
          &copy; Rimel 2022. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
