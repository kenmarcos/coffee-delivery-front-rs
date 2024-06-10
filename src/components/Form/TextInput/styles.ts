import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const TextInputContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors["base-input"]};
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  align-items: center;
  border-radius: 4px;
  gap: 0.5rem;
  padding: 0 0.75rem;
  overflow: hidden;
  transition: all 0.2s;

  &[data-state="focused"] {
    border-color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  &[data-state="blurred"] {
    border-color: ${({ theme }) => theme.colors["base-button"]};
  }

  > input {
    border: none;
    width: 100%;
    background-color: transparent;
    color: ${({ theme }) => theme.colors["base-text"]};
    height: 100%;
    outline: none;
    padding: 0.75rem 0;
    ${mixins.fonts.textS}

    &::placeholder {
      color: ${({ theme }) => theme.colors["base-label"]};
    }
  }

  > span {
    font-style: italic;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors["base-label"]};
  }
`;
