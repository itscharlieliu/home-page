import { Code, Camera, Lightbulb } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white/50 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-slate-800 dark:text-slate-200">
          About Me
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          I&apos;m a passionate developer and creative professional with a love
          for building beautiful, functional digital experiences. With expertise
          in modern web technologies and a keen eye for design, I bring ideas to
          life through code and creativity.
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
  );
}
