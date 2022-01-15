import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  margin: 10px 0;
  padding: 30px 20px;
  border-radius: 7px;
`;

export const ChartContainer = styled.div`
  height: 260px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > h2 {
    margin-bottom: 20px;
    padding-left: 16px;
  }
`;

export const Legend = styled.ul<ILegendProps>`
  display: flex;
  align-items: center;

  margin-bottom: 7px;
  margin-left: 7px;

  > div {
    background-color: ${(props) => props.color};

    font-size: 18px;
    line-height: 45px;
    text-align: center;

    width: 52px;
    height: 52px;
    border-radius: 5px;
  }

  > span {
    margin-left: 5px;
  }
`;

export const LegendContainer = styled.li`
  list-style: none;

  display:flex;
  padding-right: 18px;
`;
