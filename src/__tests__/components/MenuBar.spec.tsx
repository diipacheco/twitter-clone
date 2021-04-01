import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import MenuBar from '../../components/MenuBar';

const mockedStorageSpy = jest.spyOn(Storage.prototype, 'removeItem');

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
    signOut: mockedStorageSpy,
  }),
}));

describe('MenuBar', () => {
  it('should be able to render the profile info on the bottom', () => {
    const { getByText, getByTestId } = render(<MenuBar />);

    const userNameElement = getByText('John doe');
    const userLogin = getByText('johndoe');
    const profileAvatar = getByTestId('profile-avatar');

    expect(userNameElement).toBeInTheDocument();
    expect(userLogin).toBeInTheDocument();
    expect(profileAvatar).toBeInTheDocument();
  });

  it('should be able to sign out when clinking in the sign out button', () => {
    const { getByTestId } = render(<MenuBar />);

    const signOutButtonElement = getByTestId('singout-button');

    fireEvent.click(signOutButtonElement);

    expect(mockedStorageSpy).toHaveBeenCalledTimes(1);
  });
});
