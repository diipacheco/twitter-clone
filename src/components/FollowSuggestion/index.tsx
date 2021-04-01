import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface FollowSuggestionProps {
  name: string;
  nickName: string;
}

const FollowSuggestion: React.FC<FollowSuggestionProps> = ({
  name,
  nickName,
}) => {
  return (
    <Container>
      <div>
        <Avatar />
        <Info>
          <strong>{name}</strong>
          <span>{nickName}</span>
        </Info>
      </div>
      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
