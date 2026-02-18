import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Flex Human for business inquiries.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen max-w-content mx-auto px-6 py-20">
      <h1 className="text-[2.25rem] font-bold text-surface-50 mb-6">Contact</h1>
      <p className="text-surface-400 max-w-xl mb-12">
        For business inquiries, partnership opportunities, or technical questions.
      </p>

      <form className="max-w-lg space-y-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[0.875rem] text-surface-400 font-medium">Name</label>
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
          <label className="text-[0.875rem] text-surface-400 font-medium">Organization</label>
          <input
            type="text"
            className="bg-surface-800 border border-surface-700 rounded-md px-3 py-2 text-surface-50 focus:outline-none focus:ring-2 focus:ring-accent-blue"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[0.875rem] text-surface-400 font-medium">Subject</label>
          <input
            type="text"
            required
            className="bg-surface-800 border border-surface-700 rounded-md px-3 py-2 text-surface-50 focus:outline-none focus:ring-2 focus:ring-accent-blue"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[0.875rem] text-surface-400 font-medium">Message</label>
          <textarea
            rows={5}
            required
            className="bg-surface-800 border border-surface-700 rounded-md px-3 py-2 text-surface-50 focus:outline-none focus:ring-2 focus:ring-accent-blue resize-none"
          />
        </div>
        <div className="hidden" aria-hidden="true">
          <input type="text" name="fax_number" tabIndex={-1} autoComplete="off" />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 bg-surface-50 text-surface-950 font-medium rounded-md hover:bg-surface-200 transition-colors"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
