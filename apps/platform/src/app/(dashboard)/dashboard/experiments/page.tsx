export default function ExperimentsPage() {
  return (
    <div>
      <h1 className="text-[2.25rem] font-bold text-surface-50 mb-2">Experiment Engine</h1>
      <p className="text-surface-400 mb-8">
        Hypotheses, test designs, results, and version tracking.
      </p>
      <div className="bg-surface-900 border border-surface-700 rounded-lg p-6">
        <p className="text-[0.875rem] text-surface-500">
          No experiments recorded. Create your first experiment to start tracking.
        </p>
      </div>
    </div>
  );
}
