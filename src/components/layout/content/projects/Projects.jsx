import React from "react";
import github from '../../../../images/github.svg'
import * as S from './styles'
 
export default function() {
  return (
    <S.Projects id="projects">
      <S.ProjectsContent>
        <S.Title>Meus projetos</S.Title>
        <S.Description>Todos meus projetos podem ser acessados no github através da imagem abaixo.</S.Description>
        <S.ContentImg>
          <S.Link rel="nofollow" target="_blank" href="https://github.com/MatheusMarques184"><S.Image src={github} alt="Logo de HTML, CSS e JS." /></S.Link>
        </S.ContentImg>
      </S.ProjectsContent>
    </S.Projects>
  )
}
