import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  text-align: center;
  font-size: 1.6rem;
  align-items: center;
  justify-content: center;
  border-top: ${(props) => props.theme.border};
  height: 5rem;
  background: ${(props) => props.theme.asideBackground};
`;

export const FooterContent = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const FooterLink = styled.a`
  color: ${(props) => props.theme.colorIcon};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Paragraph = styled.p`
  margin: 0;
  margin-left: 0.5rem;
  color: ${(props) => props.theme.colorIcon};
`;
