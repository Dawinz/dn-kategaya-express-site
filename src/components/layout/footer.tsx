import Link from "next/link"
import { Bus } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Bus className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">DN Kategaya Express</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for safe and comfortable bus transportation across Tanzania. 
              We connect communities with reliable, affordable, and punctual bus services.
            </p>
            <p className="text-sm text-gray-400">
              Operator ID: 2898390482
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/policy/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/policy/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Customer Service</li>
              <li>24/7 Support</li>
              <li>Email: info@dnkategaya.com</li>
              <li>Phone: +255 XXX XXX XXX</li>
              <li>Address: Dar es Salaam, Tanzania</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} DN Kategaya Express. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
