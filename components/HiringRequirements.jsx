"use client";

import { hiringData } from "./data";

export default function HiringRequirements() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Hiring Requirements</h2>
          <p className="text-gray-600 mt-2">
            We provide recruitment solutions across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hiringData.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 my-2">
                {item.description}
              </p>
              <ul className="text-sm">
                {item.roles.map((role, i) => (
                  <li key={i}>✔ {role}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}