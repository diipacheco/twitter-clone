import React from 'react';

import Main from '../../pages/Main';
import MenuBar from '../MenuBar';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
      </Wrapper>
    </Container>
  );
};

export default Layout;
