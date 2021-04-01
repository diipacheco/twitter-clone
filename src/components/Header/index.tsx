import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { useFakeAuth } from '../../hooks/fakeAuth';

import { Container, ProfileInfo } from './styles';

const Header: React.FC = () => {
  const { user } = useFakeAuth();
  return (
    <Container>
      <button type="button">
        <MdArrowBack size={24} fill="var(--twitter)" />
      </button>
      <ProfileInfo>
        <strong>{user.name}</strong>
        <span>9999999 Tweets</span>
      </ProfileInfo>
    </Container>
  );
};

export default Header;
