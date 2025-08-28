"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <Image
                src="/images/logo.jpeg"
                alt="DN Kategaya Express Logo"
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gradient">DN Kategaya Express</h1>
              <p className="text-sm text-gray-600">Your Journey, Our Priority</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-red transition-colors font-medium">
              Home
            </Link>
            <Link href="/support" className="text-gray-700 hover:text-primary-red transition-colors font-medium">
              Support
            </Link>
            <Link href="/policy/terms" className="text-gray-700 hover:text-primary-red transition-colors font-medium">
              Terms
            </Link>
            <Link href="/policy/privacy" className="text-gray-700 hover:text-primary-red transition-colors font-medium">
              Privacy
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-red hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary-red transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/support" 
                className="text-gray-700 hover:text-primary-red transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
              <Link 
                href="/policy/terms" 
                className="text-gray-700 hover:text-primary-red transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms
              </Link>
              <Link 
                href="/policy/privacy" 
                className="text-gray-700 hover:text-primary-red transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
