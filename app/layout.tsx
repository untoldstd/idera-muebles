import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ideramuebles.com"),

  title: "Idera Muebles | Cocinas, Clósets y Muebles a Medida en Mérida",
  description:
    "Diseño, fabricación CNC e instalación de cocinas integrales, clósets, baños y puertas a medida. 5 años de garantía. Fábrica en Mérida, Yucatán. +500 proyectos completados.",
  keywords: [
    "cocinas integrales mérida",
    "clósets a medida",
    "muebles cnc",
    "carpintería mérida yucatán",
  ],
  authors: [{ name: "Idera Muebles" }],
  robots: { index: true, follow: true },

  openGraph: {
    type: "website",
    url: "https://ideramuebles.com",
    siteName: "Idera Muebles",
    locale: "es_MX",
    title: "Idera Muebles | Cocinas, Clósets y Muebles a Medida en Mérida",
    description:
      "Diseño, fabricación CNC e instalación de cocinas integrales, clósets, baños y puertas a medida. 5 años de garantía. Fábrica en Mérida, Yucatán. +500 proyectos completados.",
    images: [{ url: "/fotos/1-hero/hero-01.jpg" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Idera Muebles | Cocinas, Clósets y Muebles a Medida en Mérida",
    description:
      "Diseño, fabricación CNC e instalación de cocinas integrales, clósets, baños y puertas a medida. 5 años de garantía. Fábrica en Mérida, Yucatán. +500 proyectos completados.",
    images: ["/fotos/1-hero/hero-01.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
