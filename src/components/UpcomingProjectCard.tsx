import { LucideIcon } from "lucide-react";

interface UpcomingProjectCardProps {
  title: string;
  description: string;
  timeline: string;
  status: string;
  icon: LucideIcon;
  iconGradient: string;
  statusColor: string;
  bgGradient: string;
}

export default function UpcomingProjectCard({
  title,
  description,
  timeline,
  status,
  icon: Icon,
  iconGradient,
  statusColor,
  bgGradient,
}: UpcomingProjectCardProps) {
  return (
    <div className={`${bgGradient} rounded-2xl p-8 border border-slate-200 dark:border-slate-700`}>
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 ${iconGradient} rounded-full flex items-center justify-center mr-4`}>
          <Icon className="text-white" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{timeline}</p>
        </div>
      </div>
      <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>
      <div className={`flex items-center ${statusColor}`}>
        <span className="text-sm font-medium">{status}</span>
        <div className="ml-2 w-2 h-2 bg-current rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
