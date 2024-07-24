import type { Metadata } from "next";
import Container from "@/ui/container";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bookstore",
  description: "Next.js demo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
