import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/site';

interface HeroProps {
  activeThemeId: string;
  onThemeChange: (id: string) => void;
  currentFrameIndex: number;
}

export function Hero({ activeThemeId, onThemeChange }: HeroProps) {
  const activeTheme = siteConfig.themes.find(t => t.id === activeThemeId) || siteConfig.themes[0];

  return (
    <div className="relative min-h-screen flex flex-col justify-between pt-32 pb-4 px-6 lg:px-16 2xl:px-24">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between w-full h-full relative z-10 lg:mt-32">
        
        {/* Left Side: Identity Block */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <motion.p 
            className="text-xs font-semibold uppercase mb-4 tracking-[0.2em]"
            style={{ color: siteConfig.accentColor }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {siteConfig.leftIntro}
          </motion.p>
          
          <AnimatePresence mode="wait">
            <motion.h1 
              key={activeTheme.title}
              className="text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "circOut" }}
            >
              <div className="flex flex-col">
                <span>{activeTheme.title.split(' ')[0]}</span>
                <span>{activeTheme.title.split(' ')[1]}</span>
              </div>
            </motion.h1>
          </AnimatePresence>

          {/* Core Focus Navigation */}
          <div className="mt-12 lg:mt-24 flex flex-col lg:flex-row lg:flex-wrap gap-4 lg:gap-8">
            {siteConfig.themes.map((theme) => {
              const isActive = theme.id === activeThemeId;
              return (
                <button
                  key={theme.id}
                  onClick={() => onThemeChange(theme.id)}
                  className={`group flex items-center gap-3 transition-all duration-300 text-left ${
                    isActive ? "opacity-100 scale-105" : "opacity-40"
                  }`}
                >
                  <span className="text-xs font-mono opacity-60">#{theme.index}</span>
                  <span 
                    className={`text-sm tracking-wide font-medium whitespace-nowrap transition-colors duration-300`}
                    style={{ color: isActive ? siteConfig.accentColor : '#FFFFFF' }}
                  >
                    {theme.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Value Prop Block */}
        <div className="w-full lg:w-1/2 flex flex-col items-end text-right mt-16 md:mt-24 lg:mt-0 justify-end lg:justify-center">
          <div className="max-w-sm lg:max-w-md bg-black/20 backdrop-blur-sm p-6 lg:bg-transparent lg:backdrop-blur-none lg:p-0 rounded-2xl">
            <motion.h2 
              className="text-lg lg:text-3xl font-bold mb-4 lg:mb-6 text-white leading-snug"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {siteConfig.tagline}
            </motion.h2>
            
            <motion.div 
              className="space-y-3 text-white/60 font-light text-xs lg:text-sm leading-relaxed"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {siteConfig.intro.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.div>
          </div>
        </div>

      </div>

      {/* Bottom Socials */}
      <motion.div 
        className="flex justify-center gap-12 z-10 w-full mt-16 lg:mt-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a href={siteConfig.socials.youtube} className="text-white/30 hover:text-white transition-colors uppercase text-[10px] tracking-[0.2em] font-semibold">YouTube</a>
        <a href={siteConfig.socials.instagram} className="text-white/30 hover:text-white transition-colors uppercase text-[10px] tracking-[0.2em] font-semibold">Instagram</a>
        <a href={siteConfig.socials.twitter} className="text-white/30 hover:text-white transition-colors uppercase text-[10px] tracking-[0.2em] font-semibold">X (Twitter)</a>
      </motion.div>
    </div>
  );
}
