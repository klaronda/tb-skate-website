import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  Globe, 
  Cookie,
  Mail,
  FileText,
  AlertTriangle,
  Calendar,
  Database,
  Camera
} from 'lucide-react';

export function PrivacyPolicyPage() {
  const lastUpdated = "October 1, 2025";

  const dataTypes = [
    {
      icon: Camera,
      title: "Video & Image Data",
      description: "Videos and images you upload for analysis",
      retention: "30 days"
    },
    {
      icon: Users,
      title: "Account Information",
      description: "Email, name, and account preferences",
      retention: "Until account deletion"
    },
    {
      icon: Globe,
      title: "Usage Analytics",
      description: "API usage, performance metrics, and error logs",
      retention: "2 years"
    },
    {
      icon: Database,
      title: "Technical Data",
      description: "IP addresses, device info, and system logs",
      retention: "1 year"
    }
  ];

  const userRights = [
    "Access your personal data",
    "Correct inaccurate information",
    "Delete your account and data",
    "Export your data",
    "Restrict data processing",
    "Object to automated decisions"
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600 rounded-full">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            How we collect, use, and protect your information when using Trickbase AI services.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="text-gray-400">Last updated: {lastUpdated}</span>
          </div>
        </div>

        {/* Disclaimer */}
        <Card className="bg-yellow-900/20 border-yellow-800 mb-12">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
              <div>
                <h3 className="text-yellow-300 mb-2">Legal Review Required</h3>
                <p className="text-yellow-200 text-sm">
                  This is a placeholder privacy policy. Please consult with legal counsel before using this content 
                  in production. This template covers common privacy practices but may not address all regulatory 
                  requirements for your specific jurisdiction or business model.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Trickbase AI, Inc. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you use our AI-powered 
                  skateboarding analysis platform and related services.
                </p>
                <p className="text-gray-300">
                  By using our services, you agree to the collection and use of information in accordance with this policy. 
                  If you do not agree with our policies and practices, do not use our services.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Information We Collect */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Eye className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Information We Collect</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {dataTypes.map((type, index) => (
                    <div key={index} className="p-4 bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-blue-600 rounded">
                          <type.icon className="h-4 w-4 text-white" />
                        </div>
                        <h4 className="text-white">{type.title}</h4>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{type.description}</p>
                      <Badge className="bg-gray-600 text-gray-300">
                        Retained: {type.retention}
                      </Badge>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-white">Automatically Collected Information</h4>
                  <ul className="text-gray-300 space-y-2 pl-6">
                    <li className="list-disc">Device information (browser type, operating system)</li>
                    <li className="list-disc">IP address and geolocation data</li>
                    <li className="list-disc">Usage patterns and API interactions</li>
                    <li className="list-disc">Performance metrics and error logs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How We Use Information */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-white mb-3">Primary Uses</h4>
                  <ul className="text-gray-300 space-y-2 pl-6">
                    <li className="list-disc">Provide skateboard trick analysis and recognition services</li>
                    <li className="list-disc">Process and analyze uploaded video content</li>
                    <li className="list-disc">Improve our AI models and algorithms</li>
                    <li className="list-disc">Deliver API responses and technical support</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white mb-3">Secondary Uses</h4>
                  <ul className="text-gray-300 space-y-2 pl-6">
                    <li className="list-disc">Monitor service performance and security</li>
                    <li className="list-disc">Comply with legal obligations</li>
                    <li className="list-disc">Communicate service updates and announcements</li>
                    <li className="list-disc">Conduct research and development</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Camera className="h-5 w-5 text-blue-400 mt-0.5" />
                    <div>
                      <h4 className="text-blue-300 mb-1">Video Data Processing</h4>
                      <p className="text-sm text-blue-200">
                        Videos you upload are processed by our AI models to identify skateboarding tricks and techniques. 
                        We do not use your videos for marketing purposes or share them with third parties without consent.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Data Sharing */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300">
                  We do not sell, rent, or trade your personal information. We may share information in the following circumstances:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <h4 className="text-white mb-2">Service Providers</h4>
                    <p className="text-gray-300 text-sm">
                      Cloud infrastructure providers, analytics services, and payment processors 
                      who help us operate our platform.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <h4 className="text-white mb-2">Legal Requirements</h4>
                    <p className="text-gray-300 text-sm">
                      When required by law, court order, or to protect our rights, 
                      property, or safety of our users.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <h4 className="text-white mb-2">Business Transfers</h4>
                    <p className="text-gray-300 text-sm">
                      In connection with a merger, acquisition, or sale of assets, 
                      with appropriate data protection measures.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <h4 className="text-white mb-2">Aggregated Data</h4>
                    <p className="text-gray-300 text-sm">
                      Anonymized, aggregated data for research, industry reports, 
                      or improving skateboarding analysis techniques.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Data Security */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Data Security</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300">
                  We implement industry-standard security measures to protect your information:
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-700 rounded-lg text-center">
                    <Lock className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <h4 className="text-white mb-1">Encryption</h4>
                    <p className="text-gray-300 text-sm">Data encrypted in transit and at rest</p>
                  </div>
                  
                  <div className="p-4 bg-gray-700 rounded-lg text-center">
                    <Shield className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <h4 className="text-white mb-1">Access Control</h4>
                    <p className="text-gray-300 text-sm">Strict employee access policies</p>
                  </div>
                  
                  <div className="p-4 bg-gray-700 rounded-lg text-center">
                    <Database className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <h4 className="text-white mb-1">Secure Storage</h4>
                    <p className="text-gray-300 text-sm">SOC 2 compliant infrastructure</p>
                  </div>
                </div>
                
                <div className="p-4 bg-red-900/20 border border-red-800 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
                    <div>
                      <h4 className="text-red-300 mb-1">Data Breach Notification</h4>
                      <p className="text-sm text-red-200">
                        In the event of a data breach, we will notify affected users and relevant authorities 
                        within 72 hours as required by applicable law.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Your Rights */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Your Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {userRights.map((right, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-700 rounded">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">{right}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
                  <h4 className="text-blue-300 mb-2">Exercising Your Rights</h4>
                  <p className="text-blue-200 text-sm">
                    To exercise any of these rights, please contact us at privacy@trickbase.ai. 
                    We will respond to your request within 30 days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Cookies & Tracking */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Cookie className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Cookies & Tracking</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  We use cookies and similar technologies to enhance your experience:
                </p>
                
                <div className="space-y-3">
                  <div className="p-3 bg-gray-700 rounded">
                    <div className="flex justify-between items-center">
                      <span className="text-white">Essential Cookies</span>
                      <Badge className="bg-green-600 text-white">Required</Badge>
                    </div>
                    <p className="text-gray-300 text-sm mt-1">Necessary for basic site functionality</p>
                  </div>
                  
                  <div className="p-3 bg-gray-700 rounded">
                    <div className="flex justify-between items-center">
                      <span className="text-white">Analytics Cookies</span>
                      <Badge className="bg-blue-600 text-white">Optional</Badge>
                    </div>
                    <p className="text-gray-300 text-sm mt-1">Help us understand how you use our services</p>
                  </div>
                  
                  <div className="p-3 bg-gray-700 rounded">
                    <div className="flex justify-between items-center">
                      <span className="text-white">Performance Cookies</span>
                      <Badge className="bg-blue-600 text-white">Optional</Badge>
                    </div>
                    <p className="text-gray-300 text-sm mt-1">Monitor API performance and error rates</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* International Transfers */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">International Data Transfers</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place:
                </p>
                <ul className="text-gray-300 space-y-2 pl-6">
                  <li className="list-disc">Standard Contractual Clauses for EU data transfers</li>
                  <li className="list-disc">Adequacy decisions where applicable</li>
                  <li className="list-disc">Certification schemes and codes of conduct</li>
                  <li className="list-disc">Explicit consent for sensitive data transfers</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Children's Privacy */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Children's Privacy & Age Verification</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300">
                  We take children's privacy seriously and have implemented strict measures to comply with 
                  COPPA and protect minors while processing skateboarding content.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-orange-900/20 border border-orange-800 rounded-lg">
                    <h4 className="text-orange-300 mb-2">Age Verification Requirements</h4>
                    <p className="text-orange-200 text-sm mb-3">
                      We require birthdate data when videos are received from third parties for processing. 
                      Additionally, we employ AI-powered age recognition models to identify potential minors in video content.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                        <span className="text-orange-200 text-sm">
                          <strong>Metadata age below 13:</strong> Video is processed for skateboarding analysis then immediately deleted
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                        <span className="text-orange-200 text-sm">
                          <strong>Metadata age 13+ but AI detects minor:</strong> Video is processed then immediately deleted
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                        <span className="text-orange-200 text-sm">
                          <strong>Non-skateboarding content:</strong> All videos are processed and deleted regardless of age
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="text-white mb-2">Processing Policy</h4>
                      <p className="text-gray-300 text-sm">
                        All uploaded videos are processed through our AI models to identify skateboarding tricks. 
                        We do not store personal data of children, but skateboarding analysis is performed on all content.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="text-white mb-2">Immediate Deletion</h4>
                      <p className="text-gray-300 text-sm">
                        Videos containing minors (detected through metadata or AI) are immediately deleted after processing. 
                        No personal information or video content of children is retained.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
                    <h4 className="text-blue-300 mb-2">Technical Safeguards</h4>
                    <ul className="space-y-1 text-blue-200 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mt-2"></div>
                        <span>AI age recognition models trained on diverse datasets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mt-2"></div>
                        <span>Automated deletion triggers for detected minors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mt-2"></div>
                        <span>Encrypted processing with no persistent storage for children's content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mt-2"></div>
                        <span>Regular audits of age detection accuracy and deletion processes</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-red-900/20 border border-red-800 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
                      <div>
                        <h4 className="text-red-300 mb-1">Parental Notice</h4>
                        <p className="text-red-200 text-sm">
                          If you are a parent or guardian and believe your child's video has been processed by our service, 
                          please contact us immediately at privacy@trickbase.ai. We will investigate and provide 
                          confirmation of deletion within 48 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Changes to Policy */}
          <section>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Changes to This Policy</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by:
                </p>
                <ul className="text-gray-300 space-y-2 pl-6 mb-4">
                  <li className="list-disc">Posting the new Privacy Policy on this page</li>
                  <li className="list-disc">Updating the "Last Updated" date</li>
                  <li className="list-disc">Sending email notifications for material changes</li>
                  <li className="list-disc">Displaying prominent notices on our platform</li>
                </ul>
                <p className="text-gray-300">
                  Your continued use of our services after the effective date constitutes acceptance of the revised policy.
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
                <h3 className="text-white mb-4">Questions About Privacy?</h3>
                <p className="text-blue-200 mb-6">
                  If you have questions about this Privacy Policy or our data practices, 
                  please don't hesitate to contact us.
                </p>
                <div className="space-y-2 text-blue-200">
                  <p>Email: privacy@trickbase.ai</p>
                  <p>Address: [Company Address]</p>
                  <p>Phone: [Phone Number]</p>
                </div>
                <Button className="mt-6 bg-white text-blue-900 hover:bg-gray-100">
                  Contact Privacy Team
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}