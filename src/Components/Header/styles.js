import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 15px 0 15px;
  border-bottom: 1px solid #bcbcbc;
`;

export const Icon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > svg {
    font-size: 25px;
  }

  .totalItems {
    display: flex;
    align-items: center;
    p {
      font-size: 12px;
      margin-left: 5px;
    }
  }
`;
