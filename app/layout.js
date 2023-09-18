import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components";
import { Menu } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thomas T Bunker DDS, PC",
  description: "Thomas T Bunker DDS, PC Restorative and Cosmetic Dentistry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Menu />
        {children}
      </body>
    </html>
  );
}
