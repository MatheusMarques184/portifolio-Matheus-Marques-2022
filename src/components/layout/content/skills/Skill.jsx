import React from "react";
import * as S from './styles'

export default props => {
  return(
    <S.GalerryImg>
      <S.Image src={props.image} alt={props.alt}/>
      <S.Overlap>
          <S.Text>{props.text}</S.Text>
      </S.Overlap>
      <S.Paragraph>{props.subtitle}</S.Paragraph>
    </S.GalerryImg>
  )
}
