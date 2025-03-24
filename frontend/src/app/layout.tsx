import { Navigation } from "@/components/Navigation";
import "../styles/globals.css";

import type { Metadata } from "next";
import { CLUB_NAME } from "@/lib/consts";

export const metadata: Metadata = {
  title: CLUB_NAME,
  description: "Sports Team Manager.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
