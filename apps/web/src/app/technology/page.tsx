import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology',
  description:
    'Multi-layer synthetic skin architecture, embedded sensor systems, and AI-driven manufacturing technology.',
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen max-w-content mx-auto px-6 py-20">
      <h1 className="text-[2.25rem] font-bold text-surface-50 mb-6">Technology</h1>
      <p className="text-surface-400 max-w-2xl mb-12">
        Multi-layer polymer composite architecture with embedded sensor mesh, tactile sensing
        integration, thermal regulation, and adaptive pigmentation — engineered for humanoid robots,
        prosthetics, and intelligent wearables.
      </p>

      <section className="mb-16">
        <h2 className="text-[1.75rem] font-semibold text-surface-50 mb-4">
          Synthetic Skin Architecture
        </h2>
        <div className="bg-surface-900 border border-surface-700 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-[1.125rem] font-semibold text-surface-50 mb-2">
                Multi-Layer Composite
              </h3>
              <p className="text-[0.875rem] text-surface-400">
                Outer protective layer, elastic recovery mesh, embedded sensor grid, and base
                adhesion interface. Each layer engineered independently and tested for composite
                performance.
              </p>
            </div>
            <div>
              <h3 className="text-[1.125rem] font-semibold text-surface-50 mb-2">
                Embedded Sensor Mesh
              </h3>
              <p className="text-[0.875rem] text-surface-400">
                Pressure, temperature, and proximity sensors integrated at the polymer layer
                boundary. Compatible with standard robotics bus protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-[1.75rem] font-semibold text-surface-50 mb-4">
          Manufacturing Intelligence
        </h2>
        <p className="text-surface-400 max-w-2xl">
          AI-controlled curing optimization, computer vision defect detection, and predictive
          material performance modeling ensure consistency at scale.
        </p>
      </section>
    </main>
  );
}
