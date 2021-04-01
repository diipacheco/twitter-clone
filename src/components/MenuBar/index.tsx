import React from 'react';
import {
  MdHome,
  MdNotifications,
  MdMessage,
  MdFavorite,
  MdPerson,
  MdExitToApp,
} from 'react-icons/md';

import { FaTwitter } from 'react-icons/fa';

import Button from '../Button';

import {
  Container,
  TopSide,
  MenuButton,
  BotSide,
  Avatar,
  ProfileData,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <FaTwitter
          size={41}
          style={{ marginBottom: 20 }}
          fill="var(--twitter)"
        />

        <MenuButton>
          <MdHome />
          <span>Pagina inicial</span>
        </MenuButton>

        <MenuButton>
          <MdNotifications />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <MdMessage />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <MdFavorite />
          <span>Favoritos</span>
        </MenuButton>

        <MenuButton className="active">
          <MdPerson />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Twittar</span>
        </Button>
      </TopSide>

      <BotSide>
        <Avatar />
        <ProfileData>
          <strong>Edilson Pacheco</strong>
          <span>@diipacheco__</span>
        </ProfileData>

        <MdExitToApp size={30} />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
