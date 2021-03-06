import styled from "styled-components";
import media from "styled-media-query";
import * as S from "../../../../styles";

export const Contact = styled(S.MainBg)``;

export const ContactContent = styled(S.MainContent)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  ${media.lessThan("large")`
    
    `}
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  padding-bottom: 5rem;
`;

export const Contacts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10rem;

  ${media.lessThan("large")`
    flex-flow: column wrap;
  `};
`;

export const ImageContacts = styled.img`
  width: 100%;
  width: 22rem;
  height: 22rem;
  margin: 0 6rem 0 6rem;
  ${media.lessThan("large")`
    margin: 0 0 6rem 0;
    width: 16rem;
    height: 16rem;
  `};
`;
