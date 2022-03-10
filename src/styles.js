import styled from "styled-components";

export const MainContent = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 10rem var(--gap);
`;

export const MainBg = styled.section`
  background: ${(props) => props.theme.gradiantBackground};
  color: var(--white-color);
  min-height: 100vh;
`;

export const WhiteBg = styled.section`
  background: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.colorText};
  min-height: 100vh;
`;
