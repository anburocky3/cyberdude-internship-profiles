import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TheNavbar from "./components/TheNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CyberDude Internship Profiles",
  description:
    "People learning FullStack Engineer by free internship provided by CyberDude Networks Private Limited.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(inter.className, "bg-gray-50 min-h-screen")}>
        {/* header */}
        <TheNavbar />

        {children}
      </body>
    </html>
  );
}
