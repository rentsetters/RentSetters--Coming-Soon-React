import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

// 🔗 GLOBAL LINK
const PROPERTY_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSe1G0A6BjzUyeZONN8mazt3Eo9FB9YkuFXnxWGoSa0-7v0HFA/viewform";

// Reusable Animated Menu Item
function NavItem({ label, href }) {
  return (
    <a
      href={href}
      className="relative group hidden md:block text-white font-semibold text-sm"
    >
      {/* Text with bounce */}
      <motion.span
        whileHover={{ y: -3 }} // bounce upward slightly
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="inline-block"
      >
        {label}
      </motion.span>

      {/* Underline animation */}
      <span
        className="
          pointer-events-none absolute left-1/2 -bottom-1
          h-0.5 w-0 bg-white
          group-hover:w-full group-hover:left-0
          transition-all duration-300 ease-out
        "
      ></span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LEFT: Logo + Name */}
        <a href="#">
          <div className="flex items-center gap-3">
        
              <img
                src="/logo png1.png"
                alt="RentSetters Logo"
                className="w-10 h-10 object-cover"
              />
              <span
                className="text-white font-bold text-xl tracking-wide"
                style={{ fontFamily: "MyFont" }}
              >
                RentSetters
              </span>
          
          </div>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <NavItem label="About" href="#about" />
          <NavItem label="Services" href="#services" />
          <NavItem label="Area" href="#areas" />
          <NavItem label="Contact" href="#contact" />

          {/* BUTTON */}
          <a
            target="_blank"
            href={PROPERTY_LINK}
            className="property-button text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all"
          >
            List or Find Property
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden text-3xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          open ? "max-h-60 py-2" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 text-white text-lg font-medium">
          <a onClick={() => setOpen(false)} href="#about">
            About
          </a>
          <a onClick={() => setOpen(false)} href="#services">
            Services
          </a>
          <a onClick={() => setOpen(false)} href="#areas">
            Area
          </a>
          <a onClick={() => setOpen(false)} href="#contact">
            Contact
          </a>

          {/* MOBILE BUTTON */}
          <a
            target="_blank"
            onClick={() => setOpen(false)}
            href={PROPERTY_LINK}
            className="property-button px-4 py-2 rounded-lg shadow text-white "
          >
            List or Find Property
          </a>
        </div>
      </div>
    </nav>
  );
}
