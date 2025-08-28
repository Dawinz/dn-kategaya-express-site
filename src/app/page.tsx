import Image from "next/image"
import { SearchForm } from "@/components/forms/search-form"
import { Clock, Shield, Users, MapPin, Star } from "lucide-react"


export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-red via-primary-yellow to-primary-blue text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Travel Across Tanzania
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your trusted partner for safe and comfortable bus transportation across Tanzania
          </p>
          <p className="text-lg opacity-90">
            Experience the beauty of Tanzania with reliable, punctual, and comfortable bus services
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Find Your Perfect Journey
            </h2>
            <SearchForm />
            

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose DN Kategaya Express?
            </h2>
            <p className="text-xl text-gray-600">
              We provide exceptional service with your safety and comfort as our top priority
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe Travel</h3>
              <p className="text-gray-600">
                Modern, well-maintained buses with experienced drivers for your safety
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Punctual Service</h3>
              <p className="text-gray-600">
                We value your time with reliable departure and arrival schedules
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer First</h3>
              <p className="text-gray-600">
                Dedicated customer service and support throughout your journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bus Images Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Modern Fleet
            </h2>
            <p className="text-xl text-gray-600">
              Travel in comfort with our well-maintained buses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/WhatsApp Image 2025-08-23 at 20.33.00.jpeg"
                alt="DN Kategaya Express Bus"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/WhatsApp Image 2025-08-23 at 20.31.43.jpeg"
                alt="DN Kategaya Express Bus Interior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/WhatsApp Image 2025-08-23 at 20.29.24.jpeg"
                alt="DN Kategaya Express Bus Service"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Routes
            </h2>
            <p className="text-xl text-gray-600">
              Travel to major cities across Tanzania
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { from: "Dar es Salaam", to: "Arusha" },
              { from: "Dar es Salaam", to: "Mwanza" },
              { from: "Dar es Salaam", to: "Dodoma" },
              { from: "Dar es Salaam", to: "Tanga" },
              { from: "Dar es Salaam", to: "Morogoro" },
              { from: "Dar es Salaam", to: "Iringa" },
              { from: "Dar es Salaam", to: "Mbeya" },
              { from: "Dar es Salaam", to: "Songea" }
            ].map((route, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <MapPin className="w-8 h-8 text-primary-red mx-auto mb-3" />
                <div className="font-semibold text-gray-900 mb-1">{route.from}</div>
                <div className="text-primary-red text-sm mb-2">→</div>
                <div className="font-semibold text-gray-900">{route.to}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary-yellow fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &ldquo;Excellent service! The buses are clean, comfortable, and always on time. Highly recommend!&rdquo;
              </p>
              <div className="font-semibold text-gray-900">- Sarah M.</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary-yellow fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &ldquo;Safe and reliable transportation. The drivers are professional and the journey was smooth.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">- John D.</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary-yellow fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &ldquo;Best bus service in Tanzania! Affordable prices and great customer service.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">- Maria K.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
