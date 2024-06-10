import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const CoffeeCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors["base-card"]};
  max-width: 16rem;
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem 1.25rem;

  > img {
    margin-top: -1.25rem;
    width: 120px;
    height: 120px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 0.75rem;

  span {
    background-color: ${({ theme }) => theme.colors["yellow-light"]};
    color: ${({ theme }) => theme.colors["yellow-dark"]};
    ${mixins.fonts.tag};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;

  > h3 {
    text-align: center;
    ${mixins.fonts.titleS};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    max-width: 208px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > p {
    text-align: center;
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors["base-label"]};
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 33px;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors["base-text"]};

  span:first-child {
    ${mixins.fonts.textS};
  }

  span:last-child {
    ${mixins.fonts.titleM};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    width: 2.375rem;
    aspect-ratio: 1 / 1;
    background-color: ${({ theme }) => theme.colors["purple-dark"]};
    color: ${({ theme }) => theme.colors["base-card"]};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors["purple"]};
    }
  }
`;
