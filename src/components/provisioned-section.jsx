import React, { useState, lazy, useEffect } from 'react';
import useAppServices from '../hooks/use-app-services';
import CustomSuspense from './custom-suspense';
const SkillSkeletonList = lazy(() => import('../sections/skills/skeleton'));
const ExperienceItemSkeleton = lazy(() => import('./experience-item/skeleton')) ;
const Section = lazy(() => import('./section'));

function createSkeletons (length, useCenteredSkeleton = false) {
  return (
    <CustomSuspense>
      {
        Array.from({ length }, (_,k)=> k+1)
        .map(
          (_, i) => <ExperienceItemSkeleton key={i} center={useCenteredSkeleton} />
        )
      }
    </CustomSuspense>
  );
}

export default function ProvisionedSection({ 
  title, 
  mapFunc, 
  fetchFunctionName, 
  WrapperComponent, 
  useCenteredSkeleton = false,
  skeletonCount = 3,
  useSkillsSkeletons = false,
}) {
  const { dataSvc } = useAppServices();
  const [data, setData] = useState([]);

  useEffect(() => {
    dataSvc[fetchFunctionName](setData);
    return;
  }, [dataSvc, fetchFunctionName]);

  const content = WrapperComponent ? <WrapperComponent>{data.map(mapFunc)}</WrapperComponent> : data.map(mapFunc);

  return (
    <CustomSuspense>
      <Section title={title}>
        {
          data.length > 0 ? content : 
          useSkillsSkeletons ? 
            <SkillSkeletonList count={skeletonCount} /> : 
            createSkeletons(skeletonCount, useCenteredSkeleton)
          }
      </Section>
    </CustomSuspense>
  )
}