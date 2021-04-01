import React, { createContext, useCallback, useContext, useState } from 'react';
import { sign } from 'jsonwebtoken';

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
    const token = localStorage.getItem('@MediumClone:token');
    const user = localStorage.getItem('@MediumClone:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });
  const [authError, setAuthError] = useState(false);

  const signIn = useCallback(
    async ({ nickname }: SigninCredentials) => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${nickname}`,
        );

        const responseJson = await response.json();

        if (response.status === 404) {
          setAuthError(true);
        } else {
          setAuthError(!authError);
          const user = responseJson;

          const token = sign({}, 'FAKE_AUTHENTICATION_SECRET', {
            subject: user.id.toString(),
            expiresIn: '1d',
          });

          localStorage.setItem('@MediumClone:token', token);
          localStorage.setItem('@MediumClone:user', JSON.stringify(user));

          setData({ token, user: Object.assign(user) });
        }
      } catch (err) {
        console.log(err.message);
      }
    },
    [authError],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@MediumClone:token');
    localStorage.removeItem('@MediumClone:user');

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

  if (!context) {
    throw new Error('useFakeAuth must be used within an AuthProvider');
  }

  return context;
}
