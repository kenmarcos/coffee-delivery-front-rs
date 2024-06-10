import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const RadioContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid transparent;
  display: flex;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors["base-text"]};
  text-transform: uppercase;
  ${mixins.fonts.buttonM};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
  }

  &[data-state="true"] {
    background-color: ${({ theme }) => theme.colors["purple-light"]};
    border-color: ${({ theme }) => theme.colors.purple};
  }

  > svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  > input {
    display: none;
  }
`;
