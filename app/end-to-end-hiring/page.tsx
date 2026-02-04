"use client";
import Image from "next/image";
import Link from "next/link";
export default function endToEnd() {
  return (
    <>
    <section className="bg-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
          End-to-End Hiring (Full Cycle Recruitment)
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
            End-to-End Hiring (Full Cycle Recruitment)
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
           Our End-to-End Hiring service is a comprehensive recruitment solution designed to manage the complete hiring lifecycle, from workforce planning to candidate onboarding. We act as a strategic recruitment partner, ensuring that every hiring decision aligns with the client’s business goals, culture, and long-term growth plans.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
          The process begins with an in-depth requirement analysis, where we understand the role objectives, skill requirements, experience levels, salary benchmarks, and organizational expectations. Based on this, we design precise job descriptions and define the ideal candidate profile. Our sourcing strategy uses a multi-channel approach, including job portals, internal databases, referrals, social media platforms, and targeted headhunting.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">We conduct initial screening, technical and behavioral assessments, and interview coordination to ensure only the most suitable candidates move forward. Our recruitment team focuses not only on qualifications but also on cultural fit, retention potential, and career alignment. We manage offer negotiations, documentation, and pre-joining engagement to reduce dropouts.</p>

          <p className="mt-4 text-gray-600 leading-relaxed">Post-selection, we support onboarding coordination and follow-ups to ensure smooth integration into the organization. Our End-to-End Hiring model helps organizations reduce time-to-hire, improve hiring quality, and optimize recruitment costs while maintaining compliance and confidentiality. This service is ideal for startups, SMEs, and large enterprises seeking a reliable and scalable recruitment partner.</p>

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
