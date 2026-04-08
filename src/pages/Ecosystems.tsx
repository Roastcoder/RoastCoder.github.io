import { Layers } from 'lucide-react';
import { ProjectCard } from '../components';
import { ecosystemProjects } from '../data/projects';

const Ecosystems = () => {
  return (
    <main className="pt-32 pb-24">
      <section className="section-padding bg-white relative">
        <div className="container">
          <div className="flex flex-col mb-24 max-w-4xl">
            <div className="flex items-center gap-3 text-primary mb-6">
              <Layers className="w-6 h-6" />
              <span className="uppercase tracking-[0.3em] text-[10px] font-black">Live Production Fleet</span>
            </div>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[1.05]">Global <br/> Ecosystems</h2>
            <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl">
              Exhaustive documentation of every live system currently managed under our engineering umbrella. Each platform is a testament to uptime, security, and extreme performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {ecosystemProjects.map((project, i) => (
              <ProjectCard 
                key={project.name}
                title={project.name}
                tags={project.tags}
                image={project.img}
                delay={i * 0.1}
                url={project.mainUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Ecosystems;
