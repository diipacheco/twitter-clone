import React from 'react';

import Profile from '../../components/Profile';
import Header from '../../components/Header';
import BottomMenu from '../../components/BottomMenu';

import Container from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Profile />

      <BottomMenu />
    </Container>
  );
};

export default Main;
