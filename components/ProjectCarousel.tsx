"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  photos: string[];
  name: string;
  year: string;
  location: string;
}

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export function ProjectCarousel({ photos, name, year, location }: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + photos.length) % photos.length);
  };

  return (
    <div className="bg-white border border-gray-200 overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 cursor-grab active:cursor-grabbing">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) go(1);
              else if (info.offset.x > 50) go(-1);
            }}
          >
            <Image
              src={photos[index]}
              alt={`${name} — foto ${index + 1} de ${photos.length}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover select-none pointer-events-none"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        {photos.length > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
              aria-label="Foto anterior"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
              aria-label="Siguiente foto"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        <div className="absolute bottom-3 right-3 z-10 bg-black/50 text-white text-xs px-2 py-1 tabular-nums">
          {index + 1} / {photos.length}
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs text-gray-400 uppercase tracking-[0.15em] mb-1">
          {location} · {year}
        </p>
        <h3 className="text-lg font-semibold text-black">{name}</h3>
      </div>
    </div>
  );
}
