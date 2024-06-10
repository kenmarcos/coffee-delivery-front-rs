import {
  Content,
  Heading,
  InfoItem,
  OrderInfo,
  SuccessContainer,
} from "./styles";
import deliveryImg from "../../assets/delivery.png";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

export const Success = () => {
  return (
    <SuccessContainer>
      <Heading>
        <h2>Uhu! Pedido confirmado</h2>

        <span>Agora é só aguardar que logo o café chegará até você</span>
      </Heading>

      <Content>
        <OrderInfo>
          <div>
            <InfoItem $iconBg="purple">
              <MapPin size={32} weight="fill" />

              <div>
                <span>
                  Entrega em <strong>Rua João Martinelli, 102</strong>
                </span>

                <span>Farrapos - Porto ALegre, RS</span>
              </div>
            </InfoItem>

            <InfoItem $iconBg="yellow">
              <Timer size={32} weight="fill" />

              <div>
                <span>Previsão de entrega</span>

                <strong>20 min - 30 min</strong>
              </div>
            </InfoItem>

            <InfoItem>
              <CurrencyDollar size={32} />

              <div>
                <span>Pagamento na entrega</span>

                <strong>Cartão de Crédito</strong>
              </div>
            </InfoItem>
          </div>
        </OrderInfo>

        <img
          src={deliveryImg}
          alt="Ilustração de um entregador em cima da moto"
        />
      </Content>
    </SuccessContainer>
  );
};
