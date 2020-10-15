import { useRef, useLayoutEffect } from 'react';

const isInBrowser = typeof window !== 'undefined';

function getScrollPosition () {
  if (!isInBrowser) {
    return {
      x: 0,
      y: 0
    }
  }

  return {
    x: window.scrollX,
    y: window.scrollY
  }
}

export default function useScrollPosition (effect) {
  const pos = useRef(getScrollPosition());

  function updateScrollPosition() {
    const currentPosition = getScrollPosition();
    
    effect({
      previousPosition: pos.current,
      currentPosition
    });

    pos.current = currentPosition;
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', () => updateScrollPosition());
    return () => {
      window.removeEventListener('scroll', () => updateScrollPosition());
    };
  });
}