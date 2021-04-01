import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-right: 1px solid var(--outline);
    border-left: 1px solid var(--outline);
  }
`;
