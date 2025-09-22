import { Code, Facebook } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
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
            icon={Code}
            iconColor="text-blue-600 dark:text-blue-400"
            bgGradient="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20"
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
            icon={Facebook}
            iconColor="text-green-600 dark:text-green-400"
            bgGradient="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20"
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
