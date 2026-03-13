import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  progress: number;
  isLoaded: boolean;
  brand: string;
}

export function Preloader({ progress, isLoaded, brand }: PreloaderProps) {
  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
        >
          <div className="text-4xl font-bold tracking-tighter mb-8 flex gap-1">
            {brand.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-brand-accent rounded-full"
              style={{ backgroundColor: 'var(--color-brand-accent)' }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>
          <div className="mt-4 text-sm font-light text-white/60">
            {Math.round(progress)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
