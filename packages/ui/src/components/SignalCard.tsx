import { Badge } from './Badge.js';

type SignalType = 'risk' | 'opportunity' | 'gap' | 'alert';

interface SignalCardProps {
  title: string;
  description: string;
  signalType: SignalType;
  confidence: number;
  compositeScore?: number;
  className?: string;
}

const typeBadgeVariant: Record<SignalType, 'danger' | 'success' | 'warning' | 'info'> = {
  risk: 'danger',
  opportunity: 'success',
  gap: 'warning',
  alert: 'info',
};

export function SignalCard({
  title,
  description,
  signalType,
  confidence,
  compositeScore,
  className = '',
}: SignalCardProps) {
  return (
    <div className={`bg-surface-900 border border-surface-700 rounded-lg p-5 ${className}`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <h4 className="text-h4 text-surface-50">{title}</h4>
        <Badge variant={typeBadgeVariant[signalType]}>{signalType}</Badge>
      </div>
      <p className="text-body-sm text-surface-400 mb-4">{description}</p>
      <div className="flex items-center gap-4 text-caption text-surface-500">
        <span>Confidence: {Math.round(confidence * 100)}%</span>
        {compositeScore !== undefined && <span>Score: {compositeScore.toFixed(1)}</span>}
      </div>
    </div>
  );
}
