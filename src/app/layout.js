import localFont from "next/font/local";
import "./globals.css";
import Provider from "./Provider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "FLUX.1",
  description: "FLUX.1: Revolutionary AI Image Generation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
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
