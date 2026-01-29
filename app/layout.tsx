import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TalentAI",
    template: "%s | TalentAI",
  },
  description:
    "AI-powered recruitment platform for smarter hiring and candidate matching.",
  applicationName: "TalentAI",
  keywords: [
    "AI recruitment",
    "hiring platform",
    "talent matching",
    "HR software",
    "resume screening",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} h-full antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
