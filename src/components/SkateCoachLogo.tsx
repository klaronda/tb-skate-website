import React from 'react';

export function SkateCoachLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 32 32" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Skateboard deck */}
      <path 
        d="M6 18c0-2 1-3 3-3h14c2 0 3 1 3 3s-1 3-3 3H9c-2 0-3-1-3-3z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      
      {/* Wheels */}
      <circle cx="10" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="22" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
      
      {/* Chat bubble */}
      <path 
        d="M8 6h12c2 0 3 1 3 3v4c0 2-1 3-3 3h-2l-2 2-2-2H8c-2 0-3-1-3-3V9c0-2 1-3 3-3z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Chat dots */}
      <circle cx="11" cy="11" r="1" fill="currentColor" />
      <circle cx="14" cy="11" r="1" fill="currentColor" />
      <circle cx="17" cy="11" r="1" fill="currentColor" />
    </svg>
  );
}
