import React, { Suspense } from 'react';
import { render } from '@testing-library/react';

import Tweet from '../../components/Tweet';

describe('Tweet', () => {
  it("should be able to render a loading message while doesn't fetch the tweets", async () => {
    const { getByText } = render(
      <Suspense fallback={<h1>loading</h1>}>
        <Tweet />
      </Suspense>,
    );

    expect(getByText('loading')).toBeInTheDocument();
  });
});
