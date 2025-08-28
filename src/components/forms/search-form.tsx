"use client"

import { useState } from "react"

import { MapPin, Calendar, Users, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Type declaration for SafariPlus
declare global {
  interface Window {
    SafariPlus: {
      init: (config: {
        operatorId: string;
        elementId: string;
        language: string;
        currency: string;
        theme: {
          primary: string;
          secondary: string;
          accent: string;
        };
        searchParams?: {
          from: string;
          to: string;
          date: string;
          passengers: number;
        };
        onPaymentSuccess: (booking: { reference: string }) => void;
        onPaymentFailure: (error: unknown) => void;
      }) => void;
    };
  }
}

export function SearchForm() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    passengers: "1"
  })
  const [showBooking, setShowBooking] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Show the SafariPlus booking widget immediately
    setShowBooking(true)
    
    // Initialize SafariPlus with the search parameters
    if (typeof window !== 'undefined' && window.SafariPlus) {
      window.SafariPlus.init({
        operatorId: "2898390482",
        elementId: "safariplus-booking-widget",
        language: "en",
        currency: "TZS",
        theme: {
          primary: "#E10600",
          secondary: "#FFD700",
          accent: "#0057FF"
        },
        searchParams: {
          from: formData.from,
          to: formData.to,
          date: formData.date,
          passengers: parseInt(formData.passengers)
        },
        onPaymentSuccess: (booking: { reference: string }) => {
          window.location.href = "/tickets/" + booking.reference;
        },
        onPaymentFailure: (error: unknown) => {
          console.error("Payment error:", error);
        }
      });
    }
  }

  const popularCities = [
    "Dar es Salaam", "Arusha", "Mwanza", "Dodoma", "Tanga", 
    "Morogoro", "Iringa", "Mbeya", "Songea", "Kigoma"
  ]

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* From */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-primary-red" />
              From
            </label>
            <Select value={formData.from} onValueChange={(value) => setFormData({...formData, from: value})}>
              <SelectTrigger className="input-field">
                <SelectValue placeholder="Select departure city" />
              </SelectTrigger>
              <SelectContent>
                {popularCities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* To */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-primary-blue" />
              To
            </label>
            <Select value={formData.to} onValueChange={(value) => setFormData({...formData, to: value})}>
              <SelectTrigger className="input-field">
                <SelectValue placeholder="Select destination city" />
              </SelectTrigger>
              <SelectContent>
                {popularCities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-primary-yellow" />
              Travel Date
            </label>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="input-field"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Passengers */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center">
              <Users className="w-4 h-4 mr-2 text-primary-red" />
              Passengers
            </label>
            <Select value={formData.passengers} onValueChange={(value) => setFormData({...formData, passengers: value})}>
              <SelectTrigger className="input-field">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? 'Passenger' : 'Passengers'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Search Button */}
        <div className="text-center">
          <Button 
            type="submit" 
            className="btn-primary text-lg px-8 py-4 w-full md:w-auto"
            disabled={!formData.from || !formData.to || !formData.date}
          >
            <CreditCard className="w-5 h-5 mr-2" />
            Search & Book Now
          </Button>
        </div>

        {/* Quick Tips */}
        <div className="text-center text-sm text-gray-600">
          <p>💡 <strong>Tip:</strong> Book early for the best prices and seat selection</p>
        </div>
      </form>

      {/* SafariPlus Booking Widget */}
      {showBooking && (
        <div className="mt-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              SafariPlus Booking
            </h3>
            <p className="text-blue-800 mb-4">
              Complete your booking with seat selection and payment below.
            </p>
          </div>

          <div id="safariplus-booking-widget" className="min-h-[600px] bg-white border-2 border-gray-200 rounded-lg p-8">
            <div className="text-center text-gray-500">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-red mx-auto mb-4"></div>
              <p>Loading SafariPlus booking widget...</p>
            </div>
          </div>
        </div>
      )}


    </div>
  )
}
