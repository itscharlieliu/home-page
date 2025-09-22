import PhotoGrid from "@/components/PhotoGrid";

export default function PhotographySection() {
  // Note: To create cropped photos, run this command:
  // `for file in *.jpeg; do magick "$file" -resize 800x800^ -gravity center -extent 800x800 -quality 100 "cropped_$file"; done`

  const photos = [
    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/DSC03555.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_DSC03555.jpeg",
      title: "Boat on the water",
      description: "Taiwan, 2024",
    },
    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/DSC04555.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_DSC04555.jpeg",
      title: "Mountain at sunset",
      description: "Switzerland, 2025",
    },
    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/IMG_1916.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_IMG_1916.jpeg",
      title: "Space Needle",
      description: "Seattle, 2022",
    },
    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/IMG_3760.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_IMG_3760.jpeg",
      title: "Flowers and Lilies",
      description: "Los Angeles, 2025",
    },
    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/IMG_4429.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_IMG_4429.jpeg",
      title: "Fog",
      description: "Vancouver, 2025",
    },
    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/IMG_6734.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_IMG_6734.jpeg",
      title: "City Life",
      description: "Boston, 2025",
    },
    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/DSC00994.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_DSC00994.jpeg",
      title: "Deep in thought",
      description: "Seattle, 2023",
    },
    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/DSC01195.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_DSC01195.jpeg",
      title: "Blue Angels",
      description: "SeaFair in Seattle, 2023",
    },
    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/DSC02383.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_DSC02383.jpeg",
      title: "Torii Gate Against Blue Sky",
      description: "Japan, 2023",
    },
    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/DSC02543.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_DSC02543.jpeg",
      title: "Cityscape",
      description: "Japan, 2023",
    },
    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/DSC03336.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_DSC03336.jpeg",
      title: "Cityscape",
      description: "Taiwan, 2024",
    },
    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/DSC03542.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_DSC03542.jpeg",
      title: "Fisherman on the water",
      description: "Taiwan, 2024",
    },

    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/DSC_0455.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_DSC_0455.jpeg",
      title: "Assorted products",
      description: "Miscellaneous",
    },

    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/IMG_2961.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_IMG_2961.jpeg",
      title: "Clouds on fire",
      description: "Vancouver, 2025",
    },
    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/IMG_2989.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_IMG_2989.jpeg",
      title: "Hidden in the clouds",
      description: "Whistler, 2025",
    },

    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/IMG_5902.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_IMG_5902.jpeg",
      title: "Train tracks",
      description: "Seattle, 2025",
    },

    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/IMG_6739.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_IMG_6739.jpeg",
      title: "Urban Detail",
      description: "Seattle, 2025",
    },
    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/IMG_6742.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_IMG_6742.jpeg",
      title: "The underground",
      description: "Boston, 2022",
    },
    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/P8070360.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_P8070360.jpeg",
      title: "Summer Moment",
      description: "Seattle, 2025",
    },
    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/P8090403.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_P8090403.jpeg",
      title: "Late Summer",
      description: "Seattle, 2025",
    },
    {
      imageUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/P9200029.jpeg",
      lowResUrl:
        "https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/Images/cropped_P9200029.jpeg",
      title: "Nighttime study",
      description: "Seattle 2024",
    },
  ];

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

        <PhotoGrid photos={photos} />
      </div>
    </section>
  );
}
