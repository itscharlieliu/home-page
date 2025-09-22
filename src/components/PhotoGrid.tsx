"use client";
import { Camera, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface PhotoGridProps {
  photos: Array<{
    imageUrl: string;
    lowResUrl?: string; // Optional low-res image URL
    title: string;
    description: string;
  }>;
  initialLimit?: number; // Optional limit for initial display
  showExpandButton?: boolean; // Optional expand button
}

export default function PhotoGrid({
  photos,
  initialLimit = 6,
  showExpandButton = true,
}: PhotoGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(
    null
  );
  const [showAll, setShowAll] = useState(false);

  const displayedPhotos = showAll ? photos : photos.slice(0, initialLimit);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedPhotos.map((photo, index) => (
          <div
            key={"photo-" + index}
            className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 hover:scale-105 transition-transform duration-150 cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            {photo.lowResUrl || photo.imageUrl ? (
              <Image
                src={photo.lowResUrl || photo.imageUrl}
                alt={photo.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera
                  className="text-slate-400 group-hover:text-white transition-colors"
                  size={48}
                />
              </div>
            )}
            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-semibold">{photo.title}</h3>
              <p className="text-sm opacity-90">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Full-size image modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="cursor-pointer absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <Image
              unoptimized
              src={selectedPhoto.imageUrl}
              alt={selectedPhoto.title}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="font-semibold text-lg">{selectedPhoto.title}</h3>
              <p className="text-sm opacity-90">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Expand/Collapse Button */}
      {showExpandButton && photos.length > initialLimit && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-slate-800 hover:bg-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 text-white dark:text-slate-800 font-semibold rounded-lg transition-colors duration-200"
          >
            {showAll ? "Show Less" : `Show All Photos`}
          </button>
        </div>
      )}
    </>
  );
}
