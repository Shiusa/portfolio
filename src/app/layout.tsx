import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import TabProvider from "@/context/TabProvider";
import ToggleBtn from "@/components/ToggleBtn";
import ToggleNavbarProvider from "@/context/ToggleNavbarProvider";
import SideBar from "@/components/SideBar";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-mauveNeonClair relative`}
      >
        <TabProvider>
          <ToggleNavbarProvider>
            {/*h-[96%] w-full flex flex-col lg:flex-row columns-1 xl:columns-2*/}
            <div className="h-full w-full flex flex-col lg:flex-row columns-1 lg:columns-2 overflow-hidden">
              <SideBar />
              {/*w-[90%]*/}
              <div className="w-full h-screen overflow-hidden">
                <Header />
                {/*xl:w-[89.5%] lg:w-4/5 w-full h-full*/}
                <main className="xl:w-full lg:w-full w-full h-full overflow-hidden">
                  {children}
                </main>
                <div className="absolute bottom-8 right-8 z-30 flex items-center justify-center lg:hidden bg-bleuNeon rounded-sm full h-12 w-12">
                  <ToggleBtn />
                </div>
              </div>
            </div>
          </ToggleNavbarProvider>
        </TabProvider>

      </body>
    </html>
  );
}
