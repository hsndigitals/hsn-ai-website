import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { siteConfig } from '../config/site';
import { ChevronDown, ArrowUpRight, Star } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="relative w-full bg-[#050505] z-20 py-32 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        {/* Left Side: Large Typography */}
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[2px]" style={{ backgroundColor: siteConfig.accentColor }} />
            <span className="text-sm font-mono tracking-widest uppercase text-white/50">Who We Are</span>
          </motion.div>
          <motion.h2 
            className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Pioneering <br />
            <span style={{ color: siteConfig.accentColor }}>Intelligent</span> <br />
            Ecosystems
          </motion.h2>
          <motion.p 
            className="text-xl text-white/60 font-light leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We don't just build software. We engineer automated ecosystems that allow visionary companies to scale exponentially. By fusing bleeding-edge AI models with robust infrastructure, we turn repetitive operational drag into seamless, invisible velocity.
          </motion.p>
        </div>
        
        {/* Right Side: Visual Data Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          <motion.div 
            className="col-span-2 rounded-3xl overflow-hidden relative h-64 group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <div className="absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
               <h4 className="text-white font-bold text-xl mb-1">Neural Networks</h4>
               <p className="text-white/50 text-sm">Custom trained autonomy</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-3xl bg-[#0A0A0A] border border-white/5 p-8 flex flex-col justify-end h-48 hover:border-white/20 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-4xl lg:text-5xl font-black text-white mb-2">99<span style={{ color: siteConfig.accentColor }}>%</span></span>
            <span className="text-white/50 text-sm font-medium">Automation Rate</span>
          </motion.div>
          
          <motion.div 
            className="rounded-3xl bg-[#0A0A0A] border border-white/5 p-8 flex flex-col justify-end h-48 hover:border-white/20 transition-colors relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full blur-3xl opacity-20" style={{ backgroundColor: siteConfig.accentColor }} />
            <span className="text-4xl lg:text-5xl font-black text-white mb-2">10<span style={{ color: siteConfig.accentColor }}>x</span></span>
            <span className="text-white/50 text-sm font-medium">Output Scaling</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedProjectsSection() {
  const projects = [
    {
      title: "AI Automation System",
      category: "Enterprise Automation",
      image: "/assets/ai-automation.png"
    },
    {
      title: "AI SaaS Dashboard",
      category: "AI SaaS Platform",
      image: "/assets/ai-dashboard.png"
    }
  ];

  return (
    <section className="relative w-full bg-[#050505] z-20 py-32 px-6 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
            Deployed <br/><span style={{ color: siteConfig.accentColor }}>Systems</span>
          </h2>
          <button className="hidden md:flex items-center gap-2 uppercase tracking-widest text-xs font-bold text-white/50 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-2">
            View All Work <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((proj, i) => (
            <motion.div 
              key={i} 
              className="group relative w-full h-[50vh] min-h-[400px] rounded-3xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-700 z-10" />
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${proj.image})` }}
              />
              <div className="absolute bottom-12 left-8 md:left-12 z-20 flex flex-col pointer-events-none">
                <span className="uppercase tracking-[0.2em] text-xs font-bold mb-3 shadow-sm" style={{ color: siteConfig.accentColor }}>{proj.category}</span>
                <h3 className="text-4xl md:text-5xl font-black text-white">{proj.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const serviceDetails = [
    {
      title: "AI Automation Systems",
      description: "Smart workflows utilizing LLMs to automate repetitive tasks, route data, validate complex inputs, and trigger actions seamlessly.",
      features: ["Custom API Integrations", "Intelligent Data Parsing", "Multi-Agent Workflows", "Automated Error Handling", "Performance Monitoring"]
    },
    {
      title: "AI SaaS Development",
      description: "Building highly-scalable, resilient software ecosystems powered by generative AI models at the core. We architect from the ground up to ensure fault-tolerant infrastructure and hyper-responsive user interfaces.",
      features: ["React / Next.js Frontends", "Vector Database Architecture", "Model Fine-Tuning", "Secure Auth Systems", "Serverless Infrastructure"]
    },
    {
      title: "AI Content Systems",
      description: "Programmatic generation hubs for video, localized blogs, and social content using advanced diffusion and language models. Maintain a consistent brand voice across hundreds of assets generated in minutes.",
      features: ["Automated Formatting", "Brand-Voice Training", "Omnichannel Publishing", "Bulk Asset Generation", "SEO Optimization"]
    },
    {
      title: "Workflow Integration",
      description: "Connecting disparate business tools under a unified, intelligent umbrella to eliminate organizational silos. Synchronize data across CRM, ERP, and communication platforms instantaneously.",
      features: ["Make / n8n Pipelines", "Legacy System Bridging", "Event-Driven Hooks", "Real-time Syncing", "Data Cleansing"]
    },
    {
      title: "Productivity Engineering",
      description: "Leveraging custom internal tools and AI co-pilots explicitly tailored to drastically multiply your team's daily output. Give every employee an expert digital assistant.",
      features: ["Custom ChatGPT Instances", "Internal RAG Systems", "Process Bottleneck Analysis", "Data Security Protocols", "Employee Training"]
    },
    {
      title: "Strategic Consulting",
      description: "Comprehensive, deep-dive audits of your current business operations to identify the highest ROI opportunities for automation. We map out exactly where AI can cut costs.",
      features: ["Feasibility Roadmaps", "Tool Stack Audits", "Cost-Benefit Projections", "Architecture Design", "Scaling Strategies"]
    }
  ];

  return (
    <section className="relative w-full bg-[#080808] z-20 py-32 px-6 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-white text-center">Core Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceDetails.map((svc, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity" style={{ color: siteConfig.accentColor }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2L2 22h20L12 2z"/></svg>
               </div>
               <div>
                 <h3 className="text-xl text-white font-bold mb-4 relative z-10">{svc.title}</h3>
                 <p className="text-sm text-white/50 leading-relaxed relative z-10 group-hover:text-white/80 transition-colors">{svc.description}</p>
               </div>
               <div className="mt-8 space-y-2 relative z-10">
                 {svc.features.map((feature, idx) => (
                   <div key={idx} className="flex items-center gap-2 text-xs text-white/40">
                     <span className="w-1 h-1 rounded-full" style={{ backgroundColor: siteConfig.accentColor }} />
                     {feature}
                   </div>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  const reviews = [
    {
      client: "Sarah J.",
      company: "TechNexus",
      text: "The AI automation system they built completely transformed our data pipeline. What used to take our team 40 hours a week is now handled instantly with zero errors.",
      rating: 5
    },
    {
      client: "Marcus R.",
      company: "Elevate Media",
      text: "HSN AI didn't just build us a SaaS platform; they architected a robust, scalable ecosystem that our users love. The generative AI integration is seamless and incredibly powerful.",
      rating: 5
    },
    {
      client: "David C.",
      company: "Omega Logistics",
      text: "Their workflow integrations connected our legacy software to modern AI tools. It was a game changer for our operational efficiency. Highly recommend their strategic approach.",
      rating: 5
    }
  ];

  return (
    <section className="relative w-full bg-[#080808] z-20 py-32 px-6 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-white text-center">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div 
              key={i} 
              className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-colors flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
               <div className="mb-6">
                 <div className="flex gap-1 mb-4">
                   {[...Array(review.rating)].map((_, idx) => (
                     <Star key={idx} className="w-4 h-4 fill-current" style={{ color: siteConfig.accentColor }} />
                   ))}
                 </div>
                 <p className="text-sm text-white/70 leading-relaxed italic">"{review.text}"</p>
               </div>
               <div>
                 <h4 className="text-white font-bold">{review.client}</h4>
                 <p className="text-xs text-white/40 uppercase tracking-widest mt-1">{review.company}</p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-[#050505] z-20 py-32 px-6 lg:px-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-white">
        <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {siteConfig.faq.map((faq, i) => {
             const isOpen = openIndex === i;
             return (
              <div key={i} className="border-b border-white/10 pb-4">
                <button 
                  className="w-full text-left py-4 flex justify-between items-center group cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="text-lg font-medium group-hover:text-white transition-colors" style={isOpen ? { color: siteConfig.accentColor } : { color: 'rgba(255,255,255,0.8)' }}>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/60 pb-4 pr-12 text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
             )
          })}
        </div>
      </div>
    </section>
  );
}

export function CTAFooter() {
  return (
    <footer className="relative w-full bg-black z-20 flex flex-col items-center pt-32 pb-8 px-6 border-t border-white/10">
        <div className="max-w-4xl text-center mb-32">
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter">
              Start Building <span style={{ color: siteConfig.accentColor }}>Powerful AI Systems</span> Today
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
               <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm rounded hover:bg-white/90 transition-colors cursor-pointer">
                  Work With HSN AI
               </button>
               <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-wider text-sm rounded hover:bg-white/10 transition-colors cursor-pointer">
                  Explore AI Solutions
               </button>
            </div>
        </div>
        
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs tracking-widest text-white/40 font-mono uppercase">
           <p>© {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Contact</a>
           </div>
        </div>
    </footer>
  );
}
