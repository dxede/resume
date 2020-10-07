import { useRef, useLayoutEffect } from 'react';

const isInBrowser = typeof window !== 'undefined';

function getMediaSizes () {
  if (!isInBrowser) {
    return {
      width: null,
      height: null,
      lg: null,
      md: null,
      sm: null,
      xs: null
    }
  }

  const width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  const height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

  const xl = width > 1200;
  const lg = width > 996 && width <= 1200;
  const md = width > 768 && width <= 996;
  const sm = width > 556 && width <= 768;
  const xs = width <= 556;

  return {
    width,
    height,
    xl,
    lg,
    md,
    sm,
    xs,
  };
}

export default function useMediaQuery (effect) {
  const media = useRef(getMediaSizes());

  function updateMediaQueryRef() {
    const currentMedia = getMediaSizes();
    effect(currentMedia);
    media.current = currentMedia;
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', () => updateMediaQueryRef());
    return () => {
      window.removeEventListener('resize', () => updateMediaQueryRef());
    };
  });
}