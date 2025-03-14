'use client';

import { useState } from 'react';

interface ProductImageProps {
  src?: string;
  alt: string;
  className?: string;
}

export default function ProductImage({ src, alt, className = "w-full h-full object-cover" }: ProductImageProps) {
  const [error, setError] = useState(false);
  const fallbackImage = '/images/Fresh Apples.jpg';
  
  const handleError = () => {
    setError(true);
  };
  
  return (
    <img 
      src={error || !src ? fallbackImage : src} 
      alt={alt} 
      className={className}
      onError={handleError}
    />
  );
} 