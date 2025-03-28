import type { Metadata } from "next";
import { Geist, Geist_Mono,Comforter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

// 创建并配置Geist Sans字体
// 该函数调用使用了自定义变量和子集来初始化Geist Sans字体
// 参数:
// - variable: CSS变量的名称，用于在CSS中引用该字体
// - subsets: 字体的子集，此处仅包含"latin"子集
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// 创建并配置Geist Mono字体
// 与Geist Sans类似的配置，但应用于Geist Mono字体
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// 创建一个Comforter实例，用于配置字体的特定属性
// 参数说明：
// weight: 定义字体的粗细，这里设置为400
// subsets: 定义字体的子集，这里选择的是latin
const comforter = Comforter({
  weight:['400'],
  subsets: ["latin"],
});

/**
 * 导出一个包含网站元数据的常量对象
 * 用于定义网站的默认标题和描述，这些信息对于SEO优化至关重要
 */
export const metadata: Metadata = {
  // 网站的默认标题，显示在浏览器标签页上
  title: "Create Next App",
  // 网站的默认描述，用于搜索引擎结果展示
  description: "Generated by create next app",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comforter.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
