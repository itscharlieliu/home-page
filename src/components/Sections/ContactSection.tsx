import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-slate-800 dark:text-slate-200">
          Let&apos;s Work Together
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          Ready to bring your ideas to life? Let&apos;s create something amazing
          together.
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
  );
}
