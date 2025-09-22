import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  links: { url: string; label: string }[];
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  links,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
      <div className="w-full h-48 rounded-xl mb-6 overflow-hidden relative">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
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
        {links.map((link) => {
          return (
            <a
              key={link.url}
              href={link.url}
              className="text-blue-600 hover:text-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
