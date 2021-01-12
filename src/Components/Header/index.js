import React, { useContext} from 'react';

import { AiOutlineShoppingCart } from 'react-icons/ai';

import AppContext from '../../Context/AppContext';

import * as S from './styles';

function Header({ title = 'Título' }) {
  const { data: { items}  } = useContext(AppContext)

  return (
    <S.Container>
      <h1>{title}</h1>
      <S.Icon>
        <div className='totalItems'>
          <AiOutlineShoppingCart />
          <p>{items}</p>
        </div>
      </S.Icon>
    </S.Container>
  );
}

export default Header;