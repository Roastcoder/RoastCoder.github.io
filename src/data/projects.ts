import { CreditCard, Users, ShoppingBag, BarChart3, Globe, Layers, Shield, Zap } from 'lucide-react';

export const ecosystemProjects = [
  {
    name: 'Finonest Home',
    desc: "India's fastest growing loan provider engine. Primary lending infrastructure.",
    mainUrl: 'https://finonest.com/',
    img: '/assets/proj_finonest.png',
    icon: Globe,
    color: '#0ea5e9',
    tags: ['Fintech', 'Lending', 'Scale']
  },
  {
    name: 'Finonest E-Lending',
    desc: "Digital e-lending application for borrower state reconciliation.",
    mainUrl: 'https://app.finonest.com/',
    img: '/assets/proj_finonest_app.png',
    icon: CreditCard,
    color: '#0ea5e9',
    tags: ['E-Lending', 'App', 'Borrower']
  },
  {
    name: 'Finonest Merchant',
    desc: "High-throughput merchant dashboard for lender reconciliation.",
    mainUrl: 'https://dashboard.finonest.com/',
    img: '/assets/proj_finonest_dashboard.png',
    icon: Layers,
    color: '#0ea5e9',
    tags: ['Dashboard', 'Merchant', 'Fintech']
  },
  {
    name: 'Finonest Hub',
    desc: "Comprehensive credit card management gateway.",
    mainUrl: 'https://card.finonest.com/',
    img: '/assets/proj_finonest_card.png',
    icon: Shield,
    color: '#0ea5e9',
    tags: ['Card Hub', 'Lending', 'Gateway']
  },
  {
    name: 'Mehar Advisory HRMS',
    desc: 'Advanced enterprise resource planning and HR management system optimized for advisory firm operations.',
    mainUrl: 'https://hrms.meharadvisory.cloud/',
    img: '/assets/proj_mehar.png',
    icon: Users,
    color: '#10b981',
    tags: ['Enterprise', 'HRMS', 'Internal']
  },
  {
    name: 'Mehar Mobile Advisory',
    desc: 'Dedicated mobile infrastructure for the Mehar Advisory ecosystem.',
    mainUrl: 'https://app.meharadvisory.com/',
    img: '/assets/proj_mehar_app.png',
    icon: Zap,
    color: '#10b981',
    tags: ['Mobile', 'Advisory', 'Enterprise']
  },
  {
    name: 'Chauhaan Computers',
    desc: 'Premium E-commerce platform specialized in secondhand computers and laptops with verified hardware certifications.',
    mainUrl: 'https://chauhancomputers.co.in/',
    img: '/assets/proj_chauhaan.png',
    icon: ShoppingBag,
    color: '#f97316',
    tags: ['E-commerce', 'Refurbished IT', 'Retail']
  },
  {
    name: 'MarketVry Agency',
    desc: 'Expert digital marketing agency delivering high-conversion performance marketing and brand growth strategies.',
    mainUrl: 'https://marketvry.com/',
    img: '/assets/proj_marketvry.png',
    icon: BarChart3,
    color: '#8b5cf6',
    tags: ['Marketing', 'Agency', 'Performance']
  }
];

export const archiveProjects = [
  {
    title: "DeFi Protocol Overhaul",
    tags: ['React', 'Solidity', 'Web3', 'Ethers.js'],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200",
    desc: "Architected a complete overhaul of a decentralized finance protocol, optimizing gas consumption by 35%.",
    mainUrl: "https://github.com/RoastCoder"
  },
  {
    title: "Fintech Dashboard Design",
    tags: ['Next.js', 'Vercel', 'Core Web Vitals'],
    image: "https://images.unsplash.com/photo-1551288049-bbb9c13ee62f?auto=format&fit=crop&q=80&w=1200",
    desc: "Engineered a high-performance analytics dashboard supporting real-time data streaming.",
    mainUrl: "https://github.com/RoastCoder"
  },
  {
    title: "Supply Chain Ledger",
    tags: ['Node.js', 'Hyperledger', 'Docker'],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    desc: "Private blockchain implementation for multi-tier industrial supply chain verification.",
    mainUrl: "https://github.com/RoastCoder"
  },
  {
    title: "Edge Computing Node",
    tags: ['Rust', 'Wasm', 'Distributed'],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200",
    desc: "Low-latency edge execution environment built in Rust for high-throughput packet inspection.",
    mainUrl: "https://github.com/RoastCoder"
  }
];
