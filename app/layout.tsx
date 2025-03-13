
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import { Providers } from "./providers";


// import { Poppins } from "next/font/google";
// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

import { Dosis } from "next/font/google";
const dosis = Dosis({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "IEEE RSCOE SB",
  description: "IEEE RSCOE Student Branch Official Website",
  generator: "v0.dev"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dosis.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}