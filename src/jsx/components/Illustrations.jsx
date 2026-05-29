import React from 'react';

/**
 * Minimalist SVG Illustrations for Odapi
 */

export const ChartIllustration = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background */}
    <rect width="100" height="100" fill="transparent" />
    
    {/* Bars */}
    <rect x="15" y="60" width="12" height="30" fill="#282c34" opacity="0.7" />
    <rect x="35" y="45" width="12" height="45" fill="#282c34" opacity="0.8" />
    <rect x="55" y="25" width="12" height="65" fill="#282c34" />
    <rect x="75" y="40" width="12" height="50" fill="#282c34" opacity="0.8" />
    
    {/* Axis */}
    <line x1="10" y1="90" x2="90" y2="90" stroke="#282c34" strokeWidth="2" />
    <line x1="10" y1="10" x2="10" y2="90" stroke="#282c34" strokeWidth="2" />
    
    {/* Trend line */}
    <polyline points="21,65 41,50 61,30 81,45" stroke="#282c34" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

export const CalculatorIllustration = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Calculator body */}
    <rect x="15" y="15" width="70" height="70" rx="3" fill="none" stroke="#282c34" strokeWidth="2" />
    
    {/* Screen */}
    <rect x="20" y="20" width="60" height="15" rx="2" fill="#f0f0f0" />
    <text x="50" y="32" fontSize="8" textAnchor="middle" fill="#282c34" fontWeight="bold">1234.56</text>
    
    {/* Button grid */}
    {/* Row 1 */}
    <rect x="20" y="40" width="12" height="12" rx="1" fill="#282c34" opacity="0.3" />
    <rect x="35" y="40" width="12" height="12" rx="1" fill="#282c34" opacity="0.3" />
    <rect x="50" y="40" width="12" height="12" rx="1" fill="#282c34" opacity="0.3" />
    <rect x="65" y="40" width="10" height="12" rx="1" fill="#282c34" opacity="0.6" />
    
    {/* Row 2 */}
    <rect x="20" y="55" width="12" height="12" rx="1" fill="#282c34" opacity="0.3" />
    <rect x="35" y="55" width="12" height="12" rx="1" fill="#282c34" opacity="0.3" />
    <rect x="50" y="55" width="12" height="12" rx="1" fill="#282c34" opacity="0.3" />
    <rect x="65" y="55" width="10" height="12" rx="1" fill="#282c34" opacity="0.6" />
    
    {/* Row 3 */}
    <rect x="20" y="70" width="12" height="12" rx="1" fill="#282c34" opacity="0.3" />
    <rect x="35" y="70" width="12" height="12" rx="1" fill="#282c34" opacity="0.3" />
    <rect x="50" y="70" width="27" height="12" rx="1" fill="#282c34" opacity="0.6" />
  </svg>
);

export const GrowthIllustration = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Upward arrow */}
    <polygon points="50,15 65,40 55,40 55,75 45,75 45,40 35,40" fill="#282c34" opacity="0.8" />
    
    {/* Dollar sign inside */}
    <text x="50" y="65" fontSize="24" textAnchor="middle" fill="#f5f5f5" fontWeight="bold">$</text>
  </svg>
);

export const DocumentIllustration = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Document */}
    <rect x="20" y="15" width="60" height="70" rx="2" fill="none" stroke="#282c34" strokeWidth="2" />
    
    {/* Lines */}
    <line x1="28" y1="28" x2="72" y2="28" stroke="#282c34" strokeWidth="1.5" opacity="0.7" />
    <line x1="28" y1="38" x2="72" y2="38" stroke="#282c34" strokeWidth="1.5" opacity="0.7" />
    <line x1="28" y1="48" x2="72" y2="48" stroke="#282c34" strokeWidth="1.5" opacity="0.7" />
    <line x1="28" y1="58" x2="55" y2="58" stroke="#282c34" strokeWidth="1.5" opacity="0.7" />
    <line x1="28" y1="68" x2="50" y2="68" stroke="#282c34" strokeWidth="1.5" opacity="0.7" />
    
    {/* Checkmark */}
    <path d="M 60 60 L 65 68 L 75 50" stroke="#282c34" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default {
  ChartIllustration,
  CalculatorIllustration,
  GrowthIllustration,
  DocumentIllustration,
};
