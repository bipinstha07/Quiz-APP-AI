import { Header } from "./component/header/Header";
import { Footer } from "./component/footer/Footer";


function Terms() {
  return (
    <>   
     <Header />
      <div>
        
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Terms and Conditions
            </h1>
            <p className="text-gray-500 font-light text-sm md:text-base">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8 text-gray-700 font-light leading-relaxed">
            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this quiz application, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4">2. Use License</h2>
              <p className="mb-3">
                Permission is granted to temporarily use this quiz application for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained in the application</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4">3. Quiz Content</h2>
              <p>
                The quiz questions and content are generated for educational purposes. While we strive for accuracy, 
                we make no warranties about the completeness, reliability, and accuracy of this information. 
                Any action you take upon the information from this quiz is strictly at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4">4. User Data</h2>
              <p>
                We respect your privacy. Quiz responses and personal information are processed in accordance 
                with our privacy practices. We do not store personal quiz data permanently and do not share 
                your information with third parties without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4">5. Disclaimer</h2>
              <p>
                The materials in this quiz application are provided on an 'as is' basis. We make no warranties, 
                expressed or implied, and hereby disclaim and negate all other warranties including without 
                limitation, implied warranties or conditions of merchantability, fitness for a particular 
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4">6. Limitations</h2>
              <p>
                In no event shall our company or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising out 
                of the use or inability to use this quiz application, even if we or our authorized representative 
                has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4">7. Revisions</h2>
              <p>
                We may revise these terms of service at any time without notice. By using this application, 
                you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4">8. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us through 
                the appropriate channels provided in the application.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Terms;
