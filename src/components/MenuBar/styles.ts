import styled from 'styled-components';

interface AvatarProps {
  avatarUserUrl?: string;
}

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    max-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;
    padding: 9px 19px 20px;

    overflow-y: auto;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  cursor: pointer;
  border-radius: 24px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }

  > svg {
    width: 30px;
    height: 30px;
    fill: var(--white);
  }

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;
      font-weight: 700;
      font-size: 19px;
    }
    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
    margin-top: 33px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }
`;

export const BotSide = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  > svg {
    display: none;

    @media (min-width: 1280px) {
      display: inline-block;
      fill: var(--white);
      margin-left: 30px;
      cursor: pointer;

      &:hover {
        fill: var(--like);
      }
    }
  }
`;

export const Avatar = styled.div<AvatarProps>`
  width: 39px;
  height: 39px;
  background-image: ${({ avatarUserUrl }) => `url(${avatarUserUrl})`};
  background-size: cover;
  background-repeat: no-repeat;

  flex-shrink: 0;

  border-radius: 50%;
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;

    > span {
      color: var(--gray);
    }
  }
`;
