import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { VideoEmbed } from '@/components/VideoEmbed';
import { ImageSection } from '@/components/ImageSection';
import { CTABanner } from '@/components/CTABanner';
import { StatBlock } from '@/components/StatBlock';

export const metadata: Metadata = {
  title: 'Technology',
  description:
    'Advanced synthetic skin architecture, prosthetic interfaces, and intelligent wearable systems engineered for robotics, prosthetics, and defense.',
};

const skinLayers = [
  {
    name: 'Outer Protective Layer',
    detail:
      'Damage-resistant polymer with UV stability, self-cleaning micro-texture, and adaptive pigmentation. Handles continuous mechanical stress without delamination.',
  },
  {
    name: 'Tactile Sensor Mesh',
    detail:
      'Distributed capacitive and piezoresistive sensor grid at 500+ points per m\u00B2. Sub-millimeter spatial resolution for pressure, temperature, and proximity detection.',
  },
  {
    name: 'Elastic Recovery Layer',
    detail:
      'Multi-axis elastic polymer with >95% recovery after 200% elongation. Maps to underlying mechanical structures without restricting joint movement.',
  },
  {
    name: 'Thermal Regulation Layer',
    detail:
      'Microfluidic channels with active thermal management. Maintains surface temperature within 2\u00B0C of target, compatible with human-comfort interaction zones.',
  },
  {
    name: 'Adhesion Interface',
    detail:
      'Conformal bonding layer that adapts to curved robotic frames, prosthetic shells, and exoskeleton surfaces. Tool-free removal for maintenance.',
  },
];

const materialProperties = [
  { property: 'Tensile Strength', value: '12-35 MPa', note: 'Tunable per application' },
  { property: 'Elongation at Break', value: '400-800%', note: 'Exceeds natural skin' },
  { property: 'Shore Hardness', value: '15A - 45A', note: 'Soft tissue range' },
  { property: 'Thermal Tolerance', value: '-40\u00B0C to 120\u00B0C', note: 'Industrial grade' },
  { property: 'UV Resistance', value: '2000+ hours', note: 'Accelerated weathering' },
  { property: 'Biocompatibility', value: 'ISO 10993', note: 'Skin contact certified' },
  { property: 'Sensor Density', value: '500+ / m\u00B2', note: 'Pressure + temperature' },
  { property: 'Weight', value: '0.8-1.2 kg/m\u00B2', note: '3x lighter than conventional' },
];

const wearableFeatures = [
  {
    title: 'Conductive Fiber Network',
    desc: 'Silver-coated polymer fibers woven into stretchable circuits. Maintains conductivity through 10,000+ wash cycles.',
  },
  {
    title: 'Bio-Signal Capture',
    desc: 'Integrated EMG/ECG dry electrodes with medical-grade signal quality. No gel, no prep, continuous monitoring.',
  },
  {
    title: 'Gesture Recognition',
    desc: 'Strain gauge arrays that detect micro-movements. Compatible with exoskeleton control systems and VR input.',
  },
  {
    title: 'Thermal Regulation',
    desc: 'Phase-change microcapsules and active heating zones. Adapts to ambient conditions and metabolic output.',
  },
  {
    title: 'Modular Electronics',
    desc: 'Snap-in sensor modules via textile-integrated connectors. Swap sensors, batteries, and processors without sewing.',
  },
  {
    title: 'Washable Architecture',
    desc: 'Encapsulated electronics survive machine washing at 60\u00B0C. IP67-rated connector interfaces.',
  },
];

export default function TechnologyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-DEFAULT to-surface-DEFAULT" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-blue/[0.04] rounded-full blur-[150px]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block text-[0.7rem] font-bold text-accent-blue uppercase tracking-[0.25em] mb-4 bg-accent-blue/10 px-4 py-1.5 rounded-full">
            Technology
          </span>
          <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.05] font-bold text-surface-50 mb-6 max-w-4xl mx-auto">
            Material Science Meets{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-cyan-300">
              Intelligent Engineering
            </span>
          </h1>
          <p className="text-lg text-surface-400 max-w-2xl mx-auto leading-relaxed">
            Five specialized material layers, 500+ embedded sensors per square meter, and AI-driven
            manufacturing. This is how we build the interface between biology and machines.
          </p>
        </div>
      </section>

      {/* Skin Architecture */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                title="Multi-Layer Skin Architecture"
                subtitle="Each layer is independently engineered and tested. Together, they create a synthetic skin system that rivals biological tissue in key performance metrics."
              />
              <div className="mt-10 space-y-6">
                {skinLayers.map((layer, i) => (
                  <div key={layer.name} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-accent-blue text-sm font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-surface-50 font-semibold mb-1">{layer.name}</h3>
                      <p className="text-sm text-surface-400 leading-relaxed">{layer.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <ImageSection
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80"
                alt="Synthetic material layers under electron microscope"
                caption="Cross-section view of multi-layer polymer composite architecture"
                credit="Unsplash"
                priority
              />
              <VideoEmbed
                videoId="o4CEsLRgKqg"
                title="MIT – Sensor Skin Gives Robots Human Touch"
                caption="MIT CSAIL research: sensor skin technology enabling robots to feel like humans"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Material Properties Table */}
      <section className="py-20 md:py-28 px-6 bg-surface-950">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Material Performance Specifications"
            subtitle="Verified through accelerated lifecycle testing, third-party certification, and real-world deployment data."
          />
          <div className="mt-12 rounded-xl border border-surface-800 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-surface-900/80">
                  <th className="text-left text-xs font-bold text-surface-400 uppercase tracking-wider px-6 py-4">
                    Property
                  </th>
                  <th className="text-left text-xs font-bold text-surface-400 uppercase tracking-wider px-6 py-4">
                    Value
                  </th>
                  <th className="text-left text-xs font-bold text-surface-400 uppercase tracking-wider px-6 py-4 hidden sm:table-cell">
                    Note
                  </th>
                </tr>
              </thead>
              <tbody>
                {materialProperties.map((mp, i) => (
                  <tr
                    key={mp.property}
                    className={`border-t border-surface-800/60 ${i % 2 === 0 ? 'bg-surface-900/20' : ''}`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-surface-200">
                      {mp.property}
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-accent-blue">{mp.value}</td>
                    <td className="px-6 py-4 text-sm text-surface-500 hidden sm:table-cell">
                      {mp.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Clone Robotics Reference */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="Built for the Next Generation of Humanoids"
            subtitle="Companies like Clone Robotics are building androids with 200+ degrees of freedom and 1,000+ artificial muscles. They need skin that moves, senses, and lasts. That's our domain."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <VideoEmbed
              videoId="FV6LTmgY4wk"
              title="Clone Robotics Torso Android"
              caption="Clone's synthetic human torso with hydraulic muscles — the type of platform our skin systems are designed for"
            />
            <div className="space-y-6">
              <StatBlock
                stats={[
                  {
                    value: '200+',
                    label: 'Degrees of Freedom',
                    sublabel: 'Full-body articulation',
                  },
                  { value: '1,000+', label: 'Myofibers', sublabel: 'Artificial muscle count' },
                  { value: '500+', label: 'Sensors', sublabel: 'Distributed tactile array' },
                  { value: '<50ms', label: 'Response Time', sublabel: 'Muscle contraction speed' },
                ]}
              />
              <div className="p-6 rounded-xl border border-surface-800/60 bg-surface-900/30">
                <h4 className="font-bold text-surface-50 mb-3">
                  Why Existing Solutions Fall Short
                </h4>
                <p className="text-sm text-surface-400 leading-relaxed">
                  Current robotic skin options are either rigid silicone shells that crack under
                  repeated stress, or basic fabric overlays with zero sensing capability. Our
                  multi-layer system solves both: it stretches, senses, regulates temperature, and
                  self-reports damage — while maintaining the visual and tactile realism that social
                  robots demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligent Wearables */}
      <section className="py-20 md:py-28 px-6 bg-surface-950">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Intelligent Wearable Systems"
            subtitle="From exoskeleton-integrated garments to bio-sensing clothing, we engineer the fabric layer that makes wearables actually intelligent."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-8 items-start">
            <div className="grid gap-4">
              {wearableFeatures.map((wf) => (
                <div
                  key={wf.title}
                  className="p-5 rounded-xl border border-surface-800/60 bg-surface-900/30 hover:bg-surface-900/50 transition-colors"
                >
                  <h4 className="font-semibold text-surface-50 mb-1.5">{wf.title}</h4>
                  <p className="text-sm text-surface-400 leading-relaxed">{wf.desc}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <ImageSection
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
                alt="Smart wearable technology with embedded sensors"
                caption="Next-gen wearable fabric with embedded conductive fiber networks"
                credit="Unsplash"
              />
              <VideoEmbed
                videoId="PZcHlz_obyw"
                title="Sarcos Guardian XO Exoskeleton"
                caption="Full-body powered exoskeleton — the type of platform our wearable fabrics integrate with"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6">
        <CTABanner
          headline="Need Custom Material Engineering?"
          subtext="Tell us about your application — humanoid skin, prosthetic interface, or wearable system — and our team will spec a material architecture in 48 hours."
          primaryLabel="Schedule a Technical Call"
          primaryHref="/contact"
          secondaryLabel="View R&D Capabilities"
          secondaryHref="/r-and-d"
          variant="accent"
        />
      </section>
    </main>
  );
}
