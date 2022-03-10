import React from "react";
import photo from "../../../../images/home.svg"
import MenuSpacing from "../../header/MenuSpacing";
import * as S from './styles'


export default function() {
  return (
      <S.Intro id="home">
        <MenuSpacing />
        <S.IntroContent >
          <S.IntroTextContent>
            <S.Title>Olá,eu sou Matheus Marques</S.Title>
            <S.Subtitle>DEV Full Stack JR</S.Subtitle>
            <S.Paragraph>Fiz essa aplicação com o objetivo de criar uma apresentação e também usar um pouco dos meus conhecimentos em React.JS e Styled-components</S.Paragraph>
          </S.IntroTextContent>
          <S.IntroImg>
            <S.Image src={photo} alt="Logo de HTML, CSS e JS." />
          </S.IntroImg>
        </S.IntroContent>
      </S.Intro>
  )
}
