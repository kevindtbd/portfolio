import * as React from 'react';
import styled from 'styled-components';

type WorkSectionProps = {
  title: string,
  children: React.ReactElement
};

const StyledHeaderWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
  text-align: center;

  & h2 {
    padding-bottom: 1rem;
  }

  &:after {
    content: '';
    width: 50px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 10px;
    display: block;
    border-bottom: 3px solid ${(props) => props.theme.secondary};
  }
`;

export default function WorkSection({ title, children }: WorkSectionProps) {
  return (
    <section>
      <StyledHeaderWrapper>
        <h2>{title}</h2>
      </StyledHeaderWrapper>
      {children}
    </section>
  );
}
