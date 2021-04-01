import React from 'react';
import { MdComment, MdFavorite } from 'react-icons/md';
import { FaRetweet } from 'react-icons/fa';

import fetchTweetsData from '../../utils/fetchTweetsData';

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

const tweetsResource = fetchTweetsData();

const Tweet: React.FC = () => {
  const tweets = tweetsResource.tweets.read();
  return (
    <>
      {tweets?.map(tweet => (
        <Container key={tweet.id}>
          <Retweeted>
            <FaRetweet size={16} />
            Você retweetou
          </Retweeted>

          <Body key={tweet.id}>
            <Avatar avatarUrl={tweet.avatar_author_url} />
            <Content key={tweet.id}>
              <Header>
                <strong>{tweet.author_name}</strong>
                <span>{`@${tweet.author_nickname}`}</span>
                <Dot />
                <time>27 de jun</time>
              </Header>

              <Description>{tweet.content}</Description>

              <ImageContent />

              <Icons>
                <Status>
                  <MdComment />
                  18
                </Status>

                <Status>
                  <FaRetweet />
                  {tweet.retweets}
                </Status>

                <Status>
                  <MdFavorite />
                  {tweet.likes}
                </Status>
              </Icons>
            </Content>
          </Body>
        </Container>
      ))}
    </>
  );
};

export default Tweet;
