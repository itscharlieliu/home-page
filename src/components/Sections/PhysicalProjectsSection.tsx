import ProjectCard from "@/components/ProjectCard";

export default function PhysicalProjectsSection() {
  return (
    <section
      id="physical-projects"
      className="py-20 px-6 bg-slate-50/50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-200">
            Physical Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Hands-on engineering and creative builds
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ProjectCard
            title="Custom Wallet"
            description="A wallet shaped like a casette tape, featuring a card eject mechanism for easy access."
            technologies={["3d Printing", "Hardware", "CAD"]}
            imageUrl="https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/banners/wallet.png"
            links={[
              {
                url: "https://cad.onshape.com/documents/924f1d54d34fd2ccad8659d6/w/e7c78768b994bc20ee94627a/e/e6b38c9e70586c0403a98337?renderMode=0&uiState=68d0d260f341e49cba387c01",
                label: "Onshape",
              },
            ]}
          />
          <ProjectCard
            title="Flight Simulator Joystick and Throttle"
            description="A DIY joystick, featuring hall effect sensors for accurate movement."
            technologies={["Arduino", "Electronics", "3d Printing", "CAD"]}
            imageUrl="https://u1x4bwhsclfx2wlj.public.blob.vercel-storage.com/banners/joystick.png"
            links={[
              {
                url: "https://cad.onshape.com/documents/12a878eb0bc33d5de74f22b7/w/23347ad245b2cf4c1de6c7be/e/216064dd29ecf6ddc3d19baa?renderMode=0&uiState=68d0d3a2745469a2d5282945",
                label: "Onshape",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
