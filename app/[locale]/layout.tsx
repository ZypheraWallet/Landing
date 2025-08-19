import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { Toaster } from "@/components/ui/sonner"

import { notFound } from 'next/navigation';
import Navbar from '@/components/props/Navbar';

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import '../globals.css'

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();

    return (
        <html lang={locale} className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
            <body className='bg-gradient-to-t from-background to-black overflow-x-hidden'>
                <NextIntlClientProvider>
                    <Navbar />
                    <div className='max-lg:px-4'>
                        {children}
                    </div>
                    <Toaster />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}