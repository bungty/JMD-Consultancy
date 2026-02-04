"use client";

import { Briefcase, Users, Building2, FileCheck, UserPlus, ClipboardList, GraduationCap, ShieldCheck, Wallet, Layers, Globe, Clock } from "lucide-react";
import Link from "next/link";

export default function Services() {

  const services = [
    {
      title: "End-to-End Hiring",
      desc: "Complete recruitment lifecycle management from requirement analysis to onboarding.",
      icon: <Briefcase />,
      image: "https://joingenius.com/wp-content/uploads/2025/02/07-Hiring-Process-Flowchart-Shopify.png",
      link: "/end-to-end-hiring"
    },
    {
      title: "HR Process Outsourcing (HRO)",
      desc: "Outsourcing daily HR operations so organizations can focus on core business.",
      icon: <ClipboardList />,
      image: "https://c8.alamy.com/comp/2SA9ETW/process-outsourcing-vector-company-hr-office-computer-technology-network-process-outsourcing-character-people-flat-cartoon-illustration-process-outsourcing-vector-2SA9ETW.jpg",
      link: "/hr-process-outsourcing"
    },
    {
      title: "Campus Hiring",
      desc: "Structured hiring programs for fresh graduates and entry-level talent.",
      icon: <GraduationCap />,
      image: "https://www.recruiter.com/recruiting/wp-content/uploads/2022/07/university-to-find-top-talent.jpg",
      link: "/campus-hiring"
    },
    {
      title: "Bulk / Mass Hiring",
      desc: "Large-scale recruitment solutions for high-volume manpower needs.",
      icon: <Users />,
      image: "https://www.ismartrecruit.com/upload/blog/main_image/image_(27).webp",
      link: "/bulk-mass-hiring"
    },
    {
      title: "Temporary Staffing",
      desc: "Flexible workforce solutions for short-term and project-based requirements.",
      icon: <Clock />,
      image: "https://osg.ca/wp-content/uploads/2018/09/Temporary-Workers.png",
      link: "/temporary-staffing"
    },
    {
      title: "Contract Hiring",
      desc: "Contract-based hiring of skilled and semi-skilled professionals.",
      icon: <Layers />,
      image: "https://images.business.com/app/uploads/2014/10/10124743/contractor-vs-employees-1024x739.png",
      link: "/contract-hiring"
    },
    {
      title: "Permanent Hiring",
      desc: "Quality recruitment for long-term roles with stability and retention focus.",
      icon: <UserPlus />,
      image: "https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/64d4ef71db3beb098e1eab9e_A01.png",
      link: "/permanent-hiring"
    },
    {
      title: "Background Verification",
      desc: "Candidate verification services to reduce hiring risks and ensure authenticity.",
      icon: <ShieldCheck />,
      image: "https://thumbs.dreamstime.com/b/ome-line-%D1%80%D0%B0%D0%B7%D0%BD%D0%BE%D0%B5-185536470.jpg" , // verification/search theme
      link: "/background-verification"
    },
    {
      title: "Payroll Outsourcing",
      desc: "Payroll processing, attendance coordination, and compliance support.",
      icon: <Wallet />,
      image: "https://thumbs.dreamstime.com/b/company-transfers-recruitment-processes-to-external-service-provider-vector-illustration-flat-clip-art-rpo-recruitment-process-272644997.jpg",
      link: "/payroll-outsourcing" // outsourcing related
    },
    {
      title: "Third-Party Payroll",
      desc: "Simplified payroll and workforce management through outsourcing.",
      icon: <FileCheck />,
      image: "https://thumbs.dreamstime.com/b/consulting-services-concept-hr-talent-management-payroll-outsourcing-finance-accounting-options-389884858.jpg",  // payroll outsourcing style
      link: "/third-party-payroll"
    },
    {
      title: "Internship Programs",
      desc: "Internship hiring solutions to support skill development and workforce planning.",
      icon: <Building2 />,
      image: "https://images.wsj.net/im-00786799?width=700&height=466",
      link: "/internship-programs"
    },
    {
      title: "Pan India Recruitment",
      desc: "Nationwide recruitment services ensuring consistent hiring quality.",
      icon: <Globe />,
      image: "https://thumbs.dreamstime.com/b/recruitment-agency-group-job-interviews-vector-recruitment-agency-group-job-interviews-hr-agency-concept-staff-recruitment-134093962.jpg",
      link: "/pan-india-recruitment"
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
              className="group bg-white border rounded-2xl p-7 hover:shadow-xl transition duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image (replaces icon for all services now) */}
              <div className="mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain rounded-lg mx-auto"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-yellow-600 group-hover:text-blue-700 transition text-center md:text-left">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-gray-600 text-sm leading-relaxed flex-grow text-center md:text-left">
                {service.desc}
              </p>
              
              {/* Link */}
              <div className="mt-4">
                <Link
                  href={service.link}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}