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
  flex-grow: 1;

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

export const AddressForm = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "cep  . . ."
    "street street street street"
    "number complement complement complement"
    "neighborhood city city uf";
  row-gap: 1rem;
  column-gap: 0.75rem;

  div:nth-child(1) {
    grid-area: cep;
  }
  div:nth-child(2) {
    grid-area: street;
  }
  div:nth-child(3) {
    grid-area: number;
  }
  div:nth-child(4) {
    grid-area: complement;
  }
  div:nth-child(5) {
    grid-area: neighborhood;
  }
  div:nth-child(6) {
    grid-area: city;
  }
  div:nth-child(7) {
    grid-area: uf;
  }
`;

export const Payment = styled(Section)`
  margin-top: 0.75rem;
`;

export const PaymentForm = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const SelectedCoffees = styled.div`
  min-width: 448px;

  @media (max-width: 640px) {
    min-width: unset;
  }

  h2 {
    ${mixins.fonts.titleXS};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`;

export const Cart = styled(Section)`
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
`;

export const Divider = styled.span`
  display: block;
  height: 1px;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  margin: 24px 0;
`;

export const CartInfoContainer = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    ${mixins.fonts.textM};
    color: ${({ theme }) => theme.colors["base-text"]};

    & + div {
      margin-top: 0.75rem;
    }
  }

  > div:last-child {
    ${mixins.fonts.textL};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    font-weight: 700;
  }
`;

export const CheckoutButton = styled.button`
  margin-top: 1.5rem;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors["yellow"]};
  color: ${({ theme }) => theme.colors.white};
  ${mixins.fonts.buttonG};
  padding: 0.75rem 0.5rem;
  width: 100%;
  border: 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
  }
`;

export const CartEmpty = styled.span`
  ${mixins.fonts.textS};
  color: ${({ theme }) => theme.colors["base-subtitle"]};
`;
