"use client";
import Image from "next/image";
import Link from "next/link";
export default function HrProcess() {
  return (
    <>
    <section className="bg-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
          HR Process Outsourcing (HRPO)
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
          HR Process Outsourcing (HRPO)
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our HR Process Outsourcing (HRPO) service enables organizations to delegate critical HR functions to experienced professionals, allowing them to focus on core business operations. We provide customized HR solutions that enhance efficiency, compliance, and employee experience across the organization.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
           HRPO covers a wide range of functions, including recruitment support, employee onboarding, attendance management, payroll coordination, statutory compliance, performance management assistance, and HR documentation. We design HR processes that are structured, scalable, and aligned with labor laws and organizational policies.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            By outsourcing HR operations, companies benefit from reduced administrative burden, lower operational costs, and access to expert HR professionals without expanding internal teams. Our approach ensures consistency, transparency, and timely execution of HR activities. We also support HR audits, policy drafting, employee handbooks, and grievance handling frameworks.</p>

            <p className="mt-4 text-gray-600 leading-relaxed">
          Our HRPO solutions are flexible and can be tailored for startups, growing organizations, or enterprises looking to optimize HR functions. Whether partial outsourcing or complete HR management, we act as an extended HR arm of the organization, ensuring smooth employee lifecycle management. This service improves productivity, minimizes compliance risks, and strengthens overall HR governance.
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
