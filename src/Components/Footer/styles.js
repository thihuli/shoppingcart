import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  
`;

export const TotalContainer = styled.div`  
  border-top: 1px solid #C0C0C0;
  border-bottom: 1px solid #C0C0C0;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 15px 0 15px;
  
  .total {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 15px;

    > p {
      font-weight: bold;
      font-size: 20px;
      font-style: normal;
    }
  }

  .freight {
    display: flex;
    justify-content: center;
    background: #b3ffb3;
    border-radius: 15px;
    padding: 5px;
    width: 80%;
    font-weight: 400;
  }

`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px 0 15px;
  height: 90px;
  

  > button {
    width: 90%;
    height: 50px;
    background:  #1266F1;
    outline: none;
    border: none;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    border-radius: 8px;
    transition: filter 0.2s;
    :hover {
      filter: brightness(90%)
    }
  }
`;
