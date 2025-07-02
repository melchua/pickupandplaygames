import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 1, 2024";

  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <Card className="border-4 border-ink shadow-[8px_8px_0px_0px_rgba(255,232,93,1)] bg-banana">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-ink">
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ink font-medium">
                  At Pickup & Play Games Inc. (&ldquo;we,&rdquo;
                  &ldquo;our,&rdquo; or &ldquo;us&rdquo;), we respect your
                  privacy and are committed to protecting your personal data.
                  This privacy policy explains how we collect, use, and
                  safeguard your information when you visit our website, use our
                  services, or interact with our games.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="border-4 border-ink shadow-[8px_8px_0px_0px_rgba(244,91,105,1)] hover:shadow-[4px_4px_0px_0px_rgba(244,91,105,1)] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    Personal Information
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    We may collect the following personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>
                      Name and email address (when you contact us or subscribe
                      to our newsletter)
                    </li>
                    <li>
                      Contact information you provide through our contact forms
                    </li>
                    <li>
                      Social media handles when you interact with us on social
                      platforms
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">
                    Automatically Collected Information
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>IP address and browser information</li>
                    <li>Website usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Device information and operating system details</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="border-4 border-ink shadow-[8px_8px_0px_0px_rgba(139,92,246,1)]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    To respond to your inquiries and provide customer support
                  </li>
                  <li>
                    To send you updates about our games and company news (with
                    your consent)
                  </li>
                  <li>To improve our website and user experience</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>
                    To comply with legal obligations and protect our rights
                  </li>
                  <li>To develop and market new games and services</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card className="border-4 border-ink shadow-[8px_8px_0px_0px_rgba(34,197,94,1)]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Cookies and Tracking Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to enhance
                  your browsing experience and analyze website performance. You
                  can control cookie preferences through our cookie consent
                  banner and your browser settings.
                </p>
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    Types of Cookies We Use:
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>
                      <strong>Essential Cookies:</strong> Necessary for website
                      functionality
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Help us understand how
                      visitors use our site
                    </li>
                    <li>
                      <strong>Marketing Cookies:</strong> Used to deliver
                      relevant advertisements
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="border-4 border-ink shadow-[8px_8px_0px_0px_rgba(244,91,105,1)]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  How We Share Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information. We may share your
                  information in the following limited circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who
                    help us operate our website and business
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> When required by law or
                    to protect our rights
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a
                    merger, sale, or acquisition
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> When you explicitly
                    agree to sharing
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="border-4 border-ink shadow-[8px_8px_0px_0px_rgba(255,232,93,1)] bg-banana/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  However, no internet transmission is 100% secure, and we
                  cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-4 border-ink shadow-[8px_8px_0px_0px_rgba(139,92,246,1)]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Your Privacy Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Depending on your location, you may have the following rights
                  regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal
                    information we hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of
                    inaccurate personal information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    information
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data
                    to another service provider
                  </li>
                  <li>
                    <strong>Opt-out:</strong> Unsubscribe from marketing
                    communications at any time
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise these rights, please contact us using the
                  information in the &ldquo;Contact Us&rdquo; section below.
                </p>
              </CardContent>
            </Card>

            {/* Third-Party Links */}
            <Card className="border-4 border-ink shadow-[8px_8px_0px_0px_rgba(34,197,94,1)]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Third-Party Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our website may contain links to third-party websites and
                  social media platforms. We are not responsible for the privacy
                  practices of these external sites. We encourage you to review
                  their privacy policies before providing any personal
                  information.
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card className="border-4 border-ink shadow-[8px_8px_0px_0px_rgba(244,91,105,1)]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Children&apos;s Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our services are not directed to children under 13 years of
                  age. We do not knowingly collect personal information from
                  children under 13. If you are a parent or guardian and believe
                  your child has provided us with personal information, please
                  contact us so we can delete such information.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card className="border-4 border-ink shadow-[8px_8px_0px_0px_rgba(139,92,246,1)]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Changes to This Privacy Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will
                  notify you of any changes by posting the new privacy policy on
                  this page and updating the &ldquo;Last updated&rdquo; date. We
                  encourage you to review this privacy policy periodically.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-4 border-ink shadow-[8px_8px_0px_0px_rgba(255,232,93,1)] bg-banana">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-ink">
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ink font-medium mb-4">
                  If you have any questions about this privacy policy or our
                  privacy practices, please contact us:
                </p>
                <div className="space-y-2 text-ink font-medium">
                  <p>
                    <strong>Email:</strong> privacy@pickupandplaygames.com
                  </p>
                  <p>
                    <strong>Website:</strong> Contact form at /contact
                  </p>
                  <p>
                    <strong>Company:</strong> Pickup & Play Games Inc.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
