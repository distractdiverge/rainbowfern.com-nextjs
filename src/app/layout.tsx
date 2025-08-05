import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-cols-12 gap-0 justify-stretch align-stretch min-h-screen grid-rows-[48px_auto_73px] md:grid-rows-[72px_auto_73px]">
            <div className="col-span-12">
                <HeaderComponent />
              </div>
            <div className="hidden md:block md:col-span-1">&nbsp;</div>
            <div className="col-span-12 md:col-span-10 p-2 lg:p-4">
              {children}
            </div>
            <div className="hidden md:block md:col-span-1"></div>
            <div className="col-span-12">
              <FooterComponent />
            </div>
        </div>
      </body>
    </html>
  );
}
