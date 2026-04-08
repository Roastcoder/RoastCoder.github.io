import { Link, useLocation } from 'react-router-dom';
import { 
  Flame, 
  ChevronRight, 
  ArrowUpRight, 
  Phone,
  Mail,
  Zap,
  Globe,
  Layers,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

// Custom Brand Icons
export const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2.5 5 2.5 5 2.5a5.12 5.12 0 0 0 0 3.5 4.8 4.8 0 0 0-1 3.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100">
      <div className="px-6 md:px-12 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 shrink-0 transition-transform hover:scale-[1.02] no-underline">
          <div className="w-11 h-11 bg-slate-950 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-300">
            <Flame className="w-6 h-6 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black heading tracking-tight leading-none text-slate-950">ROASTCODER</span>
            <span className="text-[8px] font-extrabold uppercase tracking-[0.4em] text-primary opacity-80 mt-1">Foundry Excellence</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-12 font-bold text-[10px] uppercase tracking-[0.25em] text-slate-400">
          <Link to="/" className={`${isHome ? 'text-slate-950' : ''} hover:text-slate-950 transition-colors no-underline`}>Home</Link>
          <Link to="/ecosystems" className={`${location.pathname === '/ecosystems' ? 'text-slate-950' : ''} hover:text-slate-950 transition-colors no-underline`}>Ecosystems</Link>
          <Link to="/archive" className={`${location.pathname === '/archive' ? 'text-slate-950' : ''} hover:text-slate-950 transition-colors no-underline`}>Archive</Link>
        </div>

        <div className="flex items-center gap-6 shrink-0">
          <a href="mailto:Iamfaujdar@gmail.com" className="btn-primary py-3.5 px-8 text-[11px] !rounded-[1.25rem] shadow-lg shadow-primary/25 tracking-widest uppercase font-black no-underline">
             Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => (
  <footer className="py-24 bg-white border-t border-slate-50">
    <div className="container">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-slate-950 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-200">
               <Flame className="w-6 h-6 text-primary" />
            </div>
            <span className="font-black text-2xl tracking-tighter">ROASTCODER</span>
          </div>
          <p className="text-slate-400 font-bold text-xs tracking-widest uppercase">© 2024 Foundry Systems Inc.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12 text-slate-900 font-black tracking-widest uppercase text-[10px]">
          <a href="tel:6378110608" className="flex items-center gap-3 hover:text-primary transition-colors no-underline">
            <Phone className="w-4 h-4" />
            6378110608
          </a>
          <a href="mailto:Iamfaujdar@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors no-underline">
            <Mail className="w-4 h-4" />
            Iamfaujdar@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:bg-slate-950 hover:text-white transition-all shadow-sm hover:shadow-xl"><TwitterIcon className="w-6 h-6" /></a>
          <a href="#" className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:bg-slate-950 hover:text-white transition-all shadow-sm hover:shadow-xl"><LinkedinIcon className="w-6 h-6" /></a>
        </div>
      </div>
    </div>
  </footer>
);

export const FeatureCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="bg-slate-50/50 p-12 rounded-[3.5rem] border-2 border-transparent flex flex-col gap-8 group hover:bg-white hover:border-primary/10 transition-all hover:shadow-2xl hover:shadow-slate-200"
  >
    <div className="w-16 h-16 rounded-3xl bg-white shadow-xl shadow-slate-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
      <Icon className="w-8 h-8" />
    </div>
    <div className="space-y-4">
      <h3 className="text-3xl font-black tracking-tight">{title}</h3>
      <p className="text-slate-500 text-lg leading-relaxed font-medium">{desc}</p>
    </div>
  </motion.div>
);

export const ProjectCard = ({ title, tags, image, delay, url, compact = false }: { title: string, tags: string[], image: string, delay: number, url?: string, compact?: boolean }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
    className={`group relative rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/5 ${compact ? 'aspect-[5/4]' : 'aspect-[16/10]'} high-depth hover-depth transition-all duration-700 block`}
  >
    {/* Background Image with optimized scaling */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale-[20%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" 
      />
    </div>

    {/* Dynamic Overlays */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700 z-10" />
    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-950 to-transparent z-20" />

    {/* Tech Stack Floating Ledger (Reveal on Hover) */}
    <div className="absolute top-8 left-8 z-30 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
      {tags.map(tag => (
        <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-wider text-white shadow-xl">
          {tag}
        </span>
      ))}
    </div>

    {/* Content Area */}
    <div className={`absolute bottom-0 left-0 ${compact ? 'p-8' : 'p-12'} w-full z-30 translate-y-2 group-hover:translate-y-0 transition-transform duration-500`}>
      <div className="flex items-end justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
           <div className="flex items-center gap-2 mb-2">
             <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80">Active Deployment</span>
           </div>
          <h3 className={`${compact ? 'text-2xl' : 'text-4xl'} font-black text-white tracking-tighter leading-none`}>
            {title}
          </h3>
        </div>
        
        <div className={`w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white scale-90 group-hover:scale-100 opacity-60 group-hover:opacity-100 group-hover:bg-primary transition-all duration-500`}>
          <ArrowUpRight className="w-7 h-7" />
        </div>
      </div>
    </div>
    
    {/* Internal hardware bezel glow */}
    <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] pointer-events-none z-40" />
  </motion.a>
);

export const Hero = () => (
  <section id="hero" className="relative min-h-[105vh] flex items-center justify-center overflow-hidden pt-28">
    <div className="absolute inset-0 z-0 opacity-50">
      <img 
        src="/assets/roast_hero_bg_light.png" 
        alt="Hero Background" 
        className="w-full h-full object-cover"
      />
    </div>

    <div className="container relative z-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block glass-pill mb-10 shadow-sm">
          <span className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-primary" />
            Engineering Premium Production Infrastructure
          </span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.95] tracking-[ -0.04em] text-slate-900">
          Built to Scale. <br/> 
          <span className="text-fire">Wired to Win.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-slate-500 mb-14 leading-relaxed font-medium">
          The mastermind behind high-stakes production ecosystems. Elite infrastructure, unbreakable logic, and absolute system reliability.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/ecosystems" className="btn-primary py-5 px-10 text-lg no-underline shadow-2xl">
            Live Deployment Showcase <ChevronRight className="w-6 h-6" />
          </Link>
          <a href="mailto:Iamfaujdar@gmail.com" className="btn-ghost py-5 px-10 text-lg !rounded-[1.25rem] border-2 no-underline">
            Contact Me
          </a>
        </div>
      </motion.div>
    </div>

    {/* Soft Light Orbs */}
    <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />
    <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-orange-400/10 blur-[150px] rounded-full" />
  </section>
);
