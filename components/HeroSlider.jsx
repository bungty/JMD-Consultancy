"use client";


import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-green-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Reliable HR Recruitment & Manpower Services Across India
          </h1>

          <p className="mt-4 text-lg text-blue-100">
            JMD Consultancy delivers professional, scalable, and result-driven
            recruitment, staffing, payroll outsourcing, and manpower solutions
            for organizations nationwide.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get Hiring Support
            </Link>

            <Link
              href="/services"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              View Services
            </Link>
          </div>

          {/* Quick Highlights */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-blue-100">
            <span>✔ End-to-End Hiring</span>
            <span>✔ Pan India Recruitment</span>
            <span>✔ Bulk & Mass Hiring</span>
            <span>✔ Payroll Outsourcing</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <Image
            src="/HR Recruitment.webp"
            alt="HR Recruitment"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
