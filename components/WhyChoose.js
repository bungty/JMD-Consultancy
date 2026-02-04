"use client";

import { ShieldCheck, Zap, Wallet, Globe, HeartHandshake, Users, TrendingUp, Target } from "lucide-react";

export default function WhyChoose() {

  const features = [
    {
      title: "Professional & Ethical HR Practices",
      desc: "We follow transparent, compliant, and ethical hiring standards.",
      icon: <ShieldCheck />
    },
    {
      title: "Fast Turnaround & Quality Hiring",
      desc: "Quick hiring process without compromising on candidate quality.",
      icon: <Zap />
    },
    {
      title: "Cost-Effective Manpower Solutions",
      desc: "Affordable HR services optimized to reduce operational costs.",
      icon: <Wallet />
    },
    {
      title: "Pan-India Recruitment Capability",
      desc: "Nationwide hiring reach ensuring consistent talent supply.",
      icon: <Globe />
    },
    {
      title: "Client-Centric Approach",
      desc: "Customized hiring solutions based on unique client requirements.",
      icon: <HeartHandshake />
    },
    {
      title: "Experienced HR Professionals",
      desc: "Dedicated recruiters with industry expertise and proven results.",
      icon: <Users />
    },
    {
      title: "Scalable Workforce Support",
      desc: "Flexible staffing solutions to support business growth.",
      icon: <TrendingUp />
    },
    {
      title: "Result-Oriented Hiring Strategy",
      desc: "Focused on performance, retention, and long-term success.",
      icon: <Target />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose JMD Consultancy
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We deliver professional, ethical, fast, and cost-effective HR recruitment
            and manpower solutions trusted by organizations across India.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white border rounded-2xl p-7 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-yellow-100 text-yellow-700 group-hover:bg-yellow-700 group-hover:text-white transition mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-yellow-700 transition">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
