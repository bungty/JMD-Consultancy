"use client";

export default function Contact() {
  return (
    

       <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contact JMD Consultancy
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for HR recruitment, manpower services, staffing,
            payroll outsourcing, and hiring support across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-gray-50 p-8 rounded-xl border">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h3>

            <p className="text-gray-600 mb-4">
              JMD Consultancy is a professional HR Recruitment and Manpower
              Consultancy delivering reliable and scalable workforce solutions.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>
                📍 <strong>Pan India Recruitment Services</strong>
              </li>
              <li>
                📞 <strong>Mobile:</strong> 9654576537
              </li>
              <li>
                📧 <strong>Email:</strong> hr@jmdconsultancy.in
              </li>
              <li>
                🌐 <strong>Website:</strong> www.jmdconsultancy.in
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-50 p-8 rounded-xl border space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Send Us a Message
            </h3>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />

            <textarea
              rows="4"
              placeholder="Your Hiring Requirement / Message"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition font-semibold"
            >
              Submit Inquiry
            </button>
          </form>

        </div>
      </div>
    </section>
 
    
   
  );
}
