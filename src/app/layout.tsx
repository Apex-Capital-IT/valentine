import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Valentine's Day Special",
  description: "Send a virtual kiss to your loved ones this Valentine's Day!",
  openGraph: {
    title: "Valentine's Day Special",
    description: "Send a virtual kiss to your loved ones this Valentine's Day!",
    images: [
      {
        url: "/1.webp",
        width: 1200,
        height: 630,
        alt: "Valentine's Day Special",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentine's Day Special",
    description: "Send a virtual kiss to your loved ones this Valentine's Day!",
    images: ["/valentine-share.png"],
  },
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

