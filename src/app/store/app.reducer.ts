import { createReducer, on } from "@ngrx/store";
import { AppSetTitle } from "./app.actions";
import { AppState } from "./app.state.model";

export const appInitialState: AppState = { title: 'Redux App (from state)' };

 const _appReducer = createReducer(
  appInitialState,
  on(AppSetTitle, (state, {title}) => {
    return { ...state, title }
  })
);

export function appReducer(state: any, action: any) {
  return _appReducer(state, action);
}
