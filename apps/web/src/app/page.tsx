export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center max-w-content mx-auto">
        <h1 className="text-[3rem] leading-[1.1] font-bold tracking-tight text-surface-50 mb-6">
          Engineering the Interface
          <br />
          Between Biology and Intelligence
        </h1>
        <p className="text-[1.125rem] leading-relaxed text-surface-400 max-w-2xl mb-10">
          Advanced human-like synthetic skin, prosthetic integration systems, and intelligent
          wearables — powered by AI-driven manufacturing.
        </p>
        <div className="flex gap-4">
          <a
            href="/technology"
            className="inline-flex items-center px-6 py-3 bg-surface-50 text-surface-950 font-medium rounded-md hover:bg-surface-200 transition-colors"
          >
            Explore Technology
          </a>
          <a
            href="/partnerships"
            className="inline-flex items-center px-6 py-3 border border-surface-700 text-surface-50 font-medium rounded-md hover:bg-surface-800 transition-colors"
          >
            Partner With Us
          </a>
        </div>
      </section>

      {/* Product Pillars */}
      <section className="max-w-content mx-auto px-6 py-20">
        <h2 className="text-[1.75rem] font-semibold text-surface-50 mb-12 text-center">
          Product Pillars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Synthetic Skin',
              description:
                'Multi-layer polymer composite architecture with embedded sensor mesh, tactile sensing, and adaptive pigmentation for humanoid robots and prosthetics.',
            },
            {
              title: 'Prosthetic Interfaces',
              description:
                'Skin-tone adaptive layering with seamless frame integration, breathable micro-ventilation, and AI-driven gait mapping for upper and lower-limb prosthetics.',
            },
            {
              title: 'Intelligent Wearables',
              description:
                'Conductive fiber networks with smart thermal regulation, gesture recognition, and bio-signal capture for exoskeletons and performance augmentation.',
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="bg-surface-900 border border-surface-700 rounded-lg p-6"
            >
              <h3 className="text-[1.125rem] font-semibold text-surface-50 mb-3">{pillar.title}</h3>
              <p className="text-[0.875rem] leading-relaxed text-surface-400">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Manufacturing Intelligence */}
      <section className="max-w-content mx-auto px-6 py-20 border-t border-surface-800">
        <h2 className="text-[1.75rem] font-semibold text-surface-50 mb-4">
          AI-Driven Manufacturing
        </h2>
        <p className="text-surface-400 max-w-2xl mb-8">
          Digital twin models, automated polymer blending, computer vision defect detection, and
          predictive material performance modeling — orchestrated by intelligent systems.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Digital Twins', 'Computer Vision QC', 'Predictive Modeling', 'Supply Chain AI'].map(
            (item) => (
              <div key={item} className="bg-surface-800 rounded-md p-4 text-center">
                <span className="text-[0.875rem] font-medium text-surface-400">{item}</span>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-800 py-8 px-6">
        <div className="max-w-content mx-auto flex justify-between items-center text-[0.75rem] text-surface-500">
          <span>&copy; {new Date().getFullYear()} Flex Human. All rights reserved.</span>
          <a href="/legal" className="hover:text-surface-400 transition-colors">
            Legal
          </a>
        </div>
      </footer>
    </main>
  );
}
