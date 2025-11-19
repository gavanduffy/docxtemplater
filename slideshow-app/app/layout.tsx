import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Document Template Processor",
  description: "Upload DOCX or PPTX templates and fill them with JSON data using docxtemplater",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
