import * as React from 'react';
import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

export type SkillCardProps = {
  src: StaticImageData,
  alt: string
};

const StyledImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const StyledSkillCard = styled.div`
  border-radius: 5px;
  padding: 1rem 1rem;
  width: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 750px) {
    width: 100px;
  }
`;

export default function SkillCard({ src, alt }: SkillCardProps) {
  return (
    <StyledSkillCard>
      <StyledImageContainer>
        <Image src={src} alt={alt} width={50} height={50} />
      </StyledImageContainer>
      <div>
        <span>{alt}</span>
      </div>
    </StyledSkillCard>

  );
}
