import { ReactNode, createContext, useEffect, useReducer } from "react";
import { Item, Order, cartReducer } from "../reducers/cart/reducer";
import {
  addItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from "../reducers/cart/actions";
import { NavigateFunction } from "react-router-dom";
import { OrderCreationFormData } from "../pages/Checkout";

interface CartContextData {
  cart: Item[];
  orders: Order[];
  addItemToCart: (item: Item) => void;
  removeItemFromCart: (itemId: Item["id"]) => void;
  incrementItemQuantity: (itemId: Item["id"]) => void;
  decrementItemQuantity: (itemId: Item["id"]) => void;
  checkout: (order: OrderCreationFormData, navigate: NavigateFunction) => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return cartState;
    }
  );

  const { cart, orders } = cartState;

  const addItemToCart = (item: Item) => {
    dispatch(addItemAction(item));
  };

  const removeItemFromCart = (itemId: Item["id"]) => {
    dispatch(removeItemAction(itemId));
  };

  const incrementItemQuantity = (itemId: Item["id"]) => {
    dispatch(incrementItemQuantityAction(itemId));
  };

  const decrementItemQuantity = (itemId: Item["id"]) => {
    dispatch(decrementItemQuantityAction(itemId));
  };

  const checkout = (
    order: OrderCreationFormData,
    navigate: NavigateFunction
  ) => {
    dispatch(checkoutCartAction(order, navigate));
  };

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState);

      localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
    }
  }, [cartState]);

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addItemToCart,
        removeItemFromCart,
        incrementItemQuantity,
        decrementItemQuantity,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
