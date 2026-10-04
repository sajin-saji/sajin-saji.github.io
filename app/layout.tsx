import type { Metadata, Viewport } from "next";

import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const viewport: Viewport = {
  themeColor: "#F7F8FA",
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
    <html lang="en" >
      <body className="min-h-screen bg-[#F7F8FA] text-[#374151] selection:bg-[#2563EB] selection:text-[#F7F8FA]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
