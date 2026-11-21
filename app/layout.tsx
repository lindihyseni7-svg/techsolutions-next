import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Solutions | Intelligent Operations Studio",
  description:
    "A modern animated landing page for HR, payroll, employee records and operational intelligence.",
  keywords: [
    "Tech Solutions",
    "HR platform",
    "operations management",
    "employee management",
    "payroll automation"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
