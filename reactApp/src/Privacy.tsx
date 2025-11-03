import { Header } from './component/header/Header';
import { Footer } from './component/footer/Footer';

const Privacy = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="text-sm text-gray-500 font-light mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 tracking-tight">
                Information We Collect
              </h2>
              <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Personal Information</h3>
                  <p>
                    When you create an account or contact us, we may collect personal information such as your name, 
                    email address, and any other information you voluntarily provide.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Usage Data</h3>
                  <p>
                    We automatically collect information about how you use our service, including quiz creation patterns, 
                    feature usage, and performance metrics to improve our platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Technical Information</h3>
                  <p>
                    We collect technical data such as your IP address, browser type, device information, 
                    and operating system to ensure our service works properly across different platforms.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 tracking-tight">
                How We Use Your Information
              </h2>
              <div className="text-gray-600 font-light leading-relaxed space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and maintain our quiz generation service</li>
                  <li>Improve and personalize your experience</li>
                  <li>Communicate with you about updates, features, and support</li>
                  <li>Analyze usage patterns to enhance our platform</li>
                  <li>Ensure the security and integrity of our service</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 tracking-tight">
                Information Sharing
              </h2>
              <div className="text-gray-600 font-light leading-relaxed space-y-4">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your 
                  information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights, property, or safety, or that of our users</li>
                  <li>With trusted service providers who assist in operating our platform (under strict confidentiality agreements)</li>
                  <li>In connection with a business transfer, merger, or acquisition</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 tracking-tight">
                Data Security
              </h2>
              <div className="text-gray-600 font-light leading-relaxed space-y-4">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection practices</li>
                </ul>
                <p>
                  However, no method of transmission over the internet or electronic storage is 100% secure. 
                  While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 tracking-tight">
                Your Rights
              </h2>
              <div className="text-gray-600 font-light leading-relaxed space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and review your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your account and associated data</li>
                  <li>Export your data in a portable format</li>
                  <li>Opt out of certain communications</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 tracking-tight">
                Cookies and Tracking
              </h2>
              <div className="text-gray-600 font-light leading-relaxed space-y-4">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience, analyze usage, 
                  and provide personalized content. You can control cookie settings through your browser preferences.
                </p>
                <p>
                  Essential cookies are necessary for the platform to function properly and cannot be disabled. 
                  Optional cookies help us improve our service and can be managed in your account settings.
                </p>
              </div>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 tracking-tight">
                Changes to This Policy
              </h2>
              <div className="text-gray-600 font-light leading-relaxed space-y-4">
                <p>
                  We may update this privacy policy from time to time to reflect changes in our practices or 
                  legal requirements. We will notify you of any material changes by posting the updated policy 
                  on our website and updating the "Last updated" date.
                </p>
                <p>
                  Your continued use of our service after any changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 tracking-tight">
                Contact Us
              </h2>
              <div className="text-gray-600 font-light leading-relaxed space-y-4">
                <p>
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-sm">
                  <div className="space-y-2">
                    <p><strong>Email:</strong> privacy@quizmaster.ai</p>
                    <p><strong>Address:</strong> QuizMaster AI Privacy Team</p>
                    <p className="ml-16">123 Education Street</p>
                    <p className="ml-16">Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Privacy;
