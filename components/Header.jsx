"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-xl font-bold text-green-700">
          JMD Consultancy
          <p className="text-xs text-gray-500 font-normal">
            HR Recruitment & Manpower Services
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-700 transition">Home</Link>
          <Link href="/services" className="hover:text-blue-700 transition">Services</Link>
          <Link href="/about" className="hover:text-blue-700 transition">About Us</Link>
          <Link href="/careers" className="hover:text-blue-700 transition">Careers</Link>
          <Link href="/contact" className="hover:text-blue-700 transition">Contact</Link>
        </nav>

        {/* Desktop Call Button */}
        <div className="hidden md:block">
          <a
            href="tel:9654576537"
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Call: 9654576537
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8"
        >
          <span className={`block absolute h-0.5 w-8 bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 top-3.5" : "top-2"}`} />
          <span className={`block absolute h-0.5 w-8 bg-gray-800 transition-all duration-300 ${menuOpen ? "opacity-0" : "top-4"}`} />
          <span className={`block absolute h-0.5 w-8 bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 top-3.5" : "top-6"}`} />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t px-6 py-4 space-y-3 text-gray-700 font-medium">
          <Link onClick={() => setMenuOpen(false)} href="/" className="block hover:text-blue-700 transition">Home</Link>
          <Link onClick={() => setMenuOpen(false)} href="/services" className="block hover:text-blue-700 transition">Services</Link>
          <Link onClick={() => setMenuOpen(false)} href="/about" className="block hover:text-blue-700 transition">About Us</Link>
          <Link onClick={() => setMenuOpen(false)} href="/careers" className="block hover:text-blue-700 transition">Careers</Link>
          <Link onClick={() => setMenuOpen(false)} href="/contact" className="block hover:text-blue-700 transition">Contact</Link>

          {/* Mobile Call Button */}
          <a
            href="tel:9654576537"
            className="block text-center bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition mt-3"
          >
            Call: 9654576537
          </a>
        </div>
      </div>
    </header>
  );
}
