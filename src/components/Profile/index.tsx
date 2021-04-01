import React from 'react';
import { MdLocationOn, MdCake } from 'react-icons/md';

import {
  Container,
  Avatar,
  Banner,
  FollowAge,
  ProfileData,
  EditButton,
} from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Edilson Pacheco</h1>
        <h2>@diipacheco__</h2>

        <p>
          Front-end Developer at{' '}
          <a target="blank" href="http://localhost:3000">
            {' '}
            @Provi
          </a>
        </p>

        <ul>
          <li>
            <MdLocationOn size={20} />
            São Paulo, Brasil
          </li>

          <li>
            <MdCake size={20} />
            Nascido(a) em 27 de Fevereiro de 1999
          </li>
        </ul>

        <FollowAge>
          <span>
            seguindo <strong>112</strong>
          </span>
          <span>
            <strong>seguidores </strong>10
          </span>
        </FollowAge>
      </ProfileData>
    </Container>
  );
};

export default Profile;
