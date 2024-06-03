import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import {
  Address,
  SelectedCoffees,
  CheckoutContainer,
  OrderInfo,
  Payment,
  Cart,
} from "./styles";
import { defaultTheme } from "../../styles/themes/default";

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

          <div>
            <input placeholder="CEP" />
            <input placeholder="Rua" />
            <input placeholder="Número" />
            <input placeholder="Complemento" />
            <input placeholder="Bairro" />
            <input placeholder="Cidade" />
            <input placeholder="UF" />
          </div>
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
        </Payment>
      </OrderInfo>

      <SelectedCoffees>
        <h2>Cafés selecionados</h2>

        <Cart></Cart>
      </SelectedCoffees>
    </CheckoutContainer>
  );
};
