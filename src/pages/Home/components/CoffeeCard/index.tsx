import { ShoppingCartSimple } from "@phosphor-icons/react";
import {
  Actions,
  CoffeeCardContainer,
  Content,
  Footer,
  Price,
  Tags,
} from "./styles";
import { QuantityInput } from "../../../../components/Form/QuantityInput";
import { useState } from "react";
import { useCart } from "../../../../hooks/useCart";
import { Coffee } from "../../../../types";

interface CoffeeCardProps {
  coffee: Coffee;
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addItemToCart } = useCart();

  const incrementQuantity = () => {
    setQuantity((state) => state + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  };

  const handleAddItemToCart = () => {
    addItemToCart({
      id: coffee.id,
      quantity,
    });

    setQuantity(1);
  };

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.slice(0, 3).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Content>
        <h3 title={coffee.title}>{coffee.title}</h3>

        <p title={coffee.description}>{coffee.description}</p>
      </Content>

      <Footer>
        <Price>
          <span>R$</span>
          <span>
            {coffee.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
        </Price>

        <Actions>
          <QuantityInput
            quantity={quantity}
            onIncrementQuantity={incrementQuantity}
            onDecrementQuantity={decrementQuantity}
          />

          <button onClick={handleAddItemToCart}>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </Actions>
      </Footer>
    </CoffeeCardContainer>
  );
};
