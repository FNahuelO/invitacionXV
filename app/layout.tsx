import type { Metadata } from "next";
import {
  Playfair_Display,
  Montserrat,
  Great_Vibes,
  Alegreya_Sans,
  Baloo_Bhai_2,
} from "next/font/google";
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

const alegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-alegreya-sans",
  display: "swap",
});

const balooBhai = Baloo_Bhai_2({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-baloo-bhai",
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

const avegaer = localFont({
  src: "./fonts/Avegaer.ttf",
  variable: "--font-avegaer",
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
      className={`${playfair.variable} ${montserrat.variable} ${greatVibes.variable} ${alegreyaSans.variable} ${balooBhai.variable} ${soligant.variable} ${himalaya.variable} ${goldenHills.variable} ${tropicalAvenue.variable} ${avegaer.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
