"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Countdown Timer Component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const targetDate = new Date("2025-11-05T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className="flex gap-6 text-black text-center">
      <div>
        <p className="text-lg font-semibold">Days</p>
        <p className="text-2xl font-bold">{timeLeft.days}</p>
      </div>
      <div>
        <p className="text-lg font-semibold">Hours</p>
        <p className="text-2xl font-bold">{timeLeft.hours}</p>
      </div>
      <div>
        <p className="text-lg font-semibold">Minutes</p>
        <p className="text-2xl font-bold">{timeLeft.minutes}</p>
      </div>
      <div>
        <p className="text-lg font-semibold">Seconds</p>
        <p className="text-2xl font-bold">{timeLeft.seconds}</p>
      </div>
    </div>
  );
}

// ✅ Only this is exported
export default function TopbarHeader() {
  const categories = ["Woman’s Fashion","Men’s Fashion","Electronics","Home & Lifestyle","Medicine","Sports & Outdoor","Baby’s & Toys","Groceries & Pets","Health & Beauty"];
  
  const products = [
    { name: "HAVIT HV-G92 Gamepad", price: "$120", discount: "-40%", rating: "(88)", img: "/Frame1.png" },
    { name: "AK-900 Wired Keyboard", price: "$160", discount: "-35%", rating: "(75)", img: "/Frame2.png" },
    { name: "IPS LCD Gaming Monitor", price: "$960", discount: "-30%", rating: "(99)", img: "/Frame3.png" },
    { name: "Wireless Earbuds", price: "$80", discount: "-10%", rating: "(88)", img: "/Frame4.jpeg" },
    { name: "Wireless Speakers", price: "$80", discount: "-10%", rating: "(88)", img: "/Frame10.png" },
    { name: "Wireless Earbuds", price: "$80", discount: "-10%", rating: "(88)", img: "/Frame11.png" },
  ];

  const bestSelling = [
    { name: "The North Coat", price: "$260", discount: "$160", rating: "(65)", img: "/Product1.png" },
    { name: "Gucci Duffle Bag", price: "$360", discount: "$170", rating: "(65)", img: "/Product2.png" },
    { name: "RGB Liquid CPU Cooler", price: "$960", discount: "$360", rating: "(65)", img: "/Product3.png" },
    { name: "Small Bookshelf", price: "$1160", discount: "$360", rating: "(65)", img: "/Product4.png" },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      {/* 🔷 Topbar */}
      <div className="w-full bg-gray-900 text-white py-2 px-4 flex justify-center items-center">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <p className="text-[14px] leading-[21px] font-[400] text-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
        </div>
      </div>

      {/* 🔶 Header */}
<header className="w-full bg-white text-gray-900 shadow-sm py-3 px-6 flex flex-wrap justify-between items-center">
  <h1 className="text-xl font-bold ml-4 md:ml-8">Exclusive</h1>
  <nav className="hidden md:flex space-x-8 text-[16px] font-medium">
    <a href="contact" className="hover:text-gray-600 transition">Contact</a>
    <a href="about" className="hover:text-gray-600 transition">About</a>
    <a href="signup" className="hover:text-gray-600 transition">SignUp</a>
  </nav>
  <div className="flex items-center space-x-4 mt-2 md:mt-0">
    {/* Search Input */}
    <div className="relative flex items-center w-full sm:w-auto">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-full pl-4 pr-10 py-1.5 text-sm w-full sm:w-[250px] focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

    {/* Wishlist / Heart Icon */}
    <button className="p-2 hover:text-gray-600 transition">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z"/>
      </svg>
    </button>

    {/* Shopping Cart Icon */}
    <button className="p-2 hover:text-gray-600 transition">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9"/>
      </svg>
    </button>

    
  </div>
</header>

      
{/* 🔸 Categories Section (Responsive) */}
<div className="ml-4 md:ml-8 mt-4 flex flex-col md:flex-row gap-4 items-center md:items-start">
  {/* Categories List */}
  <div className="flex flex-col gap-4 w-full md:w-[217px]">
    {categories.map((category) => (
      <a
        key={category}
        href="#"
        className="flex justify-between items-center text-gray-900 hover:text-gray-600 font-medium text-sm md:text-base"
      >
        {category}
      </a>
    ))}
  </div>

  {/* Divider (Hide on Mobile) */}
  <div className="hidden md:block w-[1px] h-[384px] bg-gray-400 opacity-30 mt-4"></div>

  {/* Banner Image (Responsive) */}
  <div className="w-full md:w-auto flex justify-center md:justify-start mt-4 md:mt-0">
    <Image
      src="/Frame.png"
      alt="Categories Banner"
      width={892}
      height={384}
      className="object-cover w-[90%] sm:w-[95%] md:w-[892px] h-auto rounded-lg"
    />
  </div>
</div>

<div className="mt-12 px-4 sm:px-8">
  <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
    <div className="flex items-center mb-4 sm:mb-0">
      <div className="w-5 h-8 bg-red-900 rounded-[2px] mr-3"></div>
      <h2 className="text-2xl text-red-900 mr-2">Today’s</h2>
      <p className="text-2xl text-black font-bold">Flash Sales</p>
    </div>

    <CountdownTimer/>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product, index) => (
      <div key={index} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition">
        <div className="w-full h-40 mb-4 flex justify-center items-center">
          <Image src={product.img} alt={product.name} width={200} height={160} className="object-contain"/>
        </div>
        <h3 className="text-lg font-semibold text-black text-center">{product.name}</h3>

        <div className="flex items-center gap-2">
          <span className="text-red-600 font-bold">{product.discount}</span>
          <span className="text-gray-500 line-through">{product.price}</span>
        </div>

        <p className="text-gray-500 text-sm">{product.rating}</p>
        <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition">
          Add To Cart
        </button>
      </div>
    ))}
  </div>

  <div className="flex flex-col items-center mt-10">
    <button className="bg-red-600 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-red-700 transition">
      View All Products
    </button>

    <div className="mt-8 w-full border-b border-gray-300"></div>
  </div>
</div>

      {/* 🔥 This Month - Best Selling Products Section */}
      <div className="mt-12 px-8">
        <div className="flex justify-between items-center mb-6 flex-wrap">
          <div className="flex items-center">
            <div className="w-5 h-8 bg-red-900 rounded-[2px] mr-3"></div>
            <h2 className="text-2xl text-red-900 mr-2">This Month</h2>
            <p className="text-2xl text-black font-bold">Best Selling Products</p>
          </div>
          <button className="bg-gray-900 text-white py-2 px-6 rounded-md hover:bg-gray-800 transition">
            View All
          </button>
        </div>

        <div className="w-full h-[1px] bg-gray-300 mb-6"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSelling.map((product, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
              <div className="w-full h-40 mb-4 flex justify-center items-center">
                <Image src={product.img} alt={product.name} width={200} height={160} className="object-contain"/>
              </div>
              <h3 className="text-lg text-black font-semibold text-center">{product.name}</h3>
              <p className="text-red-500 font-bold">{product.discount}</p>
              <p className="text-gray-800 font-medium">{product.price}</p>
              <p className="text-gray-500 text-sm">{product.rating}</p>
              <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition">
                Add To Cart
              </button>
            </div>
          ))}
        </div>

</div>

{/* Add this below */}
<div className="mt-12 w-full flex justify-center">
  <Image
    src="/Frame5.png"
    alt="Promotional Banner"
    width={1170}
    height={400}
    className="object-cover rounded-lg"
  />
</div>

{/* Our Products - Product Cards Section */}
<div className="mt-8 px-8">
  <div className="mt-12 px-8">
  {/* Heading + Subheading with Red Box */}
  <div className="mb-6 flex flex-col">
    <div className="flex items-center gap-3">
      {/* Red Box next to text */}
      <div className="w-5 h-8 bg-red-900 rounded-[2px]"></div>
      <h2 className="text-2xl text-red-900 font-bold">Our Products</h2>
    </div>
    <p className="text-gray-800 text-lg mt-1">Explore Our Products</p>
  </div>

  {/* Product Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-black gap-6">
    {[
      { name: "CANON EOS DSLR Camera", price: "$700", rating: "(325)", img: "/Product6.png", tag: "" },
      { name: "ASUS FHD Gaming Laptop", price: "$500", rating: "(145)", img: "/Product7.png", tag: "" },
      { name: "Kids Electric Car", price: "$1160", rating: "(35)", img: "/Product8.png", tag: "" },
      { name: "Jr. Zoom Soccer Cleats", price: "$660", rating: "(55)", img: "/Product9.png", tag: "" },
      { name: "GP11 Shooter USB Gamepad", price: "$660", rating: "(55)", img: "/Product10.png", tag: "" },
    ].map((product, index) => (
      <div
        key={index}
        className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center relative"
      >
        {/* Tag Badge */}
        {product.tag && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            {product.tag}
          </span>
        )}

        {/* Product Image */}
        <div className="w-full h-40 mb-4 flex justify-center items-center">
          <Image
            src={product.img}
            alt={product.name}
            width={200}
            height={160}
            className="object-contain"
          />
        </div>

        {/* Product Info */}
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-800 font-medium">{product.price}</p>
        <p className="text-gray-500 text-sm">{product.rating}</p>

        {/* Add To Cart Button */}
        <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition">
          Add To Cart
        </button>
      </div>
    ))}
  </div>

 {/* View All Button */}
        <div className="flex flex-col items-center mt-10">
          <button className="bg-red-600 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-red-700 transition">
            View All Products
          </button>
          <div className="mt-8 w-[1170px] h-[1px] bg-gray-300"></div>
        </div>
      </div>

{/* Featured / New Arrival / Women’s Collections Section */}
<div className="mt-12 px-8">
  {/* Section Heading */}
  <div className="flex items-center mb-6">
    <div className="w-5 h-8 bg-red-600 rounded mr-3"></div>
    <h2 className="text-lg text-red-700 mr-2 font-medium">Featured</h2>
    <h1 className="text-3xl text-black font-bold">New Arrival</h1>
  </div>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* PlayStation 5 */}
    <div className="flex flex-col items-center">
      <Image
        src="/Frame6.png"
        alt="PlayStation 5"
        width={600}   // slightly smaller
        height={380}  // slightly smaller
        className="object-contain rounded-lg"
      />
    </div>

    {/* Women’s Collections - slightly smaller */}
    <div className="flex flex-col items-center md:col-span-2">
      <Image
        src="/Frame7.png"
        alt="Women’s Collections"
        width={600}   // same as PS5
        height={380}  // same as PS5
        className="object-contain rounded-lg"
      />

      {/* Bottom row: Speakers + Perfume */}
      <div className="grid grid-cols-2 gap-4 mt-4 w-full">
        {/* Speakers */}
        <div className="flex flex-col items-center">
          <Image
            src="/Frame8.png"
            alt="Speakers"
            width={280}   // slightly smaller
            height={280}  // slightly smaller
            className="object-contain rounded-lg"
          />
        </div>

        {/* Perfume */}
        <div className="flex flex-col items-center">
          <Image
            src="/Frame9.png"
            alt="Perfume"
            width={280}   // slightly smaller
            height={280}  // slightly smaller
            className="object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>
 </div>
 {/* 🛒 Cart Section */}
<div className="w-full bg-white py-12 px-6 md:px-12">
  {/* Cart Table Header */}
  <div className="grid grid-cols-4 text-black text-center font-semibold border border-gray-300 py-3 rounded-t-lg">
    <p>Product</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Subtotal</p>
  </div>

  {/* Product 1 */}
  <div className="grid grid-cols-4 items-center border border-t-0 border-gray-300 p-4">
    {/* Product Info */}
    <div className="flex items-center gap-3 justify-center">
      <button className="text-red-500 hover:text-red-700">
        ✖
      </button>
      <Image
        src="/Frame3.png"
        alt="LCD Monitor"
        width={60}
        height={60}
        className="object-contain rounded"
      />
      <p className="font-medium text-gray-800">LCD Monitor</p>
    </div>

    {/* Price */}
    <p className="text-center text-gray-800 font-semibold">$650</p>

    {/* Quantity */}
    <div className="flex justify-center">
      <select className="border border-gray-300 rounded-md px-2 py-1">
        <option>01</option>
        <option>02</option>
        <option>03</option>
      </select>
    </div>

    {/* Subtotal */}
    <p className="text-center text-gray-800 font-semibold">$650</p>
  </div>

  {/* Product 2 */}
  <div className="grid grid-cols-4 items-center border border-t-0 border-gray-300 p-4 rounded-b-lg">
    <div className="flex items-center gap-3 justify-center">
      <button className="text-red-500 hover:text-red-700">
        ✖
      </button>
      <Image
        src="/Product10.png"
        alt="H1 Gamepad"
        width={60}
        height={60}
        className="object-contain rounded"
      />
      <p className="font-medium text-gray-800">H1 Gamepad</p>
    </div>

    <p className="text-center text-gray-800 font-semibold">$550</p>


    <p className="text-center text-gray-800 font-semibold">$1100</p>
  </div>

  {/* Buttons */}
  <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md">
      Apply Coupon
    </button>
    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md">
      Proceed to checkout
    </button>
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
