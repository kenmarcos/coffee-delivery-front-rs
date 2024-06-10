import { QuantityInput } from "../../../../components/Form/QuantityInput";
import { Actions, CartCoffeeCardContainer } from "./styles";
import { coffees } from "../../../../../data.json";
import { Trash } from "@phosphor-icons/react";
import { useState } from "react";

export const CartCoffeeCard = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((state) => state + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  };

  return (
    <CartCoffeeCardContainer>
      <div>
        <img src={coffees[0].image} alt="" />

        <div>
          <p>Expresso Tradicional</p>

          <Actions>
            <QuantityInput
              size="sm"
              quantity={quantity}
              onIncrementQuantity={incrementQuantity}
              onDecrementQuantity={decrementQuantity}
            />

            <button>
              <Trash size={16} />
              Remover
            </button>
          </Actions>
        </div>
      </div>

      <aside>R$ 9,90</aside>
    </CartCoffeeCardContainer>
  );
};
