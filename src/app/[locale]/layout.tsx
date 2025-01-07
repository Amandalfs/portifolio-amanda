import type { Metadata } from "next";
import { Heebo, Kalam } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

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
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {

  if (!routing.locales.includes(locale as string)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <link rel="icon" href="/avatar.png" sizes="any" />
      <body
        className={`${heebo.variable} ${kalam.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
            >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
