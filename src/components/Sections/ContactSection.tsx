import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  EMAIL_URL,
  INSTAGRAM,
} from "../../common/links";

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

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <a href={EMAIL_URL} className="block group" aria-label="Send email">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-300">
                <Mail className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-slate-600 dark:text-slate-400">
                hi@itscharlieliu.com
              </p>
            </a>
          </div>
          <div className="text-center">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              aria-label="Visit GitHub profile"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors duration-300">
                <Github
                  className="text-green-600 dark:text-green-400"
                  size={24}
                />
              </div>
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-slate-600 dark:text-slate-400">
                @itscharlieliu
              </p>
            </a>
          </div>
          <div className="text-center">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              aria-label="Visit LinkedIn profile"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors duration-300">
                <Linkedin
                  className="text-purple-600 dark:text-purple-400"
                  size={24}
                />
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-slate-600 dark:text-slate-400">
                @itscharlieliu
              </p>
            </a>
          </div>
          <div className="text-center">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              aria-label="Visit Instagram profile"
            >
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 dark:group-hover:bg-pink-800/50 transition-colors duration-300">
                <Instagram
                  className="text-pink-600 dark:text-pink-400"
                  size={24}
                />
              </div>
              <h3 className="font-semibold mb-2">Instagram</h3>
              <p className="text-slate-600 dark:text-slate-400">
                @charlieliuphoto
              </p>
            </a>
          </div>
        </div>

        <a
          href={EMAIL_URL}
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
