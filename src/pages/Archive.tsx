import { Sparkles } from 'lucide-react';
import { ProjectCard } from '../components';
import { archiveProjects } from '../data/projects';

const Archive = () => {
  return (
    <main className="pt-32 pb-24 bg-slate-950 min-h-screen text-white">
      <section className="section-padding relative">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 blur-[200px]" />

        <div className="container relative z-10">
          <div className="flex flex-col mb-24 max-w-4xl">
            <div className="flex items-center gap-3 text-primary mb-6">
              <Sparkles className="w-6 h-6" />
              <span className="uppercase tracking-[0.3em] text-[10px] font-black">Archive Excellence</span>
            </div>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9]">System Hall <br/> of Fame</h2>
            <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed">
                A highly curated list of architectural milestones. These systems defined new boundaries for precision engineering and distributed performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {archiveProjects.map((project, i) => (
              <ProjectCard 
                key={project.title}
                title={project.title}
                tags={project.tags}
                image={project.image}
                delay={i * 0.1}
                compact={true}
                url={project.mainUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Archive;
