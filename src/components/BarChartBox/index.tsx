import React from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';

import { Container, SideLeft, SideRight } from './styles';

interface IBarChartProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

const BarChartBox: React.FC<IBarChartProps> = ({
 title, data
}) => {
  return (
    <Container>
      <SideLeft>
        <h2>{title}</h2>
      </SideLeft>
      <SideRight></SideRight>
    </Container>
  );
};

export default BarChartBox;
