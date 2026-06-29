"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", label: "Trang chủ" },
  { id: "about", label: "Giới thiệu" },
  { id: "skills", label: "Kỹ năng" },
  { id: "projects", label: "Dự án" },
  { id: "contact", label: "Liên hệ" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
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

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      NAV_ITEMS.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-40 rounded-2xl transition-all duration-300 ${scrolled
          ? "glass-panel-dark shadow-lg shadow-indigo-950/5 py-3"
          : "glass-panel py-4"
          }`}
      >
        <div className="px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("hero")}
            className="text-lg font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5 focus:outline-none cursor-pointer"
          >
            <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-base shadow-md shadow-indigo-600/20 font-black">S</span>
            <span className="bg-gradient-to-r from-slate-900 to-indigo-950 bg-clip-text text-transparent">SANG HUYNH<span className="text-indigo-600 font-black">.</span></span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors relative cursor-pointer ${isActive ? "text-indigo-600 font-bold" : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-bg"
                      className="absolute inset-0 bg-indigo-50/70 border border-indigo-100/50 rounded-xl -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA/Resume Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-all shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 cursor-pointer"
            >
              Liên hệ ngay
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 glass-panel-dark rounded-2xl shadow-xl shadow-slate-900/10 p-5 md:hidden border border-slate-200/50"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${isActive
                      ? "bg-indigo-50 border border-indigo-100/50 text-indigo-600"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
                  </button>
                );
              })}
              <div className="h-[1px] bg-slate-200/60 my-2" />
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
                className="w-full justify-center text-center inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors cursor-pointer"
              >
                Liên hệ ngay
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
