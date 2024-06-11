import { ReactNode, createContext, useReducer } from "react";
import { Item, cartReducer } from "../reducers/cart/reducer";
import {
  addItemAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from "../reducers/cart/actions";

interface CartContextData {
  cart: Item[];
  addItemToCart: (item: Item) => void;
  removeItemFromCart: (itemId: Item["id"]) => void;
  incrementItemQuantity: (itemId: Item["id"]) => void;
  decrementItemQuantity: (itemId: Item["id"]) => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  const { cart } = cartState;

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

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        incrementItemQuantity,
        decrementItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
