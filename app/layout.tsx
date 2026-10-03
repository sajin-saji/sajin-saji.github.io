import type { Metadata, Viewport } from "next";
import { Newsreader, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-cursive",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F3F0E8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sajin Saji | Mechatronics Engineer – Automation, Testing & Robotics",
  description: "Portfolio of Sajin Saji – M.Eng. Mechatronics & Cyber-Physical Systems student (TH Deggendorf): automation, commissioning, testing, robotics and prototyping.",
  openGraph: {
    title: "Sajin Saji | Mechatronics Engineer",
    description: "Portfolio of Sajin Saji – M.Eng. Mechatronics & Cyber-Physical Systems (TH Deggendorf)",
    url: "https://sajin-saji.github.io/",
    siteName: "Sajin Saji Portfolio",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${plusJakarta.variable} ${caveat.variable}`}>
      <body className="min-h-screen bg-[#F3F0E8] text-[#343830] selection:bg-[#C65D43] selection:text-[#F3F0E8]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
