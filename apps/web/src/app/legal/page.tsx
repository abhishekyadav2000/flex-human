import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Privacy policy, terms of service, and intellectual property notice for Flex Human.',
};

const tocItems = [
  { id: 'privacy-policy', label: 'Privacy Policy' },
  { id: 'terms-of-service', label: 'Terms of Service' },
  { id: 'intellectual-property', label: 'Intellectual Property Notice' },
];

export default function LegalPage() {
  return (
    <main className="min-h-screen">
      <section className="max-w-[1280px] mx-auto px-6 py-24">
        <h1 className="text-[2.25rem] font-bold text-[#fafafa] mb-4">Legal</h1>
        <p className="text-[#a3a3a3] text-[0.875rem] max-w-2xl mb-12 leading-relaxed">
          Privacy policy, terms of service, and intellectual property notice. Last updated for
          general reference; specific agreements may apply to partners and customers.
        </p>

        {/* Table of contents */}
        <nav
          className="bg-surface-900 border border-surface-800 rounded-xl p-6 mb-16"
          aria-label="Table of contents"
        >
          <h2 className="text-[1.125rem] font-semibold text-[#fafafa] mb-4">On this page</h2>
          <ul className="space-y-2">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-[0.875rem] text-accent-blue hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Privacy Policy */}
        <section id="privacy-policy" className="scroll-mt-24 mb-16">
          <h2 className="text-[1.75rem] font-bold text-[#fafafa] mb-6">Privacy Policy</h2>
          <div className="prose prose-invert max-w-none space-y-4 text-[0.875rem] text-[#a3a3a3] leading-relaxed">
            <h3 className="text-[1.125rem] font-semibold text-[#fafafa] mt-6 mb-2">
              Data collection
            </h3>
            <p>
              Flex Human collects information you provide when contacting us, requesting
              partnerships, or using our services. This may include name, email address,
              organization, job title, and any message or inquiry content. We also collect technical
              data such as IP address, browser type, and pages visited when you use our website, for
              security and analytics purposes.
            </p>
            <h3 className="text-[1.125rem] font-semibold text-[#fafafa] mt-6 mb-2">Usage</h3>
            <p>
              We use your data to respond to inquiries, process partnership and contact form
              submissions, improve our website and services, and comply with legal obligations. We
              do not use your personal information for marketing unless you have opted in or we have
              a legitimate interest and have informed you.
            </p>
            <h3 className="text-[1.125rem] font-semibold text-[#fafafa] mt-6 mb-2">
              Third parties
            </h3>
            <p>
              We do not sell or rent your personal information. We may share data with service
              providers who assist with hosting, email delivery, or analytics, under strict
              confidentiality and data-processing agreements. We may disclose information when
              required by law or to protect our rights, safety, or property.
            </p>
            <h3 className="text-[1.125rem] font-semibold text-[#fafafa] mt-6 mb-2">Retention</h3>
            <p>
              We retain personal data only as long as necessary to fulfill the purposes for which it
              was collected, to satisfy legal or regulatory requirements, or to resolve disputes.
              Contact and inquiry data are typically retained for the duration of the business
              relationship plus a reasonable period thereafter.
            </p>
            <h3 className="text-[1.125rem] font-semibold text-[#fafafa] mt-6 mb-2">Your rights</h3>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, delete, or
              restrict processing of your personal data, or to data portability and to object to
              certain processing. To exercise these rights or ask questions about our privacy
              practices, contact us using the contact information on this site.
            </p>
          </div>
        </section>

        {/* Terms of Service */}
        <section id="terms-of-service" className="scroll-mt-24 mb-16">
          <h2 className="text-[1.75rem] font-bold text-[#fafafa] mb-6">Terms of Service</h2>
          <div className="prose prose-invert max-w-none space-y-4 text-[0.875rem] text-[#a3a3a3] leading-relaxed">
            <h3 className="text-[1.125rem] font-semibold text-[#fafafa] mt-6 mb-2">
              Access and use
            </h3>
            <p>
              By accessing or using the Flex Human website and related services, you agree to these
              Terms of Service. You must use the site only for lawful purposes and in a manner that
              does not infringe the rights of others or restrict their use of the site. We reserve
              the right to modify, suspend, or discontinue any part of the site at any time without
              prior notice.
            </p>
            <h3 className="text-[1.125rem] font-semibold text-[#fafafa] mt-6 mb-2">
              Intellectual property
            </h3>
            <p>
              All content on this site — including text, graphics, logos, images, and software — is
              the property of Flex Human or its licensors and is protected by copyright, trademark,
              and other intellectual property laws. You may not copy, modify, distribute, or create
              derivative works without our prior written consent. Use of our names or marks for any
              purpose other than fair reference is prohibited.
            </p>
            <h3 className="text-[1.125rem] font-semibold text-[#fafafa] mt-6 mb-2">
              Limitation of liability
            </h3>
            <p>
              The site and its content are provided “as is” without warranties of any kind, express
              or implied. To the fullest extent permitted by law, Flex Human and its affiliates
              shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages, or for any loss of profits, data, or use, arising from your access to or use
              of the site. Our total liability for any claims related to the site shall not exceed
              the amount you paid to us, if any, in the twelve months preceding the claim.
            </p>
            <h3 className="text-[1.125rem] font-semibold text-[#fafafa] mt-6 mb-2">
              Modifications
            </h3>
            <p>
              We may update these Terms of Service from time to time. The revised terms will be
              posted on this page with an updated “last updated” date. Your continued use of the
              site after changes constitutes acceptance of the modified terms. We encourage you to
              review this page periodically.
            </p>
          </div>
        </section>

        {/* Intellectual Property Notice */}
        <section id="intellectual-property" className="scroll-mt-24">
          <h2 className="text-[1.75rem] font-bold text-[#fafafa] mb-6">
            Intellectual Property Notice
          </h2>
          <div className="prose prose-invert max-w-none space-y-4 text-[0.875rem] text-[#a3a3a3] leading-relaxed">
            <p>
              Flex Human owns or controls substantial intellectual property relating to synthetic
              skin systems, wearable interfaces, manufacturing processes, and related technologies.
              Patent applications are pending for core innovations in polymer compositions,
              multi-layer architectures, embedded sensor mesh designs, AI-driven curing and quality
              control, and digital twin modeling.
            </p>
            <p>
              All proprietary materials — including formulations, process parameters, design
              specifications, software, and technical documentation — are confidential and
              protected. Disclosure to partners, vendors, or third parties is subject to separate
              nondisclosure and licensing agreements. Unauthorized use, reproduction, reverse
              engineering, or disclosure may result in legal action.
            </p>
            <p>
              Restrictions: You may not use our technologies, trade secrets, or confidential
              information for any purpose other than as expressly authorized in writing by Flex
              Human. No license or right is granted by implication, estoppel, or otherwise. For
              licensing or partnership inquiries, please contact us through the channels provided on
              this website.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
