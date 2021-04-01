import React from 'react';

import Main from '../../pages/Main';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Main />
      </Wrapper>
    </Container>
  );
};

export default Layout;
