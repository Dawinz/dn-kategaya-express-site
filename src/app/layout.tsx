import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DN Kategaya Express - Your Journey, Our Priority",
  description: "Book bus tickets with DN Kategaya Express. Safe, comfortable, and reliable bus transportation across Tanzania.",
  keywords: "bus tickets, Tanzania, transportation, DN Kategaya, express bus",
  authors: [{ name: "DN Kategaya Express" }],
  creator: "DN Kategaya Express",
  publisher: "DN Kategaya Express",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dnkategaya.com",
    title: "DN Kategaya Express - Your Journey, Our Priority",
    description: "Book bus tickets with DN Kategaya Express. Safe, comfortable, and reliable bus transportation across Tanzania.",
    siteName: "DN Kategaya Express",
  },
  twitter: {
    card: "summary_large_image",
    title: "DN Kategaya Express - Your Journey, Our Priority",
    description: "Book bus tickets with DN Kategaya Express. Safe, comfortable, and reliable bus transportation across Tanzania.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
