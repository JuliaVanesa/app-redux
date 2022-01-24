import { createAction, props } from "@ngrx/store";

export const AppSetTitle = createAction(
  'Aplication Set Title',
  props<{ title: string}>()
);
