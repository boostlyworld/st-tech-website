"use client";

import { useState, useEffect, useRef } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
}

export function useCountUp({
  end,
  duration = 2000,
  start = 0,
  decimals = 0,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const [isStarted, setIsStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isStarted) {
          setIsStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isStarted]);

  useEffect(() => {
    if (!isStarted) return;

    const startTime = performance.now();
    const range = end - start;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentCount = start + range * easedProgress;

      setCount(parseFloat(currentCount.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isStarted, end, start, duration, decimals]);

  return { count, ref };
}
