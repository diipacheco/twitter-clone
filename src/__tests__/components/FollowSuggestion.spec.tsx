import { render } from '@testing-library/react';
import React from 'react';

import FollowSuggestion from '../../components/FollowSuggestion';

jest.mock('../../hooks/fakeAuth', () => ({
  useFakeAuth: () => ({
    user: {
      id: 1,
      name: 'John doe',
      login: 'johndoe',
      bio: 'Teste',
      avatar_url:
        'https://miro.medium.com/max/285/1*EelUYA6BOTNXtuRjSlaqHw.png',
    },
  }),
}));

describe('FollowSuggestion', () => {
  it('should be able to render a list of follow suggestions passing some props', () => {
    const { getByText } = render(
      <FollowSuggestion name="John Doe" nickName="johndoe" />,
    );

    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('johndoe')).toBeInTheDocument();
  });
});
