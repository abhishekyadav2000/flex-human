import React from 'react';

type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-surface-800 text-surface-400',
  success: 'bg-green-950 text-accent-green',
  warning: 'bg-amber-950 text-accent-amber',
  danger: 'bg-red-950 text-accent-red',
  info: 'bg-blue-950 text-accent-blue',
};

export function Badge({ variant = 'default', className = '', children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-caption font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
