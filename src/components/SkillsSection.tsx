"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Atom, Terminal, Layout, Database, Server, GitFork, ShieldAlert, Cpu } from "lucide-react";

export default function SkillsSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
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

  const skillGroups = [
    {
      title: "Ngôn Ngữ Lập Trình",
      icon: <Code2 className="w-5 h-5 text-indigo-600" />,
      skills: [
        { name: "JavaScript", detail: "Thành thạo ES6+, xử lý bất đồng bộ", icon: "JS" },
        // { name: "TypeScript", detail: "Định nghĩa Type chặt chẽ, Interfaces", icon: "TS" },
        { name: "HTML5 & CSS3", detail: "Layout chuẩn SEO, Responsive, Flexbox", icon: "HTML" },
        // { name: "Python", detail: "Cơ bản, scripting, phân tích dữ liệu", icon: "PY" },
        // { name: "SQL", detail: "Truy vấn MySQL, PostgreSQL", icon: "SQL" },
      ],
    },
    {
      title: "Frameworks & Thư Viện",
      icon: <Atom className="w-5 h-5 text-purple-600" />,
      skills: [
        { name: "React", detail: "Hooks, Context API, state management", icon: "REACT" },
        // { name: "Next.js (App Router)", detail: "SSR, SSG, API Routes, Optimization", icon: "NEXT" },
        { name: "Node.js & Express", detail: "RESTful API, middleware, auth", icon: "NODE" },
        // { name: "Tailwind CSS", detail: "Thiết kế giao diện nhanh, Utilities-first", icon: "TW" },
        { name: "Framer Motion", detail: "Tạo các chuyển động UI cao cấp", icon: "FM" },
      ],
    },
    {
      title: "Công Cụ & Nền Tảng",
      icon: <Terminal className="w-5 h-5 text-pink-600" />,
      skills: [
        { name: "Git & GitHub", detail: "Quản lý mã nguồn, Branching, PRs", icon: "GIT" },
        // { name: "Docker", detail: "Container hóa ứng dụng cơ bản", icon: "DKR" },
        { name: "Vercel / Netlify", detail: "CI/CD Deployment, cấu hình Domain", icon: "VCL" },
        // { name: "Figma", detail: "Đọc bản vẽ UI, trích xuất tài nguyên", icon: "FIG" },
        // { name: "Postman", detail: "Kiểm thử API, Mock data", icon: "POST" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-violet-50/20 to-transparent">
      {/* Decorative gradient sphere */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-violet-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">Kỹ Năng</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Năng lực chuyên môn
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: groupIdx * 0.1 }}
              className="bg-white/80 border border-slate-200/60 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col h-full"
            >
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl">
                  {group.icon}
                </div>
                <h3 className="font-extrabold text-slate-800 text-lg">{group.title}</h3>
              </div>

              {/* Group Skills List */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-4 flex-grow"
              >
                {group.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    variants={itemVariants}
                    className="group flex gap-4 p-3 rounded-2xl hover:bg-slate-50/80 transition-colors border border-transparent hover:border-slate-100"
                  >
                    {/* Badge Icon */}
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-black text-[10px] text-slate-500 tracking-wider group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                      {skill.icon}
                    </div>

                    {/* Skill Info */}
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-slate-500 text-xs mt-0.5 leading-normal">
                        {skill.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
