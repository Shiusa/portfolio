import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nguyen Kyle Portfolio",
  description: "Portfolio of Nguyen Kyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-mauveNeonClair`}
      >
        <Header />
        <div className="h-[96%] w-full flex flex-col lg:flex-row columns-1 xl:columns-2">
          <div className="xl:w-[10.5%] lg:w-1/5 w-full">
            <Navbar />
          </div>
          <main className="xl:w-[89.5%] lg:w-4/5 w-full h-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
