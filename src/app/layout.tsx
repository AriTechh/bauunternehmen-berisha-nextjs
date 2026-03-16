import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400","700","900"],
});

export const metadata: Metadata = {
  title: "Bauunternehmen Berisha | Qualität aus Leidenschaft",
  description: "Bauunternehmen Berisha – Ihr zuverlässiger Partner für Hoch-, Tief- und Innenausbau. Qualität und Präzision seit über 20 Jahren.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className={`${montserrat.variable} ${playfair.variable} antialiased`}
        style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
