import styled from "styled-components";

interface QuantityInputContainerProps {
  size: "sm" | "md";
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  border-radius: 6px;
  overflow: hidden;
  gap: 2px;

  button {
    background-color: transparent;
    color: ${({ theme }) => theme.colors["purple"]};
    padding: ${({ size }) => (size === "sm" ? "9px" : "12px")} 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors["base-hover"]};
      color: ${({ theme }) => theme.colors["purple-dark"]};
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  > span {
    display: inline-block;
    width: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
`;
