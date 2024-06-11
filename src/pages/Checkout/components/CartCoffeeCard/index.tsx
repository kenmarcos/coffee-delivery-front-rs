import { QuantityInput } from "../../../../components/Form/QuantityInput";
import { Actions, CartCoffeeCardContainer } from "./styles";
import { Trash } from "@phosphor-icons/react";
import { CartCoffee } from "../../../../types";
import { formatPrice } from "../../../../utils/format";
import { useCart } from "../../../../hooks/useCart";

interface CartCoffeeCardProps {
  cartCoffee: CartCoffee;
}

export const CartCoffeeCard = ({ cartCoffee }: CartCoffeeCardProps) => {
  const { removeItemFromCart, incrementItemQuantity, decrementItemQuantity } =
    useCart();

  const { quantity } = cartCoffee;

  const incrementQuantity = () => {
    incrementItemQuantity(cartCoffee.id);
  };

  const decrementQuantity = () => {
    decrementItemQuantity(cartCoffee.id);
  };

  const handleRemoveItem = () => {
    removeItemFromCart(cartCoffee.id);
  };

  const formattedPrice = formatPrice(cartCoffee.price * quantity);

  return (
    <CartCoffeeCardContainer>
      <div>
        <img src={cartCoffee.image} alt={cartCoffee.title} />

        <div>
          <p>{cartCoffee.title}</p>

          <Actions>
            <QuantityInput
              size="sm"
              quantity={quantity}
              onIncrementQuantity={incrementQuantity}
              onDecrementQuantity={decrementQuantity}
            />

            <button onClick={handleRemoveItem}>
              <Trash size={16} />
              Remover
            </button>
          </Actions>
        </div>
      </div>

      <aside>{formattedPrice}</aside>
    </CartCoffeeCardContainer>
  );
};
