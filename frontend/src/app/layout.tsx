import "../styles/globals.css";

import { Toaster } from "@/components/ui/sonner";
import { CLUB_NAME } from "@/lib/consts";
import type { Metadata } from "next";

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
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
