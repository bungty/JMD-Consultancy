"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white">
            JMD Consultancy
          </h3>
          <p className="mt-3 text-sm text-gray-400">
            Professional HR Recruitment & Manpower Consultancy delivering
            reliable, scalable, and result-oriented human resource solutions
            across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>End-to-End Hiring</li>
            <li>Bulk / Mass Hiring</li>
            <li>Temporary Staffing</li>
            <li>Payroll Outsourcing</li>
            <li>Pan India Recruitment</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Contact Us
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 Pan India Recruitment</li>
            <li>📞 9654576537</li>
            <li>📧 hr@jmdconsultancy.in</li>
            <li>🌐 www.jmdconsultancy.in</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} JMD Consultancy. All Rights Reserved.
      </div>
    </footer>
  );
}
