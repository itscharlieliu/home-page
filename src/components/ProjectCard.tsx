import { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  iconColor: string;
  bgGradient: string;
  links: {
    demo?: string;
    github?: string;
  };
}

export default function ProjectCard({
  title,
  description,
  technologies,
  icon: Icon,
  iconColor,
  bgGradient,
  links,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow hover-lift">
      <div className={`w-full h-48 ${bgGradient} rounded-xl mb-6 flex items-center justify-center`}>
        <Icon className={iconColor} size={48} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {links.demo && (
          <a
            href={links.demo}
            className="text-blue-600 hover:text-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
        {links.github && (
          <a
            href={links.github}
            className="text-slate-600 hover:text-slate-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
