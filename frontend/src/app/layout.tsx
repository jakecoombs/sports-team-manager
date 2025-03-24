import { NavigationMenuDemo } from "@/components/Navigation";
import "../styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docker Next.js Template",
  description: "A dockerized next.js web application.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavigationMenuDemo />
        <main>{children}</main>
      </body>
    </html>
  );
}
