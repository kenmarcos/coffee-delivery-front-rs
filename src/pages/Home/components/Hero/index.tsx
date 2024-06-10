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
  IconContainer,
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
              <IconContainer>
                <ShoppingCartSimple size={16} weight="fill" />
              </IconContainer>
              Compra simples e segura
            </DescriptionItem>

            <DescriptionItem>
              <IconContainer $iconBg="base-text">
                <Package size={16} weight="fill" />
              </IconContainer>
              Embalagem mantém o café intacto
            </DescriptionItem>

            <DescriptionItem>
              <IconContainer $iconBg="yellow">
                <Timer size={16} weight="fill" />
              </IconContainer>
              Entrega rápida e rastreada
            </DescriptionItem>

            <DescriptionItem>
              <IconContainer $iconBg="purple">
                <Coffee size={16} weight="fill" />
              </IconContainer>
              O café chega fresquinho até você
            </DescriptionItem>
          </DescriptionContainer>
        </div>

        <img src={heroImage} />
      </div>
    </HeroContainer>
  );
};
