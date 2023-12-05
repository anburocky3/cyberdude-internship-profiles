"use client";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"bg-gray-50 min-h-screen"}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
