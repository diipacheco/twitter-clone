import React from 'react';
import { MdComment, MdFavorite } from 'react-icons/md';
import { FaRetweet } from 'react-icons/fa';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <FaRetweet size={16} />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description>Teste</Description>

          <ImageContent />

          <Icons>
            <Status>
              <MdComment />
              18
            </Status>

            <Status>
              <FaRetweet />
              18K
            </Status>

            <Status>
              <MdFavorite />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
