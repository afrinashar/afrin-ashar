import type { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import { Inter } from "next/font/google";
import CommandPalette from "@/components/CommandPalette/CommandPalette";
import ThemeCustomizer from "@/components/ThemeCustomizer/ThemeCustomizer";
import GAListener from "@/components/GAListener";
import { metadataConfig } from "./metadata";
import "./globals.css";

export const metadata: Metadata = metadataConfig;

// Font loaders must be called in module scope per Next.js rules
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.variable}`} lang="en" suppressHydrationWarning>
      <body className="min-h-screen relative text-slate-900 antialiased transition-colors duration-300">
        <ThemeProvider>
          <CommandPalette />
          <ThemeCustomizer />
          <GAListener />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}