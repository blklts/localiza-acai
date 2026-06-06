'use client';
import { useEffect, useRef } from 'react';

const IMGS = [
  '/carousel/1.webp',
  '/carousel/2.webp',
  '/carousel/3.webp',
  '/carousel/4.webp',
  '/carousel/5.webp',
];

// Target scroll speed in pixels per second
const PX_PER_SEC = 200;

export default function ImageCarousel() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    function setup() {
      const container = strip!.parentElement!;
      // singleSetWidth = width of one full copy of the images
      const singleSet = strip!.scrollWidth / 3;
      // Travel = one full set + the container width so left-side images
      // fully emerge from the gradient before the loop resets.
      // Round down to the nearest singleSet to keep the loop seamless.
      const sets = Math.ceil((singleSet + container.offsetWidth) / singleSet);
      const travel = singleSet * sets;
      strip!.style.setProperty('--marquee-travel', `-${travel}px`);
      strip!.style.animationDuration = `${travel / PX_PER_SEC}s`;
    }

    const imgs = Array.from(strip.querySelectorAll('img'));
    let pending = imgs.length;
    if (pending === 0) { setup(); return; }
    imgs.forEach(img => {
      if (img.complete) { if (--pending === 0) setup(); }
      else img.addEventListener('load', () => { if (--pending === 0) setup(); }, { once: true });
    });

    const ro = new ResizeObserver(setup);
    ro.observe(strip.parentElement!);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="overflow-hidden w-full h-full">
      <div ref={stripRef} className="flex h-full animate-marquee">
        {[...IMGS, ...IMGS, ...IMGS].map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={src} alt="" className="h-full w-auto flex-shrink-0" loading="eager" />
        ))}
      </div>
    </div>
  );
}
