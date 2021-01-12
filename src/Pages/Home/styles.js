import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const BoxMarket = styled.div`
  width: 100%;
  max-width: 500px;
  height: 800px;
  background: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;

`;

export const Products = styled.div`
  padding: 15px;
  height: calc(100% - 200px);
  /* background: red; */


  overflow-y: auto;

`;
