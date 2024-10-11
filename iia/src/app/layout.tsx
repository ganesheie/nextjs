import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Payment Tracking System",
  description: "Payment Tracking System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`{inter.className} bg-gray-200`}>
        <main>
          <SideBar />
          <div className="p-4 xl:ml-80">{children}</div>
        </main>
      </body>
    </html>
  );
}
