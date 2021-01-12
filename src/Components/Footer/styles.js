import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100% ;
  /* background: red; */

  
`;

export const TotalContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
  border-top: 1px solid #bcbcbc;
  border-bottom: 1px solid #bcbcbc;
  padding: 20px 15px 20px 15px;
  
  .total {
    display: flex;
    justify-content: space-between;

    > p {
      font-weight: bold;
      font-size: 20px;
    }
  }

  .freight {
    display: flex;
    justify-content: center;
    background: #b3ffb3;
    border-radius: 15px;
    padding: 15px;

  }

`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  height: 100%;
  padding: 0 15px 0 15px;
  

  > button {
    width: 100%;
    height: 40px;
    background:  #1266F1;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    transition: filter 0.2s;
    :hover {
      filter: brightness(90%)
    }
  }
`;
