import React from 'react';
import { Layers, Shield, Zap, Monitor } from 'lucide-react';
import { Hero, FeatureCard, ProjectCard } from '../components';
import { ecosystemProjects } from '../data/projects';

const Home = () => {
  return (
    <main>
      <Hero />
      
      {/* Short Ecosystem Preview */}
      <section id="work" className="section-padding bg-white relative">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-primary mb-4">
                <Layers className="w-6 h-6" />
                <span className="uppercase tracking-[0.3em] text-[10px] font-black">Production Excellence</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">Flagship <br/> Ecosystems</h2>
              <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-2xl">Battle-tested platforms engineered for scalability and absolute reliability.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {ecosystemProjects.slice(0, 4).map((project, i) => (
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

      {/* Logic Section */}
      <section id="process" className="section-padding bg-slate-50">
        <div className="container">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">Systems Logic</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed">Hard-coded reliability for high-stakes environments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={Shield} 
              title="Security Ops"
              desc="Infiltration testing and cryptographic hardening of every production endpoint."
              delay={0.1}
            />
            <FeatureCard 
              icon={Zap} 
              title="Performance"
              desc="Low-latency execution paths and optimized data flow for sub-second system response."
              delay={0.2}
            />
            <FeatureCard 
              icon={Monitor} 
              title="Scalability"
              desc="High-availability cluster architecture designed for millions of concurrent connections."
              delay={0.3}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
