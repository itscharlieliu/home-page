import { Code, Camera } from "lucide-react";
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
            Coding Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Innovative solutions and creative applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ProjectCard
            title="E-Commerce Platform"
            description="A full-stack e-commerce solution built with Next.js, featuring modern UI/UX design and seamless payment integration."
            technologies={["Next.js", "TypeScript", "Tailwind"]}
            icon={Code}
            iconColor="text-blue-600 dark:text-blue-400"
            bgGradient="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20"
            links={{
              demo: "#",
              github: "#",
            }}
          />
          <ProjectCard
            title="Photo Gallery App"
            description="A responsive photo gallery application with advanced filtering, search functionality, and smooth animations."
            technologies={["React", "JavaScript", "CSS3"]}
            icon={Camera}
            iconColor="text-green-600 dark:text-green-400"
            bgGradient="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20"
            links={{
              demo: "#",
              github: "#",
            }}
          />
        </div>
      </div>
    </section>
  );
}
