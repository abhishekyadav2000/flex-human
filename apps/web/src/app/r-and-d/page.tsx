import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { VideoEmbed } from '@/components/VideoEmbed';
import { ImageSection } from '@/components/ImageSection';
import { CTABanner } from '@/components/CTABanner';
import { LeadMagnet } from '@/components/LeadMagnet';

export const metadata: Metadata = {
  title: 'Research & Development',
  description:
    'Flex Human R&D: polymer chemistry, material simulation, sensor integration, and self-healing composites driving the next generation of bio-synthetic interfaces.',
};

const phases = [
  {
    phase: 'Phase 1 — Foundation',
    status: 'Active',
    items: [
      'Baseline synthetic skin realism benchmarking',
      'Tactile sensor array integration and calibration',
      'Mechanical durability optimization under cyclic loading',
      'Biocompatibility certification (ISO 10993)',
      'Adhesion interface R&D for curved robotic frames',
    ],
  },
  {
    phase: 'Phase 2 — Adaptive Materials',
    status: 'In Progress',
    items: [
      'Self-healing polymer layer (autonomous repair)',
      'Thermal adaptive skin with microfluidic channels',
      'Smart pigment response to UV and temperature',
      'Enhanced moisture management for prosthetics',
      'Conductive fabric durability under industrial wash cycles',
    ],
  },
  {
    phase: 'Phase 3 — Bio-Integration',
    status: 'Planned',
    items: [
      'Embedded microfluidic channels for nutrient transport simulation',
      'Neural interface compatibility for prosthetic feedback',
      'Biometric adaptive surfaces (heart rate, temperature sensing)',
      'Multi-modal sensor fusion (pressure + temperature + proximity)',
    ],
  },
  {
    phase: 'Phase 4 — Advanced Systems',
    status: 'Horizon',
    items: [
      'AI-predictive self-repair before failure',
      'Ultra-lightweight nano-composite material layer',
      'Military-grade resilience skin for extreme environments',
      'Full-body humanoid skin system with distributed AI inference',
    ],
  },
];

const capabilities = [
  {
    title: 'Polymer Chemistry Lab',
    desc: 'Custom polymer synthesis, blending, and curing with precise molecular weight control. We formulate materials from scratch for each application.',
  },
  {
    title: 'Mechanical Stress Testing',
    desc: 'Tensile, compression, and cyclic fatigue testing rigs with automated data capture. We validate to 10M+ cycles before production.',
  },
  {
    title: 'Thermal Endurance Chamber',
    desc: '-60\u00B0C to 200\u00B0C accelerated aging. Every material grade is tested beyond its specified operating range.',
  },
  {
    title: 'Computer Vision Inspection',
    desc: 'Automated defect detection at micrometer resolution. Real-time quality feedback during manufacturing runs.',
  },
  {
    title: 'Embedded Systems Lab',
    desc: 'Sensor integration, flexible PCB prototyping, and conductive fiber characterization for wearable electronics development.',
  },
  {
    title: 'AI Simulation Engine',
    desc: 'Material deformation modeling, digital twin manufacturing, and predictive performance analytics powered by our intelligence layer.',
  },
];

const publications = [
  {
    title: 'DexSkin: High-Coverage Conformable Robotic Skin',
    source: 'Stanford / CoRL 2025',
    desc: 'Capacitive electronic skin for learning contact-rich manipulation. This is the research direction we build on.',
  },
  {
    title: 'Biomimetic Prosthetic Hand with Neuromorphic Tactile Sensing',
    source: 'Johns Hopkins / Science Advances 2025',
    desc: 'Hybrid prosthetic with human-level grip adjustment. Our skin interfaces with this class of device.',
  },
  {
    title: 'Fluidically Innervated Lattices for Soft Robotic Sensing',
    source: 'ISER 2025',
    desc: '3D-printed elastomer lattices with embedded air channels for scalable tactile sensing.',
  },
  {
    title: 'Adaptive Electronic Skin for Human-Robot Collaboration',
    source: 'AIRSKIN Research 2025',
    desc: 'Dynamic sensitivity adjustment at 25 Hz for safe collaboration — the safety standard we design for.',
  },
];

export default function RAndDPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-DEFAULT to-surface-DEFAULT" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-purple-500/[0.03] rounded-full blur-[120px]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block text-[0.7rem] font-bold text-accent-blue uppercase tracking-[0.25em] mb-4 bg-accent-blue/10 px-4 py-1.5 rounded-full">
            Research & Development
          </span>
          <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.05] font-bold text-surface-50 mb-6 max-w-4xl mx-auto">
            Where Material Science{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent-blue">
              Meets Intelligence
            </span>
          </h1>
          <p className="text-lg text-surface-400 max-w-2xl mx-auto leading-relaxed">
            Our R&D pipeline spans polymer chemistry, embedded sensing, AI-driven simulation, and
            self-healing materials. Every experiment is versioned, every result reproducible, every
            insight feeds our intelligence layer.
          </p>
        </div>
      </section>

      {/* Research Video */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <SectionHeading
                title="Tracking the Frontier"
                subtitle="We continuously ingest and analyze the latest research in soft robotics, polymer science, and tactile sensing. Our intelligence layer identifies emerging materials and techniques before they reach mainstream adoption."
              />
              <div className="mt-8 space-y-4">
                {publications.map((pub) => (
                  <div
                    key={pub.title}
                    className="p-4 rounded-lg border border-surface-800/60 bg-surface-900/30"
                  >
                    <h4 className="text-sm font-semibold text-surface-100 mb-1">{pub.title}</h4>
                    <p className="text-xs text-accent-blue mb-2">{pub.source}</p>
                    <p className="text-xs text-surface-500 leading-relaxed">{pub.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <VideoEmbed
                videoId="i43wgx9bT-E"
                title="Soft Sensing Skins for Arbitrary Objects"
                caption="Stanford research on conformable sensor skins — the frontier we build at"
              />
              <ImageSection
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80"
                alt="Materials science research laboratory"
                caption="Advanced polymer characterization and testing"
                credit="Unsplash"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Roadmap */}
      <section className="py-20 md:py-28 px-6 bg-surface-950">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="5-Year Research Roadmap"
            subtitle="From baseline realism to AI-predictive self-repair. Each phase builds on validated results from the previous."
          />
          <div className="mt-14 space-y-8">
            {phases.map((p) => {
              const statusColor =
                p.status === 'Active'
                  ? 'bg-green-500/20 text-green-400 border-green-500/30'
                  : p.status === 'In Progress'
                    ? 'bg-accent-blue/20 text-accent-blue border-accent-blue/30'
                    : p.status === 'Planned'
                      ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                      : 'bg-surface-700/20 text-surface-400 border-surface-700/30';

              return (
                <div
                  key={p.phase}
                  className="rounded-xl border border-surface-800/60 bg-surface-900/30 p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-lg font-bold text-surface-50">{p.phase}</h3>
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${statusColor}`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-surface-400">
                        <span className="text-accent-blue/60 mt-1 flex-shrink-0">&#x25B8;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lab Capabilities */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Lab & Testing Infrastructure"
            subtitle="Purpose-built facilities for every stage of material development, from molecular synthesis to production-scale validation."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-xl border border-surface-800/60 bg-surface-900/30 hover:bg-surface-900/50 transition-colors"
              >
                <h4 className="font-bold text-surface-50 mb-2">{c.title}</h4>
                <p className="text-sm text-surface-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <LeadMagnet
            title="Emerging Materials Watchlist — Q1 2026"
            description="Our research team's quarterly analysis: breakthrough polymers, self-healing composites, conductive fabrics, and smart pigments trending in soft robotics and prosthetics. With patent landscape overview."
            buttonLabel="Get the Watchlist"
            badge="Quarterly Research Brief"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6">
        <CTABanner
          headline="Want to Collaborate on Research?"
          subtext="We partner with universities, robotics companies, and defense labs on material science R&D. If you have a hard interface problem, let's solve it together."
          primaryLabel="Discuss a Research Partnership"
          primaryHref="/contact"
          secondaryLabel="View Our Technology"
          secondaryHref="/technology"
          variant="accent"
        />
      </section>
    </main>
  );
}
