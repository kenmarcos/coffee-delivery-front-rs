import {
  Coffee,
  Package,
  ShoppingCartSimple,
  Timer,
} from "@phosphor-icons/react";
import heroImage from "../../../../assets/hero-image.png";
import {
  DescriptionContainer,
  DescriptionItem,
  HeroContainer,
  TitleContainer,
} from "./styles";

export const Hero = () => {
  return (
    <HeroContainer>
      <div>
        <div>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
          </TitleContainer>

          <DescriptionContainer>
            <DescriptionItem>
              <ShoppingCartSimple size={32} weight="fill" />
              Compra simples e segura
            </DescriptionItem>

            <DescriptionItem $iconBg="yellow">
              <Package size={32} weight="fill" />
              Embalagem mantém o café intacto
            </DescriptionItem>

            <DescriptionItem $iconBg="base-text">
              <Timer size={32} weight="fill" />
              Entrega rápida e rastreada
            </DescriptionItem>

            <DescriptionItem $iconBg="purple">
              <Coffee size={32} weight="fill" />O café chega fresquinho até você
            </DescriptionItem>
          </DescriptionContainer>
        </div>

        <img src={heroImage} />
      </div>
    </HeroContainer>
  );
};
