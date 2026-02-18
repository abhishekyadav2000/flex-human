import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { ImageSection } from '@/components/ImageSection';
import { CTABanner } from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Partnerships',
  description:
    'Partner with Flex Human for custom synthetic skin, prosthetic interfaces, and intelligent wearable integration. Engineering partnerships, licensing, and R&D collaboration.',
};

const partnerTypes = [
  {
    type: 'Robotics Companies',
    who: 'Humanoid robot manufacturers, collaborative robot builders, social robot platforms',
    weDeliver:
      'Custom skin systems with integrated sensing, thermal regulation, and realistic appearance tuned to your mechanical platform.',
    theyGet: [
      'Dedicated engineering team for your integration',
      'Full material specs matched to your joint geometry',
      'Sensor data API for your control stack',
      'Priority production scheduling',
    ],
    example:
      'Think: providing the skin layer for platforms like Clone Robotics\u2019 androids or Engineered Arts\u2019 Ameca.',
  },
  {
    type: 'Prosthetic Manufacturers',
    who: 'Upper/lower limb prosthetic makers, cosmetic prosthetics, military augmentation',
    weDeliver:
      'Biocompatible skin interfaces with adaptive skin-tone matching, breathable ventilation, and haptic feedback compatibility.',
    theyGet: [
      'ISO 10993 certified materials from day one',
      'Custom tone matching for any ethnicity',
      'Integration with EMG/myoelectric control systems',
      'Clinical trial material supply',
    ],
    example:
      'Compatible with platforms like Open Bionics Hero Arm and Ottobock prosthetic systems.',
  },
  {
    type: 'Defense & Aerospace',
    who: 'Military robotics programs, exoskeleton developers, survival gear manufacturers',
    weDeliver:
      'Military-grade materials with extreme temperature tolerance, chemical resistance, and embedded sensor arrays for battlefield awareness.',
    theyGet: [
      'ITAR-compliant supply chain',
      'Classified project NDA framework',
      'MIL-STD testing and documentation',
      'Dedicated secure communication channel',
    ],
    example: 'Integrating with systems like Sarcos Guardian XO exoskeleton platform.',
  },
  {
    type: 'Research Institutions',
    who: 'Universities, national labs, medical research centers',
    weDeliver:
      'Custom material samples, joint R&D programs, shared IP frameworks, and publication collaboration.',
    theyGet: [
      'Access to our polymer chemistry lab',
      'Co-authorship on material science publications',
      'Discounted material supply for academic projects',
      'Internship and fellowship pipeline',
    ],
    example: 'Building on research from Stanford (DexSkin), Johns Hopkins, and MIT CSAIL.',
  },
];

const processSteps = [
  {
    step: '1',
    title: 'Discovery Call',
    desc: 'Tell us about your application, timeline, and requirements. We\u2019ll assess fit and define scope in a 30-minute call.',
    time: '30 min',
  },
  {
    step: '2',
    title: 'Technical Assessment',
    desc: 'Our engineering team reviews your platform specs, mechanical constraints, and performance targets. We deliver a feasibility report.',
    time: '1 week',
  },
  {
    step: '3',
    title: 'Material Architecture',
    desc: 'Custom material stack design with layer specifications, sensor placement, and integration plan. Includes CAD-compatible models.',
    time: '2-3 weeks',
  },
  {
    step: '4',
    title: 'Prototype Build',
    desc: 'First physical prototype manufactured, tested, and shipped for your evaluation. Includes full test data package.',
    time: '4-6 weeks',
  },
  {
    step: '5',
    title: 'Integration & Iteration',
    desc: 'On-site or remote integration support. Rapid iteration based on your testing feedback until specifications are met.',
    time: '2-4 weeks',
  },
  {
    step: '6',
    title: 'Production Contract',
    desc: 'Volume manufacturing agreement with guaranteed quality levels, delivery schedules, and dedicated production capacity.',
    time: 'Ongoing',
  },
];

const investorPoints = [
  {
    title: '$47B',
    subtitle: 'Humanoid robot market by 2030',
    desc: 'Every humanoid needs skin. We\u2019re building the material layer the entire industry depends on.',
  },
  {
    title: '$12B',
    subtitle: 'Prosthetics market growing 7.2% CAGR',
    desc: 'Functional skin coverings are the fastest-growing prosthetic accessory category.',
  },
  {
    title: '$8B',
    subtitle: 'Smart wearables and exoskeletons',
    desc: 'Industrial wearables with embedded sensing are being mandated by safety regulations.',
  },
  {
    title: '10+',
    subtitle: 'Granted and pending patents',
    desc: 'Multi-layer architecture, sensor mesh design, and AI manufacturing processes protected by our IP portfolio.',
  },
];

export default function PartnershipsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-DEFAULT to-surface-DEFAULT" />
        <div className="absolute top-20 right-1/3 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[130px]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block text-[0.7rem] font-bold text-accent-blue uppercase tracking-[0.25em] mb-4 bg-accent-blue/10 px-4 py-1.5 rounded-full">
            Partnerships
          </span>
          <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.05] font-bold text-surface-50 mb-6 max-w-4xl mx-auto">
            Build With the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-accent-blue">
              Interface Experts
            </span>
          </h1>
          <p className="text-lg text-surface-400 max-w-2xl mx-auto leading-relaxed mb-10">
            We don&apos;t sell off-the-shelf materials. We engineer custom interface systems for
            your specific platform. Tell us what you&apos;re building — we&apos;ll spec the skin.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-150 active:scale-[0.98] shadow-lg shadow-accent-blue/25"
          >
            Schedule a Discovery Call
            <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="Who We Partner With"
            subtitle="We've designed our engagement model for each industry vertical. Here's what a partnership looks like."
          />
          <div className="mt-14 space-y-8">
            {partnerTypes.map((pt) => (
              <div
                key={pt.type}
                className="rounded-xl border border-surface-800/60 bg-surface-900/20 overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-surface-50 mb-2">{pt.type}</h3>
                      <p className="text-sm text-surface-500 mb-4">{pt.who}</p>
                      <p className="text-surface-300 leading-relaxed mb-4">{pt.weDeliver}</p>
                      <p className="text-xs text-surface-500 italic">{pt.example}</p>
                    </div>
                    <div className="md:w-80 flex-shrink-0">
                      <p className="text-xs font-bold text-accent-blue uppercase tracking-wider mb-3">
                        What You Get
                      </p>
                      <ul className="space-y-2">
                        {pt.theyGet.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-surface-300"
                          >
                            <svg
                              className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 px-6 bg-surface-950">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="From Discovery to Production in 12 Weeks"
            subtitle="Our engagement process is designed to get you from first call to a working prototype as fast as possible — without cutting corners on quality."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((ps) => (
              <div
                key={ps.step}
                className="p-6 rounded-xl border border-surface-800/60 bg-surface-900/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-accent-blue text-sm font-bold">
                    {ps.step}
                  </span>
                  <span className="text-xs font-mono text-surface-500">{ps.time}</span>
                </div>
                <h4 className="font-bold text-surface-50 mb-2">{ps.title}</h4>
                <p className="text-sm text-surface-400 leading-relaxed">{ps.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor / Market Data */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="The Market Opportunity"
            subtitle="Humanoid robots are moving from labs to production lines. Prosthetics are getting smarter. Industrial wearables are becoming mandatory. All of them need our materials."
          />
          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {investorPoints.map((ip) => (
              <div
                key={ip.title}
                className="p-6 rounded-xl border border-surface-800/60 bg-surface-900/30"
              >
                <div className="text-3xl font-bold text-accent-blue mb-1">{ip.title}</div>
                <div className="text-sm font-semibold text-surface-200 mb-2">{ip.subtitle}</div>
                <p className="text-sm text-surface-400 leading-relaxed">{ip.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <ImageSection
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80"
              alt="Humanoid robot representing the future of human-machine interaction"
              caption="The humanoid robotics market is projected to reach $47B by 2030 — every unit needs an interface layer"
              credit="Unsplash"
              aspect="wide"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6">
        <CTABanner
          headline="Let's Start With a Conversation"
          subtext="Whether you're a robotics startup, a prosthetics manufacturer, a defense integrator, or an investor — we'd love to hear about what you're building and explore how we can help."
          primaryLabel="Schedule a Discovery Call"
          primaryHref="/contact"
          secondaryLabel="Download Investment Brief"
          secondaryHref="/contact"
          variant="accent"
        />
      </section>
    </main>
  );
}
