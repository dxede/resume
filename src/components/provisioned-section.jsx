import React, { useState } from 'react';
import { useEffect } from 'react';
import useAppServices from '../hooks/use-app-services';
import { SkillSkeletonList } from '../sections/skills/skeleton';
import ExperienceItemSkeleton from './experience-item/skeleton';
import Section from './section';

function createSkeletons (length, useCenteredSkeleton = false) {
  return Array.from({ length }, (_,k)=> k+1)
  .map((_, i) => <ExperienceItemSkeleton key={i} center={useCenteredSkeleton} />);
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
    <Section title={title}>
       {
        data.length > 0 ? content : 
        useSkillsSkeletons ? <SkillSkeletonList count={skeletonCount} /> : createSkeletons(skeletonCount, useCenteredSkeleton)
        }
    </Section>
  )
}