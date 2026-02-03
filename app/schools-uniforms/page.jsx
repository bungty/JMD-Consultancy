import Image from "next/image";
import Link from "next/link";

export default function SchoolsUniformsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Schools Uniforms</h1>
          <p className="text-lg text-gray-200">
            High-quality uniforms for schools with comfort, durability, and style.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6">Our School Uniform Collections</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example Uniform Card */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
            <Image
              src="/slider1.webp"
              alt="School Uniform 1"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Boys Uniform</h3>
              <p className="text-gray-600">
                Comfortable and durable uniforms suitable for all school activities.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
            <Image
              src="/school-uniform2.jpeg"
              alt="School Uniform 2"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Girls Uniform</h3>
              <p className="text-gray-600">
                Stylish, comfortable uniforms designed for young students.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
            <Image
              src="/school-uniform3.jpeg"
              alt="School Uniform 3"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Sports Uniforms</h3>
              <p className="text-gray-600">
                Breathable and flexible uniforms for school sports and activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-400 text-black py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to order school uniforms?</h2>
        <p className="mb-6">Contact us today for a custom quote tailored to your school’s needs.</p>
        <Link
          href="/contact-us"
          className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition"
        >
          Get a Quote
        </Link>
      </section>
    </main>
  );
}
