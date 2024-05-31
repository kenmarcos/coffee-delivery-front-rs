import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  @media (max-width: 1120px) {
    padding: 1rem;
  }

  > div {
    max-width: 70rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > a {
    background-color: ${({ theme }) => theme.colors["yellow-light"]};
    border-radius: 6px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    > svg {
      color: ${({ theme }) => theme.colors["yellow-dark"]};
    }

    > span {
      background-color: ${({ theme }) => theme.colors["yellow-dark"]};
      color: ${({ theme }) => theme.colors.white};
      position: absolute;
      min-width: 1.25rem;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      padding: 0.0625rem;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateX(50%) translateY(-50%);
      ${mixins.fonts.textXS};
    }
  }
`;

export const LocationBadge = styled.span`
  background-color: ${({ theme }) => theme.colors["purple-light"]};
  color: ${({ theme }) => theme.colors["purple-dark"]};
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  ${mixins.fonts.textS};

  > svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`;
