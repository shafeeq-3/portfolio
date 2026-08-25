// Throttle function for scroll events
export const throttle = (func, delay) => {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
};

// Debounce function for resize events
export const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Request Animation Frame throttle
export const rafThrottle = (callback) => {
  let ticking = false;
  
  return function (...args) {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        callback.apply(this, args);
        ticking = false;
      });
      ticking = true;
    }
  };
};

// Lazy load images
export const lazyLoadImage = (img) => {
  if ('loading' in HTMLImageElement.prototype) {
    img.loading = 'lazy';
  } else {
    // Fallback for browsers that don't support native lazy loading
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          observer.unobserve(image);
        }
      });
    });
    observer.observe(img);
  }
};

// Preload critical resources
export const preloadResource = (href, as, type) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = href;
  if (type) link.type = type;
  document.head.appendChild(link);
};

// Get Core Web Vitals
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
