type StatusVariant = 'active' | 'inactive' | 'warning' | 'error';

interface StatusIndicatorProps {
  status: StatusVariant;
  label?: string;
  className?: string;
}

const dotClasses: Record<StatusVariant, string> = {
  active: 'bg-accent-green',
  inactive: 'bg-surface-500',
  warning: 'bg-accent-amber',
  error: 'bg-accent-red',
};

export function StatusIndicator({ status, label, className = '' }: StatusIndicatorProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className={`w-2 h-2 rounded-full ${dotClasses[status]}`} />
      {label && <span className="text-body-sm text-surface-400">{label}</span>}
    </span>
  );
}
