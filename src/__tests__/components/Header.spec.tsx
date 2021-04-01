import { render } from '@testing-library/react';
import React from 'react';

import Header from '../../components/Header';

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

describe('Header', () => {
  it('should be able to render the header with user info', () => {
    const { getByText } = render(<Header />);

    expect(getByText('John doe')).toBeInTheDocument();
  });
});
