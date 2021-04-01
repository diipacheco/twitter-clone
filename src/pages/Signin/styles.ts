import styled, { keyframes, css } from 'styled-components';

interface ContentProps {
  isAuthErrored: boolean;
}

const shake = keyframes`
10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 16px;
  margin-top: 36px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 368px;

  > form {
    display: flex;
    flex-direction: column;

    margin-top: 25px;

    > p {
      margin-top: 16px;
      color: var(--like);
    }

    > button {
      margin-top: 26px;
    }
  }
`;

export const FormTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
  > h1 {
    font-size: 31px;
    color: var(--white);
  }
`;

export const InputContainer = styled.div<ContentProps>`
  max-width: 100%;
  height: 52px;
  border-radius: 4px;

  border: 1px solid
    ${({ isAuthErrored }) => (isAuthErrored ? 'var(--like)' : 'var(--outline)')};

  ${({ isAuthErrored }) =>
    isAuthErrored &&
    css`
      animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    `}

  > input {
    width: 100%;
    height: 100%;
    padding: 12px 4px 12px 8px;
    font-size: 18px;

    &:focus {
      border: 1px solid
        ${({ isAuthErrored }) =>
          isAuthErrored ? 'var(--like)' : 'var(--outline)'};
    }

    &:hover {
      border: 1px solid
        ${({ isAuthErrored }) =>
          isAuthErrored ? 'var(--like)' : 'var(--outline)'};
    }

    ::placeholder {
      color: ${({ isAuthErrored }) =>
        isAuthErrored ? 'var(--like)' : 'var(--gray)'};
      font-size: 18px;
    }
  }
`;
