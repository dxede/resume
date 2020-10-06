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
  ExperienceItemDescriptionItemsContainer,
  ExperienceItemDescriptionItemsList,
  ExperienceItemDescriptionItemListEntry
} from './styles';

export default function ExperienceItem({item, noAnimation}) {
  const [isShowingDescription, setIsShowingDescription] = useState(false);
  const {title, company, descriptionItems, logo } = item;

  return (
    <ExperienceItemContainer
      noAnimation={noAnimation}
      onMouseEnter={noAnimation ? null : () => setIsShowingDescription(true)}
      onMouseLeave={noAnimation ? null : () => setIsShowingDescription(false)}
    >
      <ExperienceItemHeader
        animate={isShowingDescription ? 'emphasis' : 'normal'}
        variants={headerVariants}
      >
        <ExperienceItemCompanyLogoContainer>
          <ExperienceItemCompanyLogoImage src={assetSvc.get(logo)} />
        </ExperienceItemCompanyLogoContainer>

        <ExperienceItemHeaderText>
          <ExperienceItemTitle>{title}</ExperienceItemTitle>
          <ExperienceItemCompany>{company}</ExperienceItemCompany>
        </ExperienceItemHeaderText>
      </ExperienceItemHeader>

      <ExperienceItemDescriptionItemsContainer
        animate={noAnimation ? null : isShowingDescription ? 'show' : 'hide'}
        variants={descriptionVariants}
        noAnimation={noAnimation}
      >
        <ExperienceItemDescriptionItemsList>
          {descriptionItems.map((di, indx) => 
            <ExperienceItemDescriptionItemListEntry key={indx}>
              {di}
            </ExperienceItemDescriptionItemListEntry>
          )}
        </ExperienceItemDescriptionItemsList>
      </ExperienceItemDescriptionItemsContainer>
    </ExperienceItemContainer>
  )
}