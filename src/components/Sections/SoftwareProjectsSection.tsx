import ProjectCard from "@/components/ProjectCard";

export default function SoftwareProjectsSection() {
  return (
    <section
      id="software-projects"
      className="py-20 px-6 bg-white/50 dark:bg-slate-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-200">
            Software Development
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Innovative solutions and creative applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ProjectCard
            title="Budger: Budgeting Platform"
            description="A full-stack budgeting solution built with React, featuring modern UI/UX design and seamless transaction tracking."
            technologies={["React.js", "TypeScript"]}
            imageUrl="https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/banners/budger.png"
            links={[
              {
                url: "https://itscharlieliu.github.io/budger/#/budget",
                label: "Demo",
              },
              {
                url: "https://github.com/itscharlieliu/budger",
                label: "Github",
              },
            ]}
          />
          <ProjectCard
            title="Facebook Marketplace"
            description="Developed multiple Facebook marketplace features, including showing the sharesheet when taking a screenshot, and GenAI Vehicle Insights"
            technologies={["React Native", "Hack"]}
            imageUrl="https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/banners/facebook-marketplace.png"
            links={[
              {
                url: "https://www.facebook.com/marketplace/",
                label: "Demo",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
