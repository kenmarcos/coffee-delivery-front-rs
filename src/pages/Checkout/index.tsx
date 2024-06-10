import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import {
  Address,
  SelectedCoffees,
  CheckoutContainer,
  OrderInfo,
  Payment,
  Cart,
  AddressForm,
  Divider,
  CartInfoContainer,
  CheckoutButton,
  PaymentForm,
} from "./styles";
import { defaultTheme } from "../../styles/themes/default";
import { TextInput } from "../../components/Form/TextInput";
import { CartCoffeeCard } from "./components/CartCoffeeCard";
import { Radio } from "../../components/Form/Radio";

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <OrderInfo>
        <h2>Complete seu pedido</h2>

        <Address>
          <header>
            <MapPinLine size={22} color={defaultTheme.colors["yellow-dark"]} />

            <div>
              <p>Endereço de Entrega</p>

              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <AddressForm>
            <div>
              <TextInput placeholder="CEP" />
            </div>

            <div>
              <TextInput placeholder="Rua" />
            </div>

            <div>
              <TextInput placeholder="Número" />
            </div>

            <div>
              <TextInput placeholder="Complemento" optional />
            </div>

            <div>
              <TextInput placeholder="Bairro" />
            </div>

            <div>
              <TextInput placeholder="Cidade" />
            </div>

            <div>
              <TextInput placeholder="UF" />
            </div>
          </AddressForm>
        </Address>

        <Payment>
          <header>
            <CurrencyDollar size={22} color={defaultTheme.colors.purple} />

            <div>
              <p>Pagamento</p>

              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>

          <PaymentForm>
            <Radio isSelected={true}>
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </Radio>
            <Radio isSelected={false}>
              <Bank size={16} />
              <span>Cartão de débito</span>
            </Radio>
            <Radio isSelected={false}>
              <Money size={16} />
              <span>Dinheiro</span>
            </Radio>
          </PaymentForm>
        </Payment>
      </OrderInfo>

      <SelectedCoffees>
        <h2>Cafés selecionados</h2>

        <Cart>
          <CartCoffeeCard />

          <Divider />

          <CartCoffeeCard />

          <Divider />

          <CartInfoContainer>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </CartInfoContainer>

          <CheckoutButton>Confirmar Pedido</CheckoutButton>
        </Cart>
      </SelectedCoffees>
    </CheckoutContainer>
  );
};
