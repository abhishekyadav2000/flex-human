'use client';

interface VideoEmbedProps {
  videoId: string;
  title: string;
  caption?: string;
}

export function VideoEmbed({ videoId, title, caption }: VideoEmbedProps) {
  return (
    <div className="w-full">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-surface-800 bg-surface-900 shadow-2xl">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&color=white`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
      {caption && <p className="mt-3 text-sm text-surface-500 text-center">{caption}</p>}
    </div>
  );
}
