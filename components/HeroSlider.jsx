"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    title: "Premium Uniforms for Every Industry",
    desc: "High-quality school, hospital, hotel and corporate uniforms.",
    image: "/slider1.webp",
  },
  {
    title: "Trusted Uniform Manufacturing Partner",
    desc: "Custom tailored uniforms with best fabric quality.",
    image: "/slider2.webp",
  },
  {
    title: "Complete Uniform Solutions",
    desc: "Serving schools, hospitals, hotels and industries.",
    image: "/agarbatti.png",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[520px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          <div className="w-full h-full bg-black/50 flex items-center">
            <div className="max-w-7xl mx-auto px-6 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="max-w-xl mb-6 text-lg">{slide.desc}</p>

              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold transition">
                Get A Quote
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-yellow-400" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
