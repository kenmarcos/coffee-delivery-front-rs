import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import {
  Actions,
  CoffeeCardContainer,
  Content,
  Footer,
  Price,
  Quantity,
  Tags,
} from "./styles";

interface Coffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

interface CoffeeCardProps {
  coffee: Coffee;
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
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
          <Quantity>
            <button>
              <Minus size={14} />
            </button>
            <span title="50">50</span>
            <button>
              <Plus size={14} />
            </button>
          </Quantity>

          <button>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </Actions>
      </Footer>
    </CoffeeCardContainer>
  );
};
