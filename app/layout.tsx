import type { Metadata } from "next";
import { Archivo_Black, Instrument_Serif, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollFX from "@/components/ScrollFX";
import "./globals.css";

const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Varshinie A. R. — Brand & Fashion Stylist",
  description:
    "Portfolio of Varshinie A. R. — Brand Stylist, Brand Strategist and Fashion Stylist. M.Des candidate at NIFT Kangra.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${instrument.variable} ${inter.variable} antialiased`}>
        <SmoothScroll>
          {children}
          <ScrollFX />
        </SmoothScroll>
      </body>
    </html>
  );
}
