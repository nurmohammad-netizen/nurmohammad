import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nur Mohammad | Sales Operations & SCM Specialist",
  description:
    "Nur Mohammad, Sales Operations & SCM Specialist and entrepreneur. Order-to-cash, depot & inventory leadership, and data-driven supply chain operations at A-One Polymer Ltd. (Anwar Group).",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-navy-900 font-sans text-ink-200 antialiased">
        {children}
      </body>
    </html>
  );
}
