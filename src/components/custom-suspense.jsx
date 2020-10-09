import React, { Suspense } from 'react';
import configSvc from '../services/config-svc';

export default function CustomSuspense ({ fallback, children, ...rest }) {
  return <Suspense fallback={fallback || configSvc.defaultFallBack} { ...rest } >{children}</Suspense>;
}
