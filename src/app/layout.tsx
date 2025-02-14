import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://valentine-delta-six.vercel.app"),
  title: "Valentine's Day Special ❤️",
  description: "Send virtual kisses and spread the love this Valentine's Day!",
  keywords: ["Valentine", "Love", "Romance", "Virtual Kiss"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Valentine's Day Special ❤️",
    description: "Send virtual kisses and spread the love this Valentine's Day!",
    url: "https://valentine-delta-six.vercel.app",
    siteName: "Valentine's Day Special",
    images: [
      {
        url: "/icon.png", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Valentine's Day Special Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentine's Day Special ❤️",
    description: "Send virtual kisses and spread the love this Valentine's Day!",
    images: ["/valentine-share.png"], // Same image as OpenGraph
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png", // Add a 192x192 PNG icon
        type: "image/png",
        sizes: "192x192",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png", // Add a 180x180 PNG icon for Apple devices
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json", // Optional: For PWA support
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

