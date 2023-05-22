import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  font-size: 38px;
  font-weight: 600;
  color: ${({ theme }) => theme.background};
  letter-spacing: -0.6px;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.background};

  h2 {
    align-self: flex-end;
    padding: 6px;
    font-size: 16px;
    font-weight: 600;
  }

  .balanceInfo {
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    padding-right: 6px;
    display: flex;
    font-size: 12px;
    font-weight: 600;

    span {
      margin-left: 6px;
    }
  }


  @media (max-width: 600px) {
    h2 {
      font-size: 12px;
    }
    span {
      font-size: 10px;
    }
  }
`;
