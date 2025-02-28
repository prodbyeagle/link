import type React from "react"
import type {Metadata} from "next"
import {Geist} from "next/font/google"
import "./globals.css"

const geist = Geist({subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Personal Link Aggregator",
    description: "Share all your important links in one place",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body className={geist.className}>{children}</body>
        </html>
    )
}

