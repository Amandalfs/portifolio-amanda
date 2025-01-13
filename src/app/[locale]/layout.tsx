import type { Metadata } from "next";
import { Heebo, Kalam } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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

export default async function RootLayout({
  children,
  params,
}:{
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}) {

  const locale = (await params).locale;

  if (!routing.locales.includes(locale as string)) {
    notFound();
  }

  const messages = await getMessages(); 

  if(locale){
    return (
      <html lang={locale}>
        <link rel="icon" href="/avatar.svg" sizes="any" />
        <body
          className={`${heebo.variable} ${kalam.variable} antialiased`}
        >
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              disableTransitionOnChange
              >
              <main className="w-screen h-screen bg-surfaceBackground-light dark:bg-surfaceBackground-dark text-textPrimary-light dark:text-textPrimary-dark">
                <Header />
                {children}
                <Footer />
              </main>
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    );
  }
 
}
