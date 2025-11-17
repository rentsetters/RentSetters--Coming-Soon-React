import { MapPin } from "lucide-react";
import { motion } from "motion/react";

const locations = [
  "Kakkanad",
  "Edappally",
  "Vyttila",
  "Palarivattom",
  "Kaloor",
  "Aluva",
  "Kadavanthra",
  "Panampilly Nagar",
  "Thrikkakara",
  "And nearby suburbs...",
];

export default function Areas() {
  return (
    <section id="areas" className="py-24 bg-[#fefcfa]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="text-left">
          {/* Badge */}
          <span className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium">
            Our Reach
          </span>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">
            Operating Across Kochi
          </h2>

          {/* Description */}
          <p className="text-gray-600 mt-4 leading-relaxed max-w-lg">
            We are actively serving key areas and suburbs throughout Kochi,
            ensuring wide coverage for all your property needs.
          </p>

          {/* Bullet List */}
          <ul className="mt-6 space-y-3">
            {locations.map((loc, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-800">
                <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                {loc}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — KOCHI MAP */}
        {/* <div className="flex justify-center lg:justify-end">
          <img
            src="/kochi-outline.svg"
            alt="Kochi Map"
            className="w-[280px] h-auto opacity-80"
          />
        </div> */}
      </div>
      <section className="w-full bg-[#0d1321] py-32 flex flex-col items-center text-center px-4 mt-7">
        {/* Heading with pulse animation */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-[#9b552f]"
          animate={{
            color: ["#ffffff", "#FF7315", "#ffffff"], // fade between colors
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          A Fully Functional RentSetters Web App Is Coming Soon!
        </motion.h1>

        {/* Subtext */}
        <p className="text-gray-300 text-lg md:text-xl mt-6 max-w-3xl leading-relaxed">
          Discover verified properties, connect instantly, and manage rentals in
          one place — launching soon!
        </p>
      </section>
    </section>
  );
}
