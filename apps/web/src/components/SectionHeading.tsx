export interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  tag,
  title,
  description,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  const text = description || subtitle;
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {tag && (
        <span className="inline-block text-[0.75rem] font-semibold text-accent-blue uppercase tracking-widest mb-3">
          {tag}
        </span>
      )}
      <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold text-surface-50 leading-tight mb-4">
        {title}
      </h2>
      {text && (
        <p
          className={`text-[1rem] leading-relaxed text-surface-400 ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
