import React from 'react';
import { skeletonVariant } from './variants.js';
import { 
  ExperienceItemContainer, 
  ExperienceItemHeader,
  ExperienceItemCompanyLogoContainer,
  ExperienceItemCompanyLogoImage,
  ExperienceItemHeaderText,
  ExperienceItemTitle,
  ExperienceItemCompany,
  ExperienceItemDate,
  ExperienceItemDescriptionItemsContainer,
  ExperienceItemDescriptionItemsList,
  ExperienceItemDescriptionItemListEntry
} from './styles';


export default function ExperienceItemSkeleton({center, imageWidth}) {
  const noAnimation = true;

  return (
    <ExperienceItemContainer
      animate="pulse"
      variants={skeletonVariant}
      center={center}
      noAnimation={noAnimation}
    >
      <ExperienceItemCompanyLogoContainer 
        skeleton 
        center={center} 
        width={imageWidth}
      >
        <ExperienceItemCompanyLogoImage />
      </ExperienceItemCompanyLogoContainer>
      
      <ExperienceItemHeader
        center={center}
      >
        <ExperienceItemHeaderText>
          <ExperienceItemTitle 
            skeleton 
            variants={skeletonVariant}
            center={center}
          />
          <ExperienceItemCompany 
            skeleton
            variants={skeletonVariant}
            center={center}
          />
          <ExperienceItemDate 
            skeleton 
            variants={skeletonVariant}
            center={center}
          />
        </ExperienceItemHeaderText>
      </ExperienceItemHeader>

      <ExperienceItemDescriptionItemsContainer
        noAnimation={noAnimation}
      >
        <ExperienceItemDescriptionItemsList 
          skeleton
        >
          {['', '', ''].map((di, indx) => 
            <ExperienceItemDescriptionItemListEntry 
              skeleton
              variants={skeletonVariant}
              key={indx}
            >
              {di}
            </ExperienceItemDescriptionItemListEntry>
          )}
        </ExperienceItemDescriptionItemsList>
      </ExperienceItemDescriptionItemsContainer>
    </ExperienceItemContainer>
  )
}