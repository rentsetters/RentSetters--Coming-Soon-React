import { ShieldCheck, Video, Users, FileText, Camera, ClipboardCheck } from "lucide-react";

const serviceList = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-orange-500" />,
    title: "Verified Property Listings",
  },
  {
    icon: <Video className="h-8 w-8 text-orange-500" />,
    title: "Curated Home Tours & Video Visits",
  },
  {
    icon: <Users className="h-8 w-8 text-orange-500" />,
    title: "Property Management & Tenant Coordination",
  },
  {
    icon: <FileText className="h-8 w-8 text-orange-500" />,
    title: "Tenant Screening & Legal Assistance",
  },
  {
    icon: <Camera className="h-8 w-8 text-orange-500" />,
    title: "Home Photography & Marketing",
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-orange-500" />,
    title: "Agreement & Documentation Support",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#f5f5f7]">
      {/* Section Label */}
      <div className="text-center">
        <span className="bg-orange-100 text-gray-700 px-4 py-1 rounded-full text-sm">
          Our Services
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-4">
          What We Offer
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          A complete suite of services to make your real estate journey effortless and secure.
        </p>
      </div>

      {/* Cards */}
      <div data-aos="fade-up" className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
        {serviceList.map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-xl shadow hover:shadow-xl 
                       transition-all duration-300 border flex flex-col items-center 
                       hover:-translate-y-1"
          >
            {item.icon}
            <h4 className="text-gray-800 font-semibold mt-4 text-lg text-center">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
