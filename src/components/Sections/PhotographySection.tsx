import PhotoGrid from "@/components/PhotoGrid";

export default function PhotographySection() {
  return (
    <section id="photography" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-200">
            Photography
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Capturing life&apos;s beautiful moments
          </p>
        </div>

        <PhotoGrid
          photos={[
            {
              id: 1,
              title: "Sunset Landscape",
              description: "Beautiful moment captured",
            },
            {
              id: 2,
              title: "Urban Architecture",
              description: "Modern cityscape",
            },
            {
              id: 3,
              title: "Nature Portrait",
              description: "Wildlife photography",
            },
            {
              id: 4,
              title: "Street Photography",
              description: "Urban life moments",
            },
            {
              id: 5,
              title: "Abstract Art",
              description: "Creative composition",
            },
            {
              id: 6,
              title: "Travel Diary",
              description: "Adventure memories",
            },
          ]}
        />
      </div>
    </section>
  );
}
