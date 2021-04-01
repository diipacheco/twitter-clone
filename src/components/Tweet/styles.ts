import styled from 'styled-components';

interface AvatarProps {
  avatarUrl?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);

  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);

  padding-left: 56px;

  > svg {
    fill: var(--gray);
  }
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;
export const Avatar = styled.div<AvatarProps>`
  width: 49px;
  height: 49px;
  flex-shrink: 0;

  border-radius: 50%;
  background-image: ${({ avatarUrl }) => `url(${avatarUrl})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  position: absolute;
  top: 0;
  left: 0;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 2px;
  padding-left: 59px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: (--gray);
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  width: 2px;
  height: 2px;

  margin: 0 10px;
  background: var(--gray);
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  width: 100%;
  height: min(285px, max(175px, 41vw));

  margin-top: 12px;
  border-radius: 14px;

  background: var(--gray);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  margin: 11px auto 0;

  @media (min-width: 330px) {
    width: 63%;

    > div {
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }

  &:nth-child(2) {
    color: var(--retweet);

    > svg {
      fill: var(--retweet);
    }
  }

  &:nth-child(3) {
    color: var(--like);

    > svg {
      fill: var(--like);
    }
  }
`;
