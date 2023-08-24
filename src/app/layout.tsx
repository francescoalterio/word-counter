import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fran Word Counter",
  description: "Word counter for tasks and jobs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full min-h-screen bg-gray-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
