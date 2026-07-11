import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "LinoFresh – Mobile Autopflege Basel",
    template: "%s | LinoFresh",
  },
  description:
    "Mobile Autoinnenreinigung in Basel. LinoFresh kommt direkt zu dir nach Hause oder an den Arbeitsplatz.",
  keywords: [
    "Autopflege Basel",
    "mobile Autoreinigung",
    "Autoinnenreinigung",
    "Fahrzeugpflege",
    "LinoFresh",
    "Basel",
  ],
  authors: [{ name: "LinoFresh" }],
  creator: "LinoFresh",
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: siteConfig.url,
    siteName: "LinoFresh",
    title: "LinoFresh – Mobile Autopflege Basel",
    description:
      "Mobile Autoinnenreinigung in Basel. LinoFresh kommt direkt zu dir nach Hause oder an den Arbeitsplatz.",
    images: [
      {
        url: "/linofresh-logo.png",
        width: 1200,
        height: 630,
        alt: "LinoFresh – Mobile Autopflege Basel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LinoFresh – Mobile Autopflege Basel",
    description:
      "Mobile Autoinnenreinigung in Basel. LinoFresh kommt direkt zu dir nach Hause oder an den Arbeitsplatz.",
    images: ["/linofresh-logo.png"],
  },
  icons: {
    icon: "/linofresh-logo.png",
    apple: "/linofresh-logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0D2238",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-CH" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
