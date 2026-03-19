'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const FRAME_COUNT = 75; // frames from 00 to 74

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [percentLoaded, setPercentLoaded] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create an array of image paths
  const imagePaths = Array.from({ length: FRAME_COUNT }, (_, i) => {
    const frameIndex = i.toString().padStart(2, '0');
    return `/sequence/frame_${frameIndex}_delay-0.066s.png`;
  });

  // Preload images
  useEffect(() => {
    let loadedImages = 0;
    const imgArray: HTMLImageElement[] = new Array(FRAME_COUNT);

    imagePaths.forEach((path, index) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        loadedImages++;
        setPercentLoaded(Math.round((loadedImages / FRAME_COUNT) * 100));
        if (loadedImages === FRAME_COUNT) {
          setImages(imgArray);
        }
      };
      img.onerror = () => {
        console.error(`Failed to load frame ${index}`);
        loadedImages++; // still count it so we don't stall forever
        if (loadedImages === FRAME_COUNT) {
          setImages(imgArray);
        }
      };
      imgArray[index] = img;
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Map scroll progress (0 to 1) to frame index (0 to 74)
  const frameIndexRaw = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Whenever the mapped index changes, draw the specific frame
    const unsubscribe = frameIndexRaw.on('change', (latest) => {
      if (images.length === FRAME_COUNT) {
        const frame = Math.round(latest);
        renderFrame(images, frame);
      }
    });

    return () => unsubscribe();
  }, [frameIndexRaw, images]);

  const renderFrame = (imgArray: HTMLImageElement[], index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imgArray[index];
    if (!img) return;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let renderWidth, renderHeight, xOffset, yOffset;

    if (canvasRatio > imgRatio) {
      renderWidth = canvas.width;
      renderHeight = canvas.width / imgRatio;
      xOffset = 0;
      yOffset = (canvas.height - renderHeight) / 2;
    } else {
      renderWidth = canvas.height * imgRatio;
      renderHeight = canvas.height;
      xOffset = (canvas.width - renderWidth) / 2;
      yOffset = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, xOffset, yOffset, renderWidth, renderHeight);
  };

  // Resize canvas to window size securely
  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Re-render current frame on resize
        if (images.length === FRAME_COUNT) {
          const currentFrame = Math.round(frameIndexRaw.get());
          renderFrame(images, currentFrame);
        }
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Set initial size

    // Draw initial frame if completely loaded
    if (images.length === FRAME_COUNT) {
      renderFrame(images, 0);
    }

    return () => window.removeEventListener('resize', resizeCanvas);
  }, [images, frameIndexRaw]);

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#121212]">
        {percentLoaded < 100 && (
          <div className="absolute text-white/50 font-mono text-sm tracking-widest z-50">
            LOADING: {percentLoaded}%
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="block h-full w-full object-cover relative z-40 opacity-80"
          style={{ opacity: percentLoaded === 100 ? 0.6 : 0, transition: 'opacity 0.5s' }}
        />
      </div>
    </div>
  );
}
