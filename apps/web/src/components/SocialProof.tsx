const logos = [
  { name: 'Robotics', label: 'Humanoid Robotics' },
  { name: 'Prosthetics', label: 'Prosthetic Devices' },
  { name: 'Defense', label: 'Defense & Aerospace' },
  { name: 'Medical', label: 'Medical Simulation' },
  { name: 'Wearables', label: 'Smart Wearables' },
  { name: 'Automotive', label: 'Automotive' },
];

export function SocialProof() {
  return (
    <div className="w-full">
      <p className="text-center text-sm font-medium text-surface-500 uppercase tracking-[0.15em] mb-8">
        Engineered for leaders across
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {logos.map((l) => (
          <div
            key={l.name}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-surface-800/60 bg-surface-900/40 text-surface-400 text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-accent-blue/60" />
            {l.label}
          </div>
        ))}
      </div>
    </div>
  );
}
