import type { Metadata } from "next";
import { Heebo, Kalam } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";

const heebo = Heebo({
  variable: "--font-heebo-sans",
  subsets: ["latin"],
})

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "Portfolio amanda",
  description: "Portfolio amanda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${heebo.variable} ${kalam.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
