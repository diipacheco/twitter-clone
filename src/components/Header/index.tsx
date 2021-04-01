import React from 'react';
import { MdArrowBack } from 'react-icons/md';

import { Container, ProfileInfo } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <button type="button">
        <MdArrowBack size={24} fill="var(--twitter)" />
      </button>
      <ProfileInfo>
        <strong>edilsu</strong>
        <span>1,177 Tweets</span>
      </ProfileInfo>
    </Container>
  );
};

export default Header;
