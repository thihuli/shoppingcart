import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const BoxMarket = styled.div`
  width: 100%;
  max-width: 500px;
  height: 800px;
  background: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  .Footer {
    background: green;
    height: 100%;
    flex: 1;
  }
`;

export const Products = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
  height: 520px;
  overflow-y: auto;

`;
