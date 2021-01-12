import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../Context/AppContext';

import * as S from './styles';

import { AiOutlinePlusCircle } from 'react-icons/ai';

function CardProduct({ products = [] }) {
  const [values, setValues] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const  Context = useContext(AppContext);

  console.log(Context)

  const formattedNumber = (currency) => {
    const priceInteger = currency / 100;
    const priceFormatted = priceInteger

    return  priceFormatted
  };


  useEffect(() => {
    const total = values.reduce((acc, cur) => cur + acc, 0);
      setTotalPrice(total);
      setTotalItems(values.length);

      Context.price = totalPrice
      Context.items = totalItems
      
  }, [products, values, Context, totalPrice, totalItems ])

  const addProduct = (index, sellingPrice) => {
    const valueFormated = formattedNumber(sellingPrice)

    setValues([...values, valueFormated]);
  };
  console.log(totalPrice)
  

  return (
    <S.Container>
      {products.map((item, index) => (
        <S.Content key={item.id}>
          <S.ImageContainer>
            <img src={item.imageUrl} alt={item.name} />
          </S.ImageContainer>
          <S.Information>
            <S.Description>
              <p className='title'>{item.name}</p>
              <p className='price-old'>{formattedNumber(item.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              <p className='price'>{formattedNumber(item.sellingPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </S.Description>
            <S.ButtonContainer>
              <AiOutlinePlusCircle onClick={() => addProduct(index, item.sellingPrice)}/>
            </S.ButtonContainer>
          </S.Information>
        </S.Content>
      ))}

    </S.Container>
  );
}

export default CardProduct;