import React from 'react';
import { MdHome, MdSearch, MdNotifications, MdMail } from 'react-icons/md';

import Container from './styles';

const BottomMenu: React.FC = () => {
  return (
    <Container>
      <MdHome className="active" />
      <MdSearch />
      <MdNotifications />
      <MdMail />
    </Container>
  );
};

export default BottomMenu;
