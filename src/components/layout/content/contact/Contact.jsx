import React from "react";
import email from '../../../../images/email.svg'
import linkedin from '../../../../images/linkedin5.svg'
import * as S from './styles'

export default function() {
  return ( 
    <S.Contact id="contact">
      <S.ContactContent>
        <S.Title>Contatos</S.Title>
        <S.Description>Caso houver interesse meus contatos estão abaixo.</S.Description>
        <S.Contacts>
          <address><a href="mailto:matheusmarquesneves12@gamil.com"><S.ImageContacts src={email} alt="Logo de HTML, CSS e JS." /></a></address>
          <a rel="nofollow" target="_blank" href="https://www.linkedin.com/in/matheus-marques-843609201/"><S.ImageContacts src={linkedin} alt="Logo de HTML, CSS e JS." /></a>
        </S.Contacts>
      </S.ContactContent>
    </S.Contact>
  )
}
