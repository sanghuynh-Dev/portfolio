import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Huỳnh Tấn Sang | Creative Intern Developer Portfolio",
  description: "Portfolio cá nhân của Huỳnh Tấn Sang - Intern Frontend / Fullstack Developer. Thiết kế hiện đại, chuyên nghiệp với React, Next.js, Tailwind CSS và Framer Motion.",
  keywords: ["Intern Developer", "Frontend Developer", "React Developer", "Next.js Portfolio", "CV Lập Trình Viên", "Tuyển Dụng Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${plusJakarta.variable} font-sans scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full bg-gradient-to-br from-slate-50 via-white to-violet-50/40 text-slate-900 selection:bg-indigo-500/10 selection:text-indigo-600">
        {children}
      </body>
    </html>
  );
}

