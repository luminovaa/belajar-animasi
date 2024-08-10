import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hikaluna - Your Lie In April",
  description: "Website Unofficial Alias Tidak Asli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.jpg" type="image/jpg" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
        </body>
    </html>
  );
}
