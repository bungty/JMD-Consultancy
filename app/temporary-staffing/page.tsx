"use client";
import Image from "next/image";
import Link from "next/link";
export default function HrProcess() {
  return (
    <>
    <section className="bg-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
         Temporary Staffing
          </h1>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Join our growing HR and recruitment team. Explore exciting career
            opportunities in HR, recruitment, staffing, payroll, and manpower services.
          </p>
        </div>
      </section>
       <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-1 gap-12 items-center">
        
        {/* Left Image */}
        {/* <div>
          <Image
            src="/HR Recruitment.webp"
            alt="About JMD Consultancy"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div> */}

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-600">
            Temporary Staffing
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
          Our Temporary Staffing service provides organizations with flexible workforce solutions to manage short-term, project-based, or seasonal requirements. We supply skilled and semi-skilled manpower for fixed durations while handling all employment-related responsibilities.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
           Under this model, employees are on our payroll, and we manage recruitment, onboarding, attendance, payroll processing, statutory compliance, and exit formalities. Clients benefit from workforce flexibility without long-term employment obligations.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Temporary staffing helps organizations control costs, manage workload fluctuations, and respond quickly to business demands. This solution is widely used in manufacturing, retail, events, IT support, and administrative functions. We ensure timely deployment, replacement support, and compliance with labor laws.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our temporary staffing services reduce HR complexity and allow organizations to focus on productivity and performance, making it a cost-effective and risk-managed workforce solution.
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
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
            >
              Contact Our Team
            </Link>
          </div>
        </div>

      </div>
    </section>
      </>
   
  );
}
