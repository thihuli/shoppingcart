import React, { useState, useEffect} from 'react';

import Header from '../../Components/Header';
import CardProducts from '../../Components/CardProduct';
import Footer from '../../Components/Footer';

import api from '../../Services/api';

import * as S from './styles';


function Home() {
  const [truffles, setTruffles] = useState([]);

  useEffect(() => {

    api.get('/items')
      .then(resp => {
        setTruffles(resp.data)
      })


  }, []);

  return (
    <S.Container>
      <S.BoxMarket>
        <Header title='Meu carrinho' />

        <S.Products>
          <CardProducts products={truffles} />
        </S.Products>
          <Footer />
      </S.BoxMarket>
    </S.Container>
  );
}

export default Home;