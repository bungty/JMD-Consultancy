"use client";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div>
          <Image
            src="/HR Recruitment.webp"
            alt="About JMD Consultancy"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About JMD Consultancy
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            JMD Consultancy is a professional HR Recruitment and Manpower
            Consultancy delivering reliable, scalable, and result-oriented
            human resource solutions across India. We support organizations
            with end-to-end hiring, manpower deployment, HR outsourcing,
            payroll services, and workforce management.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our mission is to bridge the gap between employers and talent by
            providing quality hiring, fast turnaround, ethical HR practices,
            and cost-effective manpower solutions tailored to business needs.
          </p>

          {/* Highlights */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700 font-medium">
            <div>✔ Pan India Recruitment</div>
            <div>✔ Professional HR Experts</div>
            <div>✔ Fast & Quality Hiring</div>
            <div>✔ Client-Centric Approach</div>
          </div>

          {/* Button */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
            >
              Contact Our Team
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
