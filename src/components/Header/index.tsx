import { HeaderContainer, LocationBadge, Navigation } from "./styles";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img
          src={logo}
          alt="Imagem do logo do Coffee Delivery com um copo de café escrito Coffee Delivery ao lado"
        />

        <Navigation>
          <LocationBadge>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </LocationBadge>

          <NavLink to="/checkout">
            <ShoppingCartSimple size={22} weight="fill" />
            <span>3</span>
          </NavLink>
        </Navigation>
      </div>
    </HeaderContainer>
  );
};
