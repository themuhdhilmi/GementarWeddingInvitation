import type { Metadata } from "next";
import { Inter, Great_Vibes, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const great_Vibes = Roboto_Condensed({ weight : ['400'], subsets : ["latin"] });

export const metadata: Metadata = {
  title: "Shahida & Hilmi Wedding Invitation",
  description: "Shahida & Hilmi Wedding Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${great_Vibes.className} `}>{children}</body>
    </html>
  );
}
