import { createAction, props } from "@ngrx/store";
import { CartItem } from "../cart.model";

export const cartAddItem = createAction(
  'Cart - add item',
  props<{item: CartItem}>()
);

export const cartDeleteItem = createAction(
  'Cart - delete item',
  props<{itemId: string}>()
);

export const cartClear = createAction(
  'Cart - Clear all items'
);
