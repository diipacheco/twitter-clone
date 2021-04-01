import React, { createContext, useCallback, useContext, useState } from 'react';
import { sign } from 'jsonwebtoken';
import api from '../services/api';

interface SigninCredentials {
  nickname: string;
}

interface AuthState {
  token: string;
  user: GitHubUser;
}

interface GitHubUser {
  id: number;
  login: string;
  name: string;
  email: string;
  avatar_url: string;
  followers: number;
  following: number;
  bio?: string;
  location?: string;
}

interface AuthContextData {
  user: GitHubUser;
  authError: boolean;
  signIn(credentials: SigninCredentials): Promise<void>;
  signOut(): void;
}

const FakeAuthContext = createContext<AuthContextData>({} as AuthContextData);

export const FakeAuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@TwitterClone:token');
    const user = localStorage.getItem('@TwitterClone:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });
  const [authError, setAuthError] = useState(false);

  const signIn = useCallback(async ({ nickname }: SigninCredentials) => {
    try {
      const response = await api.git_hub.get(`users/${nickname}`);

      const user = response.data;

      const token = sign({}, 'FAKE_AUTHENTICATION_SECRET', {
        subject: user.id.toString(),
        expiresIn: '1d',
      });

      localStorage.setItem('@TwitterClone:token', token);
      localStorage.setItem('@TwitterClone:user', JSON.stringify(user));

      setData({ token, user: Object.assign(user) });
    } catch (err) {
      setAuthError(true);
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@TwitterClone:token');
    localStorage.removeItem('@TwitterClone:user');

    setData({} as AuthState);
  }, []);

  return (
    <FakeAuthContext.Provider
      value={{ user: data.user, signIn, signOut, authError }}
    >
      {children}
    </FakeAuthContext.Provider>
  );
};

export function useFakeAuth(): AuthContextData {
  const context = useContext(FakeAuthContext);

  return context;
}
