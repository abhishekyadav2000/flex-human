export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-[2.25rem] font-bold text-surface-50 mb-2">R&D Projects</h1>
      <p className="text-surface-400 mb-8">Research projects, artifacts, and status tracking.</p>
      <div className="bg-surface-900 border border-surface-700 rounded-lg p-6">
        <p className="text-[0.875rem] text-surface-500">
          No projects created. Start a new project to track R&D progress.
        </p>
      </div>
    </div>
  );
}
