import localFont from "next/font/local";
import "./globals.css";
import Provider from "./Provider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

export const metadata = {
  title: "FLUX.1",
  description: "FLUX.1: Revolutionary AI Image Generation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/src/images/logo.png" />
      </Head>
      <body
        suppressHydrationWarning={true}
        className={` antialiased className="bg-primary min-h-screen font-sf text-black "`}
      >
        <Provider>
          <Navbar />

          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
