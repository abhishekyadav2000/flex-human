import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { VideoEmbed } from '@/components/VideoEmbed';
import { ImageSection } from '@/components/ImageSection';
import { CTABanner } from '@/components/CTABanner';
import { StatBlock } from '@/components/StatBlock';

export const metadata: Metadata = {
  title: 'Manufacturing',
  description:
    'AI-driven manufacturing intelligence: digital twins, computer vision quality control, predictive modeling, and global supply chain orchestration.',
};

const processSteps = [
  {
    step: '01',
    title: 'Material Formulation',
    desc: 'AI-optimized polymer blending with real-time viscometry and molecular weight control. Each batch is formulated to application-specific targets.',
  },
  {
    step: '02',
    title: 'Precision Casting',
    desc: 'Multi-layer sequential casting with sub-millimeter thickness control. Automated sensor mesh placement between layers.',
  },
  {
    step: '03',
    title: 'Curing Optimization',
    desc: 'Reinforcement-learning controlled curing profiles. Temperature, humidity, and UV exposure tuned per material grade for optimal cross-linking.',
  },
  {
    step: '04',
    title: 'Vision Inspection',
    desc: 'Computer vision defect detection at 5\u03BCm resolution. Every square centimeter scanned for delamination, inclusions, and surface anomalies.',
  },
  {
    step: '05',
    title: 'Sensor Integration',
    desc: 'Automated pick-and-place for flexible sensor arrays. Electrical continuity verification at each node before encapsulation.',
  },
  {
    step: '06',
    title: 'Performance Validation',
    desc: 'Automated tensile, elongation, and sensor response testing. Statistical process control with real-time SPC dashboards.',
  },
];

const mfgStats = [
  { value: '5\u03BCm', label: 'Defect Detection', sublabel: 'Computer vision resolution' },
  { value: '99.4%', label: 'First-Pass Yield', sublabel: 'AI-optimized process control' },
  { value: '<2hr', label: 'Batch Turnaround', sublabel: 'Formulation to inspection' },
  { value: '100%', label: 'Traceability', sublabel: 'Raw material to finished product' },
];

const qcCapabilities = [
  {
    title: 'Real-Time Anomaly Detection',
    desc: 'Neural network models trained on 100K+ defect images detect surface flaws, thickness variation, and contamination during production.',
  },
  {
    title: 'Digital Twin Simulation',
    desc: 'Virtual replicas of every production line. Simulate process changes before physical implementation to reduce waste and downtime.',
  },
  {
    title: 'Predictive Maintenance',
    desc: 'Sensor data from curing ovens, casting equipment, and inspection systems feeds ML models that predict failures 48 hours in advance.',
  },
  {
    title: 'Batch Genealogy',
    desc: 'Complete material lineage from raw polymer lot through finished product. Automated documentation for regulatory compliance and customer audits.',
  },
];

const vendorRegions = [
  {
    region: 'North America',
    capabilities: 'Advanced polymers, biocompatible materials, sensor components',
    compliance: 'FDA, ISO 13485, ITAR',
  },
  {
    region: 'Europe',
    capabilities: 'Specialty chemicals, conductive fibers, precision electronics',
    compliance: 'CE, REACH, ISO 10993',
  },
  {
    region: 'East Asia',
    capabilities: 'High-volume polymer processing, flexible PCB, textile manufacturing',
    compliance: 'ISO 9001, RoHS, OEKO-TEX',
  },
  {
    region: 'South Asia',
    capabilities: 'Textile integration, garment manufacturing, wearable assembly',
    compliance: 'ISO 14001, SA8000, ESG audited',
  },
];

export default function ManufacturingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-DEFAULT to-surface-DEFAULT" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-green-500/[0.03] rounded-full blur-[130px]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block text-[0.7rem] font-bold text-accent-blue uppercase tracking-[0.25em] mb-4 bg-accent-blue/10 px-4 py-1.5 rounded-full">
            Manufacturing
          </span>
          <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.05] font-bold text-surface-50 mb-6 max-w-4xl mx-auto">
            AI-Powered{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-accent-blue">
              Manufacturing Intelligence
            </span>
          </h1>
          <p className="text-lg text-surface-400 max-w-2xl mx-auto leading-relaxed">
            Every batch is AI-optimized, vision-inspected, and fully traceable. Our manufacturing
            pipeline turns material science breakthroughs into production-grade reality.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-b border-surface-800/60">
        <div className="max-w-5xl mx-auto">
          <StatBlock stats={mfgStats} />
        </div>
      </section>

      {/* Production Pipeline */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="End-to-End Production Pipeline"
            subtitle="Six precision stages from raw polymer to validated product. Each step monitored by AI, each output logged for traceability."
          />
          <div className="mt-14 grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              {processSteps.map((ps) => (
                <div
                  key={ps.step}
                  className="flex gap-4 p-4 rounded-xl border border-surface-800/60 bg-surface-900/30 hover:bg-surface-900/50 transition-colors"
                >
                  <span className="flex-shrink-0 text-2xl font-bold text-accent-blue/30">
                    {ps.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-surface-50 mb-1">{ps.title}</h3>
                    <p className="text-sm text-surface-400 leading-relaxed">{ps.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <ImageSection
                src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&q=80"
                alt="Advanced manufacturing robotics and automation"
                caption="Automated precision manufacturing with robotic assembly"
                credit="Unsplash"
                priority
              />
              <ImageSection
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"
                alt="Quality control and inspection in modern factory"
                caption="Computer vision quality inspection at production scale"
                credit="Unsplash"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QC Video + Capabilities */}
      <section className="py-20 md:py-28 px-6 bg-surface-950">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="Quality Intelligence System"
            subtitle="Manufacturing quality isn't just inspection — it's prediction, prevention, and continuous optimization powered by our AI layer."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <VideoEmbed
              videoId="h4SQUglSsH4"
              title="Figure 02 Autonomous Manufacturing Tasks"
              caption="The kind of precision manufacturing environment our materials are designed for"
            />
            <div className="space-y-4">
              {qcCapabilities.map((qc) => (
                <div
                  key={qc.title}
                  className="p-5 rounded-xl border border-surface-800/60 bg-surface-900/30"
                >
                  <h4 className="font-semibold text-surface-50 mb-1.5">{qc.title}</h4>
                  <p className="text-sm text-surface-400 leading-relaxed">{qc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Supply Chain */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="Global Vendor Network"
            subtitle="Multi-region redundancy with ISO-certified suppliers across 4 continents. Every vendor scored, audited, and monitored by our supply chain intelligence."
          />
          <div className="mt-12 space-y-4">
            {vendorRegions.map((vr) => (
              <div
                key={vr.region}
                className="p-6 rounded-xl border border-surface-800/60 bg-surface-900/20 grid sm:grid-cols-3 gap-4"
              >
                <div>
                  <h4 className="font-bold text-surface-50 mb-1">{vr.region}</h4>
                </div>
                <div>
                  <p className="text-xs text-surface-500 uppercase tracking-wider mb-1">
                    Capabilities
                  </p>
                  <p className="text-sm text-surface-300">{vr.capabilities}</p>
                </div>
                <div>
                  <p className="text-xs text-surface-500 uppercase tracking-wider mb-1">
                    Compliance
                  </p>
                  <p className="text-sm text-accent-blue font-mono">{vr.compliance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6">
        <CTABanner
          headline="Need a Manufacturing Partner?"
          subtext="From prototype to production scale, we handle the entire material manufacturing pipeline. ISO-certified, AI-monitored, fully traceable. Let's discuss your volume requirements."
          primaryLabel="Discuss Manufacturing"
          primaryHref="/contact"
          secondaryLabel="View Our Technology"
          secondaryHref="/technology"
          variant="accent"
        />
      </section>
    </main>
  );
}
