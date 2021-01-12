import React, {useContext, useState } from 'react';

import { useHistory } from "react-router-dom";

import AppContext from '../../Context/AppContext';

import * as S from './styles';

function Footer() {
  const { data } = useContext(AppContext);
  const history = useHistory()

  function handleClick() {
    history.push("/congratulations");
  }
  return (
    <S.Container>
      <S.TotalContainer>
        <div className='total' >
          <p>Total</p>
          <p>{data.money}</p>
        </div>
        {data.price > 9.99 ? <div className='freight'>
          <p>Parabéns, sua compra tem frete grátis !</p>
        </div> : null}
      </S.TotalContainer>
      <S.ButtonContainer>
        <button onClick={handleClick}>
          Finalizar compra
        </button>

      </S.ButtonContainer>


    </S.Container>
  );
}

export default Footer;