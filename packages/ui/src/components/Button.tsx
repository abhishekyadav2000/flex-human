import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-surface-50 text-surface-950 hover:bg-surface-200',
  secondary: 'bg-surface-800 text-surface-50 border border-surface-700 hover:bg-surface-700',
  ghost: 'text-surface-400 hover:text-surface-50 hover:bg-surface-800',
  danger: 'bg-accent-red text-white hover:bg-red-600',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-body-sm',
  md: 'px-4 py-2 text-body',
  lg: 'px-6 py-3 text-body',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center font-medium rounded-md transition-all duration-150 ease-out active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
