import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-body-sm text-surface-400 font-medium">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`bg-surface-800 border border-surface-700 rounded-md px-3 py-2 text-body text-surface-50 placeholder:text-surface-500 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-surface transition-colors ${error ? 'border-accent-red' : ''} ${className}`}
        {...props}
      />
      {error && <p className="text-caption text-accent-red">{error}</p>}
    </div>
  );
}
