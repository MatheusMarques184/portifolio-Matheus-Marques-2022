import React from "react";
import * as S from './styles'

import nodejs from '../../../../images/nodejs.svg'
import react from '../../../../images/react.svg'
import git from '../../../../images/git.svg'
import html from '../../../../images/html.svg'
import css from '../../../../images/css.svg'
import linux from '../../../../images/tux.svg'
import bd from '../../../../images/BD.svg'
import api from '../../../../images/api.svg'
import styled from '../../../../images/styled.svg'
import ts from '../../../../images/ts.svg'
import ts2 from '../../../../images/ts2.svg'

import Skill from "./Skill";


export default function() {
  return (
    <S.Skill id="skills">
      <S.GridContent>
        <S.Title>Conhecimentos</S.Title>
        <S.Description>Todas as tecnologias que eu conheço e a minha experiência com cada uma delas.</S.Description>
        <S.Grid>
          < Skill
          image={react}
          alt="image React JS"
          text="Tenho um certificado de conclusão de curso React onde foi desenvolvido diversos projetos, alem disso essa aplicação foi feita com React."
          subtitle="REACT"
          />
          < Skill
          image={ts}
          alt="image TypeScript"
          text="Estou em fase de estudos e ja apliquei em alguns projetos"
          subtitle="TypeScript"
          />
          < Skill
          image={styled}
          alt="image Styled-components"
          text="Estou utilizando em todos os meus projetos React, inclusive para fazer o dark theme dessa aplicação"
          subtitle="Styled-components"
          />
          < Skill
          image={nodejs}
          alt="image Node.JS"
          text="Tenho um certificado de conclusão de curso Node.JS onde foi utilizado em inumeros projetos o Node.JS para o backend."
          subtitle="NODE.JS"
          />
          < Skill
          image={bd}
          alt="image data base"
          text="Tenho o conhecimento sobre banco de dados não relacional por meio de curso e na faculdade tenho concluido a disciplica de banco de dados I
          onde foi estudado banco de dados relacionais."
          subtitle="Banco de dados"
          />
          < Skill
          image={api}
          alt="image API"
          text="Tenho o conhecimento sobre criação e consumo de api, tenho projetos feitos mostrando a criação e consumo de API`s."
          subtitle="API"
          />
          < Skill
          image={linux}
          alt="image LINUX"
          text="Desde o começo me dediquei a utilizar linux no desenvolvimento e aprimorar a minha usabilidade do terminal."
          subtitle="Linux"
          />
          < Skill
          image={git}
          alt="image GIT"
          text="Além dos conceitos basicos de github, conheço a parte de versionamento."
          subtitle="GIT"
          />
        </S.Grid>
      </S.GridContent>
    </S.Skill>
  )
}
