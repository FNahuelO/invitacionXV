import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Great_Vibes } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const soligant = localFont({
  src: "./fonts/Soligant.ttf",
  variable: "--font-soligant",
  display: "swap",
});

const himalaya = localFont({
  src: "./fonts/Himalaya.ttf",
  variable: "--font-himalaya",
  display: "swap",
});

const goldenHills = localFont({
  src: "./fonts/GoldenHills.ttf",
  variable: "--font-golden-hills",
  display: "swap",
});

const tropicalAvenue = localFont({
  src: "./fonts/TropicalAvenue.ttf",
  variable: "--font-tropical-avenue",
  display: "swap",
});

export const metadata: Metadata = {
  title: "XV Zoe",
  description:
    "Te espero para celebrar este momento tan especial con vos",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${montserrat.variable} ${greatVibes.variable} ${soligant.variable} ${himalaya.variable} ${goldenHills.variable} ${tropicalAvenue.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
