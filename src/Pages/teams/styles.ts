import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  margin: auto;
  width: 100%;
  padding: 24px;
  border-radius: 8px;
  border: 1.5px solid ${({ theme }) => theme.border};
`;

export const TableTeams = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.border};

  thead {
    tr {
      height: 44px;

      th {
        padding: 0 8px;
        font-size: 18px;
        font-weight: 700;
        border: 1px solid ${({ theme }) => theme.border};
      }
    }
  }

  tbody {
    tr {
      height: 44px;

      td {
        border: 1px solid ${({ theme }) => theme.border};
        padding: 0 8px;

        img {
          margin-left: 8px;
          width: 32px;
          height: auto;
        }
      }
    }
  }
`;

export const TablePlayers = styled.table`
  width: 100%;
  max-height: 350px;
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.border};

  thead {
    tr {
      height: 44px;

      th {
        padding: 0 8px;
        font-size: 18px;
        font-weight: 700;
        border: 1px solid ${({ theme }) => theme.border};
      }
    }
  }

  tbody {
    overflow-y: auto;

    tr {
      height: 44px;

      td {
        border: 1px solid ${({ theme }) => theme.border};
        padding: 0 8px;

        img {
          margin-left: 8px;
          width: 32px;
          height: auto;
        }
      }
    }
  }
`;
