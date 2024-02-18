// RootLayout.js
import "../public/css/style.css";
import "../public/css/notification.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
console.log("called layout");
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  metadata,
}: {
  children: React.ReactNode | string | null | undefined;
  metadata: Metadata;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          media="screen"
        />
        <script
          src="https://code.jquery.com/jquery-3.7.0.min.js"
          integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g="
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"
          integrity="sha256-lSjKY0/srUM9BE3dPm+c4fBo1dky2v27Gdjm2uoZaL0="
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="home">
        <section className="section--bg section--bg-grey-gradient">
          <Navigation />
        </section>
        {children}
        <Footer />
        <script src="/js/main.js" />
      </body>
    </html>
  );
}
