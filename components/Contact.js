"use client";
import { useState } from "react";

export default function JobApply() {
  const [file, setFile] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Apply for Job - JMD Consultancy
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Submit your details and resume. Our HR team will contact you shortly
            for suitable job opportunities across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Info */}
          <div className="bg-gray-50 p-8 rounded-xl border">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Why Apply With Us?
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Pan India Job Opportunities</li>
              <li>✔ Fast Hiring Process</li>
              <li>✔ Verified Companies</li>
              <li>✔ Free Placement Support</li>
            </ul>
          </div>

          {/* Job Apply Form */}
          <form className="bg-gray-50 p-8 rounded-xl border space-y-4">

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Job Application Form
            </h3>

            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />

            {/* Phone */}
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />

            {/* Job Role */}
            <input
              type="text"
              placeholder="Position Applying For"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />

            {/* Experience */}
            <input
              type="text"
              placeholder="Experience (e.g. 2 Years)"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            {/* Location */}
            <input
              type="text"
              placeholder="Preferred Job Location"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            {/* Resume Upload */}
            <div>
              <label className="text-sm text-gray-600">Upload Resume</label>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full border rounded-lg px-4 py-2 mt-1"
                required
              />
            </div>

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Additional Message (Optional)"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition font-semibold"
            >
              Submit Application
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}