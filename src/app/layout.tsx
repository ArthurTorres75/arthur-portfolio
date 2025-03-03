"use client";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./lib/i18n";
import { AppProvider } from "./context/AppContext";
import "./globals.css";
import Footer from "./components/Layout/Footer";
import { Header } from "./components/Layout/Header";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en">
        <body
          className={`${roboto.variable} ${robotoMono.variable} antialiased bg-gradient-to-b from-blue-500 to-black min-h-screen text-white`}
        >
          <Header />
          <main className="flex-grow p-4 sm:p-8">{children}</main>
          <Footer />
        </body>
      </html>
    </AppProvider>
  );
}

export default RootLayout;
