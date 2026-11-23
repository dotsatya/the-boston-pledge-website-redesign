import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";

export const metadata: Metadata = {
  title:
    "The Boston Pledge | Empowering Grassroots Equity & Global Public Service",
  description:
    "The Boston Pledge (TBP) is a 501(c)(3) non-profit organization fostering sustainable socio-economic development, grassroots entrepreneurship, and global citizenship.",
  keywords: [
    "The Boston Pledge",
    "Non-profit",
    "Grassroots entrepreneurship",
    "ESP",
    "EdSP",
    "Rural Innovation",
    "Social Equity",
    "Dr Partha Ghosh",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth overflow-x-hidden" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-[#FAF8F5] text-[#1E231C] antialiased selection:bg-[#414D3C] selection:text-white overflow-x-hidden max-w-full" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 overflow-x-hidden w-full">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
