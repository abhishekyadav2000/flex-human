import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partnerships',
  description: 'Collaborate with Flex Human on robotics, prosthetics, and wearable integration.',
};

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen max-w-content mx-auto px-6 py-20">
      <h1 className="text-[2.25rem] font-bold text-surface-50 mb-6">Partnerships</h1>
      <p className="text-surface-400 max-w-2xl mb-12">
        We partner with robotics companies, prosthetic manufacturers, defense programs, and research
        institutions to integrate synthetic skin and intelligent wearable systems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-[1.75rem] font-semibold text-surface-50 mb-6">Partner With Us</h2>
          <form className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.875rem] text-surface-400 font-medium">Name</label>
              <input
                type="text"
                required
                className="bg-surface-800 border border-surface-700 rounded-md px-3 py-2 text-surface-50 focus:outline-none focus:ring-2 focus:ring-accent-blue"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.875rem] text-surface-400 font-medium">Organization</label>
              <input
                type="text"
                required
                className="bg-surface-800 border border-surface-700 rounded-md px-3 py-2 text-surface-50 focus:outline-none focus:ring-2 focus:ring-accent-blue"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.875rem] text-surface-400 font-medium">Email</label>
              <input
                type="email"
                required
                className="bg-surface-800 border border-surface-700 rounded-md px-3 py-2 text-surface-50 focus:outline-none focus:ring-2 focus:ring-accent-blue"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.875rem] text-surface-400 font-medium">Interest Area</label>
              <select className="bg-surface-800 border border-surface-700 rounded-md px-3 py-2 text-surface-50 focus:outline-none focus:ring-2 focus:ring-accent-blue">
                <option>Synthetic Skin Integration</option>
                <option>Prosthetic Interface</option>
                <option>Wearable Engineering</option>
                <option>Manufacturing Partnership</option>
                <option>Research Collaboration</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.875rem] text-surface-400 font-medium">Message</label>
              <textarea
                rows={4}
                required
                className="bg-surface-800 border border-surface-700 rounded-md px-3 py-2 text-surface-50 focus:outline-none focus:ring-2 focus:ring-accent-blue resize-none"
              />
            </div>
            {/* Honeypot for spam prevention */}
            <div className="hidden" aria-hidden="true">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-surface-50 text-surface-950 font-medium rounded-md hover:bg-surface-200 transition-colors"
            >
              Submit Inquiry
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-[1.75rem] font-semibold text-surface-50 mb-6">Target Partners</h2>
          <div className="space-y-4">
            {[
              {
                type: 'Humanoid Robotics Companies',
                desc: 'Synthetic skin integration for humanoid and service robots.',
              },
              {
                type: 'Prosthetic Manufacturers',
                desc: 'Adaptive skin coverings for upper and lower-limb prosthetics.',
              },
              {
                type: 'Defense Programs',
                desc: 'Military-grade resilient skin and augmentation wearables.',
              },
              {
                type: 'Research Institutions',
                desc: 'Collaborative R&D on emerging bio-synthetic materials.',
              },
            ].map((p) => (
              <div key={p.type} className="bg-surface-900 border border-surface-700 rounded-lg p-5">
                <h3 className="text-[1.125rem] font-semibold text-surface-50 mb-1">{p.type}</h3>
                <p className="text-[0.875rem] text-surface-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
