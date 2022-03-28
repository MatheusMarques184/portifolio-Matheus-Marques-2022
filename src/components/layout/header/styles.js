import styled from "styled-components";
import media from "styled-media-query";
import * as S from "../../../styles";

export const CloseMenuLabel = styled.label`
  &:after {
    display: none;
    content: "☰";
    position: fixed;
    z-index: 2;
    top: 2rem;
    right: 2rem;
    color: var(--white-color);
    font-size: 3rem;
    line-height: 3rem;
    width: 3rem;
    height: 3rem;
    text-align: center;
    padding: 0.5rem;
    cursor: pointer;
  }

  ${media.lessThan("medium")`
    &:after{
        display: block;
    }
  `}
`;

export const Menu = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
  border-bottom: ${(props) => props.theme.border};
  background: ${(props) => props.theme.asideBackground};

  ${media.lessThan("medium")`
    border: none;
  `}
`;

export const Menu2 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
  border-bottom: ${(props) => props.theme.border};
  background: ${(props) => props.theme.asideBackground};

  ${media.lessThan("medium")`
    display: none;
  `}
`;

export const CloseMenu = styled.input`
  display: none;

  ${media.lessThan("medium")`
    &:checked ~ ${Menu} ~ ${Menu2} {
        display: block;
        bottom: 0;
        text-align: center;
    }
    &:checked ~ ${CloseMenuLabel}::after {
      content: "×";
      color: ${(props) => props.theme.colorIcon};
  `}
`;

export const MenuContent = styled(S.MainContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  ${media.lessThan("medium")`
    height: 100vh;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const TitleMenu = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colorIcon};
`;

export const LinkTitleMenu = styled.a`
  color: inherit;
  &:after {
    content: "<Matheus Marques/>";
  }
`;

export const UlMenuMobile = styled.ul`
  list-style: none;
  display: none;
  ${media.lessThan("medium")`
    display: flex ;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const UlMenu = styled.ul`
  list-style: none;
  display: flex;
  ${media.lessThan("medium")`
    display: none ;
  `}
`;
export const LinkUl = styled.a`
  display: block;
  padding: 1rem;
  font-size: 2rem;
  height: 100%;
  color: ${(props) => props.theme.colorIcon};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 1rem;
    left: 50%;
    width: 0;
    height: 0.2rem;
    background: var(--secondary-color);
    transition: all 300ms ease-in-out;
  }

  &:hover:after {
    width: 50%;
    left: 25%;
  }
`;

export const MenuSpacing = styled.div`
  height: 56px;

  ${media.lessThan("medium")`
    display: none;
  `}
`;

export const NavMenu = styled.nav``;
