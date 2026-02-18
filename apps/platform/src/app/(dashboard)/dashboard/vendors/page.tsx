export default function VendorsPage() {
  return (
    <div>
      <h1 className="text-[2.25rem] font-bold text-surface-50 mb-2">Vendor Registry</h1>
      <p className="text-surface-400 mb-8">Vendor profiles, scorecards, and risk assessments.</p>
      <div className="bg-surface-900 border border-surface-700 rounded-lg p-6">
        <p className="text-[0.875rem] text-surface-500">
          No vendors registered. Add your first vendor to begin tracking.
        </p>
      </div>
    </div>
  );
}
