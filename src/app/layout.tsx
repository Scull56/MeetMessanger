import type { Metadata } from "next";
import { Source_Sans_3, Lobster } from "next/font/google";
import "./globals.css";

const textFont = Source_Sans_3({
  variable: "--text-font",
  subsets: ["latin", "cyrillic"],
});

const decorativeFont = Lobster({
  variable: "--decorative-font",
  weight: "400",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "LoveApp",
  description:
    "UI для приложения знакомст. Создан в целях приобритения практического опыта работы с такими технологиями как: React, Next.Js и Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${textFont.variable} ${decorativeFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
