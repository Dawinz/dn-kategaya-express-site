"use client"

import { useParams } from "next/navigation"
import { Bus, Calendar, Clock, MapPin, User, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

// Mock ticket data
const mockTicket = {
  reference: "DNK-2024-001",
  passengerName: "John Doe",
  from: "Dar es Salaam",
  to: "Arusha",
  departureDate: "2024-01-15",
  departureTime: "08:00",
  arrivalTime: "12:30",
  seatNumber: "A12",
  busNumber: "DNK-001",
  price: 45000,
  bookingDate: "2024-01-10",
  status: "Confirmed"
}

export default function TicketPage() {
  const params = useParams()
  const reference = params.reference

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 print:bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Print Button - Hidden when printing */}
        <div className="text-center mb-8 print:hidden">
          <Button onClick={handlePrint} className="bg-gradient-primary hover:opacity-90">
            <CreditCard className="w-4 h-4 mr-2" />
            Print Ticket
          </Button>
        </div>

        {/* Ticket */}
        <Card className="print:shadow-none print:border-2 print:border-gray-300">
          <CardHeader className="text-center border-b-2 border-gray-200 pb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                <Bus className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gradient">DN Kategaya Express</h1>
                <p className="text-gray-600">Your Journey, Our Priority</p>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Bus Ticket</h2>
              <p className="text-lg text-gray-600">Reference: {reference}</p>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            {/* Ticket Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <User className="w-5 h-5 text-primary-red mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Passenger Name</div>
                    <div className="font-semibold">{mockTicket.passengerName}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-yellow mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">From</div>
                    <div className="font-semibold">{mockTicket.from}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-blue mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">To</div>
                    <div className="font-semibold">{mockTicket.to}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-primary-red mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Travel Date</div>
                    <div className="font-semibold">{mockTicket.departureDate}</div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary-yellow mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Departure Time</div>
                    <div className="font-semibold">{mockTicket.departureTime}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary-blue mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Arrival Time</div>
                    <div className="font-semibold">{mockTicket.arrivalTime}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Bus className="w-5 h-5 text-primary-red mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Bus Number</div>
                    <div className="font-semibold">{mockTicket.busNumber}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <User className="w-5 h-5 text-primary-yellow mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Seat Number</div>
                    <div className="font-semibold">{mockTicket.seatNumber}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price and Status */}
            <div className="border-t-2 border-gray-200 pt-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-sm text-gray-600">Total Amount</div>
                  <div className="text-2xl font-bold text-primary-red">
                    UGX {mockTicket.price.toLocaleString()}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Status</div>
                  <div className="text-lg font-semibold text-green-600">{mockTicket.status}</div>
                </div>
              </div>
            </div>

            {/* Important Information */}
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg print:bg-yellow-50">
              <h3 className="font-semibold text-yellow-800 mb-2">Important Information:</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Please arrive at least 30 minutes before departure</li>
                <li>• Bring a valid ID for verification</li>
                <li>• This ticket is non-transferable</li>
                <li>• Operator ID: 2898390482</li>
                <li>• For support, contact: +256 XXX XXX XXX</li>
              </ul>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Thank you for choosing DN Kategaya Express</p>
              <p>Safe travels!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
