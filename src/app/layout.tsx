import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import SocialBar from "@/components/SocialBar";

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
        {/*h-[96%] w-full flex flex-col lg:flex-row columns-1 xl:columns-2*/}
        <div className="h-full w-full flex flex-col lg:flex-row columns-1 md:columns-2">
          <div className="lg:w-1/5 xl:w-[16%] 2xl:w-[14%] w-full h-full flex columns-2">
            <div className="h-full w-[10%] lg:w-[26%] xl:w-[28%] 2xl:w-[30%] border-r-[1px] border-mauveNeonClair">
              <SocialBar />
            </div>
            <Navbar />
          </div>
          {/*w-[90%]*/}
          <div className="w-full h-screen overflow-hidden">
            <Header />
            {/*xl:w-[89.5%] lg:w-4/5 w-full h-full*/}
            <main className="xl:w-full lg:w-full w-full h-full overflow-hidden">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
