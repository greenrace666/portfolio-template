// Breakpoint constants for consistent responsive design
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
} as const;

// Minimum touch target size
export const TOUCH_TARGET_SIZE = '44px';

// Helper to check if device is mobile
export const isMobile = () => 
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);