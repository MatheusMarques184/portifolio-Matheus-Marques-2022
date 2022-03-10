import React from "react";
import * as S from './styles'
import { FaCopyright } from 'react-icons/fa'

export default function() {
  return (
    <S.Footer id="footer">
      <S.FooterContent>
          <S.FooterLink rel="nofollow" target="_blank" href="https://github.com/MatheusMarques184">< FaCopyright size={21} className="icon"/><S.Paragraph>Matheus Marques</S.Paragraph></S.FooterLink>
      </S.FooterContent>
  </S.Footer>
  )
} 
