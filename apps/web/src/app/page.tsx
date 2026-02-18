import Link from 'next/link';
import { FluidBackground } from '@/components/FluidBackground';
import { SectionHeading } from '@/components/SectionHeading';
import { VideoEmbed } from '@/components/VideoEmbed';
import { CTABanner } from '@/components/CTABanner';
import { ImageSection } from '@/components/ImageSection';
import { SocialProof } from '@/components/SocialProof';
import { StatBlock } from '@/components/StatBlock';
import { LeadMagnet } from '@/components/LeadMagnet';

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
const stats = [
  { value: '206', label: 'Bone Analogues', sublabel: 'Full skeletal system mapping' },
  { value: '<50ms', label: 'Muscle Response', sublabel: 'Human-level fiber contraction' },
  { value: '500+', label: 'Sensor Points', sublabel: 'Distributed tactile feedback' },
  { value: '5', label: 'Global Regions', sublabel: 'Multi-region vendor network' },
];

const pillars = [
  {
    title: 'Human-Like Synthetic Skin',
    description:
      'Multi-layer polymer composites with elastic recovery mapping, tactile sensing, thermal regulation, micro-texture realism, and adaptive pigmentation. Built for humanoid robots, collaborative systems, and medical simulation.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    href: '/technology',
    tag: 'Core Technology',
  },
  {
    title: 'Prosthetic Interface Systems',
    description:
      'Skin-tone adaptive layering with seamless prosthetic frame integration, breathable micro-ventilation, embedded haptic feedback, and AI-driven gait mapping. Three times lighter than conventional coverings.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    href: '/technology',
    tag: 'Integration',
  },
  {
    title: 'Intelligent Wearable Engineering',
    description:
      'Conductive fiber networks with smart thermal regulation, gesture recognition, bio-signal capture (ECG/EMG), and modular electronics channels. Washable, durable, exoskeleton-compatible.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    href: '/technology',
    tag: 'Wearables',
  },
];

const useCases = [
  {
    icon: '01',
    title: 'Humanoid Robotics',
    desc: 'Realistic skin overlays for social robots, service androids, and humanoid platforms like those built by Clone Robotics and Engineered Arts.',
  },
  {
    icon: '02',
    title: 'Prosthetic Devices',
    desc: 'Functional and cosmetic coverings for upper and lower-limb prosthetics, compatible with leaders like Open Bionics and Ottobock systems.',
  },
  {
    icon: '03',
    title: 'Defense & Aerospace',
    desc: 'Military-grade adaptive gear, exoskeleton-compatible fabrics, and ruggedized sensor-embedded materials for extreme environments.',
  },
  {
    icon: '04',
    title: 'Medical Simulation',
    desc: 'High-fidelity synthetic skin for surgical training systems and anatomical models with realistic tactile response.',
  },
  {
    icon: '05',
    title: 'Industrial Wearables',
    desc: 'Smart safety gear with embedded sensing for manufacturing floors, integrated with Sarcos and Ottobock exoskeleton platforms.',
  },
  {
    icon: '06',
    title: 'Automotive & EV',
    desc: 'Soft-touch interior surfaces, adaptive seat materials, and sensor-rich interfaces for next-generation vehicle cabins.',
  },
];

const trustPoints = [
  'ISO-compliant manufacturing pipeline',
  'Biocompatibility-certified materials',
  'Full IP protection and NDA framework',
  'Versioned experiment tracking and provenance',
  'AI-driven quality control with computer vision',
  'Multi-region vendor redundancy strategy',
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <FluidBackground />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface-DEFAULT to-transparent z-[1]" />

        <div className="relative z-[2] max-w-[1280px] mx-auto">
          <div className="animate-fade-in">
            <span className="inline-block text-[0.7rem] font-bold text-accent-blue uppercase tracking-[0.25em] mb-6 bg-accent-blue/10 px-4 py-1.5 rounded-full">
              Interface Engineering Platform
            </span>
          </div>

          <h1 className="animate-fade-in animate-fade-in-delay-1 text-[2.75rem] md:text-[4rem] lg:text-[5rem] leading-[1.02] font-bold tracking-tight text-surface-50 mb-6 max-w-5xl mx-auto">
            The Skin That Gives{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-cyan-300">
              Machines
            </span>{' '}
            a Human Touch
          </h1>

          <p className="animate-fade-in animate-fade-in-delay-2 text-[1.125rem] md:text-[1.3rem] leading-relaxed text-surface-400 max-w-2xl mx-auto mb-10">
            We engineer advanced synthetic skin, prosthetic interfaces, and intelligent wearables
            that bridge biology and robotics. Backed by AI-driven manufacturing and material
            science.
          </p>

          <div className="animate-fade-in animate-fade-in-delay-3 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-150 active:scale-[0.98] shadow-lg shadow-accent-blue/25"
            >
              Schedule a Call
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
            <Link
              href="/technology"
              className="inline-flex items-center justify-center px-8 py-4 border border-surface-700 text-surface-50 font-semibold rounded-lg hover:bg-surface-800/50 hover:border-surface-600 transition-all duration-150"
            >
              Explore Technology
            </Link>
          </div>

          <div className="animate-fade-in animate-fade-in-delay-3 mt-12">
            <SocialProof />
          </div>
        </div>
      </section>

      {/* ============ VIDEO PROOF ============ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="The Future Is Already Being Built"
            subtitle="From Clone Robotics' synthetic humans to Figure AI's factory deployments, humanoid robots are entering production. They all need one thing we specialize in: realistic, functional skin."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <VideoEmbed
              videoId="5mSE6Tkhy4g"
              title="Clone Robotics – Bimanual Android with Artificial Muscles"
              caption="Clone Robotics Torso: 164 articulation points, synthetic muscles, human-like dexterity"
            />
            <VideoEmbed
              videoId="xLVm-QKEZSI"
              title="Figure 02 at BMW Factory"
              caption="Figure 02 humanoid robots performing precision tasks at BMW Plant Spartanburg"
            />
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="py-16 px-6 border-y border-surface-800/60">
        <div className="max-w-5xl mx-auto">
          <StatBlock stats={stats} />
        </div>
      </section>

      {/* ============ PILLARS (with real images) ============ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Three Engineering Pillars"
            subtitle="Purpose-built material systems for the three fastest-growing interface markets."
          />
          <div className="mt-16 space-y-20">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
              >
                <div className="flex-1 w-full">
                  <ImageSection src={p.image} alt={p.title} priority={i === 0} />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-accent-blue uppercase tracking-[0.15em] mb-3 block">
                    {p.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-surface-50 mb-4">{p.title}</h3>
                  <p className="text-surface-400 leading-relaxed mb-6">{p.description}</p>
                  <Link
                    href={p.href}
                    className="inline-flex items-center text-accent-blue font-semibold hover:text-blue-400 transition-colors"
                  >
                    Learn more
                    <svg className="ml-1.5 w-4 h-4" viewBox="0 0 16 16" fill="none">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ USE CASES ============ */}
      <section className="py-20 md:py-28 px-6 bg-surface-950">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Who We Serve"
            subtitle="We build for the companies shaping the next decade of human-machine interaction."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.icon}
                className="p-6 rounded-xl border border-surface-800/60 bg-surface-900/30 hover:bg-surface-900/60 hover:border-surface-700 transition-all group"
              >
                <span className="text-2xl font-bold text-accent-blue/40 group-hover:text-accent-blue/70 transition-colors">
                  {uc.icon}
                </span>
                <h3 className="text-lg font-bold text-surface-50 mt-3 mb-2">{uc.title}</h3>
                <p className="text-sm text-surface-400 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AMECA VIDEO ============ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Why Realistic Skin Matters"
            subtitle="Watch Ameca by Engineered Arts demonstrate human-level facial expressions. This is the standard the industry is moving toward — and the interface layer we build."
          />
          <div className="mt-12">
            <VideoEmbed
              videoId="6y1CyVYWBrw"
              title="Ameca by Engineered Arts – Human-Like Expressions"
              caption="Ameca's rubber skin enables micro-expressions indistinguishable from human movement at first glance"
            />
          </div>
        </div>
      </section>

      {/* ============ TRUST / WHY US ============ */}
      <section className="py-20 md:py-28 px-6 bg-surface-950">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="Built to Enterprise Standards"
            subtitle="We don't cut corners. Every material, process, and system meets the standards your compliance team demands."
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {trustPoints.map((tp) => (
              <div
                key={tp}
                className="flex items-start gap-3 p-4 rounded-lg border border-surface-800/40 bg-surface-900/20"
              >
                <svg
                  className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-surface-300 font-medium">{tp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LEAD MAGNET ============ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <LeadMagnet
            title="2026 Synthetic Skin & Robotics Interface Report"
            description="Our research team's analysis of the synthetic skin market: material breakthroughs, competitive landscape, patent activity, and the 5-year outlook for humanoid robotics interfaces. 40+ pages of actionable intelligence."
            buttonLabel="Get the Report"
            badge="Free Research Report"
          />
        </div>
      </section>

      {/* ============ PROSTHETICS VIDEO + IMAGE ============ */}
      <section className="py-20 md:py-28 px-6 bg-surface-950">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="Prosthetic Integration That Changes Lives"
            subtitle="Our interface systems work with the world's leading prosthetic platforms. See what modern myoelectric prosthetics can achieve."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-8 items-start">
            <VideoEmbed
              videoId="X3B1Vp0LMQs"
              title="Open Bionics Hero Arm – 3 Year Review"
              caption="Travis reviews the Hero Arm after 3 years of daily use — the prosthetic platform our skin integrates with"
            />
            <div className="space-y-6">
              <ImageSection
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                alt="Prosthetic research and development"
                caption="Flex Human prosthetic interface R&D lab"
                credit="Unsplash"
              />
              <div className="p-6 rounded-xl border border-surface-800/60 bg-surface-900/30">
                <h4 className="font-bold text-surface-50 mb-2">
                  Our Prosthetic Interface Advantage
                </h4>
                <ul className="space-y-2 text-sm text-surface-400">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue mt-1">&#x2022;</span>
                    Skin-tone adaptive layering matches any ethnicity
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue mt-1">&#x2022;</span>
                    Breathable micro-ventilation prevents moisture buildup
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue mt-1">&#x2022;</span>
                    Embedded haptic feedback compatible with EMG signals
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue mt-1">&#x2022;</span>
                    3x lighter than conventional prosthetic coverings
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-20 md:py-28 px-6">
        <CTABanner
          headline="Ready to Engineer the Future Together?"
          subtext="Whether you're building humanoid robots, next-gen prosthetics, or industrial wearables — we'd love to explore how our materials can accelerate your product. Book a 30-minute call with our engineering team."
          primaryLabel="Schedule a Call"
          primaryHref="/contact"
          secondaryLabel="View Our Technology"
          secondaryHref="/technology"
          variant="accent"
        />
      </section>
    </main>
  );
}
