"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus("submitting");

    // Simulate sending message
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white/40">
      {/* Decorative Blur elements */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">Kết nối</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Liên hệ với tôi
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Contact details and socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                Hãy cùng nhau tạo nên những sản phẩm tuyệt vời!
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Tôi luôn sẵn sàng đón nhận các cơ hội thử thách mới, dù là dự án Freelance hay công việc Full-time. Đừng ngần ngại nhắn tin cho tôi nếu bạn có bất kỳ câu hỏi nào hoặc muốn trao đổi về cơ hội hợp tác.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Email của tôi</p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=sanghuynhkuro@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">
                      sanghuynhkuro@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Cards */}
            <div className="mt-8 lg:mt-0 pt-8 border-t border-slate-200/60">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Mạng xã hội công việc</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://github.com/sanghuynh-Dev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3.5 rounded-2xl bg-white border border-slate-200/60 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all flex items-center gap-3 group"
                >
                  <GithubIcon className="w-5 h-5 text-slate-700 group-hover:text-indigo-600 transition-colors" />
                  <div className="text-left">
                    <p className="text-[9px] font-bold text-slate-400 uppercase">GitHub</p>
                    <p className="text-xs font-bold text-slate-700">@sanghuynh-Dev</p>
                  </div>
                </a>

                {/* <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3.5 rounded-2xl bg-white border border-slate-200/60 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all flex items-center gap-3 group"
                >
                  <LinkedinIcon className="w-5 h-5 text-slate-700 group-hover:text-indigo-600 transition-colors" />
                  <div className="text-left">
                    <p className="text-[9px] font-bold text-slate-400 uppercase">LinkedIn</p>
                    <p className="text-xs font-bold text-slate-700">@linkedin-user</p>
                  </div>
                </a> */}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
            className="lg:col-span-7 bg-white/80 border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="form-name" className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    Họ và tên
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    disabled={status === "submitting" || status === "success"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/5 bg-slate-50/50 text-sm font-semibold transition-all disabled:opacity-50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="form-email" className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    Địa chỉ Email
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    disabled={status === "submitting" || status === "success"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/5 bg-slate-50/50 text-sm font-semibold transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="form-message" className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Lời nhắn
                </label>
                <textarea
                  id="form-message"
                  required
                  rows={4}
                  disabled={status === "submitting" || status === "success"}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tôi muốn trao đổi với bạn về cơ hội hợp tác..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/5 bg-slate-50/50 text-sm font-semibold transition-all resize-none disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-all shadow-md shadow-indigo-600/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Đang gửi thông tin...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Đã gửi tin nhắn thành công!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Gửi tin nhắn liên hệ
                  </>
                )}
              </button>
            </form>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-emerald-950">Gửi lời nhắn thành công!</h5>
                    <p className="text-xs text-emerald-600/90 mt-0.5">
                      Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi lại bạn qua email trong vòng 24 giờ tới.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
