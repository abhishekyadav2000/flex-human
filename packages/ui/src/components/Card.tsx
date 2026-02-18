import React from 'react';

type CardVariant = 'default' | 'elevated' | 'bordered';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-surface-900',
  elevated: 'bg-surface-800 shadow-lg',
  bordered: 'bg-surface-900 border border-surface-700',
};

export function Card({ variant = 'default', className = '', children, ...props }: CardProps) {
  return (
    <div className={`rounded-lg p-5 ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
