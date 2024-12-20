// Performance monitoring utilities
export const measureLoadTime = (component: string) => {
  const start = performance.now();
  return () => {
    const duration = performance.now() - start;
    console.log(`${component} loaded in ${duration}ms`);
  };
};

export const checkImageSize = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const isOptimized = img.width <= 1200; // Max width for mobile
      resolve(isOptimized);
    };
    img.src = url;
  });
};