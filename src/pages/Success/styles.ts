import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const SuccessContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: 1120px) {
    padding: 0 1rem;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > h2 {
    ${mixins.fonts.titleL};
    color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  > span {
    ${mixins.fonts.textL};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`;

export const Content = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 102px;

  > img {
    width: 100%;
    max-width: 492px;
    margin: 0 auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const OrderInfo = styled.div`
  border-width: 1px;
  border-style: solid;
  border-radius: 6px 36px;
  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.colors.yellow}, ${theme.colors.purple})`};
  width: 100%;

  > div {
    padding: 40px;
    background-color: white;
    border-radius: 6px 36px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    height: 100%;
  }
`;

interface InfoItemProps {
  $iconBg?: "yellow" | "yellow-dark" | "purple";
}

export const InfoItem = styled.div<InfoItemProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  > svg {
    background-color: ${({ theme, $iconBg = "yellow-dark" }) =>
      theme.colors[$iconBg]};
    border-radius: 50%;
    padding: 8px;
    color: ${({ theme }) => theme.colors.background};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    > span {
      ${mixins.fonts.textM};
      color: ${({ theme }) => theme.colors["base-text"]};
    }
  }
`;
