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
  PaymentErrorMessage,
} from "./styles";
import { defaultTheme } from "../../styles/themes/default";
import { TextInput } from "../../components/Form/TextInput";
import { CartCoffeeCard } from "./components/CartCoffeeCard";
import { Radio } from "../../components/Form/Radio";
import { useCart } from "../../hooks/useCart";
import { coffees } from "../../../data.json";
import { formatPrice } from "../../utils/format";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const orderCreationFormSchema = z.object({
  zipCode: z.coerce.number({
    invalid_type_error: "CEP inválido",
  }),
  street: z.string().min(1, "Endereço obrigatório"),
  number: z.string().min(1, "Número obrigatório"),
  complement: z.string(),
  neighborhood: z.string().min(1, "Bairro obrigatório"),
  city: z.string().min(1, "Cidade obrigatória"),
  countryState: z.string().min(1, "UF obrigatória"),
  paymentMethod: z.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

export type OrderCreationFormData = z.infer<typeof orderCreationFormSchema>;

export const Checkout = () => {
  const { cart, checkout } = useCart();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<OrderCreationFormData>({
    resolver: zodResolver(orderCreationFormSchema),
  });

  const selectedPaymentMethod = watch("paymentMethod");

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

  const handleSubmitOrder: SubmitHandler<OrderCreationFormData> = (data) => {
    console.log("🚀 ~ handleSubmitOrder ~ data:", data);

    if (cart.length === 0) {
      return alert("É preciso ter pelo menos um item no carrinho");
    }

    checkout(data, navigate);
  };

  return (
    <CheckoutContainer>
      <OrderInfo id="order" onSubmit={handleSubmit(handleSubmitOrder)}>
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
              <TextInput
                placeholder="CEP"
                {...register("zipCode")}
                error={errors.zipCode}
              />
            </div>

            <div>
              <TextInput
                placeholder="Rua"
                {...register("street")}
                error={errors.street}
              />
            </div>

            <div>
              <TextInput
                placeholder="Número"
                {...register("number")}
                error={errors.number}
              />
            </div>

            <div>
              <TextInput
                placeholder="Complemento"
                optional
                {...register("complement")}
                error={errors.complement}
              />
            </div>

            <div>
              <TextInput
                placeholder="Bairro"
                {...register("neighborhood")}
                error={errors.neighborhood}
              />
            </div>

            <div>
              <TextInput
                placeholder="Cidade"
                {...register("city")}
                error={errors.city}
              />
            </div>

            <div>
              <TextInput
                placeholder="UF"
                {...register("countryState")}
                error={errors.countryState}
              />
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
            <Radio
              {...register("paymentMethod")}
              isSelected={selectedPaymentMethod === "credit"}
              value="credit"
              id="credit"
            >
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </Radio>

            <Radio
              {...register("paymentMethod")}
              isSelected={selectedPaymentMethod === "debit"}
              value="debit"
              id="debit"
            >
              <Bank size={16} />
              <span>Cartão de débito</span>
            </Radio>

            <Radio
              {...register("paymentMethod")}
              isSelected={selectedPaymentMethod === "cash"}
              value="cash"
              id="cash"
            >
              <Money size={16} />
              <span>Dinheiro</span>
            </Radio>
          </PaymentForm>

          {errors.paymentMethod && (
            <PaymentErrorMessage role="alert">
              {errors.paymentMethod.message}
            </PaymentErrorMessage>
          )}
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

              <CheckoutButton type="submit" form="order">
                Confirmar Pedido
              </CheckoutButton>
            </>
          )}
        </Cart>
      </SelectedCoffees>
    </CheckoutContainer>
  );
};
