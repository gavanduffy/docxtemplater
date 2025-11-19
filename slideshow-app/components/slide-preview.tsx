import { Slide } from "@/lib/markdown-parser";

interface SlidePreviewProps {
  slide: Slide;
}

export function SlidePreview({ slide }: SlidePreviewProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 min-h-[400px] flex flex-col">
      {/* Slide Title */}
      {slide.title && (
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          {slide.title}
        </h2>
      )}

      {/* Slide Content */}
      {slide.content && (
        <div className="text-slate-700 dark:text-slate-300 mb-6 whitespace-pre-wrap flex-grow">
          {slide.content}
        </div>
      )}

      {/* Slide Image */}
      {slide.imageUrl && (
        <div className="relative w-full h-64 mt-auto">
          <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.imageUrl}
              alt={slide.title || "Slide image"}
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback for broken images
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="flex items-center justify-center h-full text-slate-400">
                      <div class="text-center">
                        <svg class="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p class="text-sm">Image could not be loaded</p>
                        <p class="text-xs mt-1">${slide.imageUrl}</p>
                      </div>
                    </div>
                  `;
                }
              }}
            />
          </div>
        </div>
      )}

      {/* Empty state */}
      {!slide.title && !slide.content && !slide.imageUrl && (
        <div className="flex items-center justify-center h-full text-slate-400">
          <p>Empty slide</p>
        </div>
      )}
    </div>
  );
}
