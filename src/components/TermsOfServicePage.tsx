import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { 
  FileText, 
  Shield, 
  AlertTriangle, 
  Calendar,
  Scale,
  Users,
  Database,
  Zap,
  CreditCard,
  Lock,
  Globe,
  Camera,
  Code,
  Mail
} from 'lucide-react';

interface TermsOfServicePageProps {
  onContact?: () => void;
}

export function TermsOfServicePage({ onContact }: TermsOfServicePageProps) {
  const lastUpdated = "October 1, 2025";

  const serviceTerms = [
    {
      icon: Code,
      title: "API Usage",
      description: "Rate limits, quotas, and technical requirements",
      details: ["1,000 requests/hour free tier", "99.9% uptime SLA", "RESTful API access"]
    },
    {
      icon: Camera,
      title: "Content Policy",
      description: "What you can and cannot upload for analysis",
      details: ["Skateboarding videos only", "Max 100MB file size", "No inappropriate content"]
    },
    {
      icon: CreditCard,
      title: "Billing & Payment",
      description: "Subscription terms and payment policies",
      details: ["Monthly/annual billing", "30-day refund policy", "Enterprise custom pricing"]
    },
    {
      icon: Shield,
      title: "Data & Privacy",
      description: "How we handle your uploaded content",
      details: ["30-day video retention", "Encrypted processing", "No third-party sharing"]
    }
  ];

  const prohibitedUses = [
    "Uploading non-skateboarding content for analysis",
    "Attempting to reverse engineer our AI models",
    "Exceeding API rate limits through automated abuse",
    "Uploading copyrighted content without permission",
    "Using the service for illegal or harmful activities",
    "Sharing API credentials with unauthorized parties",
    "Scraping or bulk downloading service data",
    "Interfering with service infrastructure or security"
  ];

  const liability = [
    {
      title: "AI Model Accuracy",
      content: "Our AI models provide analysis based on current training data. Results may not be 100% accurate and should not be used as the sole basis for important decisions."
    },
    {
      title: "Service Availability", 
      content: "While we strive for 99.9% uptime, we cannot guarantee uninterrupted service. Scheduled maintenance will be announced in advance."
    },
    {
      title: "Data Loss",
      content: "We implement robust backup systems, but you are responsible for maintaining your own copies of important data uploaded to our service."
    },
    {
      title: "Third-Party Integrations",
      content: "We are not responsible for the availability or functionality of third-party services that integrate with our platform."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600 rounded-full">
              <Scale className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Legal terms and conditions governing your use of Trickbase AI services and platform.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="text-gray-400">Last updated: {lastUpdated}</span>
          </div>
        </div>

        <div className="space-y-12">
          {/* Agreement to Terms */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  By accessing and using Trickbase AI ("Service"), operated by Trickbase AI, Inc. ("Company," "we," "our," or "us"), 
                  you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, 
                  you may not access or use our Service.
                </p>
                <p className="text-gray-300">
                  These Terms apply to all users of the Service, including but not limited to developers, 
                  businesses, and organizations that access our API or web platform.
                </p>
                <div className="p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
                  <p className="text-blue-200 text-sm">
                    <strong>Important:</strong> These Terms constitute a legally binding agreement. 
                    Please read them carefully before using our Service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Service Overview */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Service Overview & Terms</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {serviceTerms.map((term, index) => (
                    <div key={index} className="p-4 bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-blue-600 rounded">
                          <term.icon className="h-4 w-4 text-white" />
                        </div>
                        <h4 className="text-white">{term.title}</h4>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{term.description}</p>
                      <div className="space-y-1">
                        {term.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span className="text-gray-400 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* API Usage Terms */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">API Usage & Technical Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-white mb-3">Rate Limits & Quotas</h4>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 bg-gray-700 rounded-lg text-center">
                      <h5 className="text-white mb-1">Free Tier</h5>
                      <p className="text-2xl font-bold text-blue-400 mb-1">1,000</p>
                      <p className="text-gray-300 text-sm">requests/hour</p>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg text-center">
                      <h5 className="text-white mb-1">Pro Tier</h5>
                      <p className="text-2xl font-bold text-green-400 mb-1">10,000</p>
                      <p className="text-gray-300 text-sm">requests/hour</p>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg text-center">
                      <h5 className="text-white mb-1">Enterprise</h5>
                      <p className="text-2xl font-bold text-purple-400 mb-1">Custom</p>
                      <p className="text-gray-300 text-sm">contact sales</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white mb-3">Technical Requirements</h4>
                  <ul className="text-gray-300 space-y-2 pl-6">
                    <li className="list-disc">Valid API key required for all requests</li>
                    <li className="list-disc">HTTPS required for all API communications</li>
                    <li className="list-disc">Video files must be in supported formats (MP4, MOV, AVI)</li>
                    <li className="list-disc">Maximum file size: 100MB per upload</li>
                    <li className="list-disc">Minimum video resolution: 720p for optimal analysis</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-900/20 border border-red-800 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
                    <div>
                      <h4 className="text-red-300 mb-1">Rate Limit Violations</h4>
                      <p className="text-sm text-red-200">
                        Exceeding rate limits may result in temporary API suspension. Repeated violations 
                        may result in permanent account termination.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Prohibited Uses */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Prohibited Uses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  You agree not to use the Service for any of the following prohibited activities:
                </p>
                
                <div className="grid gap-3">
                  {prohibitedUses.map((use, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-red-900/10 border border-red-800/30 rounded">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2.5"></div>
                      <span className="text-gray-300 text-sm">{use}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-orange-900/20 border border-orange-800 rounded-lg">
                  <h4 className="text-orange-300 mb-2">Violation Consequences</h4>
                  <p className="text-orange-200 text-sm">
                    Violation of these terms may result in immediate account suspension, service termination, 
                    and potential legal action. We reserve the right to investigate and take appropriate action 
                    against any prohibited use.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Payment & Billing */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Payment & Billing Terms</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white mb-3">Subscription Terms</h4>
                    <ul className="text-gray-300 space-y-2 pl-6">
                      <li className="list-disc">Monthly or annual billing cycles available</li>
                      <li className="list-disc">Automatic renewal unless cancelled</li>
                      <li className="list-disc">Usage overages billed at standard rates</li>
                      <li className="list-disc">Enterprise contracts require separate agreement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white mb-3">Payment Policies</h4>
                    <ul className="text-gray-300 space-y-2 pl-6">
                      <li className="list-disc">Payment due upon subscription activation</li>
                      <li className="list-disc">Failed payments result in service suspension</li>
                      <li className="list-disc">30-day refund policy for annual plans</li>
                      <li className="list-disc">No refunds for monthly subscriptions</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-green-900/20 border border-green-800 rounded-lg">
                  <h4 className="text-green-300 mb-2">Refund Policy</h4>
                  <p className="text-green-200 text-sm">
                    Annual subscribers may request a full refund within 30 days of initial payment. 
                    Refunds are processed within 5-10 business days to the original payment method.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Intellectual Property */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-white mb-3">Our Intellectual Property</h4>
                  <p className="text-gray-300 mb-4">
                    The Service, including our AI models, algorithms, software, and documentation, 
                    is protected by copyright, trademark, and other intellectual property laws. 
                    You may not copy, modify, or reverse engineer any part of our Service.
                  </p>
                </div>

                <div>
                  <h4 className="text-white mb-3">Your Content Rights</h4>
                  <p className="text-gray-300 mb-4">
                    You retain ownership of videos and content you upload to our Service. 
                    By uploading content, you grant us a limited license to process and analyze 
                    your content solely to provide our Service.
                  </p>
                </div>

                <div>
                  <h4 className="text-white mb-3">AI Model Training</h4>
                  <p className="text-gray-300 mb-4">
                    We may use aggregated, anonymized data from video analysis to improve our AI models. 
                    We do not use identifiable personal content or proprietary techniques without explicit consent.
                  </p>
                </div>

                <div className="p-4 bg-purple-900/20 border border-purple-800 rounded-lg">
                  <h4 className="text-purple-300 mb-2">DMCA Compliance</h4>
                  <p className="text-purple-200 text-sm">
                    We respect intellectual property rights. If you believe content on our Service 
                    infringes your copyright, please contact us at legal@trickbase.ai with details.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Liability & Disclaimers */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Liability & Disclaimers</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  {liability.map((item, index) => (
                    <div key={index} className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.content}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-red-900/20 border border-red-800 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
                    <div>
                      <h4 className="text-red-300 mb-1">Limitation of Liability</h4>
                      <p className="text-sm text-red-200 mb-2">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                        INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
                      </p>
                      <p className="text-sm text-red-200">
                        Our total liability shall not exceed the amount paid by you for the Service 
                        in the twelve (12) months preceding the claim.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Data & Privacy */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Database className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Data Processing & Privacy</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Your use of our Service is also governed by our Privacy Policy. 
                  Key data processing terms include:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <h4 className="text-white mb-2">Video Retention</h4>
                    <p className="text-gray-300 text-sm">
                      Uploaded videos are automatically deleted after 30 days. 
                      You can request immediate deletion at any time.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <h4 className="text-white mb-2">Analysis Results</h4>
                    <p className="text-gray-300 text-sm">
                      Trick analysis results are stored for your account access. 
                      Delete your account to remove all associated data.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <h4 className="text-white mb-2">Data Security</h4>
                    <p className="text-gray-300 text-sm">
                      All data is encrypted in transit and at rest. 
                      We maintain SOC 2 compliance for data protection.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <h4 className="text-white mb-2">International Transfers</h4>
                    <p className="text-gray-300 text-sm">
                      Data may be processed in the US and EU with appropriate 
                      safeguards for international transfers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Termination */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Account Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-white mb-3">Termination by You</h4>
                  <p className="text-gray-300 mb-4">
                    You may terminate your account at any time through your account settings 
                    or by contacting support. Upon termination:
                  </p>
                  <ul className="text-gray-300 space-y-2 pl-6">
                    <li className="list-disc">API access is immediately revoked</li>
                    <li className="list-disc">All stored data is deleted within 30 days</li>
                    <li className="list-disc">No refunds for partial billing periods</li>
                    <li className="list-disc">Outstanding charges remain due</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white mb-3">Termination by Us</h4>
                  <p className="text-gray-300 mb-4">
                    We may terminate or suspend your account for violations of these Terms, 
                    including but not limited to:
                  </p>
                  <ul className="text-gray-300 space-y-2 pl-6">
                    <li className="list-disc">Breach of acceptable use policies</li>
                    <li className="list-disc">Non-payment of fees</li>
                    <li className="list-disc">Fraudulent or illegal activity</li>
                    <li className="list-disc">Abuse of service resources</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Governing Law */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Governing Law & Disputes</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  These Terms are governed by the laws of [State/Country] without regard to conflict of law principles. 
                  Any disputes arising from these Terms or your use of the Service will be resolved through:
                </p>
                
                <div className="space-y-3">
                  <div className="p-3 bg-gray-700 rounded">
                    <h4 className="text-white mb-1">1. Informal Resolution</h4>
                    <p className="text-gray-300 text-sm">
                      Contact us at legal@trickbase.ai to attempt good-faith resolution
                    </p>
                  </div>
                  
                  <div className="p-3 bg-gray-700 rounded">
                    <h4 className="text-white mb-1">2. Binding Arbitration</h4>
                    <p className="text-gray-300 text-sm">
                      Disputes will be resolved through binding arbitration rather than court proceedings
                    </p>
                  </div>
                  
                  <div className="p-3 bg-gray-700 rounded">
                    <h4 className="text-white mb-1">3. Class Action Waiver</h4>
                    <p className="text-gray-300 text-sm">
                      You agree to resolve disputes individually and waive rights to class actions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Changes to Terms */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Changes to Terms</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  We may update these Terms from time to time. We will provide notice of material changes by:
                </p>
                <ul className="text-gray-300 space-y-2 pl-6 mb-4">
                  <li className="list-disc">Email notification to registered users</li>
                  <li className="list-disc">Prominent notice on our website and platform</li>
                  <li className="list-disc">30-day advance notice for material changes</li>
                  <li className="list-disc">Updated "Last Modified" date on this page</li>
                </ul>
                <p className="text-gray-300">
                  Continued use of the Service after changes take effect constitutes acceptance of the new Terms.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Contact Information */}
          <section>
            <Card className="bg-gradient-to-r from-blue-900 to-purple-900 border-blue-800">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-white mb-4">Questions About These Terms?</h3>
                <p className="text-blue-200 mb-6">
                  If you have questions about these Terms of Service or need clarification 
                  on any policies, we're here to help.
                </p>
                <Button 
                  className="bg-white text-blue-900 hover:bg-gray-100"
                  onClick={onContact}
                >
                  Contact Trickbase
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}