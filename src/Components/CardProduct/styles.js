import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 15px 0 15px;
`;

export const Content = styled.div`
  display: flex;
  gap: 10px;

`;

export const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid #D0D0D0;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }

`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: space-between;

`;

export const Description = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  .title {
    font-size: 14px;
    font-weight: bold;
    width: 90%;
  }

  .price-old {
    font-size: 13px;
    color: #D0D0D0;
    text-decoration: line-through;
  }

  .price {
    font-size: 18px;
    font-weight: bold;
  }

`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  > svg {
    font-size: 30px;
    cursor: pointer;
    transition: color 0.2s;
    :hover {
      color: #80ff80;
    }
  }
`;
