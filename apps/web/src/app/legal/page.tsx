import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Privacy policy, terms of service, and intellectual property notice.',
};

export default function LegalPage() {
  return (
    <main className="min-h-screen max-w-content mx-auto px-6 py-20">
      <h1 className="text-[2.25rem] font-bold text-surface-50 mb-12">Legal</h1>

      <section className="mb-16">
        <h2 className="text-[1.75rem] font-semibold text-surface-50 mb-4">Privacy Policy</h2>
        <div className="text-surface-400 space-y-4 max-w-2xl">
          <p>
            Flex Human respects your privacy. We collect only the information necessary to respond
            to inquiries and improve our services. Personal information submitted through contact
            forms is used solely for business communication purposes.
          </p>
          <p>
            We do not sell, trade, or share personal information with third parties except as
            required by law. Data is stored securely and retained only as long as necessary for
            legitimate business purposes.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[1.75rem] font-semibold text-surface-50 mb-4">Terms of Service</h2>
        <div className="text-surface-400 space-y-4 max-w-2xl">
          <p>
            By accessing this website, you agree to these terms. All content is provided for
            informational purposes. Flex Human makes no warranties regarding the accuracy or
            completeness of information presented.
          </p>
          <p>
            Unauthorized reproduction, distribution, or use of any content, designs, or technical
            information is strictly prohibited.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-[1.75rem] font-semibold text-surface-50 mb-4">
          Intellectual Property Notice
        </h2>
        <div className="text-surface-400 space-y-4 max-w-2xl">
          <p>
            All materials, designs, processes, and technologies described on this website are the
            proprietary intellectual property of Flex Human. This includes but is not limited to:
            polymer compositions, multi-layer architectures, embedded sensor mesh designs,
            manufacturing algorithms, and digital twin models.
          </p>
          <p>
            Patent applications are pending for core technologies. Unauthorized use may result in
            legal action.
          </p>
        </div>
      </section>
    </main>
  );
}
