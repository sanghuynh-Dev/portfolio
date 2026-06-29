"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Play, CheckSquare, Plus, ShoppingBag, Music2, SkipForward, PlayCircle } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function ProjectsSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const projects = [
    // {
    //   title: "EcoShop",
    //   category: "E-Commerce Platform",
    //   description: "Ứng dụng mua sắm các sản phẩm organic bảo vệ môi trường. Tích hợp giỏ hàng thời gian thực, quản lý đơn hàng, thanh toán Stripe và Dashboard theo dõi doanh thu trực quan.",
    //   tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
    //   liveUrl: "https://ecoshop-demo.vercel.app",
    //   githubUrl: "https://github.com/nguyena/ecoshop",
    //   color: "from-emerald-400 to-teal-500",
    //   mockupType: "ecommerce",
    // },
    {
      title: "Soundora",
      category: "Music Streaming Platform",
      description: "Nền tảng streaming nhạc trực tuyến với giao diện hiện đại và trải nghiệm nghe nhạc liền mạch.",
      tags: ["React", "Node.js", "Express", "Cloudinary", "MongoDB"],
      liveUrl: "https://music-personal-new-v-0-1.vercel.app",
      githubUrl: "https://github.com/sanghuynh-Dev/Music_personal_new_v-0.1",
      color: "from-sky-400 to-indigo-500",
      mockupType: "music",
    },
    // {
    //   title: "FlowTask Kanban",
    //   category: "Work Management Dashboard",
    //   description: "Công cụ quản lý công việc và quy trình dự án dành cho các đội ngũ phát triển. Hỗ trợ kéo thả Kanban Board mượt mà, biểu đồ tiến độ công việc và phân chia vai trò thành viên.",
    //   tags: ["Next.js", "TypeScript", "Dnd-kit", "PostgreSQL", "Tailwind"],
    //   liveUrl: "https://flowtask-app.vercel.app",
    //   githubUrl: "https://github.com/nguyena/flowtask",
    //   color: "from-purple-400 to-pink-500",
    //   mockupType: "kanban",
    // },
  ];

  const renderMockup = (type: string, color: string) => {
    switch (type) {
      case "ecommerce":
        return (
          <div className={`w-full h-full bg-gradient-to-br ${color} flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105`}>
            {/* E-commerce product card preview */}
            <div className="w-52 bg-white rounded-2xl p-3.5 shadow-xl border border-white/40 glass-panel">
              <div className="w-full h-24 bg-emerald-50 rounded-xl flex items-center justify-center relative overflow-hidden mb-3">
                <span className="text-3xl">🌱</span>
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-bold">New</span>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-emerald-600 uppercase">Hữu cơ</p>
                <h5 className="font-bold text-slate-800 text-xs">Chậu Cây Trà Xanh Mini</h5>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs font-extrabold text-slate-900">$12.50</span>
                  <button className="p-1.5 rounded-lg bg-emerald-600 text-white shadow shadow-emerald-600/20">
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "music":
        return (
          <div className={`w-full h-full bg-gradient-to-br ${color} flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105`}>
            {/* Music Player Preview */}
            <div className="w-56 bg-slate-900 rounded-2xl p-4 shadow-xl border border-slate-800 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-pink-500 to-indigo-500 flex items-center justify-center animate-spin [animation-duration:10s]">
                  <Music2 className="w-5 h-5 text-white" />
                </div>
                <div className="overflow-hidden">
                  <p className="font-bold text-[11px] truncate">Âm Nhạc Ngày Mới</p>
                  <p className="text-[9px] text-slate-400 truncate">Nguyễn Văn A & Friends</p>
                </div>
              </div>
              {/* Progress bar */}
              <div className="space-y-1 mb-2">
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-sky-400 rounded-full" />
                </div>
                <div className="flex justify-between text-[8px] text-slate-500">
                  <span>02:14</span>
                  <span>03:45</span>
                </div>
              </div>
              {/* Control buttons */}
              <div className="flex justify-center items-center gap-4">
                <SkipForward className="w-3.5 h-3.5 text-slate-400 transform rotate-180 cursor-pointer" />
                <PlayCircle className="w-7 h-7 text-sky-400 cursor-pointer" />
                <SkipForward className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
              </div>
            </div>
          </div>
        );
      case "kanban":
        return (
          <div className={`w-full h-full bg-gradient-to-br ${color} flex items-center justify-center p-4 transition-transform duration-500 group-hover:scale-105`}>
            {/* Kanban columns preview */}
            <div className="flex gap-2.5 w-60 bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/20">
              <div className="flex-1 bg-white/80 rounded-lg p-2 flex flex-col gap-1.5 shadow-sm">
                <p className="text-[9px] font-bold text-slate-500 uppercase mb-1">Cần làm (1)</p>
                <div className="p-2 rounded bg-white border border-slate-100 shadow-xs flex flex-col gap-1">
                  <span className="text-[9px] font-bold text-slate-800">Cấu hình DB</span>
                  <div className="w-8 h-1 bg-indigo-500 rounded" />
                </div>
              </div>
              <div className="flex-1 bg-white/80 rounded-lg p-2 flex flex-col gap-1.5 shadow-sm">
                <p className="text-[9px] font-bold text-slate-500 uppercase mb-1">Đang làm (1)</p>
                <div className="p-2 rounded bg-white border border-slate-100 shadow-xs flex flex-col gap-1">
                  <span className="text-[9px] font-bold text-slate-800">Thiết kế UI</span>
                  <div className="w-12 h-1 bg-pink-500 rounded" />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">Sản phẩm</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dự án cá nhân tiêu biểu
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-200 transition-all flex flex-col h-full"
            >
              {/* Graphic Mockup Area */}
              <div className="h-48 overflow-hidden relative shrink-0">
                {renderMockup(project.mockupType, project.color)}
              </div>

              {/* Project details */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100/50 px-2 py-0.5 rounded w-fit mb-3">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded bg-slate-100 text-slate-600 text-[10px] font-semibold border border-slate-200/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-sm shadow-indigo-600/10 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all border border-slate-200/50 cursor-pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
