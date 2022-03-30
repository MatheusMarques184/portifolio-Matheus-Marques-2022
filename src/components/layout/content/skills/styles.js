import styled from "styled-components";
import media from "styled-media-query";
import * as S from "../../../../styles";

export const Overlap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgba(31, 31, 31, 0.822);
`;

export const GalerryImg = styled.div`
  width: 100%;
  max-width: 36rem;
  max-height: 36rem;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  text-align: center;

  &:hover ${Overlap} {
    opacity: 0.8;
  }

  ${media.lessThan("large")`
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    display: block;
  `}
`;

export const Image = styled.img`
  width: 22rem;
  height: 22rem;
  ${media.lessThan("large")`
    width: 16rem;
    height: 16rem;
  `};
`;

export const Text = styled.div`
  color: var(--white-color);
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
`;

export const Skill = styled(S.MainBg)``;

export const GridContent = styled(S.MainContent)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  padding-bottom: 5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap);
  counter-reset: grid-counter;

  ${media.lessThan("large")`
    grid-template-columns: repeat(2, 1fr);
    gap: 10rem;
  `}

  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
  `}
`;

export const Paragraph = styled.p``;
