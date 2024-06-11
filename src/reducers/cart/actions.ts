import { NavigateFunction } from "react-router-dom";
import { OrderCreationFormData } from "../../pages/Checkout";
import { Item } from "./reducer";

export enum CartActionTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  INCREMENT_ITEM_QUANTITY = "INCREMENT_ITEM_QUANTITY",
  DECREMENT_ITEM_QUANTITY = "DECREMENT_ITEM_QUANTITY",
  CHECKOUT_CART = "CHECKOUT_CART",
}

interface AddItemAction {
  type: "ADD_ITEM";
  payload: {
    item: Item;
  };
}

interface RemoveItemAction {
  type: "REMOVE_ITEM";
  payload: {
    itemId: Item["id"];
  };
}

interface IncrementItemQuantityAction {
  type: "INCREMENT_ITEM_QUANTITY";
  payload: {
    itemId: Item["id"];
  };
}

interface DecrementItemQuantityAction {
  type: "DECREMENT_ITEM_QUANTITY";
  payload: {
    itemId: Item["id"];
  };
}

interface ChekoutCartAction {
  type: "CHECKOUT_CART";
  payload: {
    order: OrderCreationFormData;
    callback: NavigateFunction;
  };
}

export type CartActions =
  | AddItemAction
  | RemoveItemAction
  | IncrementItemQuantityAction
  | DecrementItemQuantityAction
  | ChekoutCartAction;

export const addItemAction = (item: Item): CartActions => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  };
};

export const removeItemAction = (itemId: Item["id"]): CartActions => {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  };
};

export const incrementItemQuantityAction = (
  itemId: Item["id"]
): CartActions => {
  return {
    type: CartActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  };
};

export const decrementItemQuantityAction = (
  itemId: Item["id"]
): CartActions => {
  return {
    type: CartActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  };
};

export const checkoutCartAction = (
  order: OrderCreationFormData,
  callback: NavigateFunction
): CartActions => {
  return {
    type: CartActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  };
};
