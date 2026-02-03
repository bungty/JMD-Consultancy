"use client";

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our HR Recruitment & Manpower Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end HR solutions including recruitment, staffing,
            payroll outsourcing, and workforce management across India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "End-to-End Hiring",
              desc: "Complete recruitment lifecycle management from requirement analysis to onboarding."
            },
            {
              title: "HR Process Outsourcing (HRO)",
              desc: "Outsourcing daily HR operations so organizations can focus on core business."
            },
            {
              title: "Campus Hiring",
              desc: "Structured hiring programs for fresh graduates and entry-level talent."
            },
            {
              title: "Bulk / Mass Hiring",
              desc: "Large-scale recruitment solutions for high-volume manpower needs."
            },
            {
              title: "Temporary Staffing",
              desc: "Flexible workforce solutions for short-term and project-based requirements."
            },
            {
              title: "Contract Hiring",
              desc: "Contract-based hiring of skilled and semi-skilled professionals."
            },
            {
              title: "Permanent Hiring",
              desc: "Quality recruitment for long-term roles with stability and retention focus."
            },
            {
              title: "Background Verification",
              desc: "Candidate verification services to reduce hiring risks and ensure authenticity."
            },
            {
              title: "Payroll Outsourcing",
              desc: "Payroll processing, attendance coordination, and compliance support."
            },
            {
              title: "Third-Party Payroll",
              desc: "Simplified payroll and workforce management through outsourcing."
            },
            {
              title: "Internship Programs",
              desc: "Internship hiring solutions to support skill development and workforce planning."
            },
            {
              title: "Pan India Recruitment",
              desc: "Nationwide recruitment services ensuring consistent hiring quality."
            }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
