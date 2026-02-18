'use client';

import { SectionHeading } from '@/components/SectionHeading';

const inquiryTypes = [
  { value: 'partnership', label: 'Partnership / Integration' },
  { value: 'custom', label: 'Custom Material Engineering' },
  { value: 'investment', label: 'Investment Inquiry' },
  { value: 'research', label: 'Research Collaboration' },
  { value: 'manufacturing', label: 'Manufacturing / Volume' },
  { value: 'media', label: 'Media / Press' },
  { value: 'other', label: 'General Inquiry' },
];

const expectations = [
  { icon: '1', text: 'We respond within 24 hours on business days' },
  { icon: '2', text: 'Technical calls include a senior materials engineer' },
  { icon: '3', text: 'NDA available before detailed discussions if needed' },
  { icon: '4', text: 'No sales pressure — we only work with aligned partners' },
];

const offices = [
  { location: 'R&D Lab', address: 'Materials engineering, prototyping, and testing' },
  { location: 'Manufacturing', address: 'Production-scale facilities across 4 regions' },
  { location: 'Engineering', address: 'Software, AI, and systems integration' },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-DEFAULT to-surface-DEFAULT" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-blue/[0.03] rounded-full blur-[150px]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block text-[0.7rem] font-bold text-accent-blue uppercase tracking-[0.25em] mb-4 bg-accent-blue/10 px-4 py-1.5 rounded-full">
            Let&apos;s Talk
          </span>
          <h1 className="text-[2.5rem] md:text-[3.5rem] leading-[1.05] font-bold text-surface-50 mb-6">
            Schedule a Call With Our Team
          </h1>
          <p className="text-lg text-surface-400 max-w-xl mx-auto leading-relaxed">
            Tell us what you&apos;re building. We&apos;ll tell you how our material systems can
            accelerate it. 30-minute calls, no obligation, NDA available.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Form */}
          <div className="md:col-span-3">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you! We\u2019ll be in touch within 24 hours.');
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-surface-300 mb-1.5"
                  >
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-surface-900 border border-surface-700 text-surface-100 placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 transition-all"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-surface-300 mb-1.5"
                  >
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-surface-900 border border-surface-700 text-surface-100 placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 transition-all"
                    placeholder="Chen"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-surface-300 mb-1.5"
                >
                  Work Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-surface-900 border border-surface-700 text-surface-100 placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 transition-all"
                  placeholder="jane@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-surface-300 mb-1.5"
                >
                  Company *
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-surface-900 border border-surface-700 text-surface-100 placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 transition-all"
                  placeholder="Acme Robotics"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-surface-300 mb-1.5">
                  Your Role
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-surface-900 border border-surface-700 text-surface-100 placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 transition-all"
                  placeholder="VP Engineering, CTO, Founder..."
                />
              </div>

              <div>
                <label
                  htmlFor="inquiryType"
                  className="block text-sm font-medium text-surface-300 mb-1.5"
                >
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-surface-900 border border-surface-700 text-surface-100 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 transition-all"
                >
                  <option value="">Select one...</option>
                  {inquiryTypes.map((it) => (
                    <option key={it.value} value={it.value}>
                      {it.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-surface-300 mb-1.5"
                >
                  What are you building? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-surface-900 border border-surface-700 text-surface-100 placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 transition-all resize-none"
                  placeholder="Describe your project, the interface challenge you're solving, and your timeline. The more context you give, the more useful our first call will be."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-500 transition-all active:scale-[0.98] shadow-lg shadow-accent-blue/20"
              >
                Submit &amp; Schedule a Call
              </button>
              <p className="text-xs text-surface-600 mt-2">
                We protect your data. See our{' '}
                <a href="/legal" className="underline hover:text-surface-400">
                  privacy policy
                </a>
                .
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-8">
            {/* What to Expect */}
            <div className="p-6 rounded-xl border border-surface-800/60 bg-surface-900/30">
              <h3 className="font-bold text-surface-50 mb-4">What to Expect</h3>
              <div className="space-y-3">
                {expectations.map((exp) => (
                  <div key={exp.icon} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-accent-blue text-xs font-bold">
                      {exp.icon}
                    </span>
                    <span className="text-sm text-surface-300">{exp.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendly Placeholder */}
            <div className="p-6 rounded-xl border border-accent-blue/20 bg-accent-blue/[0.03]">
              <h3 className="font-bold text-surface-50 mb-2">Prefer to Book Directly?</h3>
              <p className="text-sm text-surface-400 mb-4">
                Pick a 30-minute slot that works for you. Our engineering lead will be on the call.
              </p>
              <div className="w-full h-[300px] rounded-lg bg-surface-900 border border-surface-800 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-10 h-10 text-surface-600 mx-auto mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  <p className="text-sm text-surface-500 font-medium">Calendly Embed</p>
                  <p className="text-xs text-surface-600 mt-1">Connect your scheduling tool here</p>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="p-6 rounded-xl border border-surface-800/60 bg-surface-900/30">
              <h3 className="font-bold text-surface-50 mb-4">Our Operations</h3>
              <div className="space-y-3">
                {offices.map((o) => (
                  <div key={o.location}>
                    <p className="text-sm font-semibold text-surface-200">{o.location}</p>
                    <p className="text-xs text-surface-500">{o.address}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgency */}
            <div className="p-5 rounded-xl border border-amber-500/20 bg-amber-500/[0.03]">
              <p className="text-sm text-surface-300">
                <span className="font-bold text-amber-400">Limited Capacity.</span> We take on 3-4
                new integration projects per quarter to maintain engineering quality. Current
                availability: <span className="font-semibold text-surface-100">Q2 2026</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-surface-950">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            title="Investors"
            subtitle="If you're evaluating Flex Human as an investment opportunity, we'd love to share our deck, market analysis, and patent portfolio overview. Reach out through the form above or email us directly."
          />
          <p className="mt-4 text-accent-blue font-mono text-sm">investors@flexhuman.com</p>
        </div>
      </section>
    </main>
  );
}
