import React from 'react';
import { Container, Content } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

const List: React.FC = () => {
  const options = [
    { value: 'Rodrigo', label: 'Rodrigo' },
    { value: 'Jéssica', label: 'Jéssica' },
  ];

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#e44c4e">
        <SelectInput options={options} />
      </ContentHeader>
      <Content>
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="22/12/2021"
          amount="R$ 125,50"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="22/12/2021"
          amount="R$ 125,50"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="22/12/2021"
          amount="R$ 125,50"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="22/12/2021"
          amount="R$ 125,50"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="22/12/2021"
          amount="R$ 125,50"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="22/12/2021"
          amount="R$ 125,50"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="22/12/2021"
          amount="R$ 125,50"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="22/12/2021"
          amount="R$ 125,50"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="22/12/2021"
          amount="R$ 125,50"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subtitle="22/12/2021"
          amount="R$ 125,50"
        />
      </Content>
    </Container>
  );
};

export default List;
