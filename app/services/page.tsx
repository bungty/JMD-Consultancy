"use client";

import Servicess from "@/components/Services.js";

export default function Services() {


  return (
    <main>
      <section className="bg-yellow-500 text-white py-20">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Our Services
                </h1>
                <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
                  Join our growing HR and recruitment team. Explore exciting career
                  opportunities in HR, recruitment, staffing, payroll, and manpower services.
                </p>
              </div>
            </section>
      <Servicess/>
    </main>
   
  );
}
