import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// componentes
import Header from "./pages/Header";

import StairsTransition from "./pages/StairsTransition";
import Stairs from "./pages/Stairs";
import PageTransition from "./pages/PageTransition";

import { motion } from "framer-motion";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Ale. | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <div>
          <Header />
          
          <PageTransition>{children}</PageTransition>
        </div>
        
        
        
      </body>
    </html>
  );
}
