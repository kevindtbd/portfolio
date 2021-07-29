import React, { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { CardProps, Colors } from '../../types/experience';

import Blob from '../../public/blob.svg';
import Blob1 from '../../public/blob-1.svg';

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTagContainer = styled(StyledFlexContainer)`
  flex-wrap: wrap;
  justify-content: space-around;
  @media screen and (min-width: 768px) {
    & {
 
      flex-wrap: nowrap;
    }
  }
`;

const StyledCard = styled(StyledFlexContainer)<{ color: Colors }>`
    background: ${(props) => `linear-gradient(to bottom right, ${props.color}, ${props.color}9f)`};
    background-image: url(${Blob}), url(${Blob1}), ${(props) => `linear-gradient(to bottom right, ${props.color}, ${props.color}9f)`};

 
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: top left, right, bottom right;
    border-radius: 7px;
    max-width: 1200px;
    color: white;
    padding: 4rem 2rem;
    margin-bottom: 3rem; 
    flex-wrap: wrap-reverse;

    & h3 {
      font-size: 28px;
    }


    @media screen and (min-width: 500px) {
      & {
        
        max-width: calc(100vw - 90px);
      }
    }

    @media screen and (min-width: 768px) {
      & {
        flex-wrap: nowrap;
        max-width: 700px;
      }
    }

    @media screen and (min-width: 1000px) {
      & {
        max-width: 990px;
      }
    }

`;

const StyledTag = styled.div`
  border-radius: 2px;
  color: white;
  background: rgba(255,255,255,0.2);
  margin-right: 20px;
  padding: 6px 16px;
`;

const StyledExcerpt = styled.div`
  margin-bottom: 40px;
`;

const Project: FC<CardProps> = ({
  imgAttrs, company, excerpt, color, tags,
}) => {
  const { src: imgsrc, alt } = imgAttrs;
  const src = imgsrc as StaticImageData;

  return (
    <StyledCard color={color}>
      <div>
        <h3>{company}</h3>
        <StyledExcerpt>
          <span>{excerpt}</span>
        </StyledExcerpt>
        <StyledTagContainer>
          {
            tags.map((tag: string) => (
              <StyledTag key={tag}>{tag}</StyledTag>
            ))
          }
        </StyledTagContainer>
      </div>
      <Image src={src} alt={alt} width={src.width} height={src.height} />
    </StyledCard>
  );
};

export default Project;
