export default function MaterialsPage() {
  return (
    <div>
      <h1 className="text-[2.25rem] font-bold text-surface-50 mb-2">Materials Registry</h1>
      <p className="text-surface-400 mb-8">
        Material profiles, properties, and candidate evaluations.
      </p>
      <div className="bg-surface-900 border border-surface-700 rounded-lg p-6">
        <p className="text-[0.875rem] text-surface-500">
          No materials cataloged. Add your first material to begin tracking properties.
        </p>
      </div>
    </div>
  );
}
