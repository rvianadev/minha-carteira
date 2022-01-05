import React from 'react';
import { Link } from 'react-router-dom';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md';

import logoImg from '../../assets/logo.svg';

import { Container, Header, LogoImg, MenuContainer, Title } from './styles';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logoImg} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <Link to="/dashboard">
          <MdDashboard />
          Dashboard
        </Link>
        <Link to="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </Link>
        <Link to="/list/exit-balance">
          <MdArrowDownward />
          Saídas
        </Link>
        <Link to="#">
          <MdExitToApp />
          Sair
        </Link>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
