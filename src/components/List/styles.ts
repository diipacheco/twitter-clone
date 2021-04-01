import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 14px;
  background: var(--secondary);
`;
export const Item = styled.div`
  padding: 10px 16px;

  & + div {
    border-top: 1px solid var(--outline);
  }

  &:first-child {
    padding-top: 13px;
  }

  &:last-child {
    padding-top: 17px;
  }

  h1 {
    font-weight: bold;
    font-size: 19px;
  }
`;
