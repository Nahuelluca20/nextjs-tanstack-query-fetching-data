import type {Metadata} from "next";

import {Inter as FontSans} from "next/font/google";

import "./globals.css";
import {cn} from "@/lib/utils";
import Providers from "@/providers/providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "TanStack Query + NextJS",
  description: "This project find the best way to fecth data with TanStack Query and NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
