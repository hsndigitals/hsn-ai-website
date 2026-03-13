import { useState, useCallback } from 'react';
import { useImageLoader } from './hooks/useImageLoader';
import { Preloader } from './components/Preloader';
import { CanvasSequence } from './components/CanvasSequence';
import { Hero } from './components/Hero';
import { siteConfig } from './config/site';

import { ServicesSection, FAQSection, CTAFooter, AboutSection, FeaturedProjectsSection, ReviewsSection } from './components/Sections';

const FRAME_COUNT = 136;
const getFramePath = (index: number) => `/assets/frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

function App() {
  const { progress, images, isLoaded } = useImageLoader(FRAME_COUNT, getFramePath);
  const [activeThemeId, setActiveThemeId] = useState(siteConfig.themes[0].id);

  const handleFrameChange = useCallback((frameIndex: number) => {
    const currentFrame1Idx = frameIndex + 1;
    const theme = siteConfig.themes.find(
      t => currentFrame1Idx >= t.range[0] && currentFrame1Idx <= t.range[1]
    );

    if (theme) {
      setActiveThemeId(prev => prev !== theme.id ? theme.id : prev);
    }
  }, []);

  const handleThemeChange = useCallback((id: string) => {
    setActiveThemeId(id);
  }, []);

  return (
    <>
      <Preloader progress={progress} isLoaded={isLoaded} brand={siteConfig.brand} />

      {/* The main scroll container. Needs an ID for GSAP ScrollTrigger to track scroll bounds perfectly */}
      <main id="parallax-container" className="relative w-full bg-[#050505]">
        
        {/* The Hero and Canvas wrapper MUST be sticky so it pins to the top while scrolling the spacer below */}
        <section className="sticky top-0 w-full h-screen overflow-hidden z-0">
          <div className="absolute inset-0 z-0">
            <CanvasSequence 
              images={images} 
              onFrameChange={handleFrameChange} 
            />
          </div>
          <div className="absolute inset-0 z-10 pointer-events-none">
            <Hero 
              activeThemeId={activeThemeId}
              onThemeChange={handleThemeChange} 
              currentFrameIndex={0} 
            />
          </div>
        </section>

        {/* Scrollable Spacer: This defines the distance over which the entire ScrollTrigger animation scrubs */}
        <div className="h-[400vh] w-full pointer-events-none" />

        {/* Following Sections cover the Hero as they scroll up naturally */}
        <div className="relative z-20 bg-[#050505] rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] pt-10">
          <AboutSection />
          <ServicesSection />
          <FeaturedProjectsSection />
          <FAQSection />
          <ReviewsSection />
          <CTAFooter />
        </div>

      </main>
    </>
  );
}

export default App;
