import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceItemContainer = styled.div``;
const ExperienceItemTitle = styled.div``;
const ExperienceItemCompany = styled.div``;
const ExperienceItemDescriptionItemsContainer = styled.div``;
const ExperienceItemDescriptionItemsList = styled.ul``;
const ExperienceItemDescriptionItemListEntry = styled.li``;

export default function ExperienceItem({item}) {
  const {title, company, descriptionItems } = item;

  return (
    <ExperienceItemContainer>
      <ExperienceItemTitle>{title}</ExperienceItemTitle>
      <ExperienceItemCompany>{company}</ExperienceItemCompany>
      <ExperienceItemDescriptionItemsContainer>
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