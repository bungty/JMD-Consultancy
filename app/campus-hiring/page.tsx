"use client";
import Image from "next/image";
import Link from "next/link";
export default function HrProcess() {
  return (
    <>
    <section className="bg-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
          Campus Hiring
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
           Campus Hiring
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
           Our Campus Hiring service helps organizations identify and nurture young talent directly from educational institutions. We bridge the gap between academia and industry by delivering structured, efficient, and scalable campus recruitment solutions.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
           We collaborate with colleges, universities, and training institutes to plan hiring drives aligned with client requirements. The process includes candidate sourcing, pre-placement talks, aptitude and technical assessments, group discussions, interviews, and final selections. We ensure candidates are evaluated not only on academic performance but also on attitude, learning ability, and long-term potential.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
Campus hiring is ideal for organizations looking to build a strong talent pipeline, reduce hiring costs, and develop future-ready professionals. Our team manages end-to-end coordination, including scheduling, logistics, candidate communication, and offer management. We also support internship-to-placement programs to improve retention and early engagement.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              By hiring fresh graduates, companies gain adaptable, motivated talent that can be trained to match organizational culture and processes. Our campus hiring strategy focuses on quality intake, employer branding, and seamless execution, helping organizations strengthen their workforce with skilled and enthusiastic young professionals.
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
