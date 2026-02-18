export default function CompliancePage() {
  return (
    <div>
      <h1 className="text-[2.25rem] font-bold text-surface-50 mb-2">Compliance Matrix</h1>
      <p className="text-surface-400 mb-8">
        Regulatory requirements, status, and evidence tracking.
      </p>
      <div className="bg-surface-900 border border-surface-700 rounded-lg p-6">
        <p className="text-[0.875rem] text-surface-500">
          No compliance items tracked. Add requirements to begin monitoring.
        </p>
      </div>
    </div>
  );
}
