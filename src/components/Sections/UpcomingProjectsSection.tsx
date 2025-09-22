import { Lightbulb, Camera } from "lucide-react";
import UpcomingProjectCard from "@/components/UpcomingProjectCard";

export default function UpcomingProjectsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-200">
            Upcoming Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Exciting new ventures in development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <UpcomingProjectCard
            title="AI-Powered Portfolio"
            description="An intelligent portfolio platform that adapts content based on visitor preferences and engagement patterns."
            timeline="Coming Soon"
            status="In Development"
            icon={Lightbulb}
            iconGradient="bg-gradient-to-r from-blue-500 to-purple-500"
            statusColor="text-blue-600 dark:text-blue-400"
            bgGradient="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900"
          />
          <UpcomingProjectCard
            title="Photography Course"
            description="An interactive online course teaching photography fundamentals and advanced techniques."
            timeline="Q2 2024"
            status="Planning Phase"
            icon={Camera}
            iconGradient="bg-gradient-to-r from-purple-500 to-pink-500"
            statusColor="text-purple-600 dark:text-purple-400"
            bgGradient="bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-800 dark:to-slate-900"
          />
        </div>
      </div>
    </section>
  );
}
