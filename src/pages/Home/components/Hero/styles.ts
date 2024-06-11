import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const HeroContainer = styled.div`
  height: 544px;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding-top: 100px;

  > div {
    display: flex;
    justify-content: space-between;
    gap: 3.5rem;

    > img {
      @media (max-width: 1120px) {
        display: none;
      }
    }
  }

  @media (max-width: 640px) {
    padding: 200px 1rem 0;
  }

  @media (min-width: 640px) and (max-width: 1120px) {
    padding: 0 1rem;
  }
`;

export const TitleContainer = styled.div`
  h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.colors["base-title"]};
  }

  h2 {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    margin-top: 1rem;
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 66px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 2.5rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

interface DescriptionItemProps {
  $iconBg?: "yellow-dark" | "purple" | "base-text" | "yellow";
}

export const DescriptionItem = styled.div<DescriptionItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  ${mixins.fonts.textM}
  color: ${({ theme }) => theme.colors["base-text"]};

  > svg {
    background-color: ${({ theme, $iconBg = "yellow-dark" }) =>
      theme.colors[$iconBg]};
    color: ${({ theme }) => theme.colors.background};
    border-radius: 50%;
    padding: 8px;
  }
`;
