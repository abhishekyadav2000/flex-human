export default function KnowledgePage() {
  return (
    <div>
      <h1 className="text-[2.25rem] font-bold text-surface-50 mb-2">Knowledge Base</h1>
      <p className="text-surface-400 mb-8">Documents, research notes, and technical references.</p>
      <div className="bg-surface-900 border border-surface-700 rounded-lg p-6">
        <p className="text-[0.875rem] text-surface-500">
          No documents yet. Begin by creating your first knowledge entry.
        </p>
      </div>
    </div>
  );
}
