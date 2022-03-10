import styled from "styled-components";
import media from "styled-media-query";
import * as S from "../../../../styles";

export const Title = styled.h2`
  width: 100%;
  margin: 0;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const IntroContent = styled(S.MainContent)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--gap);
  min-height: 100vh;

  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
  `}
`;

export const IntroTextContent = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
export const Subtitle = styled.h6`
  width: 100%;
  margin-bottom: 5rem;
`;

export const Intro = styled(S.MainBg)``;

export const IntroImg = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

export const Paragraph = styled.p``;
