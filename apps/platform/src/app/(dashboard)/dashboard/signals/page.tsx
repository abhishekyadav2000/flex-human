export default function SignalsPage() {
  return (
    <div>
      <h1 className="text-[2.25rem] font-bold text-surface-50 mb-2">Intelligence Signals</h1>
      <p className="text-surface-400 mb-8">
        AI-generated signals, risk alerts, and knowledge gap indicators.
      </p>
      <div className="bg-surface-900 border border-surface-700 rounded-lg p-6">
        <p className="text-[0.875rem] text-surface-500">
          No signals generated yet. Intelligence pipelines will surface signals here.
        </p>
      </div>
    </div>
  );
}
