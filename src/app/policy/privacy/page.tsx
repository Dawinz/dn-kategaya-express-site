import { Shield, Eye, Lock, Database, UserCheck, Bell, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            How we collect, use, and protect your personal information
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Privacy Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 text-green-600 mr-2" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                DN Kategaya Express (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy and ensuring the security of your personal information.
              </p>
              <p className="text-gray-700">
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="w-5 h-5 text-blue-600 mr-2" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personal Information:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Full name and contact details</li>
                    <li>Government-issued identification numbers</li>
                    <li>Payment information</li>
                    <li>Travel preferences and history</li>
                    <li>Emergency contact information</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Information:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Website usage data and cookies</li>
                    <li>Location data (with consent)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-5 h-5 text-purple-600 mr-2" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Process and confirm your bus ticket bookings</li>
                  <li>Provide customer support and assistance</li>
                  <li>Send booking confirmations and travel updates</li>
                  <li>Process payments and issue refunds</li>
                  <li>Improve our services and user experience</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Send marketing communications (with consent)</li>
                  <li>Ensure safety and security of our services</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 text-orange-600 mr-2" />
                Information Sharing and Disclosure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>With payment processors to complete transactions</li>
                  <li>With government authorities when required by law</li>
                  <li>With our service providers who assist in operations</li>
                  <li>In emergency situations for safety purposes</li>
                  <li>With your explicit consent</li>
                </ul>
                <p className="text-gray-700">
                  All third-party service providers are bound by confidentiality agreements and data protection requirements.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="w-5 h-5 text-green-600 mr-2" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
                <p className="text-gray-700">
                  While we strive to protect your information, no method of transmission over the internet is 100% secure.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="w-5 h-5 text-blue-600 mr-2" />
                Data Retention
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 mb-4">We retain your personal information for as long as necessary to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Provide our services and fulfill bookings</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Improve our services</li>
                </ul>
                <p className="text-gray-700">
                  Generally, we retain booking information for 7 years and other data for 3 years after your last interaction with us.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserCheck className="w-5 h-5 text-purple-600 mr-2" />
                Your Rights and Choices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Access and review your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Lodge a complaint with supervisory authorities</li>
                </ul>
                <p className="text-gray-700">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies and Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 text-yellow-600 mr-2" />
                Cookies and Tracking Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 mb-4">
                  We use cookies and similar technologies to enhance your experience:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand usage patterns</li>
                  <li>Preference cookies to remember your settings</li>
                  <li>Marketing cookies (with consent)</li>
                </ul>
                <p className="text-gray-700">
                  You can control cookie settings through your browser preferences.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 text-green-600 mr-2" />
                Children&apos;s Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </CardContent>
          </Card>

          {/* International Transfers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 text-orange-600 mr-2" />
                International Data Transfers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Your personal information is primarily processed in Tanzania. If we transfer your information to other countries, we ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 text-yellow-600 mr-2" />
                Changes to This Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the &ldquo;Last updated&rdquo; date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserCheck className="w-5 h-5 text-purple-600 mr-2" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-700">
                <p><strong>DN Kategaya Express</strong></p>
                <p>Operator ID: 2898390482</p>
                <p>Data Protection Officer: privacy@dnkategaya.com</p>
                <p>General Inquiries: info@dnkategaya.com</p>
                <p>Phone: +255 XXX XXX XXX</p>
                <p>Address: Plot 123, Main Street, Dar es Salaam, Tanzania</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us.
          </p>
        </div>
      </div>
    </div>
  )
}
