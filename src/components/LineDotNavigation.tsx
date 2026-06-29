"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "Trang chủ" },
  { id: "about", label: "Giới thiệu" },
  { id: "skills", label: "Kỹ năng" },
  { id: "projects", label: "Dự án" },
  { id: "contact", label: "Liên hệ" },
];

export default function LineDotNavigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section is in the middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      SECTIONS.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6">
      {/* Background Vertical Line */}
      <div className="absolute top-2 bottom-2 w-[2px] bg-slate-200/60 -z-10 rounded-full" />
      
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className="group relative flex items-center justify-center w-6 h-6 focus:outline-none cursor-pointer"
            aria-label={`Cuộn đến ${section.label}`}
          >
            {/* Tooltip Label */}
            <span className="absolute right-8 px-3 py-1.5 rounded-lg bg-slate-900/95 text-white text-xs font-semibold opacity-0 translate-x-2 pointer-events-none transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap shadow-md shadow-slate-900/10">
              {section.label}
            </span>

            {/* Dot Indicator */}
            <motion.div
              animate={{
                scale: isActive ? 1.4 : 1,
                backgroundColor: isActive ? "#6366f1" : "#cbd5e1",
                outline: isActive ? "3px solid rgba(99, 102, 241, 0.2)" : "0px solid transparent",
              }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="w-2.5 h-2.5 rounded-full border border-white"
            />
          </button>
        );
      })}
    </div>
  );
}
