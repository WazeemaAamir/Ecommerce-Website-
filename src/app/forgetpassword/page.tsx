"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ForgetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      setError("⚠️ Please fill all fields.");
    } else if (newPassword !== confirmPassword) {
      setError("❌ Passwords do not match!");
    } else {
      setError("");
      setSuccess(true);
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      {/* 🔹 Topbar */}
      <div className="w-full bg-gray-900 text-white py-2 px-4 flex justify-center items-center">
        <div className="flex flex-wrap justify-center items-center gap-4 text-center">
          <p className="text-[14px] leading-[21px] font-[400]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a href="#" className="text-[14px] font-[600] underline">
            ShopNow
          </a>
        </div>
      </div>

      {/* 🔹 Header */}
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

      {/* 🔹 Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 gap-10">
        {/* Left Image */}
        <div className="relative w-full md:w-[50%] h-[300px] md:h-[600px]">
          <Image
            src="/Side Image.png"
            alt="Reset Password"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-[40%] max-w-md">
          <h2 className="text-[32px] font-semibold mb-2 text-gray-900">
            Reset Password
          </h2>
          <p className="text-gray-600 mb-6 text-[16px]">
            Enter your new password below
          </p>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          {success && (
            <p className="text-green-600 text-sm mb-2 font-medium">
              ✅ Password reset successfully!
            </p>
          )}

          <form onSubmit={handleReset} className="space-y-4">
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-600 py-2 text-[15px]"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-600 py-2 text-[15px]"
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition font-medium"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>

      {/* 🔹 Footer */}
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
