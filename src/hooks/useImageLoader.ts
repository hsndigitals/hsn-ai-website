import { useState, useEffect } from 'react';

export function useImageLoader(frameCount: number, pathTemplate: (index: number) => string) {
  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = new Array(frameCount);

    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = pathTemplate(i);
        img.onload = () => {
            loadedCount++;
            loadedImages[i - 1] = img;
            setProgress((loadedCount / frameCount) * 100);
            if (loadedCount === frameCount) {
                setImages(loadedImages);
                setIsLoaded(true);
            }
        };
        img.onerror = () => {
            console.error(`Failed to load image: ${img.src}`);
            // Still count as loaded to avoid getting stuck forever
            loadedCount++;
            if (loadedCount === frameCount) {
                setImages(loadedImages);
                setIsLoaded(true);
            }
        };
    }
  }, [frameCount, pathTemplate]);

  return { progress, images, isLoaded };
}
