import { Item } from "./reducer";

export enum CartActionTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  INCREMENT_ITEM_QUANTITY = "INCREMENT_ITEM_QUANTITY",
  DECREMENT_ITEM_QUANTITY = "DECREMENT_ITEM_QUANTITY",
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

export type CartActions =
  | AddItemAction
  | RemoveItemAction
  | IncrementItemQuantityAction
  | DecrementItemQuantityAction;

export const addItemAction = (item: Item): CartActions => {
  return {
    type: "ADD_ITEM",
    payload: {
      item,
    },
  };
};

export const removeItemAction = (itemId: Item["id"]): CartActions => {
  return {
    type: "REMOVE_ITEM",
    payload: {
      itemId,
    },
  };
};

export const incrementItemQuantityAction = (
  itemId: Item["id"]
): CartActions => {
  return {
    type: "INCREMENT_ITEM_QUANTITY",
    payload: {
      itemId,
    },
  };
};

export const decrementItemQuantityAction = (
  itemId: Item["id"]
): CartActions => {
  return {
    type: "DECREMENT_ITEM_QUANTITY",
    payload: {
      itemId,
    },
  };
};
