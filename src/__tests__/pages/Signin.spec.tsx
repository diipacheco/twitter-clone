import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import Signin from '../../pages/Signin';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

jest.mock('../../hooks/fakeAuth', () => ({
  useFakeAuth: () => ({
    signIn: jest.fn(),
  }),
}));

jest.mock('../../hooks/fakeAuth', () => ({
  useFakeAuth: () => ({
    signIn: jest.fn(),
    authError: true,
  }),
}));

describe('Signin Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });
  it('should be able to signin with success', async () => {
    const { getByPlaceholderText, getByText } = render(<Signin />);

    const gitHubUserInputElement = getByPlaceholderText('Github Nickname');
    const buttonSubmitElement = getByText('Log in');

    fireEvent.change(gitHubUserInputElement, {
      target: { value: 'diipacheco' },
    });

    fireEvent.click(buttonSubmitElement);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/main');
    });
  });

  it('should not be able to signin with invalid credentials', async () => {
    const { getByPlaceholderText, getByText } = render(<Signin />);

    const gitHubUserInputElement = getByPlaceholderText('Github Nickname');
    const buttonSubmitElement = getByText('Log in');
    const errorMessageElement = getByText(
      'Please enter a valid GitHub user nickname.',
    );

    fireEvent.change(gitHubUserInputElement, {
      target: { value: 'not-valid-nickname' },
    });

    fireEvent.click(buttonSubmitElement);

    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
      expect(errorMessageElement).toBeInTheDocument();
    });
  });
});
