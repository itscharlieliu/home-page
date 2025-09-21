import {
  ArrowRight,
  Camera,
  Code,
  Lightbulb,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import UpcomingProjectCard from "@/components/UpcomingProjectCard";
import PhotoGrid from "@/components/PhotoGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Charlie
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#photography"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Photography
              </a>
              <a
                href="#projects"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
                  href="#"
                  className="text-slate-400 hover:text-blue-600 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
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
                  {/* <Image src="/images/profile.jpg" alt="Charlie Liu" width={200} height={200} /> */}
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">C</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                      Your Photo Here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 bg-white/50 dark:bg-slate-800/50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-slate-800 dark:text-slate-200">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            I&apos;m a passionate developer and creative professional with a
            love for building beautiful, functional digital experiences. With
            expertise in modern web technologies and a keen eye for design, I
            bring ideas to life through code and creativity.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Development</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Full-stack web development with modern frameworks
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera
                  className="text-purple-600 dark:text-purple-400"
                  size={24}
                />
              </div>
              <h3 className="font-semibold mb-2">Photography</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Capturing moments and telling stories through imagery
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb
                  className="text-pink-600 dark:text-pink-400"
                  size={24}
                />
              </div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Turning creative ideas into digital reality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Section */}
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

      {/* Coding Projects Section */}
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

      {/* New Projects Section */}
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

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-slate-800 dark:text-slate-200">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            Ready to bring your ideas to life? Let&apos;s create something
            amazing together.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-slate-600 dark:text-slate-400">
                hello@charlie.dev
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github
                  className="text-green-600 dark:text-green-400"
                  size={24}
                />
              </div>
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-slate-600 dark:text-slate-400">@charlie-dev</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin
                  className="text-purple-600 dark:text-purple-400"
                  size={24}
                />
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Charlie Developer
              </p>
            </div>
          </div>

          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 dark:bg-slate-950 text-slate-400">
        <div className="max-w-7xl mx-auto text-center">
          <p>
            &copy; 2024 Charlie. All rights reserved. Built with Next.js and
            Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
