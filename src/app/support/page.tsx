import { Mail, Phone, Clock, MapPin, HelpCircle, MessageCircle, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "How do I book a bus ticket?",
    answer: "You can book a bus ticket through our website by selecting your departure and destination cities, travel date, and number of passengers. Then choose your preferred bus and complete the payment."
  },
  {
    question: "Can I cancel or modify my booking?",
    answer: "Yes, you can cancel or modify your booking up to 2 hours before departure. Please contact our customer service for assistance."
  },
  {
    question: "What documents do I need to travel?",
    answer: "You need a valid government-issued ID (National ID, Passport, or Driving License) and your printed ticket or mobile ticket."
  },
  {
    question: "How early should I arrive at the bus station?",
    answer: "We recommend arriving at least 30 minutes before your scheduled departure time to complete check-in procedures."
  },
  {
    question: "What happens if my bus is delayed?",
    answer: "In case of delays, we will notify you via SMS or phone call. We strive to minimize delays and keep passengers informed of any schedule changes."
  },
  {
    question: "Are there luggage restrictions?",
    answer: "Each passenger is allowed one carry-on bag and one checked luggage (maximum 20kg). Additional luggage may incur extra charges."
  }
]

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support & Help</h1>
          <p className="text-xl text-gray-600">
            We&apos;re here to help you with any questions or concerns
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Phone className="w-12 h-12 text-primary-red mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-3">24/7 Customer Service</p>
              <p className="text-primary-red font-semibold">+255 XXX XXX XXX</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Mail className="w-12 h-12 text-primary-yellow mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600 mb-3">Get help via email</p>
              <p className="text-primary-yellow font-semibold">support@dnkategaya.com</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="w-12 h-12 text-primary-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-600 mb-3">Monday - Sunday</p>
              <p className="text-primary-blue font-semibold">6:00 AM - 10:00 PM</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <MapPin className="w-12 h-12 text-primary-red mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Main Office</h3>
              <p className="text-gray-600 mb-3">Dar es Salaam, Tanzania</p>
              <p className="text-primary-red font-semibold">Plot 123, Main Street</p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <HelpCircle className="w-5 h-5 text-primary-red mr-2" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <MessageCircle className="w-16 h-16 text-primary-yellow mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Chat with our customer service representatives in real-time
              </p>
              <Button variant="outline" className="w-full">
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <FileText className="w-16 h-16 text-primary-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Documentation</h3>
              <p className="text-gray-600 mb-4">
                Access our comprehensive guides and documentation
              </p>
              <Button variant="outline" className="w-full">
                View Docs
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <Mail className="w-16 h-16 text-primary-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Submit Ticket</h3>
              <p className="text-gray-600 mb-4">
                Submit a support ticket for complex issues
              </p>
              <Button variant="outline" className="w-full">
                Submit Ticket
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-red-800 mb-2">
                  Emergency Support
                </h3>
                <p className="text-red-700 mb-4">
                  For urgent matters or travel emergencies, call our 24/7 emergency line
                </p>
                                  <div className="text-2xl font-bold text-red-600">
                    +255 XXX XXX XXX
                  </div>
                <p className="text-sm text-red-600 mt-2">
                  Available 24 hours a day, 7 days a week
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
