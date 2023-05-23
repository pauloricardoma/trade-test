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

export const TableStatistics = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.border};

  thead {
    tr {
      height: 34px;

      th {
        padding: 0 8px;
        font-size: 12px;
        font-weight: 700;
        border: 1px solid ${({ theme }) => theme.border};
      }
    }
  }

  tbody {
    tr {
      height: 34px;

      td {
        font-size: 12px;
        font-weight: 400;
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

export const CardStatistics = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  padding: 8px;
  margin: 16px 0;
  box-shadow: 0px 0px 15px ${({ theme }) => theme.opacitySoft};

  .containerSeparate {
    width: 100%;
    display: flex;

    .separate {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  }

  .goalsTitle {
    text-align: center;
  }
`;

export const TablePlayersContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const TablePlayers = styled.table`
  width: 450px;
  max-height: 350px;
  border-collapse: collapse;

  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

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
    width: 100%;
    display: block;
    max-height: 350px;
    overflow-y: auto;

    tr {
      height: 44px;

      td {
        padding-left: 18px;

        &:first-child {
          padding-left: 6px;
        }

        span {
          display: flex;
          flex-direction: row;
          align-items: center
        }

        img {
          margin-right: 8px;
          width: 32px;
          height: auto;
        }
      }
    }
  }

  .w28 {
    width: 80px;
  }
`;
