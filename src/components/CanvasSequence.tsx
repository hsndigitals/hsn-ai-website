import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CanvasSequenceProps {
  images: HTMLImageElement[];
  className?: string;
  onFrameChange?: (frame: number) => void;
}

export function CanvasSequence({ images, className = "", onFrameChange }: CanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playhead = useRef({ frame: 0 });
  const stRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const render = () => {
      if (!ctx || !images[playhead.current.frame]) return;
      
      const img = images[playhead.current.frame];
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      
      let renderWidth = canvas.width;
      let renderHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        renderHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - renderHeight) / 2;
      } else {
        renderWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - renderWidth) / 2;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
      
      if (onFrameChange) {
         onFrameChange(playhead.current.frame);
      }
    };

    render();

    // GSAP ScrollTrigger
    stRef.current = ScrollTrigger.create({
      trigger: "#parallax-container",
      start: "top top",
      // Calculate end based on 400vh to ensure it spans the whole spacer
      end: () => `+=${window.innerHeight * 4}`,
      scrub: 1, // Smooth scrubbing
      animation: gsap.to(playhead.current, {
        frame: images.length - 1,
        snap: "frame",
        ease: "none",
        onUpdate: render,
      }),
    });

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (stRef.current) stRef.current.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, [images, onFrameChange]);

  return (
    <div className={`w-full h-full bg-[#050505] overflow-hidden ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full object-cover rounded-b-[40px]" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 rounded-b-[40px] pointer-events-none" />
    </div>
  );
}
