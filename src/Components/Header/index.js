import React from 'react';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import * as S from './styles';

function Header({title = 'Título'}) {
  return (
    <S.Container>
      <h1>{title}</h1>
      <S.Icon>
        <AiOutlineShoppingCart/>
      </S.Icon>
    </S.Container>
  );
}

export default Header;