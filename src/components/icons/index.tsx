
import { Camera as LucideCamera } from "lucide-react";

// Photo Camera Icon
export const Camera = ({ className }: { className?: string }) => (
  <LucideCamera className={className} />
);

// Math Icon
export const Math = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M7 20h10" />
    <path d="M6 4v6h12V4" />
    <path d="M8 10v10" />
    <path d="M16 10v10" />
    <path d="M12 4v2" />
    <path d="M12 14v2" />
    <path d="M9 17h6" />
  </svg>
);

// Shake Icon
export const Shake = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="m2 8 2-2" />
    <path d="m2 16 2 2" />
    <path d="m22 8-2-2" />
    <path d="m22 16-2 2" />
  </svg>
);

// Slide Unlock Icon
export const SlideUnlock = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 8h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1" />
    <path d="M6 20h12" />
    <path d="M12 4v8" />
    <path d="m15 9-3 3-3-3" />
  </svg>
);
