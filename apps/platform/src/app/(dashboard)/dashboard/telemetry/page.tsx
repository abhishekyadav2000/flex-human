export default function TelemetryPage() {
  return (
    <div>
      <h1 className="text-[2.25rem] font-bold text-surface-50 mb-2">Manufacturing Telemetry</h1>
      <p className="text-surface-400 mb-8">Production metrics, sensor data, and KPI monitoring.</p>
      <div className="bg-surface-900 border border-surface-700 rounded-lg p-6">
        <p className="text-[0.875rem] text-surface-500">
          Telemetry ingestion not yet active. Schema defined — awaiting data source connection.
        </p>
      </div>
    </div>
  );
}
