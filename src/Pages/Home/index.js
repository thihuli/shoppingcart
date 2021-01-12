import React, { useState, useEffect, useContext } from 'react';

import Header from '../../Components/Header';
import CardProducts from '../../Components/CardProduct';
import Footer from '../../Components/Footer';

import api from '../../Services/api';

import AppContext from '../../Context/AppContext';

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
        <Header title='Meu Carrinho'/>

        <S.Products>
        </S.Products>
          <CardProducts products={truffles}/>
        <Footer/>
        {/* <div className='box'>

        </div> */}

      </S.BoxMarket>
    </S.Container>
  );
}

export default Home;