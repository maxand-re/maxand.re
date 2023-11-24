import type {Metadata} from 'next'
import {Roboto_Condensed} from 'next/font/google'
import localFont from "next/font/local";

import React from "react";

import '../assets/styles/globals.css'
import NavBar from "@/components/NavBar/NavBar";

const roboto = Roboto_Condensed({variable: "--font-roboto", subsets: ['latin']});
const qalisha = localFont({variable: "--font-qalisha", src: '../assets/fonts/QalishaSignatureSerif.ttf'});

export const metadata: Metadata = {
    title: 'Maxandre',
    description: 'Software Engineering Student.',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${roboto.variable} ${qalisha.variable} font-sans bg-purple-400 text-white`}>
            <NavBar/>

            <main>
                {children}
            </main>
        </body>
        </html>
    )
}
