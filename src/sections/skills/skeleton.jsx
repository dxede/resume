import React from 'react';
import { SkillContainer, SkillImageContainer, SkillLabel, SkillsList } from './styles';
import { skeletonVariant } from './variants';

export function SkillSkeleton() {
  return (
    <SkillContainer
      skeleton
      variants={skeletonVariant} 
    >
      <SkillImageContainer skeleton variants={skeletonVariant}  />
      <SkillLabel skeleton variants={skeletonVariant}  />
    </SkillContainer>
  )
}

function createSkeletons (length) {
  return Array.from({ length }, (_,k)=> k+1)
  .map((_, i) => <SkillSkeleton key={i} />);
}

export default function SkillSkeletonList ({ count = 6 }) {
  return (
    <SkillsList
      animate='pulse'
      variants={skeletonVariant}
    >
      {createSkeletons(count)}
    </SkillsList>
  )
}