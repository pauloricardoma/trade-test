import styled from 'styled-components';

interface ICard {
  isactivecard?: string;
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100%;
  display: flex;
  flex-direction: column;

  .mainSeasons {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ColumnSeasons = styled.main`
  display: flex;
  align-items: center;
  height: 52px;
  width: 100%;
  max-width: 820px;
  margin: 0 24px;
  margin-top: 24px;
  border-radius: 8px;
  padding: 8px;
  border: 1.5px solid ${({ theme }) => theme.border};

  .columnHeader {
    display: flex;
    align-items: center;
    justify-content: center;

    h4 {
      color: ${({ theme }) => theme.text};
      font-size: 30px;
      line-height: 45px;
      font-weight: 600;
      margin: 8px;

      @media (max-width: 600px) {
        font-size: 22px;
      }
    }
  }

  .columnMain {
    width: auto;
    height: 44px;
    display: flex;
    align-items: center;
    overflow-x: auto;
  }
`;

export const CardSeason = styled.main<ICard>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 24px;
  padding: 0 8px;
  margin: 0 6px;
  border-radius: 8px;
  border: 1.5px solid ${({ theme }) => theme.border};
  background-color: ${({ isactivecard, theme }) => isactivecard ? theme.colors?.confirmation.main : undefined};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.opacitySoft};
  }

  img {
    border: 1px solid ${({ theme }) => theme.border};
    margin-left: 8px;
    width: 32px;
    height: auto;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100vw;
`;

export const ColumnCountries = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  max-height: calc(100vh - 244px);
  margin: 24px;
  padding: 24px;
  padding-top: 0;
  border-radius: 8px;
  border: 1.5px solid ${({ theme }) => theme.border};

  .columnHeader {
    display: flex;
    align-items: center;
    justify-content: center;

    h4 {
      color: ${({ theme }) => theme.text};
      font-size: 30px;
      line-height: 45px;
      font-weight: 600;
      margin: 8px;
    }
  }

  .columnMain {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-y: auto;
  }
`;

export const CardCountry = styled.main<ICard>`
  display: flex;
  align-items: center;
  width: 50%;
  padding: 8px;
  border-radius: 8px;
  border: 1.5px solid ${({ theme }) => theme.border};
  background-color: ${({ isactivecard, theme }) => isactivecard ? theme.colors?.confirmation.main : undefined};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.opacitySoft};
  }

  img {
    border: 1px solid ${({ theme }) => theme.border};
    margin-left: 8px;
    width: 32px;
    height: auto;
  }
`;

export const ColumnLeagues = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  max-height: calc(100vh - 244px);
  margin: 24px;
  padding: 24px;
  padding-top: 0;
  border-radius: 8px;
  border: 1.5px solid ${({ theme }) => theme.border};

  .columnHeader {
    display: flex;
    align-items: center;
    justify-content: center;

    h4 {
      color: ${({ theme }) => theme.text};
      font-size: 30px;
      line-height: 45px;
      font-weight: 600;
      margin: 8px;
    }
  }

  .columnMain {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-y: auto;
  }
`;

export const CardLeague = styled.main<ICard>`
  display: flex;
  align-items: center;
  width: 50%;
  padding: 8px;
  border-radius: 8px;
  border: 1.5px solid ${({ theme }) => theme.border};
  background-color: ${({ isactivecard, theme }) => isactivecard ? theme.colors?.confirmation.main : undefined};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.opacitySoft};
  }

  img {
    border: 1px solid ${({ theme }) => theme.border};
    margin-left: 8px;
    width: 32px;
    height: auto;
  }
`;
