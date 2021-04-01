import React, { FormEvent, useCallback, useState } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { useFakeAuth } from '../../hooks/fakeAuth';

import Button from '../../components/Button';

import { Container, Content, FormTitle, InputContainer } from './styles';

const Signin: React.FC = () => {
  const [nickNameInputValue, setNickNameInputValue] = useState('');

  const history = useHistory();

  const { signIn, authError } = useFakeAuth();

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      await signIn({
        nickname: nickNameInputValue,
      });

      history.push('/main');
    },
    [signIn, nickNameInputValue, history],
  );

  return (
    <Container>
      <Content>
        <FormTitle>
          <FaTwitter size={37} />
          <h1>Log in to Twitter</h1>
        </FormTitle>

        <form onSubmit={handleSubmit}>
          <InputContainer isAuthErrored={authError}>
            <input
              type="text"
              placeholder="Github Nickname"
              autoCapitalize="none"
              autoCorrect="none"
              onChange={({ target }) => setNickNameInputValue(target.value)}
            />
          </InputContainer>
          {authError && <p>Please enter a valid GitHub user nickname.</p>}
          <Button type="submit">Log in</Button>
        </form>
      </Content>
    </Container>
  );
};

export default Signin;
