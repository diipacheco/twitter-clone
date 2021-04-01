import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 8px min(46px, max(10vw, 10px));

  position: fixed;
  bottom: 0;
  left: 0;

  z-index: 2;
  background: var(--primary);
  border-top: 1px solid var(--outline);

  @media (min-with: 500px) {
    display: none;
  }

  svg {
    width: 32px;
    height: 32px;
    cursor: pointer;
    fill: var(--gray);

    &:hover,
    &.active {
      fill: var(--twitter);
    }
  }
`;
