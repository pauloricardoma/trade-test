import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  background: ${({ theme }) => theme.text};
  padding: 0 32px;

  .right {
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
      margin-left: 22px;
    }
  }
`;
