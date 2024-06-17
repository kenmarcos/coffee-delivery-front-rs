import {
  Content,
  Heading,
  InfoItem,
  OrderInfo,
  SuccessContainer,
} from "./styles";
import deliveryImg from "../../assets/delivery.png";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useCart } from "../../hooks/useCart";
import { useParams } from "react-router-dom";

export const Success = () => {
  const { orders } = useCart();

  const params = useParams();

  const order = orders.find((order) => order.id === Number(params.orderId));

  if (!order?.id) {
    return null;
  }

  const paymentMethod = {
    credit: "Cartão de Crédito",
    debit: "Cartão de Débito",
    cash: "Dinheiro",
  };

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
                  Entrega em{" "}
                  <strong>
                    {order.street}, {order.number}
                  </strong>
                </span>

                <span>
                  {order.neighborhood} - {order.city}, {order.countryState}
                </span>
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

                <strong>{paymentMethod[order.paymentMethod]}</strong>
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
