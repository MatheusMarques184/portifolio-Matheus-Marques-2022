import styled from "styled-components";
import * as S from "../../../../styles";
import media from "styled-media-query";

export const Projects = styled(S.WhiteBg)``;

export const ProjectsContent = styled(S.MainContent)`
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

export const Image = styled.img`
  width: 100%;
  width: 22rem;
  height: 22rem;
  ${media.lessThan("large")`
    width: 16rem;
    height: 16rem;
  `};
`;

export const ContentImg = styled.div``;

export const Link = styled.a``;
