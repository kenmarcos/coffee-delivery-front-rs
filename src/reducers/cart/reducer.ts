import { produce } from "immer";
import { CartActionTypes, CartActions } from "./actions";
import { OrderCreationFormData } from "../../pages/Checkout";

export interface Item {
  id: string;
  quantity: number;
}

export interface Order extends OrderCreationFormData {
  id: number;
  items: Item[];
}

export interface CartState {
  cart: Item[];
  orders: Order[];
}

export const cartReducer = (state: CartState, action: CartActions) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        const item = draft.cart.find(
          (cartItem) => cartItem.id === action.payload.item.id
        );

        if (item) {
          item.quantity += action.payload.item.quantity;
          return;
        }

        draft.cart.push(action.payload.item);
      });

    case CartActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemToRemoveIndex = draft.cart.findIndex(
          (cartItem) => cartItem.id === action.payload.itemId
        );

        draft.cart.splice(itemToRemoveIndex, 1);
      });

    case CartActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToIncrement = draft.cart.find(
          (cartItem) => cartItem.id === action.payload.itemId
        );

        if (itemToIncrement) {
          itemToIncrement.quantity += 1;
        }
      });

    case CartActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToDecrement = draft.cart.find(
          (cartItem) => cartItem.id === action.payload.itemId
        );

        if (itemToDecrement) {
          itemToDecrement.quantity -= 1;
        }
      });

    case CartActionTypes.CHECKOUT_CART:
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.order,
        };

        draft.orders.push(newOrder);
        draft.cart = [];

        action.payload.callback(`/order/${newOrder.id}/success`);
      });

    default:
      return state;
  }
};
