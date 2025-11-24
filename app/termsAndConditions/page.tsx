/* eslint-disable react/no-unescaped-entities */
import FooterSection from "../components/footer-section";
import Navbar from "../components/navbar";

export const metadata = {
  title: "Terms and Conditions",
  description: "Cekat.ai Terms and Conditions",
};

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Terms and Conditions</h1>
            <p className="text-gray-600">Last updated on 10 Feb 2025</p>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              TERMS AND CONDITIONS OF TCI PRODUCT USAGE
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thank you for Your trust in using TCI's products. By using any
              services and/or products provided by PT Teknologi Cekat Indonesia
              ("TCI"), hereby You, the company and/or business where You have
              given permission or authorization to represent You ("User") agree
              to the following Terms and Conditions of TCI Product Usage as well
              as the terms, policies, and other related documentation as
              implemented by TCI from time to time (the "Terms and Conditions").
            </p>
            <p className="text-gray-700 leading-relaxed">
              TCI may revoke and amend these Terms and Conditions from time to
              time at TCI's sole discretion. The User acknowledges and agrees
              that the User is obliged to check these Terms and Conditions from
              time to time to be in the know of the latest conditions and any
              information regarding the terms of Product usage provided by TCI.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Section I */}
            <section>
              <h2 className="text-2xl font-bold mb-4">I. General Terms</h2>

              <div className="space-y-6 ml-4">
                <div>
                  <h3 className="font-bold mb-3">A. General Definition</h3>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <p className="font-semibold">BAST</p>
                      <p>
                        means Minutes of Handover, a document signed by the
                        Parties after the Training has been carried out which
                        states that the Product can be used by the User.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        Intellectual Property Rights
                      </p>
                      <p>
                        mean patents, copyrights, trademarks, and other similar
                        rights as defined by applicable law.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Confidential Information</p>
                      <p>
                        means all business-related information of TCI that has
                        been or will be provided to the User, including but not
                        limited to product details, financial information, and
                        marketing plans.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Trial Service Means</p>
                      <p>
                        a Product service provided to Users with certain
                        limitations as referred to under these Terms and
                        Conditions.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Force Majeure</p>
                      <p>
                        means unforeseeable circumstances that prevent the
                        Parties from fulfilling their obligations under these
                        Terms and Conditions.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Usage Agreement</p>
                      <p>
                        means an agreement for the use of the Product signed by
                        the User with the Terms of Product usage.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Party</p>
                      <p>means TCI or User.</p>
                    </div>
                    <div>
                      <p className="font-semibold">Product</p>
                      <p>
                        means the product offered and provided by TCI, including
                        but not limited to WhatsApp Business API & Omnichannel,
                        CRM Application, and Call Center System.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Quotation</p>
                      <p>
                        means a document issued by TCI to the User, regulating
                        the Product package selected by the User.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-3">
                    B. Package Details, Fees, and Payments
                  </h3>
                  <p className="text-gray-700">
                    The User acknowledges, understands, and accepts all the
                    details of the Product package selected by the User are as
                    stated in the Quotation and/or the Usage Agreement.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-3">
                    C. User Representations and Warranties
                  </h3>
                  <p className="text-gray-700 mb-3">
                    The User represents and warrants that:
                  </p>
                  <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                    <li>
                      The User is competent and authorized to agree to these
                      Terms and Conditions.
                    </li>
                    <li>
                      The User has obtained all necessary licenses for the
                      obligations under these Terms and Conditions.
                    </li>
                    <li>
                      There are no ongoing legal actions that could materially
                      affect the User's ability to perform its obligations under
                      these Terms and Conditions.
                    </li>
                    <li>
                      The User complies with all applicable anti-bribery and
                      anti-corruption regulations.
                    </li>
                    <li>
                      The User guarantees that this submission does not contain
                      any previous data on whose data is provided to TCI in
                      relation to the Product usage.
                    </li>
                    <li>
                      The User guarantees to always comply with the terms,
                      conditions, and privacy policies that apply to each
                      Product.
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Section D */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                D. Indemnification and Limitation of Liability
              </h2>
              <div className="ml-4 text-gray-700">
                <p>
                  <span className="font-bold">D.1.</span> We may disclose your
                  information if required by law or when we believe such action
                  is necessary to protect our rights or comply with legal
                  proceedings.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <div className="ml-4 space-y-3 text-gray-700">
                <p>
                  <span className="font-bold">4.1.</span> AstroSoft implements
                  industry-standard security measures to protect your personal
                  information from unauthorized access, loss, misuse, and
                  alteration.
                </p>
                <p>
                  <span className="font-bold">4.2.</span> While we take
                  reasonable precautions, no method of data transmission over
                  the Internet or electronic storage is entirely secure.
                  Therefore, we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">5. Third-Party Links</h2>
              <div className="ml-4 text-gray-700">
                <p>
                  <span className="font-bold">5.1.</span> AstroSoft may contain
                  links to third-party websites or services. We are not
                  responsible for the privacy practices or content of these
                  websites. Please review their Privacy policies before using
                  them.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">6. Children's Privacy</h2>
              <div className="ml-4 text-gray-700">
                <p>
                  <span className="font-bold">6.1.</span> AstroSoft is not
                  intended for use by children under the age of 13. We do not
                  knowingly collect personal information from children under 13.
                  If you believe we have inadvertently collected such
                  information, please contact us to address this matter.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                7. Changes to this Privacy Policy
              </h2>
              <div className="ml-4 text-gray-700">
                <p>
                  <span className="font-bold">7.1.</span> We may update this
                  Privacy Policy from time to time. Any changes will be posted
                  on this page, and the "Last updated" date will be revised
                  accordingly.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
              <div className="ml-4 text-gray-700">
                <p>
                  <span className="font-bold">8.1.</span> If you have any
                  questions, concerns, or requests regarding this Privacy
                  Policy, please contact us at [your contact email].
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
