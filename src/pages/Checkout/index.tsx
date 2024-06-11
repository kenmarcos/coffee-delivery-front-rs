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
  CartEmpty,
} from "./styles";
import { defaultTheme } from "../../styles/themes/default";
import { TextInput } from "../../components/Form/TextInput";
import { CartCoffeeCard } from "./components/CartCoffeeCard";
import { Radio } from "../../components/Form/Radio";
import { useCart } from "../../hooks/useCart";
import { coffees } from "../../../data.json";
import { formatPrice } from "../../utils/format";

export const Checkout = () => {
  const { cart } = useCart();

  const cartItemTotal = cart.length;

  const isCartEmpty = cartItemTotal === 0;
  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error("Invalid coffee.");
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    };
  });

  const shippingPrice = 3.5;
  const formattedShippingPrice = formatPrice(shippingPrice);

  const totalItemsPrice = coffeesInCart.reduce((total, coffee) => {
    return total + coffee.price * coffee.quantity;
  }, 0);
  const formattedTotalItemsPrice = formatPrice(totalItemsPrice);

  const totalPrice = totalItemsPrice + shippingPrice;
  const formattedTotalPrice = formatPrice(totalPrice);

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
          {isCartEmpty && <CartEmpty>Seu carrinho esta vazio</CartEmpty>}

          {!isCartEmpty && (
            <>
              {coffeesInCart.map((cartCoffee) => (
                <div key={cartCoffee.id}>
                  <CartCoffeeCard cartCoffee={cartCoffee} />
                  <Divider />
                </div>
              ))}

              <CartInfoContainer>
                <div>
                  <span>Total de itens</span>
                  <span>{formattedTotalItemsPrice}</span>
                </div>

                <div>
                  <span>Entrega</span>
                  <span>{formattedShippingPrice}</span>
                </div>

                <div>
                  <span>Total</span>
                  <span>{formattedTotalPrice}</span>
                </div>
              </CartInfoContainer>

              <CheckoutButton>Confirmar Pedido</CheckoutButton>
            </>
          )}
        </Cart>
      </SelectedCoffees>
    </CheckoutContainer>
  );
};
