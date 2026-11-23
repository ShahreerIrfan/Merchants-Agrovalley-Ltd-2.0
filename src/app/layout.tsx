import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/animations/MotionProvider";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Merchants Agro Valley — Integrated Agro-Industrial Enterprise",
  description:
    "A value integrated agro ecosystem — from feed and farming to processing, renewable energy and global export.",
  icons: {
    icon: "/logo/merchants-agro-valley-emblem.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-[#142C23] bg-white selection:bg-[#A6E51B] selection:text-[#063F2B] overflow-x-clip">
        <MotionProvider>
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
