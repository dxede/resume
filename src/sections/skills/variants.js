export const listVariant = {
  appear: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.0025 }
  }
};

export const listItemVariant = {
  appear: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.05,
      y: { stiffness: 4000, velocity: -100 },
      x: { stiffness: 4000, velocity: -100 },
      scale: {
        type: 'spring',
        velocity: 10,
      }
    }
  }
};

export const skeletonVariant = {
  pulse: {
    opacity: 0.5,
    transition: {
      duration: 1,
      staggerChildren: 0.25, 
      yoyo: Infinity
    }
  }
}