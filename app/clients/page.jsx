import Image from "next/image";

const clients = [
  { name: "Client One", logo: "/logo.jpeg" },
  { name: "Client Two", logo: "/logo.jpeg" },
  { name: "Client Three", logo: "/logo.jpeg" },
  { name: "Client Four", logo: "/logo.jpeg" },
  { name: "Client Five", logo: "/logo.jpeg" },
  { name: "Client Six", logo: "/logo.jpeg" },
];

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Valued Clients</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            We are proud to partner with leading institutions across various industries, providing them with premium uniform solutions.
          </p>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-900">Trusted by Industry Leaders</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="group border rounded-xl p-8 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 bg-gray-50"
            >
              <div className="relative w-32 h-32 mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-gray-800 text-center">{client.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}