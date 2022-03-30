import styled from "styled-components";
import media from "styled-media-query";

export const BackToTop = styled.a`
  display: none;

  ${media.lessThan("large")`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: var(--white-color);
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: var(--primary-color);
    transform: rotate(-90deg);
    border: 0.1rem solid var(--primary-color);
  `}
`;
