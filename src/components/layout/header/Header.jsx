import React, { useState } from "react";
import * as S from "./styles";

import { FaHome, FaUser } from 'react-icons/fa'
import { BsFillLightningChargeFill, BsGearFill } from 'react-icons/bs'
import { RiContactsBook2Fill } from 'react-icons/ri'
import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'
import cv from '../../../images/cv.pdf'

export default function(props) {
  const [state, setState] = useState(false)

  const checked = () => {
    const checked = !state;
    setState(checked);
  };

  function changeTheme() {
    if(props.theme === "light") {
        props.setTheme("dark")
    } else {
        props.setTheme("light")
    }
}

  const icon = props.theme === "light" ? <HiMoon size={28} /> : <CgSun size={28} />
  return (
    <>
      <S.CloseMenu id="closeMenu" type="checkbox" aria-label="CloseMenu" role="button" checked={state}
      onChange={checked} />
      <S.CloseMenuLabel htmlFor="closeMenu" title="closeMenu"></S.CloseMenuLabel>
      <S.Menu></S.Menu>
      <S.Menu2>
      <S.MenuContent>
        <S.TitleMenu onClick={checked}>
          <S.LinkTitleMenu href="#home"></S.LinkTitleMenu>
        </S.TitleMenu>
        <S.NavMenu>
          <S.UlMenu onClick={checked}>
            <li><S.LinkUl href="#home"><FaHome size={28}/></S.LinkUl></li>
            <li><S.LinkUl href="#about"><FaUser size={26}/></S.LinkUl></li>
            <li><S.LinkUl href="#skills"><BsFillLightningChargeFill size={26}/></S.LinkUl></li>
            <li><S.LinkUl href="#projects"><BsGearFill size={26}/></S.LinkUl></li>
            <li><S.LinkUl href="#contact"><RiContactsBook2Fill size={28}/></S.LinkUl></li>
            <li><S.LinkUl onClick={changeTheme}>{icon}</S.LinkUl></li>
            <li><S.LinkUl href={cv} download="Curriculo_Matheus_Marques">Baixe meu CV</S.LinkUl></li>
          </S.UlMenu>
        </S.NavMenu>
      </S.MenuContent>
    </S.Menu2>
    </>
  )
}
