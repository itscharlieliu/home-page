import { Camera } from "lucide-react";

interface PhotoGridProps {
  photos: Array<{
    id: number;
    title: string;
    description: string;
  }>;
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 hover:scale-105 transition-transform duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Camera className="text-slate-400 group-hover:text-white transition-colors" size={48} />
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-semibold">{photo.title}</h3>
            <p className="text-sm opacity-90">{photo.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
