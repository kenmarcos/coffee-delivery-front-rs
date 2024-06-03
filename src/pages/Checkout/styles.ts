import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CheckoutContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 980px) {
    flex-direction: column;
  }

  @media (max-width: 1120px) {
    padding: 0 1rem;
  }
`;

export const OrderInfo = styled.div`
  flex-grow: 8;

  h2 {
    ${mixins.fonts.titleXS};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`;

const Section = styled.div`
  background-color: ${({ theme }) => theme.colors["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
  margin-top: 1rem;

  header {
    display: flex;
    margin-bottom: 2rem;
    gap: 0.5rem;

    > div {
      > p:first-child {
        ${mixins.fonts.textM};
        color: ${({ theme }) => theme.colors["base-subtitle"]};
      }

      > p:last-child {
        ${mixins.fonts.textS};
        color: ${({ theme }) => theme.colors["base-text"]};
      }
    }
  }
`;

export const Address = styled(Section)``;

export const Payment = styled(Section)`
  margin-top: 0.75rem;
`;

export const SelectedCoffees = styled.div`
  flex-grow: 7;

  h2 {
    ${mixins.fonts.titleXS};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`;

export const Cart = styled(Section)`
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
`;
