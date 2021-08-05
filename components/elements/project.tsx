/* eslint-disable no-bitwise */
import React, { FC } from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import Responsibilities from './responsibilities';
import { CardProps, Colors } from '../../types/experience';

// https://css-tricks.com/snippets/javascript/lighten-darken-color/
function lightenDarkenColor(col: string, amt: number): string {
  let usePound = false;
  let color = col;

  if (color[0] === '#') {
    color = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
}

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTagContainer = styled(StyledFlexContainer)`
  flex-wrap: wrap;
  justify-content: start;
  display: none;
  
  @media screen and (min-width: 500px) {
    display: flex;
  }
`;

const backgroundImage = css`
url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1100' height='560' preserveAspectRatio='none' viewBox='0 0 1100 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1013%26quot%3b)' fill='none'%3e%3crect width='1100' height='560' x='0' y='0' fill='rgba(153%2c 153%2c 153%2c 0.1)'%3e%3c/rect%3e%3cpath d='M0%2c431.579C77.468%2c414.236%2c122.929%2c336.408%2c195.466%2c304.152C287.47%2c263.239%2c414.905%2c296.48%2c478.805%2c218.663C541.939%2c141.779%2c530.344%2c23.573%2c504.827%2c-72.583C480.677%2c-163.589%2c413.48%2c-235.025%2c342.113%2c-296.442C278.12%2c-351.513%2c201.836%2c-389.24%2c118.846%2c-404.753C41.258%2c-419.256%2c-37.883%2c-408.563%2c-111.966%2c-381.323C-182.613%2c-355.346%2c-236.138%2c-303.333%2c-292.539%2c-253.486C-357.671%2c-195.922%2c-444.914%2c-151.169%2c-467.39%2c-67.201C-490.348%2c18.566%2c-446.031%2c106.103%2c-410.583%2c187.507C-374.586%2c270.172%2c-338.668%2c360.308%2c-261.165%2c406.38C-184.432%2c451.994%2c-87.111%2c451.081%2c0%2c431.579' fill='rgba(100%2c 100%2c 100%2c 0.1)'%3e%3c/path%3e%3cpath d='M1100 886.117C1171.347 890.063 1250.5529999999999 926.4169999999999 1310.024 886.804 1369.532 847.1659999999999 1372.282 761.799 1390.454 692.646 1405.817 634.1800000000001 1404.0810000000001 576.139 1407.517 515.7860000000001 1411.916 438.514 1444.998 359.06100000000004 1413.47 288.377 1378.721 210.471 1314.989 123.69400000000002 1229.904 117.58800000000002 1141.587 111.25 1086.608 212.212 1011.78 259.55 960.642 291.901 906.565 313.498 859.705 351.784 803.8240000000001 397.43899999999996 735.158 435.819 712.271 504.253 688.113 576.489 698.348 659.852 734.201 727.0550000000001 769.221 792.698 836.164 834.702 904.393 864.37 965.799 891.071 1033.142 882.419 1100 886.117' fill='rgba(207%2c 207%2c 207%2c 0.1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1013'%3e%3crect width='1100' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")
`;

const StyledProjectContainer = styled.div<{ color: string }>`
  max-width: calc(100vw - 80px);
  position: relative;
  border-radius: 16px;
  background-color: ${({ color }) => lightenDarkenColor(color, -30)};
  margin-bottom: 3rem; 
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  & span {
    color: #e6e6e6;
  }

  @media screen and (min-width: 900px) {
    & {
      max-width: 80vw;
    }
  }

  @media screen and (min-width: 1200px) {
    & {
        max-width: 1100px;
    }
  }
`;

const StyledCard = styled(StyledFlexContainer)<{ color: Colors }>`
    background: ${(props) => `linear-gradient(to bottom right, ${props.color}, ${props.color}9f)`};
    background-image:  ${backgroundImage}, ${(props) => `linear-gradient(to bottom right, ${props.color}, ${props.color}9f)`};
    background-size: cover;
    border-radius: 16px;
    background-repeat: no-repeat, no-repeat;
    color: white;
    padding: 4rem 2rem;
    flex-wrap: wrap-reverse;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    & h3 {
      font-size: 28px;
    }

    @media screen and (min-width: 900px) {
      & {
        flex-wrap: nowrap;
      }
    }
`;

const StyledTag = styled.div`
  border-radius: 2px;
  color: white;
  background: rgba(255,255,255,0.3);
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 6px 16px;
`;

const StyledExcerpt = styled.div`
  margin-bottom: 1rem;
`;

const StyledInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 900px) {
      & {
        max-width: 40%;
      }
    }
`;

const StyledJobSpan = styled.span`
    font-weight: bold;
    margin-bottom: 1rem;
`;

const StyledVisitLink = styled.a`
color: white;
border: 2px solid #ffffff7f;
padding: 8px 32px;
font-size: 16px;
border-radius: 2px;
position: relative;

&:after {
  content: "";
  display: inline-block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: transparent;
  z-index: 3;
  transition: background-color .3s ease-in-out;
}

&:hover:after, &:active:after {
  cursor: pointer;
  border-radius: 5px;
  transition: background .3s ease-in-out;
  background: rgba(255,255,255,0.3);
}
`;

const StyledVisitContainer = styled.div`
  height: fit-content;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const Project: FC<CardProps> = ({
  imgAttrs, project, color, tags,
}) => {
  const {
    company, link, title, timeline, responsibilities, excerpt,
  } = project;

  const { src, alt } = imgAttrs;

  return (
    <StyledProjectContainer color={color}>
      <StyledCard color={color}>
        <StyledInfoContainer>
          <h3>{company}</h3>
          {
            title && (
            <>
              <StyledJobSpan>
                Role:
                {' '}
                {title}
              </StyledJobSpan>
            </>
            )
          }
          <StyledJobSpan>{`From: ${timeline[0]} - ${timeline[1]}`}</StyledJobSpan>
          <StyledExcerpt>
            <span>{excerpt}</span>
          </StyledExcerpt>
          {
            link && (
              <StyledVisitContainer>
                <StyledVisitLink href={link}>Visit Here</StyledVisitLink>
              </StyledVisitContainer>
            )
          }
          <StyledTagContainer>
            {
            tags.map((tag: string) => (
              <StyledTag key={tag}>{tag}</StyledTag>
            ))
          }
          </StyledTagContainer>
        </StyledInfoContainer>
        <Image src={src} alt={alt} width={src.width} height={src.height} />
      </StyledCard>
      {
      responsibilities && <Responsibilities color={color} resp={responsibilities} />
    }
    </StyledProjectContainer>
  );
};

export default Project;
