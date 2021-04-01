import { render } from '@testing-library/react';
import React from 'react';

import Profile from '../../components/Profile';

jest.mock('../../hooks/fakeAuth', () => ({
  useFakeAuth: () => ({
    user: {
      id: 1,
      name: 'John doe',
      login: 'johndoe',
      bio: 'Teste',
      avatar_url:
        'https://miro.medium.com/max/285/1*EelUYA6BOTNXtuRjSlaqHw.png',
      location: 'São Paulo',
      following: 32,
      followers: 32,
    },
  }),
}));

describe('Profile', () => {
  it('should be able to render the Profile', () => {
    const { getByText } = render(<Profile />);

    const userNameElement = getByText('John doe');
    const userBioElement = getByText('Teste');

    expect(userNameElement).toBeInTheDocument();
    expect(userBioElement).toBeInTheDocument();
  });
});
