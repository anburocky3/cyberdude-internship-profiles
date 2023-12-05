import type { Metadata } from "next";
import "./globals.css";
import TheNavbar from "@/components/TheNavbar";

export const metadata: Metadata = {
  // title: "CyberDude Internship Profiles",
  title: {
    template: "%s | CyberDude Internships",
    default: "CyberDude Internships", // a default is required when creating a template
  },
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
      <body className={"bg-gray-50 min-h-screen"}>
        <TheNavbar />
        {children}
      </body>
    </html>
  );
}
