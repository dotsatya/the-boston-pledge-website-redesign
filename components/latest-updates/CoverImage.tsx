"use client";

import React, { useState } from "react";

interface CoverImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
}

export default function CoverImage({
  src,
  fallbackSrc = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
  alt,
  className = "w-full h-full object-cover",
}: CoverImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
          setHasError(true);
          setCurrentSrc(fallbackSrc);
        }
      }}
      className={className}
    />
  );
}
