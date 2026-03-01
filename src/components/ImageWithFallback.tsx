import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.HTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  fallbackSrc?: string;
  loading?: "eager" | "lazy";
  [key: string]: any;
}

export const ImageWithFallback = ({ 
  src, 
  alt, 
  className, 
  fallbackSrc = "https://placehold.co/600x400/1a1a1a/B69951?text=Image+Unavailable", 
  ...props 
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
    if (props.onError) {
      props.onError(e);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};
