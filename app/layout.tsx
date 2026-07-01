import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huang Xuanming Portfolio",
  description: "黄轩铭的个人作品集，记录 AI 产品、系统原型和工程实践。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
