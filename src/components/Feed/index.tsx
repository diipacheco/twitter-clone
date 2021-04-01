import React, { Suspense } from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Suspense fallback={<h1>loading...</h1>}>
          <Tweet />
        </Suspense>
      </Tweets>
    </Container>
  );
};

export default Feed;
