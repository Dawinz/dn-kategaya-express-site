import { CheckCircle, AlertTriangle, Info } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using our services
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Terms Content */}
        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                1. Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                By accessing and using the DN Kategaya Express website and services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p className="text-gray-700">
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="w-5 h-5 text-blue-600 mr-2" />
                2. Service Description
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                DN Kategaya Express provides bus transportation services across Tanzania. Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Online bus ticket booking</li>
                <li>Seat selection and reservation</li>
                <li>Payment processing</li>
                <li>Customer support and assistance</li>
                <li>Travel information and updates</li>
              </ul>
            </CardContent>
          </Card>

          {/* Booking and Payment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                3. Booking and Payment Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Booking Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Valid government-issued identification</li>
                    <li>Complete passenger information</li>
                    <li>Valid payment method</li>
                    <li>Acceptance of terms and conditions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Payment:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>All prices are in Ugandan Shillings (UGX)</li>
                    <li>Payment must be completed before ticket confirmation</li>
                    <li>We accept major credit cards and mobile money</li>
                    <li>Prices are subject to change without notice</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cancellation and Refunds */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                4. Cancellation and Refund Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cancellation Deadlines:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Free cancellation up to 24 hours before departure</li>
                    <li>50% refund for cancellations 2-24 hours before departure</li>
                    <li>No refund for cancellations less than 2 hours before departure</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Refund Process:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Refunds are processed within 5-7 business days</li>
                    <li>Refunds are issued to the original payment method</li>
                    <li>Processing fees may apply</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Passenger Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="w-5 h-5 text-blue-600 mr-2" />
                5. Passenger Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Arrive at least 30 minutes before departure time</li>
                <li>Carry valid identification documents</li>
                <li>Follow safety instructions and regulations</li>
                <li>Respect other passengers and staff</li>
                <li>Comply with luggage restrictions</li>
                <li>Notify staff of any special assistance needs</li>
              </ul>
            </CardContent>
          </Card>

          {/* Liability and Limitations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                6. Liability and Limitations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  DN Kategaya Express is not liable for delays, cancellations, or schedule changes due to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Weather conditions</li>
                  <li>Road conditions or traffic</li>
                  <li>Mechanical issues</li>
                  <li>Government regulations</li>
                  <li>Force majeure events</li>
                </ul>
                <p className="text-gray-700">
                  Our liability is limited to the ticket price paid by the passenger.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Privacy and Data */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="w-5 h-5 text-blue-600 mr-2" />
                7. Privacy and Data Protection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We collect and process personal data in accordance with our Privacy Policy and applicable data protection laws.
              </p>
              <p className="text-gray-700">
                By using our services, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                8. Changes to Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                DN Kategaya Express reserves the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of the modified terms.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="w-5 h-5 text-blue-600 mr-2" />
                9. Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-700">
                <p><strong>DN Kategaya Express</strong></p>
                <p>Operator ID: 2898390482</p>
                <p>Email: legal@dnkategaya.com</p>
                <p>Phone: +255 XXX XXX XXX</p>
                <p>Address: Plot 123, Main Street, Dar es Salaam, Tanzania</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  )
}
