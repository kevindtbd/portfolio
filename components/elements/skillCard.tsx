import * as React from 'react';
import Image from 'next/image';
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
  // box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 1rem 1rem;
  width: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
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
