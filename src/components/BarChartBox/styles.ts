import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 48%;
  min-height: 260px;

  margin: 10px 0;

  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  border-radius: 7px;

  display: flex;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;
  }
`;

export const SideLeft = styled.aside`
  flex: 1;
  padding: 30px 20px;

  > h2 {
    padding-left: 16px;
    margin-bottom: 10px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;

  max-height: 175px;
  padding-right: 12px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};

    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }

  @media (max-width: 1200px) {
    display: flex;
    height: auto;
  }
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  margin-bottom: 7px;

  padding-left: 16px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: ${(props) => props.color};

    font-size: 18px;
    line-height: 45px;
    
    width: 52px;
    height: 52px;
    border-radius: 5px;
  }

  > span {
    margin-left: 5px;
  }

  @media (max-width: 1200px) {
    > div {
      width: 35px;
      height: 35px;

      font-size: 11px;
      line-height: 30px;
    }
  }
`;

export const SideRight = styled.main`
  flex: 1;
  min-height: 150px;

  display: flex;
  justify-content: center;

  padding-top: 35px;

  margin-bottom: 10px;
`;
