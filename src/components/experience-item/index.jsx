import React, { useState } from 'react';
import assetSvc from '../../services/asset-svc';
import { descriptionVariants, headerVariants } from './variants';
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

export default function ExperienceItem({item, noAnimation, center, imageWidth}) {
  const [isShowingDescription, setIsShowingDescription] = useState(false);
  const {title, company, dateString, descriptionItems, logo } = item;

  return (
    <ExperienceItemContainer
      center={center}
      noAnimation={noAnimation}
      onMouseEnter={noAnimation ? null : () => setIsShowingDescription(true)}
      onMouseLeave={noAnimation ? null : () => setIsShowingDescription(false)}
    >
      <ExperienceItemHeader
        center={center}
        animate={isShowingDescription ? 'emphasis' : 'normal'}
        variants={headerVariants}
      >
        <ExperienceItemCompanyLogoContainer center={center} width={imageWidth} >
          <ExperienceItemCompanyLogoImage src={assetSvc.get(logo)} />
        </ExperienceItemCompanyLogoContainer>

        <ExperienceItemHeaderText>
          <ExperienceItemTitle>{title}</ExperienceItemTitle>
          <ExperienceItemCompany>{company}</ExperienceItemCompany>
          <ExperienceItemDate>{dateString}</ExperienceItemDate>
        </ExperienceItemHeaderText>
      </ExperienceItemHeader>

      <ExperienceItemDescriptionItemsContainer
        animate={noAnimation ? null : isShowingDescription ? 'show' : 'hide'}
        variants={descriptionVariants}
        noAnimation={noAnimation}
      >
        <ExperienceItemDescriptionItemsList>
          {(descriptionItems || []).map((di, indx) => 
            <ExperienceItemDescriptionItemListEntry key={indx}>
              {di}
            </ExperienceItemDescriptionItemListEntry>
          )}
        </ExperienceItemDescriptionItemsList>
      </ExperienceItemDescriptionItemsContainer>
    </ExperienceItemContainer>
  )
}