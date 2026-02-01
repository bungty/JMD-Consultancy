import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo + Tagline */}
        <div className="flex items-center gap-3">
          <Image src="/logo.jpeg" alt="Medimesh Logo" width={60} height={60} />
          <div>
            <h1 className="font-bold text-lg">MEDIMESH</h1>
            <p className="text-sm text-gray-500">
              A Complete Solution for All Type of Uniforms
            </p>
          </div>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-6 font-medium text-sm">
          <Link href="#">HOME</Link>
          <Link href="#">ABOUT US</Link>
          <Link href="#">CLIENTS</Link>
          <Link href="#">CONTACT US</Link>
        </nav>

        {/* Button */}
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-md font-semibold text-sm">
          Get A Quote
        </button>
      </div>

      {/* Bottom Category Bar */}
      <div className="bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto flex justify-between text-sm font-semibold">
          {[
            "SCHOOLS UNIFORMS",
            "HOSPITAL UNIFORMS",
            "HOTEL UNIFORMS",
            "CORPORATE UNIFORMS",
            "INDUSTRIAL UNIFORMS",
            "DEFENCE UNIFORMS",
          ].map((item, i) => (
            <div
              key={i}
              className="px-5 py-3 border-r border-white/20 hover:bg-indigo-800 cursor-pointer transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
