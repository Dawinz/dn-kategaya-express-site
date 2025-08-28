import { RefreshCw, Clock, AlertTriangle, CheckCircle, XCircle, Info } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund Policy</h1>
          <p className="text-xl text-gray-600">
            Understanding our cancellation and refund procedures
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Refund Content */}
        <div className="space-y-8">
          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="w-5 h-5 text-blue-600 mr-2" />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                At DN Kategaya Express, we understand that travel plans can change. This refund policy outlines the terms and conditions for cancellations and refunds of our bus ticket services.
              </p>
              <p className="text-gray-700">
                We strive to provide fair and transparent refund policies while maintaining the sustainability of our services.
              </p>
            </CardContent>
          </Card>

          {/* Cancellation Deadlines */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 text-blue-600 mr-2" />
                Cancellation Deadlines and Refund Amounts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-green-800 mb-1">24+ Hours</h4>
                    <p className="text-sm text-green-700">100% Refund</p>
                    <p className="text-xs text-green-600 mt-1">Free cancellation</p>
                  </div>
                  
                  <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <AlertTriangle className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-yellow-800 mb-1">2-24 Hours</h4>
                    <p className="text-sm text-yellow-700">50% Refund</p>
                    <p className="text-xs text-yellow-600 mt-1">Partial refund</p>
                  </div>
                  
                  <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                    <XCircle className="w-12 h-12 text-red-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-red-800 mb-1">Less than 2 Hours</h4>
                    <p className="text-sm text-red-700">No Refund</p>
                    <p className="text-xs text-red-600 mt-1">Non-refundable</p>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 text-center">
                  <p>All times are based on the scheduled departure time of your bus.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Refund Process */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <RefreshCw className="w-5 h-5 text-green-600 mr-2" />
                Refund Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Step-by-Step Process:</h4>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                    <li>Contact our customer service team via phone or email</li>
                    <li>Provide your booking reference and cancellation reason</li>
                    <li>Our team will verify eligibility and calculate refund amount</li>
                    <li>Refund will be processed to your original payment method</li>
                    <li>You will receive confirmation via email and SMS</li>
                  </ol>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Processing Time:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Credit/Debit Cards: 5-7 business days</li>
                    <li>• Mobile Money: 2-3 business days</li>
                    <li>• Bank Transfers: 3-5 business days</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Eligible Cancellation Reasons */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                Eligible Cancellation Reasons
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 mb-4">
                  The following reasons are generally accepted for cancellations:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Change in travel plans or personal circumstances</li>
                  <li>Medical emergencies (with documentation)</li>
                  <li>Death in the family (with documentation)</li>
                  <li>Government travel restrictions or advisories</li>
                  <li>Natural disasters or severe weather conditions</li>
                  <li>Bus service cancellation by DN Kategaya Express</li>
                  <li>Significant schedule changes (more than 2 hours)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Non-Refundable Situations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <XCircle className="w-5 h-5 text-red-600 mr-2" />
                Non-Refundable Situations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 mb-4">
                  Refunds will not be provided in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>No-show at departure time</li>
                  <li>Cancellation less than 2 hours before departure</li>
                  <li>Failure to provide required identification</li>
                  <li>Violation of company policies or regulations</li>
                  <li>Fraudulent booking or payment</li>
                  <li>Passenger behavior issues</li>
                  <li>Luggage exceeding weight limits</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Special Circumstances */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="w-5 h-5 text-purple-600 mr-2" />
                Special Circumstances
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Medical Emergencies:</h4>
                  <p className="text-gray-700 mb-2">
                    Full refunds may be provided for medical emergencies with proper documentation (doctor&apos;s note, hospital records, etc.).
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Government Restrictions:</h4>
                  <p className="text-gray-700 mb-2">
                    Full refunds are provided when travel is restricted by government orders or advisories.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Disruptions:</h4>
                  <p className="text-gray-700">
                    Full refunds are provided when DN Kategaya Express cancels or significantly delays services due to operational issues.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Refund Methods */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <RefreshCw className="w-5 h-5 text-green-600 mr-2" />
                Refund Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 mb-4">
                  Refunds are processed using the same payment method used for the original booking:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Credit/Debit Cards:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Refunded to original card</li>
                      <li>• Processing time: 5-7 business days</li>
                      <li>• May appear as pending initially</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Mobile Money:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Refunded to original mobile money account</li>
                      <li>• Processing time: 2-3 business days</li>
                      <li>• SMS notification sent</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Processing Fees */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                Processing Fees and Charges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Information:</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• No processing fees for cancellations 24+ hours before departure</li>
                    <li>• 5% processing fee for cancellations 2-24 hours before departure</li>
                    <li>• Third-party payment processor fees may apply</li>
                    <li>• Currency conversion fees may apply for international cards</li>
                  </ul>
                </div>
                
                <p className="text-gray-700">
                  All fees are clearly communicated during the cancellation process, and you will receive a detailed breakdown of your refund amount.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="w-5 h-5 text-blue-600 mr-2" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-700">
                <p><strong>DN Kategaya Express</strong></p>
                <p>Operator ID: 2898390482</p>
                <p>Refund Inquiries: refunds@dnkategaya.com</p>
                <p>Customer Service: +255 XXX XXX XXX</p>
                <p>Emergency Line: +255 XXX XXX XXX</p>
                <p>Address: Plot 123, Main Street, Dar es Salaam, Tanzania</p>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="w-5 h-5 text-purple-600 mr-2" />
                Dispute Resolution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                If you disagree with a refund decision, please contact our customer service team. We will review your case and provide a detailed explanation. For unresolved disputes, you may escalate to our management team or contact relevant consumer protection authorities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            This refund policy is subject to change. Please check our website regularly for updates.
          </p>
        </div>
      </div>
    </div>
  )
}
