import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const fontDisplay = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
});

const fontBody = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Excursion Club — Hurghada Tours & Ausflüge",
  description:
    "Kuratierte Ausflüge ab Hurghada. Tauchen, Luxor, Cairo, Wüstensafari, Bootstouren. Persönliche Beratung auf Deutsch.",
  openGraph: {
    title: "My Excursion Club",
    description:
      "Kuratierte Ausflüge ab Hurghada. Persönliche Beratung auf Deutsch.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23183454'/><text x='50' y='68' font-family='serif' font-size='44' font-weight='600' text-anchor='middle' fill='%23d4a030'>M</text></svg>",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${fontDisplay.variable} ${fontBody.variable}`}
    >
      <body className="min-h-[100dvh] flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
