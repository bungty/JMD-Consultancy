"use client";

export default function Careers() {
  return (
    <main className="bg-gray-50">
      

      {/* Hero Section */}
      <section className="bg-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Careers at JMD Consultancy
          </h1>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Join our growing HR and recruitment team. Explore exciting career
            opportunities in HR, recruitment, staffing, payroll, and manpower services.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Why Work With JMD Consultancy?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-10">
            {[
              "Professional Work Environment",
              "Career Growth Opportunities",
              "Performance-Based Incentives",
              "Learning & Skill Development"
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 border p-6 rounded-xl">
                <p className="font-semibold text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Current Job Openings
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              {
                title: "HR Recruiter",
                location: "Pan India",
                type: "Full-Time",
                exp: "0–3 Years",
                desc: "Source, screen, and coordinate candidates for multiple hiring roles."
              },
              {
                title: "Talent Acquisition Executive",
                location: "Remote / India",
                type: "Full-Time",
                exp: "1–4 Years",
                desc: "Manage hiring pipelines, client coordination, and recruitment cycles."
              },
              {
                title: "HR Operations Executive",
                location: "India",
                type: "Full-Time",
                exp: "1–5 Years",
                desc: "Handle HR documentation, onboarding, payroll coordination, and compliance."
              },
              {
                title: "Business Development Executive",
                location: "India",
                type: "Full-Time",
                exp: "1–6 Years",
                desc: "Generate HR clients, manage partnerships, and grow recruitment business."
              }
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {job.title}
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  📍 {job.location} • 💼 {job.type} • 🕒 {job.exp}
                </p>

                <p className="mt-3 text-gray-600 text-sm">
                  {job.desc}
                </p>

                <a
                  href="#apply"
                  className="inline-block mt-4 text-green-700 font-semibold hover:underline"
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Apply for a Job
          </h2>

          <form className="bg-gray-50 border rounded-xl p-8 space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <input
              type="text"
              placeholder="Position Applying For"
              className="w-full border rounded-lg px-4 py-3"
              required
            />

            <textarea
              rows="4"
              placeholder="Short Profile / Experience Summary"
              className="w-full border rounded-lg px-4 py-3"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
            >
              Submit Application
            </button>

          </form>
        </div>
      </section>

    </main>
  );
}
