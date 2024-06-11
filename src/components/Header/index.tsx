import { HeaderContainer, LocationBadge, Navigation } from "./styles";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";
import { useCart } from "../../hooks/useCart";

export const Header = () => {
  const { cart } = useCart();

  const cartItemTotal = cart.length;

  return (
    <HeaderContainer>
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="Imagem do logo do Coffee Delivery com um copo de café escrito Coffee Delivery ao lado"
          />
        </Link>

        <Navigation>
          <LocationBadge>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </LocationBadge>

          <NavLink to="/checkout">
            <ShoppingCartSimple size={22} weight="fill" />
            <span>{cartItemTotal}</span>
          </NavLink>
        </Navigation>
      </div>
    </HeaderContainer>
  );
};
