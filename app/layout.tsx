"use client";

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/Components/Header";
import PageTransition from "@/Components/PageTransition";
import StairTransition from "@/Components/StairTransition.";
import Home from "./page";
import { usePathname } from "next/navigation";


const JetBrainsMono = JetBrains_Mono({
   subsets: ["latin"],
   weight:["100","200","300","400","500","600","700","800"],
   variable: "--font-jetBrainsMono",
 });

export const Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        </body>
    </html>
  );
}
