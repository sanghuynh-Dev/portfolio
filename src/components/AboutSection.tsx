"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap, Lightbulb, Compass, Award } from "lucide-react";

export default function AboutSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  const aboutCards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
      title: "Học Vấn",
      subtitle: "Đại học Kinh Doanh và Công Nghệ Hà Nội",
      description: "Sinh viên năm cuối ngành Công nghệ Thông tin, có niềm đam mê với phát triển web và xây dựng các ứng dụng hiện đại.",
      bg: "bg-indigo-50/50 border-indigo-100/50",
    },
    {
      icon: <Compass className="w-6 h-6 text-purple-600" />,
      title: "Định Hướng",
      subtitle: "Full-Stack Developer",
      description: "Mục tiêu dài hạn là phát triển chuyên môn vững chắc trong lĩnh vực Frontend / Fullstack và từng bước hướng tới các vai trò kỹ thuật dẫn dắt đội ngũ trong tương lai.",
      bg: "bg-purple-50/50 border-purple-100/50",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-pink-600" />,
      title: "Tinh Thần Học Hỏi",
      subtitle: "Thích nghi & Cập nhật liên tục",
      description: "Luôn sẵn sàng đón nhận thử thách mới và không ngừng nâng cao kỹ năng để xây dựng các ứng dụng web hiện đại, hiệu quả và dễ mở rộng.",
      bg: "bg-pink-50/50 border-pink-100/50",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/40">
      {/* Decorative Blur elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">Giới thiệu</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Khám phá câu chuyện của tôi
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Personal Quote and Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                Một Intern Frontend / Fullstack đam mê xây dựng các sản phẩm web hiện đại và mang lại giá trị thực tiễn.
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Tôi tin rằng lập trình không chỉ là viết code mà còn là quá trình giải quyết vấn đề và tạo ra những trải nghiệm tốt hơn cho người dùng. Với nền tảng kiến thức từ ngành Công nghệ Thông tin cùng tinh thần chủ động học hỏi, tôi luôn mong muốn không ngừng nâng cao kỹ năng và phát triển bản thân trong lĩnh vực phát triển web.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Trong quá trình học tập và xây dựng dự án, tôi luôn chú trọng đến hai yếu tố: trải nghiệm mượt mà cho người dùng và code rõ ràng, dễ bảo trì cho quá trình phát triển lâu dài.
              </p>
            </div>

            {/* Custom Quote Box */}
            <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200/60 relative">
              <span className="absolute -top-4 left-6 text-6xl text-indigo-600/10 font-serif leading-none select-none">“</span>
              <p className="italic text-slate-700 relative z-10 text-sm md:text-base font-medium">
                First, solve the problem. Then, write the code.
              </p>
              <span className="block mt-2 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">
                — John Johnson
              </span>
            </div>
          </motion.div>

          {/* Right Column: Key details Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-between gap-6"
          >
            {aboutCards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`p-6 rounded-2xl border bg-white/70 shadow-sm flex flex-col md:flex-row gap-4 items-start hover:shadow-md transition-all hover:scale-[1.01]`}
              >
                <div className={`p-3 rounded-xl bg-white border shadow-sm shrink-0`}>
                  {card.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <h4 className="font-bold text-slate-900 text-base">{card.title}</h4>
                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100/50 px-2 py-0.5 rounded">
                      {card.subtitle}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
