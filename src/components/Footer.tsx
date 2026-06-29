"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200/50 bg-white/20 relative z-10">
      <div className="max-w-6xl w-full mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="text-sm font-semibold text-slate-800">
            Huỳnh Tấn Sang <span className="text-indigo-600 font-extrabold">.</span> Portfolio
          </p>
          <p className="text-xs text-slate-500 mt-1 leading-normal">
            © {new Date().getFullYear()} Bản quyền thuộc về Huỳnh Tấn Sang. Mọi quyền được bảo lưu.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Thiết kế & Lập trình bằng
          </p>
          <p className="text-xs font-semibold text-slate-600 mt-1">
            Next.js (App Router) • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
