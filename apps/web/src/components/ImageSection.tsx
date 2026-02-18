import Image from 'next/image';

interface ImageSectionProps {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  priority?: boolean;
  aspect?: 'video' | 'square' | 'wide';
}

const aspectMap = {
  video: 'aspect-video',
  square: 'aspect-square',
  wide: 'aspect-[21/9]',
};

export function ImageSection({
  src,
  alt,
  caption,
  credit,
  priority = false,
  aspect = 'video',
}: ImageSectionProps) {
  return (
    <figure className="w-full">
      <div
        className={`relative w-full ${aspectMap[aspect]} rounded-xl overflow-hidden border border-surface-800 bg-surface-900`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority={priority}
        />
      </div>
      {(caption || credit) && (
        <figcaption className="mt-3 flex items-center justify-between text-sm text-surface-500">
          {caption && <span>{caption}</span>}
          {credit && <span className="text-surface-600">Photo: {credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}
