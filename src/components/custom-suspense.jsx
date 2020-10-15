import React, { Suspense } from 'react';

export default function CustomSuspense ({ fallback, children, ...rest }) {
  return (
    <Suspense 
      fallback={fallback || <div />} 
      { ...rest } 
    >
      {children}
    </Suspense>
  );
}
