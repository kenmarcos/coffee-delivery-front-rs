import { QuantityInput } from "../../../../components/Form/QuantityInput";
import { Actions, CartCoffeeCardContainer } from "./styles";
import { coffees } from "../../../../../data.json";
import { Trash } from "@phosphor-icons/react";

export const CartCoffeeCard = () => {
  return (
    <CartCoffeeCardContainer>
      <div>
        <img src={coffees[0].image} alt="" />

        <div>
          <p>Expresso Tradicional</p>

          <Actions>
            <QuantityInput size="sm" />

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
