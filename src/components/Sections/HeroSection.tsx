import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "@/common/links";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Creative
                </span>
                <br />
                <span className="text-slate-800 dark:text-slate-200">
                  Developer
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                I craft digital experiences through code, capture moments
                through photography, and bring innovative ideas to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center">
                View My Work
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
              <button className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                Download CV
              </button>
            </div>

            <div className="flex space-x-6">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={EMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center">
                <Image
                  src="https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/DSC05054-2.jpg"
                  alt="Profile image"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
