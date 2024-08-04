import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pantry Tracker App",
  description: "This app helps to track the inventory level.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
