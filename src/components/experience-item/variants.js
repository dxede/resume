export const descriptionVariants = {
  show: {
    opacity: 1,
    height: `100%`,
    display: 'block',
    transition: {
      type: 'easeOut',
    }
  },
  hide: {
    opacity: 0,
    height: `0px`,
    transition: {
      stiffness: 100,
      velocity: 200
    }
  }
}

export const headerVariants = {
  emphasis: {
    scale: 1.2,
    x: 100,
    transition: {
      type: 'easeOut',
      velocity: 200,
    }
  },
  normal: {
    scale: 1,
    x: 0,
    transition: {
      stiffness: 1000,
    }
  }
}

export const skeletonVariant = {
  pulse: {
    opacity: 0.25,
    transition: {
      duration: 2,
      staggerChildren: 0.5, 
      yoyo: Infinity
    }
  }
}