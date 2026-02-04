"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (

    <>

    <section className="bg-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            About us
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
            About JMD Consultancy
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
           JMD Consultancy is a trusted HR recruitment and manpower solutions firm committed to connecting the right talent with the right opportunities. Established with the vision of simplifying hiring for organizations and creating meaningful careers for candidates, we act as a strategic HR partner for businesses across industries. Our focus is not just recruitment, but building long-term workforce solutions that support organizational growth and operational success.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
          At JMD Consultancy, we understand that people are the most valuable asset of any organization. With this belief at our core, we provide end-to-end recruitment and manpower services tailored to meet the dynamic needs of today’s competitive market. From startups and SMEs to large enterprises, we support our clients with reliable, scalable, and cost-effective HR solutions.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our expertise spans across permanent hiring, contract staffing, temporary manpower, bulk and mass hiring, campus recruitment, internships, and pan-India recruitment. We work closely with clients to understand their business goals, company culture, and role requirements. This enables us to deliver candidates who are not only technically skilled but also aligned with organizational values.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
          What sets JMD Consultancy apart is our process-driven approach and commitment to quality. Our recruitment methodology includes detailed job analysis, candidate screening, skill assessment, background verification coordination, and onboarding support. By leveraging multiple sourcing channels such as databases, referrals, digital platforms, and targeted searches, we ensure timely delivery without compromising on quality.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
           We also provide HR process outsourcing, payroll outsourcing, and third-party payroll solutions, allowing organizations to focus on their core business while we manage critical HR operations. Our manpower solutions are designed to offer flexibility, compliance, and workforce stability, especially in industries with fluctuating staffing needs.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
           For candidates, JMD Consultancy serves as a career partner. We guide job seekers with the right opportunities based on their skills, experience, and aspirations. Our transparent and ethical practices ensure a positive experience for both freshers and experienced professionals.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
          With a strong presence and pan-India hiring capability, we cater to diverse sectors including manufacturing, IT, retail, logistics, healthcare, BFSI, education, and service industries. Our growing network of clients and candidates is a testament to our reliability, professionalism, and results-oriented approach.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
          At JMD Consultancy, our mission is simple: to bridge the gap between talent and opportunity with integrity, efficiency, and excellence. We believe in building lasting relationships based on trust, performance, and mutual growth. As the workforce landscape continues to evolve, we remain committed to delivering innovative HR and manpower solutions that drive success for our clients and candidates alike.
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
