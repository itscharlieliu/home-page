import { Camera, Building2, Hammer } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white/50 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-slate-800 dark:text-slate-200">
          About Me
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          I&apos;m a software engineer at Meta working on Facebook Marketplace,
          with previous experience at Dropbox building experimentation tools. I
          studied computer science in school and have a passion for both digital
          innovation and physical making—from 3D printing and CAD design to
          woodworking. I love bringing ideas to life through both code and
          hands-on creation.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2
                className="text-blue-600 dark:text-blue-400"
                size={24}
              />
            </div>
            <h3 className="font-semibold mb-2">Software Engineering</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Software engineer at Meta, previously at Dropbox
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
              <Hammer className="text-pink-600 dark:text-pink-400" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Fabrication</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              3D printing, CAD design, and woodworking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
