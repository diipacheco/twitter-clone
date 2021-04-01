import React from 'react';
import { MdLocationOn, MdCake } from 'react-icons/md';

import { useFakeAuth } from '../../hooks/fakeAuth';

import Feed from '../Feed';

import {
  Container,
  Avatar,
  Banner,
  FollowAge,
  ProfileData,
  EditButton,
} from './styles';

const Profile: React.FC = () => {
  const { user } = useFakeAuth();
  return (
    <Container>
      <Banner>
        <Avatar avatarUserUrl={user.avatar_url} />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>{user.name}</h1>
        <h2>{`@${user.login}`}</h2>

        {user?.bio && <p>{user.bio}</p>}

        <ul>
          {user.location && (
            <li>
              <MdLocationOn size={20} />
              {user.location}
            </li>
          )}

          <li>
            <MdCake size={20} />
            Nascido(a) em 01 de janeiro de 01
          </li>
        </ul>

        <FollowAge>
          <span>
            seguindo <strong>{user.following}</strong>
          </span>
          <span>
            <strong>seguidores </strong>
            {user.followers}
          </span>
        </FollowAge>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default Profile;
