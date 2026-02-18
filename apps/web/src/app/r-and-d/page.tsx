import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'R&D',
  description: 'Research roadmap, material science focus areas, and laboratory capabilities.',
};

export default function ResearchPage() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      items: [
        'Baseline synthetic skin realism',
        'Tactile sensor integration',
        'Mechanical durability optimization',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Adaptation',
      items: ['Self-healing polymer layer', 'Thermal adaptive skin', 'Smart pigment response'],
    },
    {
      phase: 'Phase 3',
      title: 'Integration',
      items: [
        'Embedded microfluidic channels',
        'Neural interface compatibility',
        'Biometric adaptive surfaces',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Advancement',
      items: [
        'AI predictive self-repair',
        'Ultra-lightweight nano-composite layer',
        'Military-grade resilience',
      ],
    },
  ];

  return (
    <main className="min-h-screen max-w-content mx-auto px-6 py-20">
      <h1 className="text-[2.25rem] font-bold text-surface-50 mb-6">Research & Development</h1>
      <p className="text-surface-400 max-w-2xl mb-12">
        A structured, multi-phase research program advancing synthetic skin, smart materials, and
        bio-synthetic interfaces.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {phases.map((p) => (
          <div key={p.phase} className="bg-surface-900 border border-surface-700 rounded-lg p-6">
            <span className="text-[0.75rem] font-medium text-accent-blue uppercase tracking-wide">
              {p.phase}
            </span>
            <h3 className="text-[1.125rem] font-semibold text-surface-50 mt-1 mb-3">{p.title}</h3>
            <ul className="space-y-2">
              {p.items.map((item) => (
                <li key={item} className="text-[0.875rem] text-surface-400 flex items-start gap-2">
                  <span className="text-surface-500 mt-1">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
