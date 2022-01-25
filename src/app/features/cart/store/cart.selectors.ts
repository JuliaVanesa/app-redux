import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart-store.model";


export const cartStateSelector = createFeatureSelector<CartState>('cart');

export const cartSelector = createSelector(
  cartStateSelector,
  (state: CartState) => state.items
)
