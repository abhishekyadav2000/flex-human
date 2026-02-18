import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing',
  description:
    'AI-driven manufacturing intelligence, quality control, and global vendor orchestration.',
};

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen max-w-content mx-auto px-6 py-20">
      <h1 className="text-[2.25rem] font-bold text-surface-50 mb-6">Manufacturing</h1>
      <p className="text-surface-400 max-w-2xl mb-12">
        Precision manufacturing powered by AI process control, computer vision quality assurance,
        and global vendor orchestration.
      </p>

      <section className="mb-16">
        <h2 className="text-[1.75rem] font-semibold text-surface-50 mb-6">Process Pipeline</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {[
            'Polymer Blending',
            'AI-Controlled Curing',
            'Computer Vision QC',
            'Integration Testing',
          ].map((step, i) => (
            <div
              key={step}
              className="flex-1 bg-surface-900 border border-surface-700 rounded-lg p-5 text-center"
            >
              <span className="text-[0.75rem] font-medium text-surface-500 block mb-2">
                Step {i + 1}
              </span>
              <span className="text-[0.875rem] font-medium text-surface-50">{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-[1.75rem] font-semibold text-surface-50 mb-4">Quality Framework</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Six Sigma',
              description: 'Statistical process control across all production lines.',
            },
            {
              title: 'AI Anomaly Detection',
              description: 'Real-time defect identification via computer vision.',
            },
            {
              title: 'Lifecycle Modeling',
              description: 'Predictive durability and degradation analysis.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-surface-900 border border-surface-700 rounded-lg p-5"
            >
              <h3 className="text-[1.125rem] font-semibold text-surface-50 mb-2">{item.title}</h3>
              <p className="text-[0.875rem] text-surface-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-[1.75rem] font-semibold text-surface-50 mb-4">Global Vendor Network</h2>
        <p className="text-surface-400 max-w-2xl">
          Multi-region vendor network across North America, Europe, East Asia, and South Asia. All
          vendors ISO-certified with biocompatibility standards, material traceability, and ESG
          compliance.
        </p>
      </section>
    </main>
  );
}
