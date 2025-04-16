import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// --- 配置 Inter 字体 ---
const inter = Inter({
  subsets: ["latin"], // 指定子集
  weight: ['500', '800'], // 修改 610 为 600
  variable: "--font-inter", // 定义 CSS 变量，方便在 Tailwind 中使用
});

export const metadata: Metadata = {
  title: "soulwinter's Portfolio",
  description: "soulwinter's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6470810887059922" />
      </head>
      <body className={`${inter.variable} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
