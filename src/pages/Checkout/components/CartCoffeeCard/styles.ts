import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const CartCoffeeCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 0.5rem 0.25rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    > img {
      width: 4rem;
      height: 4rem;
    }

    > div {
      > p {
        ${mixins.fonts.textM};
        color: ${({ theme }) => theme.colors["base-subtitle"]};
      }
    }
  }

  > aside {
    ${mixins.fonts.textM}
    font-weight: 700;
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;

  > button {
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors["base-button"]};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors["base-text"]};
    ${mixins.fonts.textS};
    padding: 0 6px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors["base-hover"]};
    }

    svg {
      color: ${({ theme }) => theme.colors["purple"]};
    }
  }
`;
