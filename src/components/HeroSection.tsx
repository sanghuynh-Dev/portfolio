"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const handleScrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techBadges = [
    { name: "React", bg: "bg-sky-50 text-sky-600 border-sky-100" },
    { name: "MongoDB", bg: "bg-slate-900 text-white border-slate-800" },
    { name: "JavaScript", bg: "bg-blue-50 text-blue-600 border-blue-100" },
    // { name: "Tailwind CSS", bg: "bg-teal-50 text-teal-600 border-teal-100" },
    { name: "Node.js", bg: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    { name: "Git & GitHub", bg: "bg-purple-50 text-purple-600 border-purple-100" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/50 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm shadow-indigo-600/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Sẵn sàng gia nhập dự án thực tế
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6"
          >
            Chào bạn, tôi là <br />
            <span className="text-gradient font-black">Huỳnh Tấn Sang</span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-bold text-slate-700 mb-6 flex items-center gap-2"
          >
            Intern Frontend / Fullstack Developer
          </motion.h2>

          {/* Pitch */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8"
          >
            Tôi là sinh viên năm cuối ngành Công nghệ Thông tin, yêu thích phát triển web và xây dựng các giao diện hiện đại, trực quan. Tôi luôn không ngừng nâng cao kỹ năng Frontend / Fullstack, đồng thời áp dụng tư duy UI/UX cùng clean code để tạo ra những sản phẩm mang lại trải nghiệm tốt cho người dùng.
          </motion.p>

          {/* Core Tech Stack Badges */}
          <motion.div
            variants={itemVariants}
            className="w-full flex flex-col gap-3 mb-8"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Công nghệ cốt lõi
            </span>
            <div className="flex flex-wrap gap-2">
              {techBadges.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold border ${tech.bg}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center w-full sm:w-auto"
          >
            <button
              onClick={handleScrollToProjects}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-indigo-600/20 cursor-pointer"
            >
              Xem dự án của tôi
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/SangHuynh_CV_FullstackIntern.pdf"
              download
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-all border border-slate-200 hover:border-slate-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-slate-100/50 cursor-pointer"
            >
              Tải CV (PDF)
              <Download className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mt-8"
          >
            <a
              href="https://github.com/sanghuynh-Dev"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-indigo-600 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a> */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sanghuynhkuro@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-red-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Interactive Visual */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="lg:col-span-5 hidden lg:flex justify-center relative cursor-default select-none"
        >
          {/* Main Visual Frame */}
          <div className="w-[360px] h-[360px] rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[3px] shadow-2xl shadow-indigo-500/10">
            <div className="w-full h-full bg-white rounded-[21px] p-6 flex flex-col justify-between relative overflow-hidden">
              {/* Background patterns */}
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

              {/* Floating tech cards */}
              <div className="flex justify-between items-start z-10">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center border border-indigo-100 text-indigo-600 font-extrabold text-lg shadow-sm shadow-indigo-600/5">
                  &lt;/&gt;
                </div>
                <div className="px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-pink-600 text-xs font-bold uppercase tracking-wide shadow-sm">
                  Intern
                </div>
              </div>

              <div className="my-auto py-6 z-10">
                <div className="space-y-2">
                  <div className="w-20 h-2 bg-indigo-600/20 rounded-full" />
                  <div className="w-36 h-2 bg-violet-600/20 rounded-full" />
                  <div className="w-28 h-2 bg-pink-600/20 rounded-full" />
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-indigo-50/50 border border-indigo-100/30">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                    <span className="text-xs font-bold text-indigo-950">Clean Code Developer</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-pink-50/50 border border-pink-100/30">
                    <div className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                    <span className="text-xs font-bold text-pink-950">UI/UX Mindset & Animations</span>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="flex justify-between items-center z-10 pt-4 border-t border-slate-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Ready to deploy
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Orbiting Badges */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-6 -right-6 px-4 py-2.5 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-900/5 flex items-center gap-2"
          >
            <span className="text-yellow-500 text-lg">🚀</span>
            <div className="text-left">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Tốc độ</p>
              <p className="text-xs font-bold text-slate-800">Hiệu năng 100%</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-6 -left-6 px-4 py-2.5 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-900/5 flex items-center gap-2"
          >
            <span className="text-indigo-500 text-lg">⚡</span>
            <div className="text-left">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Học hỏi</p>
              <p className="text-xs font-bold text-slate-800">Nắm bắt cực nhanh</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
