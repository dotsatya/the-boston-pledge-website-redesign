import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Boston Pledge | Empowering Grassroots Equity & Global Public Service",
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
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
