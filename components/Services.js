"use client";

import { Briefcase, Users, Building2, FileCheck, UserPlus, ClipboardList, GraduationCap, ShieldCheck, Wallet, Layers, Globe, Clock } from "lucide-react";

export default function Services() {

  const services = [
    {
      title: "End-to-End Hiring",
      desc: "Complete recruitment lifecycle management from requirement analysis to onboarding.",
      icon: <Briefcase />
    },
    {
      title: "HR Process Outsourcing (HRO)",
      desc: "Outsourcing daily HR operations so organizations can focus on core business.",
      icon: <ClipboardList />
    },
    {
      title: "Campus Hiring",
      desc: "Structured hiring programs for fresh graduates and entry-level talent.",
      icon: <GraduationCap />
    },
    {
      title: "Bulk / Mass Hiring",
      desc: "Large-scale recruitment solutions for high-volume manpower needs.",
      icon: <Users />
    },
    {
      title: "Temporary Staffing",
      desc: "Flexible workforce solutions for short-term and project-based requirements.",
      icon: <Clock />
    },
    {
      title: "Contract Hiring",
      desc: "Contract-based hiring of skilled and semi-skilled professionals.",
      icon: <Layers />
    },
    {
      title: "Permanent Hiring",
      desc: "Quality recruitment for long-term roles with stability and retention focus.",
      icon: <UserPlus />
    },
    {
      title: "Background Verification",
      desc: "Candidate verification services to reduce hiring risks and ensure authenticity.",
      icon: <ShieldCheck />
    },
    {
      title: "Payroll Outsourcing",
      desc: "Payroll processing, attendance coordination, and compliance support.",
      icon: <Wallet />
    },
    {
      title: "Third-Party Payroll",
      desc: "Simplified payroll and workforce management through outsourcing.",
      icon: <FileCheck />
    },
    {
      title: "Internship Programs",
      desc: "Internship hiring solutions to support skill development and workforce planning.",
      icon: <Building2 />
    },
    {
      title: "Pan India Recruitment",
      desc: "Nationwide recruitment services ensuring consistent hiring quality.",
      icon: <Globe />
    }
  ];

  return (
    <section className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our HR Recruitment & Manpower Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            End-to-end HR, staffing, recruitment, payroll, and workforce solutions across India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border rounded-2xl p-7 hover:shadow-xl transition duration-300 hover:-translate-y-1"
            >

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-yellow-100 text-blue-yellow group-hover:bg-yellow-500 group-hover:text-white transition mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-yellow-600 group-hover:text-blue-700 transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
