import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import jwt from 'jsonwebtoken';

import { useFakeAuth, FakeAuthProvider } from '../../hooks/fakeAuth';
import api from '../../services/api';

const apiMock = new MockAdapter(api.git_hub);

describe('FakeAuth hook', () => {
  it('should be able to sign in', async () => {
    const apiResponse = {
      id: 1,
      name: 'John Doe',
      login: 'johndoe',
    };

    apiMock.onGet('/users/johndoe').reply(200, apiResponse);

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
    jest.spyOn(jwt, 'sign').mockImplementationOnce(() => 'token');

    const { result, waitForNextUpdate } = renderHook(() => useFakeAuth(), {
      wrapper: FakeAuthProvider,
    });

    result.current.signIn({
      nickname: 'johndoe',
    });

    await waitForNextUpdate();

    expect(setItemSpy).toHaveBeenCalledWith(
      '@TwitterClone:user',
      JSON.stringify(apiResponse),
    );

    expect(setItemSpy).toHaveBeenCalledWith('@TwitterClone:token', 'token');

    expect(result.current.user.login).toEqual('johndoe');
  });

  it('should restore saved data from storage when auth inits', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@TwitterClone:token':
          return 'token-123';
        case '@TwitterClone:user':
          return JSON.stringify({
            id: 1,
            name: 'John Doe',
            login: 'johndoe',
          });
        default:
          return null;
      }
    });

    const { result } = renderHook(() => useFakeAuth(), {
      wrapper: FakeAuthProvider,
    });

    expect(result.current.user.login).toEqual('johndoe');
  });

  it('should be able to sign out', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@TwitterClone:token':
          return 'token-123';
        case '@TwitterClone:user':
          return JSON.stringify({
            id: 1,
            name: 'John Doe',
            login: 'johndoe',
          });
        default:
          return null;
      }
    });

    const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

    const { result } = renderHook(() => useFakeAuth(), {
      wrapper: FakeAuthProvider,
    });

    act(() => {
      result.current.signOut();
    });

    expect(removeItemSpy).toHaveBeenCalledTimes(2);
    expect(result.current.user).toBeUndefined();
  });

  it('should throw a error when authentication fails', async () => {
    const apiResponse = {
      message: 'Not found',
      documentation_url:
        'https://docs.github.com/rest/reference/users#get-a-user',
    };

    apiMock.onGet('/users/johndoe').reply(404, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useFakeAuth(), {
      wrapper: FakeAuthProvider,
    });

    result.current.signIn({
      nickname: 'johndoe',
    });

    await waitForNextUpdate();

    expect(result.current.authError).toBe(true);
  });
});
