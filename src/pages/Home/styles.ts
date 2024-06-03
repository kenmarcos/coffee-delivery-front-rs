import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Showcase = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding-bottom: 10rem;

  > h2 {
    ${mixins.fonts.titleL};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  @media (max-width: 1120px) {
    padding: 0 1rem;
  }
`;

export const CoffeeList = styled.div`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 2.5rem 2rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 500px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) and (max-width: 1120px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
