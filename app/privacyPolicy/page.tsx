import FooterSection from "../components/footer-section";
import Navbar from "../components/navbar";

export const metadata = {
  title: "Privacy Policy",
  description: "Cekat.ai Omnichannel Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-gray-600">Last updated on 10 Feb 2025</p>
          </div>

          {/* Introduction */}
          <div className="mb-8 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Welcome to Cekat.ai Omnichannel! We're excited to have you as a
              user of our powerful omnichannel Customer Relationship Management
              (CRM) application. Before you get started, please take a moment to
              read through our Terms and Conditions outlined below.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our platform, you agree to be bound by these terms. If
              you do not agree with any part of these terms, please refrain from
              using Cekat.ai Omnichannel.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. Information We Collect
              </h2>

              <div className="space-y-4 ml-4">
                <div>
                  <h3 className="font-bold mb-2">1.1. Personal Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-gray-700">•</span>
                      <span>
                        Contact Information: Your name, email address, phone
                        number, and business-related information
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gray-700">•</span>
                      <span>
                        Account Information: Usernames, passwords, and other
                        authentication details
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gray-700">•</span>
                      <span>
                        Communication Data: Content submitted when communicating
                        with us or other users
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2">1.2. Usage Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-gray-700">•</span>
                      <span>
                        Device Information: IP address, device type, operating
                        system, and browser
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gray-700">•</span>
                      <span>
                        Usage Analytics: Usage patterns, feature utilization,
                        and other analytical data
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. How We Use Your Information
              </h2>

              <div className="space-y-4 ml-4">
                <div>
                  <h3 className="font-bold mb-2">
                    2.1. We use your information for:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-gray-700">•</span>
                      <span>
                        Providing Services: Delivering features and
                        functionalities
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gray-700">•</span>
                      <span>
                        Communication: Responding to inquiries and providing
                        support
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gray-700">•</span>
                      <span>
                        Analytics: Improving services and optimizing user
                        experience
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gray-700">•</span>
                      <span>
                        Marketing: Sending promotional materials with your
                        consent
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-bold">2.2.</span> You must be at least
                    18 years old to use Cekat.ai Omnichannel and create an
                    account.
                  </p>
                  <p>
                    <span className="font-bold">2.3.</span> You are responsible
                    for maintaining the confidentiality of your account
                    credentials.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. Data Security and Privacy
              </h2>

              <div className="space-y-3 ml-4 text-gray-700">
                <p>
                  <span className="font-bold">3.1.</span> We take data security
                  seriously and implement appropriate measures to protect your
                  information.
                </p>
                <p>
                  <span className="font-bold">3.2.</span> We handle your
                  personal data in accordance with our Privacy Policy.
                </p>
                <p>
                  <span className="font-bold">3.3.</span> You grant us the right
                  to collect and process data related to your platform usage.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. Google Calendar API Usage
              </h2>

              <div className="space-y-3 ml-4 text-gray-700">
                <p>
                  <span className="font-bold">4.1.</span> Our application
                  integrates with Google Calendar API for scheduling
                  capabilities.
                </p>
                <p>
                  <span className="font-bold">4.2.</span> We do not store,
                  process, or share any data obtained from Google Calendar.
                </p>
                <p>
                  <span className="font-bold">4.3.</span> You may revoke access
                  to your Google Calendar at any time through your Google
                  account settings.
                </p>
                <p>
                  <span className="font-bold">4.4.</span> Our use and transfer
                  of information received from Google APIs adheres to Google API
                  Services User Data Policy.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. Payment and Subscription
              </h2>

              <div className="space-y-3 ml-4 text-gray-700">
                <p>
                  <span className="font-bold">5.1.</span> Certain services or
                  features may require payment. By subscribing, you agree to pay
                  associated fees.
                </p>
                <p>
                  <span className="font-bold">5.2.</span> Subscription fees are
                  non-refundable unless stated in our Refund Policy.
                </p>
                <p>
                  <span className="font-bold">5.3.</span> We reserve the right
                  to modify subscription fees with advance notice.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                6. Intellectual Property
              </h2>

              <div className="space-y-3 ml-4 text-gray-700">
                <p>
                  <span className="font-bold">6.1.</span> All content and
                  materials on Cekat.ai Omnichannel are our property or our
                  licensors'.
                </p>
                <p>
                  <span className="font-bold">6.2.</span> You may not copy,
                  modify, distribute, or reproduce any part without explicit
                  written consent.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                7. Limitation of Liability
              </h2>

              <div className="space-y-3 ml-4 text-gray-700">
                <p>
                  <span className="font-bold">7.1.</span> Cekat.ai Omnichannel
                  is provided "as is" without warranties or guarantees.
                </p>
                <p>
                  <span className="font-bold">7.2.</span> We shall not be liable
                  for any direct, indirect, incidental, special, or
                  consequential damages.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>

              <div className="space-y-3 ml-4 text-gray-700">
                <p>
                  <span className="font-bold">8.1.</span> You may terminate your
                  account at any time through the account closure process.
                </p>
                <p>
                  <span className="font-bold">8.2.</span> We reserve the right
                  to terminate or suspend accounts violating these Terms.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>

              <div className="space-y-4 ml-4 text-gray-700">
                <p>
                  For questions or concerns about these terms and Conditions,
                  please contact us at:
                </p>
                <p>Email: support@cekat.ai</p>
                <p className="text-sm">
                  By using Cekat.ai Omnichannel, you acknowledge reading and
                  understanding these Terms and Conditions and agree to be bound
                  by them.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
